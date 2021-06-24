# @ruguoapp/podcast-show-notes-transformer

对播客 Show Notes 进行转码

## 安装

```
$ yarn add @ruguoapp/podcast-show-notes-transformer
```

## 使用

```typescript
import { transformShowNotes } from '@ruguoapp/podcast-show-notes-transformer'

interface Options {
  eid: null | string
  isInApp: boolean
  attrsAllowList: RegExp
}

transformShowNotes(showNotesHtml, options)
```
