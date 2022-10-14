import type { Data } from "@yusui/types";
import type { UseCrudOptions } from "./types";

import { ref, computed, toRefs } from "vue";

import { useCrudState } from "./state";
import { useHooks } from "./hooks";
import { useCrudMethods } from "./methods";
import { useLifeCycle } from "./lifeCycle";

export function useCrud<T extends Data = Data, P extends Data = Data>(options: UseCrudOptions<T, P>) {
  /** listRef.value等同于this.$refs.listRef */
  const listRef = ref();
  /** formRef.value等同于this.$refs.formRef */
  const formRef = ref();

  /** state */
  const crudState = useCrudState(options);
  const crudStateRefs = toRefs(crudState);

  /** hooks */
  const {
    emitter,
    beforeGetList,
    afterGetList,
    beforeDel,
    afterDel,
    beforeGetInfo,
    afterGetInfo,
    beforeSubmit,
    afterSubmit
  } = useHooks<T, P>();

  /** methods */
  let {
    getDataList,
    handleDel,
    loadMore,
    handleRefresh,
    handleSearch,
    filterChange,
    handleAdd,
    handleEdit,
    handleView,
    getFormData,
    handleSubmit
  } = useCrudMethods<T, P>({ crudState, emitter });

  /** 重置 */
  getDataList = options.getDataList ?? getDataList;
  handleDel = options.handleDel ?? handleDel;
  loadMore = options.loadMore ?? loadMore;
  handleRefresh = options.handleRefresh ?? handleRefresh;
  handleSearch = options.handleSearch ?? handleSearch;
  filterChange = options.filterChange ?? filterChange;
  handleAdd = options.handleAdd ?? handleAdd;
  handleEdit = options.handleEdit ?? handleEdit;
  handleView = options.handleView ?? handleView;
  getFormData = options.getFormData ?? getFormData;
  handleSubmit = options.handleSubmit ?? handleSubmit;

  /** 使用v-bind绑定的值 */
  const bindList = computed(() => ({
    // 属性
    ref: "listRef",
    data: crudState.listData,
    option: crudState.listOption ?? {},
    filterForm: crudState.searchForm,
    status: crudState.loadStatus,
    scrollTop: crudState.scrollTop,
    searchValue: crudState.searchForm[crudState.crudOption.searchKey] ?? "",
    // 事件
    onSearch: handleSearch,
    onLoadmore: loadMore,
    onFilterChange: filterChange,
    "onUpdate:filterForm": (form: any) => Object.assign(crudState.searchForm, form),
    "onUpdate:searchValue": (val: any) => (crudState.searchForm[crudState.crudOption.searchKey as keyof P] = val)
  }));
  const bindForm = computed(() => ({
    // 属性
    ref: "formRef",
    option: crudState.formOption ?? {},
    modelValue: crudState.formData,
    formType: crudState.formType,
    // 事件
    "onUpdate:modelValue": (form: T) => (crudState.formData = form),
    onSubmit: handleSubmit
  }));

  /** 使用一些默认的生命周期 */
  useLifeCycle({ crudState, loadMore, handleRefresh });

  return {
    listRef,
    formRef,
    crudState,
    crudStateRefs,
    bindList,
    bindForm,
    getDataList,
    handleDel,
    loadMore,
    handleRefresh,
    handleSearch,
    filterChange,
    handleAdd,
    handleEdit,
    handleView,
    getFormData,
    handleSubmit,
    beforeGetList,
    afterGetList,
    beforeDel,
    afterDel,
    beforeGetInfo,
    afterGetInfo,
    beforeSubmit,
    afterSubmit
  };
}
