(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`about`,label:`关于我`,plant:`月光兰`,icon:`✦`,eyebrow:`01 / ROOTS`,title:`在好奇心里慢慢扎根`,lead:`你好，我是一个相信温柔观察也能改变世界的人。`,text:`我喜欢把日常的细微感受收集起来：雨后叶片的光、一本书里的陌生城市、和朋友聊天时突然发亮的想法。它们共同塑造了我的学习、选择与生活方式。`,tags:[`教育背景`,`兴趣与价值观`,`日常收藏`],note:`“愿意认真看世界，也愿意慢一点长大。”`},{id:`experience`,label:`我的经历`,plant:`铃兰信箱`,icon:`✎`,eyebrow:`02 / PATHS`,title:`每一段路，都留下了种子`,lead:`从校园媒体到实习现场，我在真实的问题里学习协作。`,text:`我曾参与内容策划、采访与传播，也在实践中练习将模糊的需求整理成可执行的故事。比起一份线性的履历，这里更像我一路采集的经验标本。`,tags:[`实习经历`,`校园媒体`,`实践项目`],note:`把好奇变成行动，把行动变成新的视野。`},{id:`research`,label:`我的研究`,plant:`紫罗兰标本`,icon:`⌁`,eyebrow:`03 / RESEARCH`,title:`为问题留一盏小灯`,lead:`我对人、技术与社会如何彼此影响保持长期兴趣。`,text:`从大创项目到研究阅读，我喜欢先提出一个足够具体的问题，再耐心地追踪证据、访谈与不同视角。研究并不总是通向答案，它也教会我如何和不确定共处。`,tags:[`大创项目`,`研究兴趣`,`学术成果`],note:`好的问题，常常比仓促的答案更有生命力。`},{id:`explore`,label:`我的探索`,plant:`星果藤`,icon:`⌘`,eyebrow:`04 / MAKING`,title:`把想象做成可以触摸的东西`,lead:`我用 AI 工具、设计和代码验证那些“如果呢”。`,text:`我持续尝试新的创作工具，也享受从空白画布到可交互原型的过程。产品设计、编程和个人项目，是我练习表达、解决问题和保持玩心的方式。`,tags:[`AI 工具`,`产品设计`,`个人项目`],note:`技术是土壤，想象力决定花会开成什么样子。`},{id:`future`,label:`我的未来`,plant:`晨光蕨`,icon:`↗`,eyebrow:`05 / HORIZON`,title:`向着有光的地方生长`,lead:`我希望参与创造更有人情味的数字体验。`,text:`未来我会继续学习研究方法、产品思维与技术表达，寻找能够连接人的职业方向。我不急于定义终点，但会认真走好每一次向外探索和向内理解。`,tags:[`职业方向`,`个人目标`,`正在学习`],note:`未来不是一张地图，而是一座正在被照亮的花园。`}],t=t=>e.find(e=>e.id===t),n=document.querySelector(`#app`),r=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,i=[],a=()=>e.map((e,t)=>`
  <button class="topic-plant topic-${t+1}" data-topic="${e.id}" aria-label="打开${e.label}">
    <span class="plant-tag"><b>${e.label}</b><small>点我试试 →</small></span>
    <span class="pot pot-${t+1}"></span><span class="stem"></span><span class="leaf leaf-a"></span><span class="leaf leaf-b"></span><span class="leaf leaf-c"></span>
    <span class="bloom bloom-a"></span><span class="bloom bloom-b"></span><span class="bloom bloom-c"></span>
  </button>`).join(``);function o(e=!1){l(),n.innerHTML=`<main class="experience ${e?`stage-indoor`:`stage-start`}" aria-label="微光花房互动体验">
    <div class="loading" aria-live="polite"><span></span><b>正在点亮花房…</b></div>
    <header class="site-header"><a class="brand" href="#garden">微光 <em>花房</em></a><div><span class="scene-status">${e?`室内花园`:`庭院小径`}</span><button class="skip-button">${e?`重新漫步`:`进入花房`}</button></div></header>
    <section class="world" id="world">
      <div class="sky"></div><div class="sunbeam beam-one"></div><div class="sunbeam beam-two"></div>
      <section class="outside-scene" aria-label="花房外景">
        <div class="approach-art"></div><div class="meadow meadow-back"></div><div class="meadow meadow-front"></div><div class="garden-path"><i></i><i></i><i></i></div>
        <div class="cottage" aria-label="被藤蔓包围的花房"><div class="cottage-art"></div><div class="cottage-vine vine-a"></div><div class="cottage-vine vine-b"></div><div class="cottage-flowers flowers-left"></div><div class="cottage-flowers flowers-right"></div><div class="door-frame"><div class="inside-glow"></div><div class="door-panel"><span class="door-window"></span><span class="door-handle"></span><span class="door-vine">❋</span></div></div></div>
        <div class="traveller" aria-label="沿小径前行的小人"><i class="hat"></i><i class="head"></i><i class="coat"></i><i class="foot foot-l"></i><i class="foot foot-r"></i></div><div class="garden-foreground fg-left"></div><div class="garden-foreground fg-right"></div>
      </section>
      <section class="interior-scene" aria-label="花房室内花园"><div class="interior-photo"></div><div class="room-walls"></div><div class="window-light"></div><div class="wood-beams beam-l"></div><div class="wood-beams beam-r"></div><div class="floor"></div><div class="shelf shelf-back"><i></i><i></i><i></i></div><div class="shelf shelf-front"><i></i></div><div class="hanging-vine hang-a"><i></i><i></i><i></i></div><div class="hanging-vine hang-b"><i></i><i></i></div><div class="room-plants room-plants-left"></div><div class="room-plants room-plants-right"></div><section class="plant-collection" aria-label="五盆个人介绍植物">${a()}</section><div class="petals" aria-hidden="true"><i></i><i></i><i></i><i></i></div></section>
    </section>
    <section class="intro-copy"><span>THE LITTLE GREENHOUSE</span><h1>沿着花径<br/>走进有光的房间</h1><p>一座关于好奇、创造与生长的个人花房。</p><button class="journey-button">开始漫步 <b>↓</b></button></section><p class="scene-hint" aria-live="polite">${e?`五盆植物正等你轻轻触碰`:`小人正在沿着小径走近…`}</p><footer><span>鼠标移动可轻微环顾</span><span>五个植物入口 · 可键盘访问</span></footer>
  </main>`;let t=document.querySelector(`.experience`),u=document.querySelector(`#world`),f=()=>s(t);!e&&!r&&i.push(setTimeout(f,900)),!e&&r&&c(t),e&&setTimeout(()=>t.classList.add(`ready`),60),document.querySelector(`.skip-button`).addEventListener(`click`,()=>e?o(!1):c(t)),document.querySelector(`.journey-button`).addEventListener(`click`,f),u.addEventListener(`pointermove`,e=>{if(r)return;let t=u.getBoundingClientRect();u.style.setProperty(`--look-x`,`${(((e.clientX-t.left)/t.width-.5)*16).toFixed(1)}px`),u.style.setProperty(`--look-y`,`${(((e.clientY-t.top)/t.height-.5)*10).toFixed(1)}px`)}),document.querySelectorAll(`[data-topic]`).forEach(e=>e.addEventListener(`click`,()=>d(e.dataset.topic)))}function s(e){e.classList.contains(`stage-walk`)||e.classList.contains(`stage-indoor`)||(e.className=`experience stage-walk`,document.querySelector(`.scene-status`).textContent=`走近花房`,document.querySelector(`.intro-copy`).classList.add(`hidden`),document.querySelector(`.scene-hint`).textContent=`门扉正要为你打开…`,i.push(setTimeout(()=>{e.classList.add(`stage-door`),document.querySelector(`.scene-status`).textContent=`门扉开启`},3500)),i.push(setTimeout(()=>c(e),5700)))}function c(e){l(),e.className=`experience stage-indoor`,document.querySelector(`.scene-status`).textContent=`室内花园`,document.querySelector(`.scene-hint`).textContent=`五盆植物正等你轻轻触碰`,document.querySelector(`.intro-copy`).classList.add(`hidden`),i.push(setTimeout(()=>e.classList.add(`ready`),1100))}function l(){i.forEach(clearTimeout),i=[]}function u(e){try{return{...e,...JSON.parse(localStorage.getItem(`greenhouse-topic-${e.id}`))||{}}}catch{return e}}function d(e){let n=t(e);n&&(l(),history.pushState({topic:e},``,`#${e}`),e===`about`?ab():e===`experience`?v():e===`research`?rs():e===`explore`?w():e===`future`?ft():f(n))}function f(e){let t=u(e);n.innerHTML=`<main class="article-page"><div class="article-image"></div><nav><button class="back-button" aria-label="返回花房">← 返回花房</button><a class="brand" href="#garden">微光 <em>花房</em></a><button class="edit-button">编辑本页</button></nav><article><span class="eyebrow">${t.eyebrow}</span><h1>${t.title}</h1><p class="lead">${t.lead}</p><div class="rule"></div><p>${t.text}</p><div class="tags">${t.tags.map(e=>`<span>${e}</span>`).join(``)}</div><blockquote>${t.note}</blockquote><p class="edit-note">默认文案：<code>src/content.js</code> · 本页修改会保存在此浏览器</p></article></main>`,document.querySelector(`.back-button`).addEventListener(`click`,()=>{history.pushState({},``,`#garden`),o(!0)}),document.querySelector(`.edit-button`).addEventListener(`click`,()=>p(e))}function p(e){let t=u(e);n.innerHTML=`<main class="article-page editor-page"><div class="article-image"></div><nav><button class="back-button">← 取消编辑</button><a class="brand" href="#garden">微光 <em>花房</em></a></nav><form class="content-editor"><span class="eyebrow">EDIT / ${t.label}</span><h1>编辑这株植物的故事</h1><label>标题<input name="title" value="${t.title}"></label><label>引言<textarea name="lead">${t.lead}</textarea></label><label>正文<textarea name="text">${t.text}</textarea></label><label>标签（用逗号分隔）<input name="tags" value="${t.tags.join(`，`)}"></label><label>引言卡片<textarea name="note">${t.note}</textarea></label><div class="editor-actions"><button class="save-button" type="submit">保存修改</button><button class="reset-button" type="button">恢复默认</button></div></form></main>`,document.querySelector(`.back-button`).addEventListener(`click`,()=>f(e)),document.querySelector(`.content-editor`).addEventListener(`submit`,t=>{t.preventDefault();let n=new FormData(t.currentTarget),r={title:n.get(`title`),lead:n.get(`lead`),text:n.get(`text`),tags:String(n.get(`tags`)).split(/[，,]/).map(e=>e.trim()).filter(Boolean),note:n.get(`note`)};localStorage.setItem(`greenhouse-topic-${e.id}`,JSON.stringify(r)),f(e)}),document.querySelector(`.reset-button`).addEventListener(`click`,()=>{localStorage.removeItem(`greenhouse-topic-${e.id}`),p(e)})}window.addEventListener(`popstate`,()=>{let e=t(location.hash.slice(1));e?(e.id===`about`?ab():e.id===`experience`?v():e.id===`research`?rs():e.id===`explore`?w():e.id===`future`?ft():f(e)):o(!0)});
