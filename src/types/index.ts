export type { Service } from "../lib/data/services"
export type { Testimonial } from "../lib/data/testimonials"
export type { BlogPost } from "../lib/data/blog"
export type { FAQItem } from "../lib/data/faq"
export type { Treatment } from "../lib/data/treatments"
export type { NavItem, ContactInfo } from "../lib/data/navigation"

export interface Credential {
  icon: string
  label: string
}

export interface Stat {
  value: string
  label: string
}

export interface CareFeature {
  icon: string
  title: string
  description: string
}