/* Portfolio v2 data — adapted from case-content.js (2026-11-05).
   slug: detail-page key (?case=<slug>). cover: index cover variant
   (feature | split | card | dark). layout: detail-page image layout
   (flow | phones = 3-phone intro | multi = multi-image grid). */
window.PORTFOLIO_V2 = [
  {
    "zh": {
      "title": "设计系统与能力交付",
      "role": "公共设计团队负责人",
      "overview": "让设计意图成为跨业务可复用的交付语言。带领平台团队、负责公共规范、设计系统及系统动效设计，推动 ColorOS 15、16 两代 UI Kit 对外发布。",
      "process": [
        "将色彩、字体、间距、圆角等基础定义，与场景组件和交付规则分层组织。",
        "围绕圆角连续性、按钮与列表高度、菜单按压及拖拽反馈，推动设计定义与系统落地。",
        "公共团队负责体系方向与设计定义，开发团队负责代码控件实现；持续协调设计与工程交付。"
      ],
      "result": "两代 UI Kit 已由 OPPO 账号在 Figma Community 公开发布。公开资源证明团队交付，本人职责为负责公共设计团队并推动发布。",
      "imageCaption": "ColorOS UI Kit · 原稿公开资源截图"
    },
    "en": {
      "title": "Design systems & capability delivery",
      "role": "Platform design team lead",
      "overview": "Made design intent reusable across products. Led the platform team responsible for the shared design system, system motion, and supported the public release of the ColorOS 15 and 16 UI Kits.",
      "process": [
        "Organized foundations, scenario components and delivery rules as distinct layers.",
        "Defined details including corner continuity, button and list heights, press feedback and drag feedback.",
        "Led system direction and design definitions; development teams implemented the code components."
      ],
      "result": "Both UI Kits were published by OPPO on Figma Community. The resources document the team delivery; my contribution was leading the shared design team and supporting publication.",
      "imageCaption": "ColorOS UI Kits · public resource capture"
    },
    "date": "2023.01—2026.03",
    "links": [
      [
        "ColorOS 15 UI Kit",
        "https://www.figma.com/community/file/1430008996536373272/coloros-15-ui-kit"
      ],
      [
        "ColorOS 16 UI Kit",
        "https://www.figma.com/community/file/1572820051263618685/coloros-16-ui-kit"
      ]
    ],
    "image": "./images/coloros-ui-kits.png",
    "theme": "dark",
    "size": "feature",
    "slides": [
      {
        "src": "./images/coloros-ui-kits.png",
        "caption": ""
      },
      {
        "src": "./images/cases/design-systems/slide-01.png",
        "caption": "11 · Design Systems / 工程化 · 三层结构图形化方案"
      },
      {
        "src": "./images/cases/design-systems/slide-02.png",
        "caption": "12 · Design Systems / 质量细节"
      },
      {
        "src": "./images/cases/design-systems/slide-03.png",
        "caption": "13 · Design Systems / 公开交付"
      }
    ],
    "slug": "design-systems",
    "cover": "feature",
    "layout": "flow"
  },
  {
    "zh": {
      "title": "系统体验定义：从洞察到验证",
      "role": "版本 UX 设计代表",
      "overview": "系统体验需要大范围跨业务共识的设计方向，更需要建立在具体细节中。自 ColorOS 14 深入参与用户洞察，主导提出美学方向，并通过公共控件推动落地。",
      "process": [
        "担任 ColorOS 14、15、16 版本 UX 设计代表，统筹跨业务协作与设计交付。",
        "识别系统一级门户场景，与研发、测试形成重点变更共识。",
        "推动设计稿阶段用户测试，将新方案与上一代及友商方案横向比较，为评审提供依据。"
      ],
      "result": "形成从方向、公共定义到场景验证的协作机制。本人负责方向、组织与共识，具体模块由各业务团队共同完成。",
      "imageCaption": "ColorOS · 原稿设计分析"
    },
    "en": {
      "title": "System experience definition: from insight to validation",
      "role": "Release UX design representative",
      "overview": "System experience needs a shared direction and careful execution. For ColorOS 14, I participated deeply in user insight work and led the proposal of an aesthetic direction, carried through the shared design system and controls.",
      "process": [
        "Coordinated cross-business collaboration and design delivery for ColorOS 14, 15 and 16.",
        "Identified high-impact system entry points and aligned key changes with engineering and QA.",
        "Promoted design-stage user testing, comparing proposals with previous-generation and competitor designs."
      ],
      "result": "Connected direction, shared definitions and scenario validation. My role was direction and cross-team alignment; individual modules were delivered with their respective teams.",
      "imageCaption": "ColorOS · design analysis from the portfolio"
    },
    "date": "ColorOS 14—16",
    "links": [],
    "image": "./images/coloros-experience.png",
    "theme": "light",
    "size": "standard",
    "slides": [
      {
        "src": "./images/coloros-experience.png",
        "caption": ""
      },
      {
        "src": "./images/cases/system-experience/slide-01.png",
        "caption": "06 · ColorOS / 案例概览"
      },
      {
        "src": "./images/cases/system-experience/slide-02.png",
        "caption": "07 · ColorOS / 用户洞察"
      },
      {
        "src": "./images/cases/system-experience/slide-03.png",
        "caption": "08 · ColorOS / 主张与落地"
      }
    ],
    "slug": "system-experience",
    "cover": "split",
    "layout": "flow"
  },
  {
    "zh": {
      "title": "AI 工作流与可运行原型",
      "role": "个人实践与设计工作流探索",
      "overview": "2025 年起将 AI 用于研究、总结、写作与方案讨论；2026 年进一步深入 Agent、本地模型及可运行原型，用实际运行效果重新审视设计判断。",
      "process": [
        "结构化产品定义、模块、Token、场景组件与交互逻辑，对齐 Figma UI 库，生成设计稿后人工判断与微调。",
        "另一条路径接入研发提供的 Android Compose 控件库，结合业务知识搭建高保真 Demo；不等同于 Figma 自动转代码。",
        "个人构建语音日记与记忆产品并部署至阿里云，采用本地语音模型记录、分层组织个人数据库，探索按需生成叙事与洞察。"
      ],
      "result": "已形成设计稿与运行原型两条实践路径。个人产品与工作流属于实践探索，未作为商业上线成果；算法能力由研发提供，体验整合与原型验证由本人推进。",
      "imageCaption": "AI 工作流 · 方法示意"
    },
    "en": {
      "title": "AI workflows & runnable prototypes",
      "role": "Hands-on practice & design workflow exploration",
      "overview": "Started using AI for research, synthesis, writing and design discussion in 2025, then deepened hands-on work with agents, local models and runnable prototypes in 2026.",
      "process": [
        "Structure product knowledge, tokens, components and interaction logic; align with a Figma library and refine generated designs through human judgment.",
        "In a separate path, use developer-provided Android Compose components to build runnable demos; this is not automatic Figma-to-code conversion.",
        "Built and deployed a personal voice diary and memory product on Alibaba Cloud, using local speech models and layered personal records while exploring narrative and insight generation."
      ],
      "result": "Established separate design and runnable-prototype paths. Personal products and workflows are exploratory practice rather than commercial launches; engineering supplies algorithm capabilities, while I work on experience integration and prototype validation.",
      "imageCaption": "AI workflow · process diagram"
    },
    "date": "2025—2026",
    "links": [],
    "image": "./images/ai-workflow.png",
    "theme": "light",
    "size": "standard",
    "slides": [
      {
        "src": "./images/ai-workflow.png",
        "caption": ""
      },
      {
        "src": "./images/cases/ai-workflow/slide-01.png",
        "caption": "新版 03 AI工作流"
      },
      {
        "src": "./images/cases/ai-workflow/slide-02.png",
        "caption": "新版 04 AI个人产品"
      },
      {
        "src": "./images/cases/ai-workflow/slide-03.png",
        "caption": "新版 05 AI原型验证"
      }
    ],
    "slug": "ai-workflow",
    "cover": "split",
    "layout": "phones"
  },
  {
    "zh": {
      "title": "生态互联：围绕任务延续体验",
      "role": "生态互联体验负责人",
      "overview": "负责 OPPO 生态互联方向的用户体验工作，参与下一年度战略规划与跨端协同体验探索。关注任务如何在设备之间自然延续。",
      "process": [
        "从任务而非单一设备出发，研究跨设备协同的体验机会。",
        "探索手机、耳机与 AI 模型协同下的洞察、问答共创及知识积累。",
        "以原型将抽象体验方向变成可讨论的交互。"
      ],
      "result": "当前为职责与早期探索介绍，尚不作为已上线产品成果。",
      "imageCaption": "跨端探索 · 方法示意"
    },
    "en": {
      "title": "Ecosystem continuity around user tasks",
      "role": "Ecosystem experience lead",
      "overview": "Lead user experience for OPPO ecosystem interconnection, contributing to strategy planning and explorations of cross-device collaboration, with a focus on continuity of user tasks.",
      "process": [
        "Explore collaboration opportunities through user tasks rather than individual devices.",
        "Explore phone, earphone and AI-assisted workflows for insight, co-creation and knowledge capture.",
        "Use prototypes to make experience directions tangible for discussion."
      ],
      "result": "This describes current responsibilities and early exploration, rather than a launched product outcome.",
      "imageCaption": "Cross-device exploration · conceptual diagram"
    },
    "date": "2026.04—至今 / Present",
    "links": [],
    "image": "./images/ecosystem-method.png",
    "theme": "light",
    "size": "standard",
    "slides": [
      {
        "src": "./images/ecosystem-method.png",
        "caption": ""
      },
      {
        "src": "./images/cases/ecosystem/slide-01.png",
        "caption": "16 · Ecosystem / 跨端探索"
      }
    ],
    "slug": "ecosystem",
    "cover": "card",
    "layout": "flow"
  },
  {
    "zh": {
      "title": "互联网服务：团队构建与体验度量",
      "role": "互联网服务业务体验设计负责人",
      "overview": "负责软件商店、浏览器、游戏中心与游戏助手等互联网服务 BU 产品的体验设计，让用户体验与商业目标进入同一套讨论。",
      "process": [
        "管理 40+ 名正式设计师，组织多业务体验设计与交付。",
        "重新组建软件用户研究团队，建立围绕 NPS 的体验度量标准。",
        "推动研究与度量机制长期运行，让体验讨论有持续依据。"
      ],
      "result": "完成组织建设与体验度量机制建立。跨互联网服务与平台任职期间，先后培养 3 位设计师成长为部门主管并完成晋升。",
      "imageCaption": "互联网服务 · 产品界面"
    },
    "en": {
      "title": "Internet services: team building & experience measurement",
      "role": "Internet services experience design lead",
      "overview": "Led experience design across the internet services BU, including the app store, browser, game center and game assistant, bringing user experience and commercial goals into the same discussion.",
      "process": [
        "Managed more than 40 full-time designers across multiple product areas.",
        "Rebuilt the software user research team and established NPS-based experience measurement standards.",
        "Supported ongoing research and measurement to ground experience discussions in evidence."
      ],
      "result": "Established research and experience measurement capabilities. Across internet services and platform roles, coached three designers who became department heads and earned promotions.",
      "imageCaption": "Internet services · product interfaces"
    },
    "date": "2020.04—2022.12",
    "links": [],
    "image": "./images/internet-services.png",
    "theme": "light",
    "size": "standard",
    "slides": [
      {
        "src": "./images/internet-services.png",
        "caption": ""
      },
      {
        "src": "./images/cases/internet-services/slide-01.png",
        "caption": "14 · Business / 互联网服务"
      }
    ],
    "slug": "internet-services",
    "cover": "card",
    "layout": "multi"
  },
  {
    "zh": {
      "title": "全民 K 歌：从创作到社交",
      "role": "全民 K 歌及创新产品矩阵设计负责人",
      "overview": "从 0 到 1 参与打造全民 K 歌，主导音视频创作、关系链社交与直播互动等核心体验，支持产品向内容与社交平台演进。",
      "process": [
        "围绕创作、分享与互动组织核心体验，连接内容表达与社交关系。",
        "带领团队打造音兔视频、WeSing 国际版与全民 K 歌 TV 版，回应不同平台的场景。",
        "构建设计中台及组件化能力，支持多业务、多平台交付。"
      ],
      "result": "形成从核心产品到多平台产品矩阵的设计实践。全民 K 歌与 WeSing 国际版为不同产品经历，不将二者混写。",
      "imageCaption": "全民 K 歌 · 项目纪念照片"
    },
    "en": {
      "title": "全民K歌: creation meets social connection",
      "role": "Design lead, 全民K歌 & innovation products",
      "overview": "Participated in building 全民K歌 from zero to one, leading core experiences in audio/video creation, relationship-based social interaction and livestreaming as the product evolved into a content and social platform.",
      "process": [
        "Connected content creation, sharing and social interaction across core experiences.",
        "Led design work for Yintu video, international WeSing and 全民K歌 TV experiences.",
        "Built shared design and component capabilities to support multiple products and platforms."
      ],
      "result": "Extended core-product design into a multi-platform product family. 全民K歌 and international WeSing are distinct product experiences.",
      "imageCaption": "全民K歌 · project memorabilia"
    },
    "date": "2014—2020",
    "links": [],
    "image": "./images/tencent-products.png",
    "theme": "light",
    "size": "standard",
    "slides": [
      {
        "src": "./images/tencent-products.png",
        "caption": ""
      },
      {
        "src": "./images/cases/wesing/slide-01.png",
        "caption": "15 · Tencent / 产品创新"
      }
    ],
    "slug": "wesing",
    "cover": "card",
    "layout": "flow"
  },
  {
    "zh": {
      "title": "行业影响力与专业建设",
      "role": "设计实践分享与人才培养",
      "overview": "将系统设计与产品创新实践带到专业社区，也通过课程与人才培养让经验被团队持续复用。",
      "process": [
        "负责公共设计团队期间推动 ColorOS 15、16 UI Kit 在 Figma Community 公开发布，连接设计工具与开发者生态。",
        "对外分享《终端互联网的极致体验设计》（MSUP）；《万物互联时代的软件设计创新》收录于 DIA 2023 活动目录。",
        "担任 OPPO 内部讲师，开展《体验设计与创新系列课程》；曾任腾讯学院高级讲师、设计通道委员。"
      ],
      "result": "以公开资源、行业交流与团队培养体现专业贡献。DIA 分享可追溯至活动目录，未据此推定个人观看量、获奖或行业排名。",
      "imageCaption": "OPPO 开发者大会 · 原稿现场照片"
    },
    "en": {
      "title": "Industry contribution & professional development",
      "role": "Sharing practice & developing designers",
      "overview": "Share system design and product innovation practice with the professional community, and make that experience reusable through teaching and mentoring.",
      "process": [
        "Supported public publication of the ColorOS 15 and 16 UI Kits while leading the shared design team.",
        "Shared “Experience Design for Terminal Internet” through MSUP; “Software Design Innovation in the Connected World” is listed in the DIA 2023 event directory.",
        "Taught experience design and innovation courses at OPPO; previously served as a senior lecturer at Tencent Academy and a design career committee member."
      ],
      "result": "Professional contribution is reflected in public resources, industry exchanges and mentoring. The DIA talk is traceable to an event listing; no individual audience or ranking claims are inferred.",
      "imageCaption": "OPPO Developers Conference · event photograph"
    },
    "date": "公开分享 / Public contributions",
    "links": [
      [
        "MSUP · 牟伟成",
        "https://www.msup.com.cn/teacher/8694"
      ],
      [
        "DIA 2023 · 活动目录 / Event listing",
        "https://meia.me/course/170613?p=8432"
      ]
    ],
    "image": "./images/industry-odc.png",
    "theme": "light",
    "size": "standard",
    "slides": [
      {
        "src": "./images/industry-odc.png",
        "caption": ""
      },
      {
        "src": "./images/cases/industry/slide-01.png",
        "caption": "17 · Leadership / 专业建设"
      },
      {
        "src": "./images/cases/industry/slide-02.png",
        "caption": "18 · Contact / 继续交流"
      }
    ],
    "slug": "industry",
    "cover": "dark",
    "layout": "flow"
  }
];
