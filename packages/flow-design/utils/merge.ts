import type { AvueFormColumn } from '@smallwei/avue'
import type { ButtonItem, FormPropertyItem } from '../types'

export function mergeButton(button: ButtonItem[], source: ButtonItem[]) {
  return button.map((btn) => {
    const findSource = source.find(e => e.buttonKey === btn.buttonKey)
    const { name, buttonKey, display, approval } = btn
    const result = { name, buttonKey, display, approval, ...findSource }
    return result
  })
}
export function mergeFormProperty(column: AvueFormColumn[], source: FormPropertyItem[]): FormPropertyItem[] {
  return column.map((col) => {
    const findSource = source.find(e => e.prop === col.prop)
    const { label, prop, display = true, disabled = false, detail = false, readonly = false, rules } = col
    const required = rules?.some(e => e.required) ?? false
    const result = { label, prop, display, disabled, detail, readonly, required, ...findSource }
    if (col.type === 'dynamic' && col.children?.column?.length)
      result.children = mergeFormProperty(col.children.column, findSource?.children ?? [])
    return result
  })
}