function v(){
  l();
  n.innerHTML=`<main class="about-page">
    <div class="about-bg"></div>
    <nav class="about-nav">
      <button class="back-button" aria-label="返回花房">← 返回花房</button>
      <a class="brand" href="#garden">微光 <em>花房</em></a>
      <span class="about-chip">02 / PATHS · 我的经历</span>
    </nav>
    <div class="about-frame">
      <h1 class="about-heading">About me</h1>
      <div class="about-stage">
        <div class="about-card card-tl" data-key="edu">
          <div class="card-body">
            <p><b>城市</b> · 广州</p>
            <p><b>专业</b> · 英语→计算社会科学</p>
            <p class="indent">从人文社科走向 AI</p>
            <p><b>状态</b> · 27fall 研 0</p>
          </div>
          <button class="try-link">点我试试 →</button>
        </div>
        <div class="about-card card-tr" data-key="campus">
          <div class="card-body">
            <p>在校英辩队担任副队长，学会组织活动；</p>
            <p>在校新媒介体管理学校官方公众号，</p>
            <p>学会了活动策划、撰写推文</p>
          </div>
          <button class="try-link">点我试试 →</button>
        </div>
        <div class="about-card card-bl" data-key="words">
          <div class="card-body">
            <p>不想堆一堆奖项，只想告诉你：</p>
            <p>多次英文赛事除了增强我的口语水平，</p>
            <p>更重要的是锻炼了我大胆发言、善于</p>
            <p>思辨的能力和在面对挫折中增强我的抗压能力</p>
          </div>
          <button class="try-link">点我试试 →</button>
        </div>
        <div class="about-card card-br" data-key="intern">
          <div class="card-body">
            <p class="lead-p">2段实习，1个项目，均围绕“人”展开</p>
            <p>· 广东出版集团数字出版有限公司｜编辑实习生<br/><span class="sub">利用 AI 优化产品</span></p>
            <p>· 中国进出口商品交易会（广交会）｜海外客户拓展与翻译<br/><span class="sub">与人打交道、理解人</span></p>
            <p>· 省级大学生创业训练计划项目｜跨境直播中主播跨文化话术与传播效能研究<br/><span class="sub">用数据理解人</span></p>
          </div>
          <button class="try-link">点我试试 →</button>
        </div>
        <div class="about-photo"><img src="./assets/about-me-photo.png" alt="薇薇安的照片" /></div>
      </div>
    </div>
    <div class="about-modal" hidden>
      <div class="modal-card">
        <button class="modal-close" aria-label="关闭">×</button>
        <span class="modal-eyebrow">02 / PATHS</span>
        <h2 class="modal-title"></h2>
        <div class="modal-body"></div>
      </div>
    </div>
  </main>`;
  document.querySelector(`.about-page .back-button`).addEventListener(`click`,()=>{history.pushState({},``,`#garden`),o(!0)});
  var DATA={
    edu:{title:`城市 · 专业 · 状态`,body:`<p><b>城市</b>　广州。在这座城市长大，也在岭南的烟火气里学会观察人。</p><p><b>专业</b>　本科英语，走向计算社会科学——从人文社科出发，慢慢走向 AI 与数据。</p><p><b>状态</b>　27fall 研 0，即将开启新的旅程。</p>`},
    campus:{title:`在校园里练习组织与表达`,body:`<p>在校英辩队担任副队长，和队友一起备赛、组织活动，学会把一件复杂的事拆成可执行的分工。</p><p>在校新媒介体负责管理学校官方公众号，从选题、活动策划到撰写推文，把想法变成能被读到的文字。</p>`},
    words:{title:`奖杯之外，我更在意这些`,body:`<p>不想堆一堆奖项，只想告诉你：多次英文赛事除了增强我的口语水平，更重要的是锻炼了我大胆发言、善于思辨的能力。</p><p>也锻炼了我在面对挫折时，一点点增强的抗压能力。</p>`},
    intern:{title:`两段实习，一个项目，都关于“人”`,body:`<p><b>广东出版集团数字出版有限公司 · 编辑实习生</b><br/>利用 AI 优化产品，学习技术与内容如何结合。</p><p><b>中国进出口商品交易会（广交会）· 海外客户拓展与翻译</b><br/>与人打交道、理解人，在真实场景里练习沟通。</p><p><b>省级大学生创业训练计划项目 · 跨境直播中主播跨文化话术与传播效能研究</b><br/>用数据理解人，把观察变成可验证的问题。</p>`}
  };
  var modal=document.querySelector(`.about-modal`);
  document.querySelectorAll(`.about-card`).forEach(function(card){
    card.querySelector(`.try-link`).addEventListener(`click`,function(){
      var d=DATA[card.dataset.key];
      modal.querySelector(`.modal-title`).textContent=d.title;
      modal.querySelector(`.modal-body`).innerHTML=d.body;
      modal.hidden=false;
    });
  });
  function close(){modal.hidden=true}
  modal.querySelector(`.modal-close`).addEventListener(`click`,close);
  modal.addEventListener(`click`,function(e){if(e.target===modal)close()});
  document.addEventListener(`keydown`,function(e){if(e.key===`Escape`)close()});
}


