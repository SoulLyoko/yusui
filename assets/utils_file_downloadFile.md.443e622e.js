import{_ as a,h as s,i as t,O as l}from"./chunks/framework.6c76c79f.js";const n=JSON.parse('{"title":"downloadFile","description":"","frontmatter":{},"headers":[],"relativePath":"utils/file/downloadFile.md"}'),o={name:"utils/file/downloadFile.md"},e=l(`<h1 id="downloadfile" tabindex="-1">downloadFile <a class="header-anchor" href="#downloadfile" aria-label="Permalink to &quot;downloadFile&quot;">​</a></h1><p>下载文件，使用 file-saver 的实现，针对 pdf 做处理</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 使用file-saver下载pdf在某些浏览器会自动打开预览</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 若不需要预览则可以使用downloadFile处理</span></span>
<span class="line"><span style="color:#82AAFF;">downloadFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/file/content.pdf</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">downloadFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/file/content.docx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">downloadFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Blob</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>可以是下载地址或 blob 文件</td><td>String | Blob</td><td>-</td><td>-</td></tr><tr><td>filename</td><td>文件名</td><td>String</td><td>-</td><td>-</td></tr></tbody></table><h2 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h2><p>无</p>`,8),p=[e];function r(c,i,F,D,h,y){return s(),t("div",null,p)}const d=a(o,[["render",r]]),A=Object.freeze(Object.defineProperty({__proto__:null,__pageData:n,default:d},Symbol.toStringTag,{value:"Module"}));export{A as _,n as __pageData,d as default};
