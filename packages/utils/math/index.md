# math

针对 js 浮点数运算的一些函数

## 示例

```js
// 加法
accAdd(0.1, 0.2) // 0.3
// 减法
accSub(0.3, 0.2) // 0.1
// 乘法
accMul(19.9, 100) // 1990
// 除法
accDiv(0.3, 0.1) // 3
// 链式调用 (0.1+0.2-0.2)*3/0.1
accChain(0.1).add(0.2).sub(0.2).mul(3).div(0.1) // 3
// 求和
accSum([0.1, 0.2, 0.3]) // 0.6
// 根据属性值求和
accSumBy([{ n: 0.1 }, { n: 0.2 }, { n: 0.3 }], 'n') // 0.6
// 求平均值
accMean([0.1, 0.2, 0.3]) // 0.2
// 根据属性值求平均值
accMeanBy([{ n: 0.1 }, { n: 0.2 }, { n: 0.3 }], 'n') // 0.2
```