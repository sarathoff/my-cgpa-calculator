import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mycgpacalculator.in'
  
  const routes = [
    '',
    '/cgpa-to-percentage',
    '/sgpa-to-cgpa',
    '/percentage-to-cgpa',
    '/university/vtu-cgpa-calculator',
    '/university/vit-cgpa-calculator',
    '/university/srm-cgpa-calculator',
    '/university/anna-university-reg-2023-cgpa-calculator',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
