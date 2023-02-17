// export const flowTypeColumn = {
//   label: "流类型",
//   prop: "flowType",
//   type: "select",
//   dicData: [
//     { label: "序列流", value: "sequence" },
//     { label: "默认流", value: "default" },
//     { label: "条件流", value: "conditional" }
//   ]
// };

export const conditionExpressionColumn = {
  label: "条件表达式",
  prop: "conditionsequenceflow"
};
export const defaultConditions = {
  label: "是否为默认分支",
  prop: "defaultConditions",
  type: "switch",
  value: false
};

export const sequenceFlowColumns = [conditionExpressionColumn, defaultConditions];
