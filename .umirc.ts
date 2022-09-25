import { defineConfig, type IConfig } from "dumi";
import { resolve } from "node:path";

const config: IConfig = {
  title: "Antd.Max",
  logo: "https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg",
  mode: "site",
  favicon: `https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg`,
  navs: {
    "en-US": [
      null,
      { title: "GitHub", path: "https://github.com/lzm0x219/antd.max" },
      {
        title: "Changelog",
        path: "https://github.com/lzm0x219/antd.max/releases",
      },
    ],
    "zh-CN": [
      null,
      { title: "GitHub", path: "https://github.com/lzm0x219/antd.max" },
      {
        title: "更新日志",
        path: "https://github.com/lzm0x219/antd.max/releases",
      },
    ],
  },
  alias: {
    "@theme": resolve(__dirname, ".dumi/theme"),
  },
  webpack5: {},
  fastRefresh: {},
  workerLoader: {},
  dynamicImport: {
    loading: "@theme/components/PageLoading",
  },
  esbuild: {},
  nodeModulesTransform: {
    type: "none",
  },
  exportStatic: {},
  themeConfig: {
    footer: {
      message: "Open-source MIT Licensed",
      copyright: "Copyright © 2021-present Powered by 尾宿君",
    },
  },
};

export default defineConfig(config);