function w(){
  l();
  var PHOTOS=[
    {src:`./assets/explore-liwan.jpg`,place:`荔湾区`,en:`LIWAN`,note:`荔枝湾的夜，灯笼映在湿润的石板路上。`},
    {src:`./assets/explore-malaysia.jpg`,place:`马来西亚`,en:`MALAYSIA`,note:`在水与穹顶之间，遇见另一种日常的安静。`},
    {src:`./assets/explore-singapore.jpg`,place:`新加坡`,en:`SINGAPORE`,note:`黄昏落在海边的建筑上，云被光轻轻托住。`}
  ];
  n.innerHTML=`<main class="gallery-page">
    <div class="gallery-bg"></div>
    <nav class="gallery-nav">
      <button class="back-button" aria-label="返回花房">← 返回花房</button>
      <a class="brand" href="#garden">微光 <em>花房</em></a>
      <span class="gallery-chip">04 / MAKING · 我的探索</span>
    </nav>
    <div class="gallery-wrap">
      <h1 class="gallery-heading">沿途拾光 <span>Travel Notes</span></h1>
      <p class="gallery-sub">走过的路，都成了看世界的方式。</p>
      <div class="gallery-grid">${PHOTOS.map(function(p,i){return `<figure class="gallery-item" data-i="${i}">
        <div class="photo-frame"><img src="${p.src}" alt="${p.place}" loading="lazy" /></div>
        <figcaption><span class="place">${p.place}</span><span class="en">${p.en}</span></figcaption>
      </figure>`}).join(``)}</div>
      <p class="gallery-foot">把好奇变成脚步，把脚步变成记忆。</p>
    </div>
    <div class="gallery-modal" hidden>
      <button class="gallery-modal-close" aria-label="关闭">×</button>
      <figure class="gallery-modal-card">
        <img src="" alt="" />
        <figcaption><b class="g-place"></b><span class="g-note"></span></figcaption>
      </figure>
    </div>
  </main>`;
  document.querySelector(`.gallery-page .back-button`).addEventListener(`click`,()=>{history.pushState({},``,`#garden`),o(!0)});
  var gm=document.querySelector(`.gallery-modal`);
  document.querySelectorAll(`.gallery-item`).forEach(function(fig){
    fig.addEventListener(`click`,function(){
      var p=PHOTOS[fig.dataset.i];
      gm.querySelector(`img`).src=p.src;
      gm.querySelector(`img`).alt=p.place;
      gm.querySelector(`.g-place`).textContent=p.place;
      gm.querySelector(`.g-note`).textContent=p.note;
      gm.hidden=false;
    });
  });
  function gc(){gm.hidden=true}
  gm.querySelector(`.gallery-modal-close`).addEventListener(`click`,gc);
  gm.addEventListener(`click`,function(e){if(e.target===gm)gc()});
  document.addEventListener(`keydown`,function(e){if(e.key===`Escape`)gc()});
}


