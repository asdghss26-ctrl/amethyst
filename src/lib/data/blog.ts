export interface BlogPost {
  category: string
  date: string
  title: string
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    category: "Skin Health",
    date: "January 28, 2026",
    title: "How to choose the right skincare products for your skin type",
    featured: true,
  },
  {
    category: "Acne Care",
    date: "January 28, 2026",
    title: "When to start using anti-aging products",
    featured: false,
  },
  {
    category: "Skin Health",
    date: "January 28, 2026",
    title: "How stress affects your skin health",
    featured: false,
  },
  {
    category: "Acne Care",
    date: "January 26, 2026",
    title: "Chemical peels: what to expect before and after",
    featured: false,
  },
]