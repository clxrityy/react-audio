import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  return [
    {
      url: "https://react-audio-docs.vercel.app/docs",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: "https://react-audio-docs.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: "https://react-audio-docs.vercel.app/docs/changelog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: "https://react-audio-docs.vercel.app/docs/components/overview",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: "https://react-audio-docs.vercel.app/docs/introduction",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: "https://react-audio-docs.vercel.app/docs/components/player",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: "https://react-audio-docs.vercel.app/docs/components/shuffleplayer",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: "https://react-audio-docs.vercel.app/docs/components/waveform",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: "https://react-audio-docs.vercel.app/docs/components/oscillator",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: "https://react-audio-docs.vercel.app/docs/components/spectrogram",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5
    }
  ]
}
