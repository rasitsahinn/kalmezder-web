// Yaklaşan etkinlikler — anasayfa için (ilk 5)
export const eventsQuery = `
  *[_type == "event"] | order(date asc) [0...5] {
    _id,
    title,
    category,
    date,
    description,
    "slug": slug.current,
    "image": image.asset->url,
  }
`

// Tüm etkinlikler — /etkinlikler listeleme sayfası için (sınırsız)
export const allEventsQuery = `
  *[_type == "event"] | order(date asc) {
    _id,
    title,
    category,
    date,
    description,
    "slug": slug.current,
    "image": image.asset->url,
  }
`

// Tek etkinlik detayı — slug ile
export const eventDetailQuery = `
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    category,
    date,
    description,
    "slug": slug.current,
    "image": image.asset->url,
  }
`

// Son duyurular (tarih sırasına göre)
export const newsQuery = `
  *[_type == "news"] | order(publishedAt desc) [0...4] {
    _id,
    title,
    category,
    publishedAt,
    description,
    featured,
    "slug": slug.current,
    "image": image.asset->url,
  }
`

// Sadece öne çıkan duyuru
export const featuredNewsQuery = `
  *[_type == "news" && featured == true] | order(publishedAt desc) [0] {
    _id,
    title,
    category,
    publishedAt,
    description,
    "slug": slug.current,
    "image": image.asset->url,
  }
`

// Yan listedeki duyurular (öne çıkan hariç)
export const sideNewsQuery = `
  *[_type == "news"] | order(publishedAt desc) [0...4] {
    _id,
    title,
    category,
    publishedAt,
    "slug": slug.current,
    "image": image.asset->url,
  }
`

// Tüm duyurular — /duyurular listeleme sayfası için (sınırsız)
export const allNewsQuery = `
  *[_type == "news"] | order(publishedAt desc) {
    _id,
    title,
    category,
    publishedAt,
    description,
    featured,
    "slug": slug.current,
    "image": image.asset->url,
  }
`

// Tek duyuru detayı — slug ile
export const newsDetailQuery = `
  *[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    category,
    publishedAt,
    description,
    featured,
    "slug": slug.current,
    "image": image.asset->url,
  }
`
