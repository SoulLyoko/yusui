import{_ as s,v as a,b as n,R as l}from"./chunks/framework.ff32bdcd.js";const F=JSON.parse('{"title":"uviewPatch","description":"","frontmatter":{},"headers":[],"relativePath":"plugins/uview-patch/index.md","filePath":"plugins/uview-patch/index.md"}'),e={name:"plugins/uview-patch/index.md"},o=l(`<h1 id="uviewpatch" tabindex="-1">uviewPatch <a class="header-anchor" href="#uviewpatch" aria-label="Permalink to &quot;uviewPatch&quot;">​</a></h1><p>修复 <code>uview-plus</code> 的 bug.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-t7MD0" id="tab-sM57z2d" checked="checked"><label for="tab-sM57z2d">vite.config.js</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> uni </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@dcloudio/vite-plugin-uni</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">uviewPatch</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@yusui/plugins</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">uni</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">uviewPatch</span><span style="color:#A6ACCD;">()]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div></div>`,4),p=[o];function t(c,i,r,D,y,d){return a(),n("div",null,p)}const h=s(e,[["render",t]]);export{F as __pageData,h as default};