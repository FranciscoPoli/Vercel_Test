'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { createBulkActionsTable } from 'sanity-plugin-bulk-actions-table'
import { pageSchema } from './sanity/schemas/page'

export default defineConfig({
  name: 'default',
  title: 'My Studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            createBulkActionsTable({ type: 'page', S, context, title: 'Pages' }),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: [pageSchema],
  },
})
