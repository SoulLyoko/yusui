import { defineConfig } from "vitepress";

import { alias } from "../../vite.config";
import pkg from "../../package.json";
import { mdDemoTransform } from "./plugins/md-demo-transform";
import { avuePatch } from "../plugins";

export default defineConfig({
  base: `/${pkg.name}/`,
  title: pkg.upperName,
  description: pkg.description,
  themeConfig: {
    socialLinks: [{ icon: "github", link: pkg.homepage }],
    nav: [
      { text: "Guide", link: "/guide/start" },
      {
        text: "Packages",
        items: [
          { text: "@yusui/components", link: "/components/index" },
          { text: "@yusui/composables", link: "/composables/index" },
          { text: "@yusui/eslint-config", link: "/eslint-config/index" },
          { text: "@yusui/form-design表单设计器", link: "/form-design/index" },
          { text: "@yusui/flow-design流程设计器", link: "/flow-design/index" },
          { text: "@yusui/flow-pages工作流页面", link: "/flow-pages/index" },
          { text: "@yusui/prettier-config", link: "/prettier-config/index" },
          { text: "@yusui/plugins", link: "/plugins/index" },
          { text: "@yusui/utils", link: "/utils/index" }
        ]
      }
    ],
    sidebar: {
      "/guide": [
        {
          text: "Guide",
          items: [
            { text: "Start", link: "/guide/start" },
            { text: "Changelog", link: "/guide/changelog" }
          ]
        }
      ],
      "/components": [
        {
          text: "Components",
          items: [
            { text: "Start", link: "/components/index" },
            { text: "BasicContainer", link: "/components/basic-container/index" },
            { text: "IconSelect", link: "/components/icon-select/index" },
            { text: "VText", link: "/components/v-text/index" }
          ]
        }
      ],
      "/composables": [
        {
          text: "Composables",
          items: [
            { text: "Start", link: "/composables/index" },
            { text: "useCrud", link: "/composables/use-crud/index" }
          ]
        }
      ],
      "/form-design": [
        {
          text: "表单设计器",
          items: [
            { text: "开始", link: "/form-design/index" },
            { text: "表单设计器", link: "/form-design/demo" }
          ]
        }
      ],
      "/flow-design": [
        {
          text: "流程设计器",
          items: [
            { text: "开始", link: "/flow-design/index" },
            { text: "流程模型设计", link: "/flow-design/flow-modeler/index" },
            { text: "流程查看", link: "/flow-design/flow-viewer/index" }
          ]
        }
      ],
      "/flow-pages": [
        {
          text: "工作流页面",
          items: [
            { text: "开始", link: "/flow-pages/index" },
            { text: "表单模板", link: "/flow-pages/form-template/index" },
            { text: "流程模板", link: "/flow-pages/flow-template/index" },
            { text: "流程设计", link: "/flow-pages/flow-manage/index" },
            { text: "流程运维", link: "/flow-pages/flow-ops/index" },
            { text: "工作台", link: "/flow-pages/workbench/index" }
          ]
        }
      ],
      "/plugins": [
        {
          text: "Plugins",
          items: [
            { text: "Start", link: "/plugins/index" },
            { text: "avuePatch", link: "/plugins/avue-patch/index" },
            { text: "createEnvDts", link: "/plugins/env-dts/index" },
            { text: "loadProxy", link: "/plugins/load-proxy/index" },
            { text: "uniPages", link: "/plugins/uni-pages/index" },
            { text: "uniUIPatch", link: "/plugins/uni-ui-patch/index" },
            { text: "uviewPatch", link: "/plugins/uview-patch/index" }
          ]
        }
      ],
      "/utils": [
        {
          text: "Utils",
          items: [
            { text: "Start", link: "/utils/index" },
            {
              text: "date",
              items: [
                { text: "dateFormat", link: "/utils/date/dateFormat" },
                { text: "durationFormat", link: "/utils/date/durationFormat" }
              ]
            },
            {
              text: "emitter",
              items: [{ text: "mittAsync", link: "/utils/emitter/mittAsync" }]
            },
            {
              text: "file",
              items: [
                { text: "downloadFile", link: "/utils/file/downloadFile" },
                { text: "getFileName", link: "/utils/file/getFileName" }
              ]
            },
            {
              text: "math",
              link: "/utils/math/index"
            },
            {
              text: "object",
              items: [
                { text: "filterObj", link: "/utils/object/filterObj" },
                { text: "filterObjDeep", link: "/utils/object/filterObjDeep" },
                { text: "getDataType", link: "/utils/object/getDataType" }
              ]
            },
            {
              text: "string",
              items: [
                { text: "serialize", link: "/utils/string/serialize" },
                { text: "deserialize", link: "/utils/string/deserialize" },
                { text: "uuid", link: "/utils/string/uuid" }
              ]
            },
            {
              text: "tool",
              items: [
                { text: "awaitTo", link: "/utils/tool/awaitTo" },
                { text: "sleep", link: "/utils/tool/sleep" },
                { text: "enumToDic", link: "/utils/tool/enumToDic" }
              ]
            },
            {
              text: "tree",
              items: [
                { text: "buildTree", link: "/utils/tree/buildTree" },
                { text: "flatTree", link: "/utils/tree/flatTree" },
                { text: "filterTree", link: "/utils/tree/filterTree" },
                { text: "findTree", link: "/utils/tree/findTree" },
                { text: "treeMap", link: "/utils/tree/treeMap" }
              ]
            }
          ]
        }
      ]
    }
  },
  vite: {
    plugins: [mdDemoTransform(), avuePatch()],
    resolve: {
      alias
    },
    server: {
      proxy: {
        "/sapier-flow": "http://192.168.1.188:9922"
      }
    }
  }
});
