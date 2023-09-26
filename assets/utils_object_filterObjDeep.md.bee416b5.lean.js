import{_ as s,v as a,b as t,R as n}from"./chunks/framework.93e84c5c.js";const A=JSON.parse('{"title":"filterObjDeep","description":"","frontmatter":{},"headers":[],"relativePath":"utils/object/filterObjDeep.md","filePath":"utils/object/filterObjDeep.md"}'),l={name:"utils/object/filterObjDeep.md"},e=n(`<h1 id="filterobjdeep" tabindex="-1">filterObjDeep <a class="header-anchor" href="#filterobjdeep" aria-label="Permalink to &quot;filterObjDeep&quot;">​</a></h1><p>递归过滤对象值和字段</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> exampleData </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">bb</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">cc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">filterObjDeep</span><span style="color:#A6ACCD;">(testData) </span><span style="color:#676E95;font-style:italic;">// { b: { bb: &quot;1&quot; }, c: [{ cc: 1 }] }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">filterObjDeep</span><span style="color:#A6ACCD;">(testData</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> []) </span><span style="color:#676E95;font-style:italic;">// { a: undefined, b: { bb: &quot;1&quot; }, c: [{ cc: 1 }] }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">filterObjDeep</span><span style="color:#A6ACCD;">(testData</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined,</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bb</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]) </span><span style="color:#676E95;font-style:italic;">// { b: {}, c: [{}] }</span></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>obj</td><td>被过滤对象</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>values</td><td>被过滤的值，全等匹配</td><td>Array</td><td>-</td><td>[undefined, null]</td></tr><tr><td>fields</td><td>被过滤字段，模糊匹配</td><td>Array</td><td>-</td><td>[]</td></tr></tbody></table><h2 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h2><p>(Object): 过滤后的对象</p>`,8),o=[e];function p(r,c,D,d,y,i){return a(),t("div",null,o)}const C=s(l,[["render",p]]);export{A as __pageData,C as default};
