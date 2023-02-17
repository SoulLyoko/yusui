import type { ModelerState } from "../types";

export function usePattern({ lf }: ModelerState) {
  return lf.value?.setPatternItems([
    {
      label: "框选",
      icon: "https://api.iconify.design/bpmn/lasso-tool.svg?width=24&height=24",
      callback: () => {
        lf.value?.openSelectionSelect();
        lf.value?.once("selection:selected", () => {
          lf.value?.closeSelectionSelect();
        });
      }
    },
    {
      type: "startEvent",
      text: "开始",
      label: "开始节点",
      icon: "https://api.iconify.design/bpmn/start-event.svg?width=24&height=24"
    },
    {
      type: "userTask",
      label: "用户任务",
      icon: "https://api.iconify.design/bpmn/user-task.svg?width=24&height=24"
    },
    {
      type: "serviceTask",
      label: "服务任务",
      icon: "https://api.iconify.design/bpmn/service-task.svg?width=24&height=24"
    },
    {
      type: "exclusiveGateway",
      label: "互斥网关",
      icon: "https://api.iconify.design/bpmn/gateway-xor.svg?width=24&height=24"
    },
    {
      type: "parallelGateway",
      label: "并行网关",
      icon: "https://api.iconify.design/bpmn/gateway-parallel.svg?width=24&height=24"
    },
    {
      type: "endEvent",
      text: "结束",
      label: "结束节点",
      icon: "https://api.iconify.design/bpmn/end-event.svg?width=24&height=24"
    },
    {
      type: "group",
      label: "分组",
      icon: "https://api.iconify.design/bpmn/group.svg?width=24&height=24"
    }
  ]);
}
