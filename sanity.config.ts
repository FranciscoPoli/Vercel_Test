'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { pageSchema } from './sanity/schemas/page'

export default defineConfig({
  name: 'default',
  title: 'My Studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'iaogk375',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Pages')
              .schemaType('page')
              .child(S.documentTypeList('page').title('Pages')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: [pageSchema],
  },
})
