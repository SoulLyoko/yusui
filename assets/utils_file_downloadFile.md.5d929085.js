import{_ as s,o as a,c as n,j as l}from"./app.edd1c140.js";const y=JSON.parse('{"title":"downloadFile","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B","link":"#\u793A\u4F8B","children":[]},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":2,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]}],"relativePath":"utils/file/downloadFile.md"}'),t={name:"utils/file/downloadFile.md"},e=l(`<h1 id="downloadfile" tabindex="-1">downloadFile <a class="header-anchor" href="#downloadfile" aria-hidden="true">#</a></h1><p>\u4E0B\u8F7D\u6587\u4EF6\uFF0C\u4F7F\u7528 file-saver \u7684\u5B9E\u73B0\uFF0C\u9488\u5BF9 pdf \u505A\u5904\u7406</p><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// \u4F7F\u7528file-saver\u4E0B\u8F7Dpdf\u5728\u67D0\u4E9B\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u6253\u5F00\u9884\u89C8</span></span>
<span class="line"><span style="color:#676E95;">// \u82E5\u4E0D\u9700\u8981\u9884\u89C8\u5219\u53EF\u4EE5\u4F7F\u7528downloadFile\u5904\u7406</span></span>
<span class="line"><span style="color:#82AAFF;">downloadFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/file/content.pdf</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">downloadFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/file/content.docx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">downloadFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Blob</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>\u53EF\u4EE5\u662F\u4E0B\u8F7D\u5730\u5740\u6216 blob \u6587\u4EF6</td><td>String | Blob</td><td>-</td><td>-</td></tr><tr><td>filename</td><td>\u6587\u4EF6\u540D</td><td>String</td><td>-</td><td>-</td></tr></tbody></table><h2 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h2><p>\u65E0</p>`,8),o=[e];function p(d,r,c,i,h,F){return a(),n("div",null,o)}const A=s(t,[["render",p]]);export{y as __pageData,A as default};