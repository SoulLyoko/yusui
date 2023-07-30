import type { App } from 'vue'
import type { Theme } from 'vitepress'

import defaultTheme from 'vitepress/theme'
import { Icon } from '@iconify/vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@smallwei/avue/lib/index.css'
import './index.scss'
import { loader } from '@guolao/vue-monaco-editor'

import components from '../components'
import YSComponents from '../../components/index'
import '../../flow-design/styles/index.scss'
import '../../form-design/styles/index.scss'
import { dicRequest, request } from './request'

loader.config({
  paths: {
    vs: 'https://cdn.bootcdn.net/ajax/libs/monaco-editor/0.33.0/min/vs',
  },
})

export default {
  ...defaultTheme,
  async enhanceApp({ app }: { app: App }) {
    app.use(components)
    app.use(ElementPlus, { locale: zhCn })
    app.use(YSComponents)
    app.component('Icon', Icon)
    if (!import.meta.env.SSR) {
      const { default: Avue } = await import('@smallwei/avue')
      app.use(Avue, { axios: dicRequest })
      const { FlowDesign } = await import('@yusui/flow-design')
      const { FormDesign } = await import('@yusui/form-design')
      const { default: FlowPages } = await import('@yusui/flow-pages')
      app.component('FlowDesign', FlowDesign)
      app.component('FormDesign', FormDesign)
      // #region install
      const importedForms = import.meta.glob('../custom-form/**/*.vue', { eager: true })
      const customForm = Object.fromEntries(
        Object.values(importedForms)
          .map((module: any) => [module.default.name, module.default]),
      )
      app.use(FlowPages, {
        FlowDesign,
        FormDesign,
        request,
        userInfo: { userId: '1' }, // () => storage.get('user')
        customForm,
        useFlowFormOptions: {
          type: localStorage.getItem('useFlowFormType') as any ?? 'drawer',
          window: ['/yusui-tools/flow-pages/pages/flow-form/index'],
        },
        upload: {
          action: import.meta.env.VITE_UPLOAD_URL,
          headers: { Authorization: import.meta.env.VITE_TOKEN }, // ()=> ({ Authorization: storage.get('token') })
          download: row => window.open(row.fileUrl),
          preview: row => window.open(row.fileUrl),
        },
      })
      // #endregion install
    }
  },
} as Theme
