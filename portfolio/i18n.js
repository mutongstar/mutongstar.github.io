(()=>{
const phrases={
'navAbout':['简介','About'],'navWork':['作品案例','Work'],'navAI':['AI 与原型','AI & Prototypes'],'navInfluence':['专业影响力','Influence'],
'.story-identity':['全局思考与设计领导者','Systems thinker & design leader'],
'.story-cover h1':['设计负责人，<br>系统思考者。','Design leader.<br>Systems thinker.'],
'.story-journey':['从深入打造应用产品，到定义 OS 体验，再到跨端 AI。','From shaping app products in depth to defining OS experiences and cross-device AI.'],
'.story-actions .pill:first-child':['查看案例 ↗','See the work ↗'],
'.story-metrics>div:nth-child(1) span':['年经验','years of experience'],
'.story-metrics>div:nth-child(2) span':['设计师团队','designers led'],
'.story-metrics>div:nth-child(3) span':['代 UI Kit','generations of UI Kit'],
'.art-message':['让复杂，<br>回归<span>直觉。</span>','Make complexity<br>feel <span>intuitive.</span>'],
'.outcome-copy h2':['从系统体验，<br>到产品创新。','From systems<br>to product innovation.'],
'.home-exit .eyebrow':['SELECTED WORK / 作品案例','SELECTED WORK / PORTFOLIO'],
'.home-exit h2':['继续探索，<br>设计如何落在真实之中。','Explore how design<br>takes shape in the real world.'],
'.home-exit .pill':['浏览作品案例 ↗','Explore selected work ↗'],
'.outcome-capabilities>div:nth-child(1) h3':['系统体验策略','System experience strategy'],
'.outcome-capabilities>div:nth-child(1) p':['OS 层面的体验策略与跨业务协同，从洞察到落地的系统行为。','OS-level experience strategy and cross-team alignment, turning insights into system behavior.'],
'.outcome-capabilities>div:nth-child(2) h3':['设计语言与系统','Design language & systems'],
'.outcome-capabilities>div:nth-child(2) p':['共享设计系统、控件与动效；ColorOS 15、16 两代 UI Kit 已在 Figma Community 发布。','Shared design systems, components and motion. ColorOS 15 and 16 UI Kits are published on Figma Community.'],
'.outcome-capabilities>div:nth-child(3) h3':['AI 与原型实践','AI & prototyping'],
'.outcome-capabilities>div:nth-child(3) p':['理解 AI 架构（意图、记忆、知识库），把判断做成可运行的原型。','Exploring AI architecture—intent, memory and knowledge bases—and turning ideas into runnable prototypes.'],
'[data-resume]':['查看简历 ↗','View résumé ↗'],
'#work .section-head h2':['设计，落在真实之中。','Design, made real.'],
'#work .section-head>span':['精选案例 / 2020—2026','Selected work / 2020—2026'],
'#ai .section-head h2':['让想法，跑起来。','Making ideas runnable.'],
'#ai .tab-editorial-copy p:nth-of-type(1)':['2025 年起将 AI 用于研究、总结、写作与方案讨论；2026 年进一步深入 Agent、本地模型与可运行原型。','Since 2025, I have used AI for research, synthesis, writing and design discussion. In 2026, I went deeper into agents, local models and runnable prototypes.'],
'#ai .tab-editorial-copy p:nth-of-type(2)':['结构化业务知识，对齐 Figma UI 库生成设计稿并人工微调；另一条路径接入研发 Android Compose 控件库搭建高保真 Demo。个人语音日记与记忆产品已部署阿里云，按需叙事与洞察仍在探索。','I structure product knowledge for Figma-assisted design, then review and refine the output. Separately, I use developer-provided Android Compose components to build high-fidelity demos. My personal voice diary and memory product is deployed on Alibaba Cloud; narrative and insight capabilities remain exploratory.'],
'#influence .section-head h2':['好的设计，彼此成就。','Good design grows with people.'],
'#influence .tab-editorial-copy p:nth-of-type(1)':['担任 OPPO 内部讲师，开展《体验设计与创新系列课程》；曾任腾讯学院高级讲师、设计通道委员。','I teach experience design and innovation at OPPO and previously served as a senior lecturer at Tencent Academy and a design career committee member.'],
'#influence .tab-editorial-copy p:nth-of-type(2)':['在 OPPO 互联网服务与平台任职期间，先后培养 3 位设计师成长为部门主管并完成晋升。对外贡献包括两代 ColorOS UI Kit，以及 MSUP 与 DIA 2023 活动目录收录的分享。','Across OPPO internet services and platform teams, I coached three designers who later became department heads. Public contributions include two ColorOS UI Kits and talks listed by MSUP and DIA 2023.'],
'.closing h2':['设计之外，<br>还有更大的连接。','Beyond design,<br>more connections.'],
'.closing .pill':['专业影响力与行业分享','Industry contribution'],
'footer h2':['一起，创造下一种可能。','Let’s make what comes next.'],
'footer .footer-bottom a':['回到顶部 ↑','Back to top ↑'],
'.ai .prototype-note':['三屏交互结构示意 · 用于本轮封面形式验证，非已上线产品界面','Three-screen interaction concept for this cover only; not a shipped product UI.'],
'.ai .phone:nth-child(1) h4':['留住<br>此刻的想法。','Capture<br>the moment.'],
'.ai .phone:nth-child(2) h4':['想法有了<br>自己的脉络。','Ideas find<br>their structure.'],
'.ai .phone:nth-child(3) h4':['让记忆，<br>回应当下。','Let memory<br>respond.']
,'#projects .phone:nth-child(1) .ui-block':['语音记录<br>━━━━ ━━ ━━━━━<br>正在聆听…','Voice note<br>━━━━ ━━ ━━━━━<br>Listening…']
,'#projects .phone:nth-child(2) .ui-block:nth-of-type(1)':['今天的记录<br>项目 · 灵感 · 生活','Today’s notes<br>Projects · Ideas · Life']
,'#projects .phone:nth-child(2) .ui-block:nth-of-type(3)':['每一次记录，都有所连接。','Every note finds a connection.']
,'#projects .phone:nth-child(3) .ui-block':['从记录中寻找线索<br>关联想法，形成新的视角。','Find patterns in your notes.<br>Connect ideas into a new perspective.']
,'#projects .phone:nth-child(1) .ui-action':['结束记录','Finish recording']
,'#projects .phone:nth-child(2) .ui-action':['查看记忆','View memories']
,'#projects .phone:nth-child(3) .ui-action':['开始探索','Explore']
,'#projects .phone:nth-child(2) small':['我的记忆 / MEMORY','MY MEMORY']
,'#projects .phone:nth-child(3) small':['探索 / EXPLORE','EXPLORE']
,'footer .footer-bottom>span:nth-child(2)':['深圳，中国','Shenzhen, China']
};
const api={lang:localStorage.getItem('portfolio-language')==='en'?'en':'zh',apply(){document.documentElement.lang=this.lang==='zh'?'zh-CN':'en';for(const [selector,values] of Object.entries(phrases)){const elements=document.querySelectorAll(selector.startsWith('nav')?'[data-i18n="'+selector+'"]':selector);elements.forEach(el=>el.innerHTML=values[this.lang==='zh'?0:1])}const b=document.querySelector('#langToggle');if(b){b.textContent=this.lang==='zh'?'EN':'中文';b.setAttribute('aria-label',this.lang==='zh'?'Switch to English':'切换为中文')}const browse=document.querySelector('.circle');if(browse)browse.setAttribute('aria-label',this.lang==='zh'?'浏览作品':'Explore work')}};
window.PortfolioI18N=api;document.querySelector('#langToggle')?.addEventListener('click',()=>{api.lang=api.lang==='zh'?'en':'zh';localStorage.setItem('portfolio-language',api.lang);dispatchEvent(new Event('portfolio-language'));api.apply()});api.apply();
})();
