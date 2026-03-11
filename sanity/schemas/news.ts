import { defineField, defineType } from 'sanity'

export const news = defineType({
  name: 'news',
  title: 'Duyuru',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Etkinlik', value: 'Etkinlik' },
          { title: 'Dernek', value: 'Dernek' },
          { title: 'Okul', value: 'Okul' },
          { title: 'Kariyer', value: 'Kariyer' },
          { title: 'Burs', value: 'Burs' },
          { title: 'Duyuru', value: 'Duyuru' },
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Yayın Tarihi',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: { dateFormat: 'DD.MM.YYYY' },
    }),
    defineField({
      name: 'description',
      title: 'Özet',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'featured',
      title: 'Öne Çıkan Duyuru',
      type: 'boolean',
      description: 'Ana sayfada büyük kart olarak gösterilir',
      initialValue: false,
    }),
    defineField({
      name: 'image',
      title: 'Görsel',
      type: 'image',
      options: { hotspot: true },
      description: 'Duyuru için kapak görseli (isteğe bağlı)',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
  ],
  orderings: [
    {
      title: 'Yayın Tarihine Göre (Yeni → Eski)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'publishedAt', featured: 'featured' },
    prepare({ title, subtitle, featured }) {
      return {
        title: `${featured ? '⭐ ' : ''}${title}`,
        subtitle,
      }
    },
  },
})
