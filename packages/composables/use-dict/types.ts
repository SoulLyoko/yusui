import type { MaybeRef, Ref } from 'vue'
import type { AxiosInstance } from 'axios'
import type { DicItem, DicProps } from '@smallwei/avue'
import type { useRequest } from 'vue-request'

export interface UseDictOptions {
  /** 绑定值 */
  modelValue?: MaybeRef<UseDictValue>
  /** 请求实例 */
  request?: AxiosInstance
  // /** 数据类型用于数组和字符串之间的转化 */
  // dataType?: string
  // /** 分隔符 */
  // separator?: string
  /** 数据字典属性的配置对象 */
  props?: DicProps
  /** 数据字典值 */
  dicData?: MaybeRef<DicItem[]>
  /** 数据字典接口url地址 */
  dicUrl?: string
  /** 数据字典接口url携带请求参数 */
  dicQuery?: object
  /** 数据字典接口url携带头部参数 */
  dicHeaders?: object
  /** 数据字典接口url返回数据格式化方法 */
  dicFormatter?: (res: any) => DicItem[]
  /** 数据字典接口请求方式 */
  dicMethod?: string
}

export type UseDictValue = string | number | boolean | string[] | number[] | undefined

export interface UseDictReturn extends ReturnType<typeof useRequest<DicItem[]>> {
  selectedItem: Ref<DicItem | DicItem[] | null>
  selectedLabel: Ref<string | undefined>
}
