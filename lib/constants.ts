export const siteConfig = {
  name: 'GlitchSnap Studio',
  tagline: 'Test Case Management for Modern QA Teams',
  description:
    'The test case management platform built for modern QA teams. Organize, execute, and track results in a familiar interface without the spreadsheet headache.',
  url: 'https://glitchsnap.studio',
  ogImage: 'https://glitchsnap.studio/og.png',
  links: {
    twitter: 'https://twitter.com/glitchsnap',
    github: 'https://github.com/glitchsnap',
  },
  email: 'hello@glitchsnap.studio',
}

export const navigation = {
  main: [
    { name: 'Features', href: '/features/' },
    { name: 'Pricing', href: '/pricing/' },
    { name: 'Resources', href: '/blog/' },
  ],
  footer: {
    product: [
      { name: 'Features', href: '/features/' },
      { name: 'Pricing', href: '/pricing/' },
      { name: 'Integrations', href: '/integrations/' },
      { name: 'Changelog', href: '/changelog/' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs/' },
      { name: 'API Reference', href: '/api/' },
      { name: 'QA Blog', href: '/blog/' },
      { name: 'Community', href: '/community/' },
    ],
    company: [
      { name: 'About Us', href: '/about/' },
      { name: 'Careers', href: '/careers/' },
      { name: 'Contact', href: '/contact/' },
      { name: 'Partners', href: '/partners/' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy/' },
      { name: 'Terms of Service', href: '/terms/' },
      { name: 'Security', href: '/security/' },
      { name: 'Cookie Settings', href: '/cookies/' },
    ],
  },
}

export const features = [
  {
    title: 'Spreadsheet-style Editing',
    description:
      'A familiar, high-performance interface with zero learning curve. Author and edit test cases as fast as you can type.',
    icon: 'Table',
  },
  {
    title: 'Browser Test Recorder',
    description:
      'Powered by Playwright. Record complex user journeys effortlessly and convert them into automated test scripts instantly.',
    icon: 'Play',
  },
  {
    title: 'Template Management',
    description:
      'Maintain consistency across your organization with reusable test templates and standardized testing procedures.',
    icon: 'FileText',
  },
  {
    title: 'Team Collaboration',
    description:
      'Accelerate velocity with real-time comments, comprehensive activity history, and seamless team synchronization.',
    icon: 'Users',
  },
]

export const painPoints = [
  {
    title: 'Version Control Nightmares',
    description:
      'Stop hunting for v3_final_final.xlsx. GlitchSnap provides a single, immutable source of truth for your entire testing history.',
    icon: 'History',
  },
  {
    title: 'Messy Formatting',
    description:
      'No more broken formulas, ruined cell styling, or accidentally deleted rows. Benefit from structured data schemas designed specifically for QA workflows.',
    icon: 'FileWarning',
  },
  {
    title: 'Collaboration Silos',
    description:
      'Say goodbye to "File is locked for editing." Enable real-time multi-user testing sessions without overwriting a teammate\'s critical results.',
    icon: 'UsersX',
  },
]

export const pricingPlans = [
  {
    name: 'Free',
    price: 0,
    period: '/user/month',
    description: 'Perfect for individual testers and small hobby projects.',
    features: [
      'Up to 3 projects',
      'Basic reporting',
      'Community support',
      '100 test cases',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 49,
    period: '/user/month',
    description: 'Accelerate your team with advanced automation and integrations.',
    features: [
      'Everything in Free',
      'Unlimited test cases',
      'Full Jira integration',
      'Advanced analytics dashboards',
      'Priority email support',
    ],
    cta: 'Start 14-Day Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: null,
    period: '',
    description: 'Global infrastructure, security, and dedicated success management.',
    features: [
      'Everything in Pro',
      'SSO/SAML Integration',
      'Dedicated Account Manager',
      'Custom onboarding & training',
      'Audit logs & compliance',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

export const testimonials = [
  {
    quote:
      'Moving from Excel to GlitchSnap was a total game-changer. Our regression testing cycles dropped by 45% in the first quarter alone.',
    author: 'Sarah Chen',
    role: 'QA Lead',
    company: 'FintechNow',
    rating: 5,
  },
  {
    quote:
      'The Jira integration is flawless. My team no longer wastes time jumping between tools. Finally, a platform built for modern QA workflows.',
    author: 'Michael Ross',
    role: 'Head of QA',
    company: 'CloudStream',
    rating: 5,
  },
  {
    quote:
      'Onboarding was seamless. The migration tool imported 1,200 of our legacy spreadsheets in minutes. Best investment our department made this year.',
    author: 'Elena Rodriguez',
    role: 'Senior QA Manager',
    company: 'DataScale',
    rating: 5,
  },
]

export const companyLogos = [
  'FINTECH',
  'GlobalDev',
  'StreamLine',
  'DATACORE',
  'VortexSaaS',
]

export const howItWorks = [
  {
    step: 1,
    title: 'Import Your Test Cases',
    description:
      'Upload your existing Excel files or start fresh. We handle the migration automatically.',
  },
  {
    step: 2,
    title: 'Organize & Collaborate',
    description:
      'Create test suites, assign to team members, and track progress in real-time.',
  },
  {
    step: 3,
    title: 'Automate & Execute',
    description:
      'Generate automation scripts, run tests, and view results all in one place.',
  },
]
