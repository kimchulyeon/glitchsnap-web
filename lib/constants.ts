export const siteConfig = {
  name: 'GlitchSnap Studio',
  tagline: 'All-in-One QA Platform for Modern Teams',
  description:
    'The all-in-one QA platform for modern teams. Capture bugs instantly, record sessions, and manage test cases — all in one place.',
  url: 'https://glitchsnap.com',
  ogImage: 'https://glitchsnap.com/og.png',
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
    title: 'Session Recorder',
    description:
      'GlitchSnap continuously records your browser sessions. Every click, scroll, and input is captured — ready for bug reproduction or team review.',
    icon: 'Search',
  },
  {
    title: 'Bug Reporter',
    description:
      'GlitchSnap records the last 3 minutes continuously. One click generates a full report with replay video, screenshot, environment info, and action steps.',
    icon: 'Bug',
  },
  {
    title: 'TC Manager',
    description:
      'Excel-compatible test case management. Custom templates for any company format, Excel import/export, and real-time web collaboration.',
    icon: 'ClipboardList',
  },
]

export const painPoints = [
  {
    title: '"Works on my machine"',
    description:
      'Environment differences between QA and developers cause reproduction failures. GlitchSnap auto-captures OS, browser, and action context.',
    icon: 'Monitor',
  },
  {
    title: '"Bug reports lack context"',
    description:
      'A screenshot and a vague description aren\'t enough. GlitchSnap auto-captures session replays, environment info, and action logs.',
    icon: 'Code',
  },
  {
    title: '"Excel here, tests there"',
    description:
      'Every company has a different Excel TC format. GlitchSnap unifies TC management with custom templates and Excel compatibility.',
    icon: 'FileSpreadsheet',
  },
]

export const pricingPlans = [
  {
    name: 'Starter',
    price: 0,
    period: '/user/month',
    description: 'Perfect for individual QA engineers and small teams getting started.',
    features: [
      'Up to 2 projects',
      'Session Recorder (basic)',
      'Bug Reporter (5 reports/day)',
      'Community support',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 29,
    period: '/user/month',
    description: 'Full power for professional QA teams shipping fast.',
    features: [
      'Everything in Starter',
      'Unlimited session recordings',
      'Unlimited bug reports',
      'TC Manager with Excel sync',
      'Jira / Slack integration',
      'Priority support',
    ],
    cta: 'Start 14-Day Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: null,
    period: '',
    description: 'Custom deployment, security, and dedicated success management.',
    features: [
      'Everything in Pro',
      'SSO / SAML integration',
      'On-premise deployment',
      'Dedicated account manager',
      'Custom onboarding & training',
      'SLA & audit logs',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]


export const howItWorks = [
  {
    step: 1,
    title: 'Install & Connect',
    description:
      'Sign up and connect GlitchSnap to your web application. Setup takes less than 2 minutes.',
  },
  {
    step: 2,
    title: 'Record & Capture',
    description:
      'Browse your app normally. GlitchSnap records your interactions for tests and captures bugs with full context.',
  },
  {
    step: 3,
    title: 'Manage & Ship',
    description:
      'Organize test cases, share bug reports, and collaborate in real-time. Ship with confidence.',
  },
]
