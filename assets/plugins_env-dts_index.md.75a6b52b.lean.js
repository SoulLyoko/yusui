import{_ as s,v as a,b as n,R as l}from"./chunks/framework.ff32bdcd.js";const F=JSON.parse('{"title":"createEnvDts","description":"","frontmatter":{},"headers":[],"relativePath":"plugins/env-dts/index.md","filePath":"plugins/env-dts/index.md"}'),e={name:"plugins/env-dts/index.md"},p=l(`<h1 id="createenvdts" tabindex="-1">createEnvDts <a class="header-anchor" href="#createenvdts" aria-label="Permalink to &quot;createEnvDts&quot;">​</a></h1><p>为 <code>.env</code> 文件生成类型提示</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-Md0nF" id="tab-rXK4rmu" checked="checked"><label for="tab-rXK4rmu">vite.config.ts</label><input type="radio" name="group-Md0nF" id="tab-7UkeRYz"><label for="tab-7UkeRYz">.env</label><input type="radio" name="group-Md0nF" id="tab-2_EVDi4"><label for="tab-2_EVDi4">xxx.ts</label></div><div class="blocks"><div class="language-ts active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createEnvDts</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@yusui/plugins</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">createEnvDts</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// default is &#39;vite-env.d.ts&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">dts</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite-env.d.ts</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">VITE_TEST</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">test</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 弹出提示：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * ---</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * ImportMetaEnv.VITE_TEST: string</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * VITE_TEST=test</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * ---</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">meta</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">VITE_TEST</span></span></code></pre></div></div></div><h2 id="how-it-works" tabindex="-1">How It Works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How It Works&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-z1xcD" id="tab-ncIfhkL" checked="checked"><label for="tab-ncIfhkL">.env</label></div><div class="blocks"><div class="language-sh active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">VITE_TEST</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">test</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_API_URL</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">http://localhost:3000</span></span></code></pre></div></div></div><p>生成 d.ts 文件</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-4IjtY" id="tab-TETRMFT" checked="checked"><label for="tab-TETRMFT">vite-env.d.ts</label></div><div class="blocks"><div class="language-ts active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ImportMeta</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ImportMetaEnv</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ImportMetaEnv</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/** VITE_TEST=test */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">VITE_TEST</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/** VITE_API_URL=http://localhost:3000 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">VITE_API_URL</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div></div>`,8),t=[p];function o(c,r,i,y,D,d){return a(),n("div",null,t)}const A=s(e,[["render",o]]);export{F as __pageData,A as default};