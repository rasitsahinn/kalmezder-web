import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'kal-mezunlar',
  title: 'KAL Mezunlar Derneği — İçerik Yönetimi',
  basePath: '/studio',

  projectId: (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xvv8ax7w').trim(),
  dataset: (process.env.NEXT_PUBLIC_SANITY_DATASET || 'production').trim(),

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('İçerik')
          .items([
            S.listItem()
              .title('Etkinlikler')
              .child(S.documentTypeList('event').title('Etkinlikler')),
            S.listItem()
              .title('Duyurular')
              .child(S.documentTypeList('news').title('Duyurular')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