/* ===== 共用壳：返回花房 + 详情抽屉 ===== */
function shell(html,chip,accent){
  n.innerHTML=`<main class="page-shell" style="--accent:${accent}">
    <div class="shell-bg"></div>
    <nav class="shell-nav">
      <button class="back-button" aria-label="返回花房">← 返回花房</button>
      <a class="brand" href="#garden">微光 <em>花房</em></a>
      <span class="shell-chip">${chip}</span>
    </nav>
    <div class="shell-body">${html}</div>
    <div class="sheet" hidden><button class="sheet-close" aria-label="关闭">×</button><div class="sheet-card"><span class="sheet-eyebrow"></span><h2 class="sheet-title"></h2><div class="sheet-text"></div></div></div>
  </main>`;
  document.querySelector(`.page-shell .back-button`).addEventListener(`click`,()=>{history.pushState({},``,`#garden`),o(!0)});
  var sh=document.querySelector(`.sheet`),sc=document.querySelector(`.sheet-close`);
  sc.addEventListener(`click`,()=>sh.hidden=true);
  sh.addEventListener(`click`,function(e){if(e.target===sh)sh.hidden=true});
  document.addEventListener(`keydown`,function(e){if(e.key===`Escape`)sh.hidden=true});
  document.querySelectorAll(`[data-sheet]`).forEach(function(el){
    el.addEventListener(`click`,function(){
      var key=el.getAttribute(`data-sheet`),d=el._data||{};
      sh.querySelector(`.sheet-eyebrow`).textContent=key;
      sh.querySelector(`.sheet-title`).textContent=d.title||``;
      sh.querySelector(`.sheet-text`).innerHTML=d.body||``;
      sh.hidden=false;
    });
  });
}
function putData(sel,data){
  document.querySelectorAll(sel).forEach(function(el){
    var key=el.getAttribute(`data-sheet`);
    if(data[key]) el._data=data[key];
  });
}

