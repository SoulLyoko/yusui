import{_ as s,o as a,c as n,j as l}from"./app.edd1c140.js";const A=JSON.parse('{"title":"filterObj","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B","link":"#\u793A\u4F8B","children":[]},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":2,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]}],"relativePath":"utils/object/filterObj.md"}'),t={name:"utils/object/filterObj.md"},e=l(`<h1 id="filterobj" tabindex="-1">filterObj <a class="header-anchor" href="#filterobj" aria-hidden="true">#</a></h1><p>\u8FC7\u6EE4\u5BF9\u8C61\u503C\u548C\u5B57\u6BB5</p><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> exampleData </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">filterObj</span><span style="color:#A6ACCD;">(exampleData)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// { a: 1, b: &quot;b&quot; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">filterObj</span><span style="color:#A6ACCD;">(exampleData</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// { a: 1, b: &quot;b&quot;, c: undefined, d: null }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">filterObj</span><span style="color:#A6ACCD;">(exampleData</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined,</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// {}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>obj</td><td>\u88AB\u8FC7\u6EE4\u5BF9\u8C61</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>values</td><td>\u88AB\u8FC7\u6EE4\u7684\u503C\uFF0C\u5168\u7B49\u5339\u914D</td><td>Array</td><td>-</td><td>[undefined, null]</td></tr><tr><td>fields</td><td>\u88AB\u8FC7\u6EE4\u5B57\u6BB5\uFF0C\u6A21\u7CCA\u5339\u914D</td><td>Array</td><td>-</td><td>[]</td></tr></tbody></table><h2 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h2><p>(Object): \u8FC7\u6EE4\u540E\u7684\u5BF9\u8C61</p>`,8),o=[e];function p(r,c,d,D,y,i){return a(),n("div",null,o)}const C=s(t,[["render",p]]);export{A as __pageData,C as default};