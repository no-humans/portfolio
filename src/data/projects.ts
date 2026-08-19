export type Project = { number: string; title: string; copy: string; tags: string[]; tone: string }
export const projects: Project[] = [
  { number: '01', title: 'Suite Booking Website', copy: 'A polished booking experience built for quick comparisons, clear availability, and a confident checkout journey.', tags: ['React.js', 'Firebase', 'Payment gateway'], tone: 'suite' },
  { number: '02', title: 'Apartment Management System', copy: 'A multi-role workspace for property operations, resident coordination, location data, and secure payments.', tags: ['React.js', 'Google Maps API', 'Payment gateway'], tone: 'apartment' },
  { number: '03', title: 'Hotel & Restaurant Booking Platform', copy: 'A unified platform for stays and dining with dynamic menus, booking flows, and Stripe payments.', tags: ['React.js', 'Stripe', 'Firebase'], tone: 'hotel' },
  { number: '04', title: 'E-Commerce Flower Application', copy: 'A responsive flower storefront with multi-role workflows, delivery mapping, and payment support.', tags: ['React.js', 'Firebase', 'Google Maps API'], tone: 'flower' },
]