/* ===== 关于我 · 数据档案 + 六个我 ===== */
function ab(){
  l();
  var D={
    debate:{title:`辩手 · 把混乱辩成清晰`,body:`<p>站在 English Debate 的赛场上，我学会的第一件事不是赢，而是<b>把一团纠缠的情绪和观点，拆成可以被听懂的逻辑</b>。</p><p>2025 全国英语辩论赛总决赛一等奖、最佳辩手。奖杯之外，我更在意的是——面对质疑时，我不再慌，而是想再辩一轮。</p>`},
    translate:{title:`译员 · 在两种语言间理解人`,body:`<p>第 135 届广交会，做英文资料校对与往来信函翻译。看似是字句转换，其实是一次次在两种文化之间<b>判断语气、分寸与意图</b>。</p><p>我慢慢明白：翻译不是把 A 换成 B，而是让两个原本陌生的人，愿意继续聊下去。</p>`},
    creator:{title:`创作者 · 用内容搭一座桥`,body:`<p>在小红书做跨文化内容，意外聚拢了 2000+ 外国粉丝。那阵子很多人跨过大洋来到这里，我用双语内容陪他们认识中文、认识另一种日常。</p><p>我喜欢这种<b>把好奇心变成可被阅读的文字</b>的过程，也相信内容能让相隔很远的人彼此看见。</p>`},
    research:{title:`研究者 · 用数据回答关于人的问题`,body:`<p>省级大创项目，研究跨境直播中主播的跨文化话术与传播效能，用 SPSS 做统计分析。</p><p>这是我第一次系统地<b>把"人和人怎么沟通"变成一个可以被验证的问题</b>。也正是这次经历，把我推向了计算社会科学。</p>`},
    learner:{title:`学习者 · 从人文走向计算`,body:`<p>英专出身，GPA 4.18/5、专业前 5%，专四 93 优秀；却在 27 fall 选择走向计算社会科学（CSS）。</p><p>不是放弃语言，而是想给"理解人"这件事，再加一支<b>数据的笔</b>。这条路自费、 unconventional，但是我自己选的。</p>`},
    wanderer:{title:`闯荡者 · 想掌控自己人生的普通人`,body:`<p>我向往高收入，也向往自由和掌控感，喜欢闯。</p><p>所以我一直在找一条能<b>靠作品和能力说话</b>的路——把英语、跨文化、内容和数据，长成别人替代不了的组合。</p>`}
  };
  shell(`
    <header class="hero hero-about">
      <span class="hero-eyebrow">01 / ROOTS · 关于我</span>
      <h1>你好，我是 <em>Vivian</em></h1>
      <p class="hero-lead">一个把好奇心当成日常、用四种身份认识世界的人。</p>
      <div class="stats">
        <div class="stat"><b>4.18</b><span>GPA / 5.0 · 专业前 5%</span></div>
        <div class="stat"><b>93</b><span>专四优秀</span></div>
        <div class="stat"><b>2000+</b><span>小红书外国粉丝</span></div>
        <div class="stat"><b>6</b><span>语言 · 法/拉丁/希腊等</span></div>
        <div class="stat"><b>1</b><span>全国英辩赛一等奖 + 最佳辩手</span></div>
        <div class="stat"><b>27</b><span>fall · CSS 计算社会科学</span></div>
      </div>
    </header>
    <section class="block">
      <h2 class="block-title">六个我 <small>点开看看 →</small></h2>
      <div class="cards six">
        ${[[`debate`,`⚖`,`辩手`,`把混乱辩成清晰`],[`translate`,`✎`,`译员`,`在语言间理解人`],[`creator`,`✦`,`创作者`,`用内容搭一座桥`],[`research`,`⌁`,`研究者`,`用数据提问`],[`learner`,`❖`,`学习者`,`从人文走向计算`],[`wanderer`,`↗`,`闯荡者`,`想掌控自己的人生`]].map(function(a){return `<button class="mini-card" data-sheet="${a[0]}"><span class="mini-icon">${a[1]}</span><b>${a[2]}</b><small>${a[3]}</small><span class="mini-more">展开 +</span></button>`}).join(``)}
      </div>
    </section>
    <blockquote class="paradox"><b>一份"矛盾说明书"</b><br/>理性辩手，却爱写感性的文字；学语言的人，偏偏走向数据；跨文化沟通，是我理解人的方式。<br/>——正是这些矛盾，构成了我。</blockquote>
  `,`01 / ROOTS · 关于我`,`#74608e`);
  putData(`.mini-card`,D);
}

