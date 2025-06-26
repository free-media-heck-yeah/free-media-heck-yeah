import { defineConfig } from 'tinacms'

export default defineConfig({
  branch: 'main',
  clientId: '',    // để trống khi dev local
  token: '',
  build: {
    outputFolder: 'content',    // nếu bạn muốn Tina tự generate markdown
    publicFolder: 'docs'
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'docs'
    }
  },
  schema: {
    collections: [
      {
        label: 'Pages',
        name: 'page',
        path: 'docs',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title' },
          { type: 'rich-text', name: 'body', label: 'Content' }
        ]
      }
    ]
  }
})
