import { defineField, defineType } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Etkinlik',
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
          { title: 'Yıllık Buluşma', value: 'Yıllık Buluşma' },
          { title: 'Kariyer', value: 'Kariyer' },
          { title: 'Burs Töreni', value: 'Burs Töreni' },
          { title: 'Sosyal', value: 'Sosyal' },
          { title: 'Diğer', value: 'Diğer' },
        ],
      },
    }),
    defineField({
      name: 'date',
      title: 'Tarih',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: { dateFormat: 'DD.MM.YYYY' },
    }),
    defineField({
      name: 'description',
      title: 'Açıklama',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Görsel',
      type: 'image',
      options: { hotspot: true },
      description: 'Etkinlik için kapak görseli (isteğe bağlı)',
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
      title: 'Tarihe Göre (Yakın → Uzak)',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'date' },
  },
})
