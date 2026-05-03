export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

export const quickLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Service Static", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#contact" },
  { label: "Appointment", href: "#appointment" },
]

export const utilityLinks: NavItem[] = [
  { label: "Style Guide", href: "#" },
  { label: "Instructions", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "Licenses", href: "#" },
  { label: "Privacy Policy", href: "#" },
]

export interface ContactInfo {
  icon: string
  text: string
  href: string
}

export const contactInfo: ContactInfo[] = [
  { icon: "📍", text: "123 Medical Plaza, Suite 200, New York, NY 10001", href: "#" },
  { icon: "📞", text: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: "✉️", text: "example@domain.com", href: "mailto:example@domain.com" },
]