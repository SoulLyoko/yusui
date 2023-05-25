import { fixHtml } from '.'

describe('compatibleTips', () => {
  const html = `<!DOCTYPE html>
  <html lang="zh-CN">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title></title>
    </head>
    <body>
      <div id="app"></div>
      <script type="module" src="/src/main.ts"></script>
    </body>
  </html>
  `
  it('fixBtnType', () => {
    expect(fixHtml(html)).toContain('#compatible-body')
  })
})
