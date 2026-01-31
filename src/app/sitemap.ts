import { MetadataRoute } from 'next'
import { config } from '@/data/config'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: config.site,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${config.site}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${config.site}/projects`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ]
}