/* ===== 我的研究 · 研究路径 + 问题 ===== */
function rs(){
  l();
  var D={
    q1:{title:`问题一 · 跨文化沟通`,body:`<p><b>隔着屏幕，什么样的话术才能真正打动另一个文化里的人？</b></p><p>从跨境直播间的真实语料出发，我想知道：那些"有效"的表达，究竟有效在哪里。是信息本身，还是语气、情绪与文化距离的某种配合。</p>`},
    q2:{title:`问题二 · 数据与人`,body:`<p><b>数据能不能看见"人"的温度？</b></p><p>大创里用 SPSS 做话术与传播效能的统计，我第一次体会到：数字背后是一个个具体的表达与回应。计算不是把人变成数字，而是<b>让更多人的经验被看见</b>。</p>`},
    q3:{title:`问题三 · AI 与表达`,body:`<p><b>AI 会怎样改变我们表达和理解彼此的方式？</b></p><p>我用 AI 工具学习社交接话、做双语内容，切身感受到它既是拐杖也是镜子。未来想在 CSS 的训练里，认真研究人与技术如何彼此塑造。</p>`},
    path:{title:`我的研究路径`,body:`<p><b>① 观察</b>　在跨境直播与跨文化交流中，捕捉真实的表达现象。</p><p><b>② 提问</b>　把模糊的好奇，收窄成一个可以被验证的问题。</p><p><b>③ 验证</b>　内容编码 + 深度访谈 + SPSS 统计分析。</p><p><b>④ 延伸</b>　走向计算社会科学，用计算方法研究传播与社会。</p>`},
    tools:{title:`方法工具箱`,body:`<p><b>会用</b>　SPSS 统计分析、内容编码、深度访谈、双语语料整理。</p><p><b>在学</b>　Python、计算社会科学方法、情感分析。</p><p><b>相信</b>　好的问题，常常比仓促的答案更有生命力。</p>`}
  };
  shell(`
    <header class="hero hero-research">
      <span class="hero-eyebrow">03 / RESEARCH · 我的研究</span>
      <h1>用数据理解 <em>人</em></h1>
      <p class="hero-lead">我对人、技术与社会如何彼此影响，抱有长期的兴趣。</p>
    </header>
    <section class="block">
      <h2 class="block-title">一条研究路径 <small>点开看细节 →</small></h2>
      <div class="path">
        <button class="path-node" data-sheet="path"><span class="pn-num">01</span><b>观察</b><small>从现象出发</small></button>
        <span class="path-line"></span>
        <button class="path-node" data-sheet="path"><span class="pn-num">02</span><b>提问</b><small>收窄成问题</small></button>
        <span class="path-line"></span>
        <button class="path-node" data-sheet="path"><span class="pn-num">03</span><b>验证</b><small>编码 · 访谈 · SPSS</small></button>
        <span class="path-line"></span>
        <button class="path-node" data-sheet="path"><span class="pn-num">04</span><b>延伸</b><small>走向 CSS</small></button>
      </div>
    </section>
    <section class="block">
      <h2 class="block-title">我关心的三个问题</h2>
      <div class="cards three">
        <button class="question-card" data-sheet="q1"><span>Q1</span><b>什么样的话术，能打动另一个文化里的人？</b><small>跨文化沟通 · 传播效能</small></button>
        <button class="question-card" data-sheet="q2"><span>Q2</span><b>数据能不能看见"人"的温度？</b><small>计算方法 · 人的经验</small></button>
        <button class="question-card" data-sheet="q3"><span>Q3</span><b>AI 会怎样改变我们表达与理解？</b><small>人机关系 · 技术与社会</small></button>
      </div>
    </section>
    <button class="toolbox" data-sheet="tools"><b>🧰 方法工具箱</b><span>SPSS · 内容编码 · 深度访谈 · Python(学习中) · 情感分析 → 点开</span></button>
    <blockquote class="paradox">研究并不总是通向答案，它也教会我如何与不确定共处。</blockquote>
  `,`03 / RESEARCH · 我的研究`,`#3f7d78`);
  putData(`.path-node,.question-card,.toolbox`,D);
}

