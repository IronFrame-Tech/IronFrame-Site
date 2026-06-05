import type { MetadataRoute } from 'next'

const BASE = 'https://ironframe.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/desenvolvimento-web`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/infraestrutura-redes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/sobre`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE}/contato`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]
}
