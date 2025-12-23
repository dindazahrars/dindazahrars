export interface Experience {
  id: number
  type: 'education' | 'work' | 'organization'
  title: string
  organization: string
  period: string
  description: string
  achievements?: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    type: 'education',
    title: 'Software Engineering',
    organization: 'Universitas XYZ',
    period: '2021 - Present',
    description: 'Fokus pada Web Development, Database Management, dan Software Design Patterns',
    achievements: [
      'IPK: 3.85/4.00',
      'Best Student Award 2023',
      'Dean\'s List (5 semesters)',
      'Scholarship Recipient'
    ]
  },
  {
    id: 2,
    type: 'work',
    title: 'Frontend Developer Intern',
    organization: 'PT. Tech Startup Indonesia',
    period: 'Jun 2024 - Aug 2024',
    description: 'Developed responsive web applications using Next.js, TypeScript, and Tailwind CSS',
    achievements: [
      'Built 3 client-facing projects',
      'Improved page load speed by 40%',
      'Collaborated with 5-person agile team',
      'Implemented reusable component library'
    ]
  },
  {
    id: 3,
    type: 'organization',
    title: 'Head of IT Division',
    organization: 'Himpunan Mahasiswa Software Engineering',
    period: '2023 - 2024',
    description: 'Led IT team in developing organization website and managing tech events',
    achievements: [
      'Managed team of 10 members',
      'Organized 3 tech workshops (200+ participants)',
      'Developed organization website with Laravel',
      'Increased social media engagement by 150%'
    ]
  },
  {
    id: 4,
    type: 'work',
    title: 'Freelance Web Developer',
    organization: 'Self-Employed',
    period: '2022 - Present',
    description: 'Creating custom websites for small businesses and startups',
    achievements: [
      'Completed 8+ client projects',
      'Maintained 5-star rating on freelance platforms',
      'Specialized in Laravel & Next.js development',
      'Generated $3000+ in revenue'
    ]
  }
]
