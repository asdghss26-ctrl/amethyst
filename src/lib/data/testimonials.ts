export interface Testimonial {
  name: string
  role: string
  text: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    name: "Emma R.",
    role: "Patient",
    text: "My acne finally cleared after years of trying everything. The treatment plan was simple, clear, and effective.",
    rating: 5,
  },
  {
    name: "James L.",
    role: "Patient",
    text: "The personalized approach made all the difference. They didn't rush anything and created a plan that really worked.",
    rating: 5,
  },
  {
    name: "Sofia H.",
    role: "Actress",
    text: "From consultation to follow-up, the care was exceptional. My skin texture and tone have improved noticeably.",
    rating: 5,
  },
]