/* ===== 我的未来 · 三枚路标 + 技能树 ===== */
function ft(){
  l();
  var D={
    near:{title:`近 · 入学与装备`,body:`<p>2026-2027，走进港中深 CSS。把 Python 和统计站稳，找到第一个真正想回答的问题。</p><p>不急着证明自己会写代码——我带来的跨文化视角和表达力，同样是这个领域需要的。</p>`},
    mid:{title:`中 · 实习与作品`,body:`<p>在深圳找与人相关的实习：内容、数据、产品都好。做几个能拿出来讲的作品，把"英语+跨文化+内容+数据"真正用起来。</p><p>小红书那个账号，别停。它是我的实验室，也是我的名片。</p>`},
    far:{title:`远 · 想成为的人`,body:`<p>参与创造更有人情味的数字体验，用组合能力做连接人的事。</p><p>我想要高收入，更想要对人生的掌控感。靠作品和能力说话——这是我从很早就确定的方向。</p>`},
    tree:{title:`我的技能树`,body:`<p><b>已点亮</b>　英语辩论、双语内容创作、跨文化沟通、SPSS 统计分析。</p><p><b>点亮中</b>　Python、计算方法、产品思维。</p><p><b>待点亮</b>　机器学习、独立研究、一个属于自己的数字产品。</p>`}
  };
  shell(`
    <header class="hero hero-future">
      <span class="hero-eyebrow">05 / HORIZON · 我的未来</span>
      <h1>向着有光的地方 <em>生长</em></h1>
      <p class="hero-lead">未来不是一张地图，而是一座正在被照亮的花园。</p>
    </header>
    <section class="block">
      <h2 class="block-title">三枚时间路标 <small>点开看看 →</small></h2>
      <div class="signs">
        <button class="sign" data-sheet="near"><span class="sign-year">2026—27</span><b>入学与装备</b><small>港中深 CSS · Python · 统计</small><span class="sign-arrow">→</span></button>
        <button class="sign" data-sheet="mid"><span class="sign-year">2027—28</span><b>实习与作品</b><small>深圳 · 内容/数据/产品</small><span class="sign-arrow">→</span></button>
        <button class="sign" data-sheet="far"><span class="sign-year">更远</span><b>想成为的人</b><small>连接人的数字体验</small><span class="sign-arrow">✦</span></button>
      </div>
    </section>
    <section class="block">
      <h2 class="block-title">技能树 <small>点开看清单 →</small></h2>
      <button class="tree-map" data-sheet="tree">
        <span class="tree-col done"><b>已点亮</b><i>辩论</i><i>双语内容</i><i>跨文化</i><i>SPSS</i></span>
        <span class="tree-col doing"><b>点亮中</b><i>Python</i><i>计算方法</i><i>产品思维</i></span>
        <span class="tree-col todo"><b>待点亮</b><i>机器学习</i><i>独立研究</i><i>自己的产品</i></span>
      </button>
    </section>
    <div class="coords"><span>广州 <b>→</b> 深圳</span><span>从人文社科 <b>→</b> 计算社会科学</span><span>被好奇心 <b>→</b> 被作品驱动</span></div>
    <blockquote class="paradox">我不急于定义终点，但会认真走好每一次向外探索和向内理解。</blockquote>
  `,`05 / HORIZON · 我的未来`,`#b07a3e`);
  putData(`.sign,.tree-map`,D);
}

var m=t(location.hash.slice(1));m?(m.id===`about`?ab():m.id===`experience`?v():m.id===`research`?rs():m.id===`explore`?w():m.id===`future`?ft():f(m)):o();