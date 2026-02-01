export const translations = {
  en: {
    // Navigation
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      resources: 'Resources',
      bookDemo: 'Book Demo',
    },

    // Hero
    hero: {
      badge: 'NEW: Automated Case Synchronization',
      title: 'Stop QAing in Excel.',
      titleHighlight: 'Start Scaling with',
      titleBrand: 'GlitchSnap.',
      description:
        'The test case management platform built for modern QA teams. Organize, execute, and track results in a familiar interface without the spreadsheet headache.',
      watchVideo: 'Watch Video',
      trustedBy: 'Trusted by',
      teamsWorldwide: 'QA teams worldwide',
    },

    // Pain Points
    painPoints: {
      label: 'Pain Points',
      title: 'The Excel Trap',
      description:
        'Spreadsheets were never meant for complex software testing. Break free from the manual limitations that slow your entire team down.',
      items: [
        {
          title: 'Version Control Nightmares',
          description:
            'Stop hunting for v3_final_final.xlsx. GlitchSnap provides a single, immutable source of truth for your entire testing history.',
        },
        {
          title: 'Messy Formatting',
          description:
            'No more broken formulas, ruined cell styling, or accidentally deleted rows. Benefit from structured data schemas designed specifically for QA workflows.',
        },
        {
          title: 'Collaboration Silos',
          description:
            'Say goodbye to "File is locked for editing." Enable real-time multi-user testing sessions without overwriting a teammate\'s critical results.',
        },
      ],
    },

    // Features
    features: {
      label: 'Core Capabilities',
      title: 'Powerful Features for Modern QA',
      description:
        'Streamline your testing workflow with enterprise-grade tools designed for speed, precision, and zero learning curve.',
      items: [
        {
          title: 'Spreadsheet-style Editing',
          description:
            'A familiar, high-performance interface with zero learning curve. Author and edit test cases as fast as you can type.',
        },
        {
          title: 'Browser Test Recorder',
          description:
            'Powered by Playwright. Record complex user journeys effortlessly and convert them into automated test scripts instantly.',
        },
        {
          title: 'Template Management',
          description:
            'Maintain consistency across your organization with reusable test templates and standardized testing procedures.',
        },
        {
          title: 'Team Collaboration',
          description:
            'Accelerate velocity with real-time comments, comprehensive activity history, and seamless team synchronization.',
        },
      ],
      cta: {
        title: 'Ready to scale your QA process?',
        description:
          'Join hundreds of high-performing teams using GlitchSnap Studio to deliver bug-free software at scale.',
        getStarted: 'Get Started Now',
        requestDemo: 'Request a Demo',
      },
      excellence: {
        title: 'Engineered for Excellence',
        description:
          'GlitchSnap Studio combines the familiarity of traditional tools with the power of modern automation, ensuring your team stays productive from day one.',
      },
    },

    // Pricing
    pricing: {
      title: 'Plans for teams of all sizes',
      description:
        'Scale your QA efforts from solo projects to global enterprise operations. Choose the tier that fits your workflow.',
      mostPopular: 'Most Popular',
      plans: [
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
        },
      ],
    },

    // Testimonials
    testimonials: {
      title: 'Trusted by QA Leaders worldwide',
      items: [
        {
          quote:
            'Moving from Excel to GlitchSnap was a total game-changer. Our regression testing cycles dropped by 45% in the first quarter alone.',
          author: 'Sarah Chen',
          role: 'QA Lead',
          company: 'FintechNow',
        },
        {
          quote:
            'The Jira integration is flawless. My team no longer wastes time jumping between tools. Finally, a platform built for modern QA workflows.',
          author: 'Michael Ross',
          role: 'Head of QA',
          company: 'CloudStream',
        },
        {
          quote:
            'Onboarding was seamless. The migration tool imported 1,200 of our legacy spreadsheets in minutes. Best investment our department made this year.',
          author: 'Elena Rodriguez',
          role: 'Senior QA Manager',
          company: 'DataScale',
        },
      ],
    },

    // CTA
    cta: {
      title: 'Ready to modernize your QA workflow?',
      description:
        'Join 500+ QA teams moving faster with GlitchSnap. No credit card required. Start your 14-day trial today.',
      placeholder: 'Enter your work email',
      getStarted: 'Get Started',
      importExcel: 'Or import from Excel',
    },

    // Footer
    footer: {
      description:
        'Modern test case management for QA teams. Replace spreadsheets with a platform built for collaboration and automation.',
      product: 'Product',
      resources: 'Resources',
      company: 'Company',
      legal: 'Legal',
      copyright: 'GlitchSnap Studio Inc. All rights reserved.',
      links: {
        features: 'Features',
        pricing: 'Pricing',
        integrations: 'Integrations',
        changelog: 'Changelog',
        documentation: 'Documentation',
        apiReference: 'API Reference',
        qaBlog: 'QA Blog',
        community: 'Community',
        aboutUs: 'About Us',
        careers: 'Careers',
        contact: 'Contact',
        partners: 'Partners',
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service',
        security: 'Security',
        cookieSettings: 'Cookie Settings',
      },
    },

    // About
    about: {
      title: 'About GlitchSnap Studio',
      subtitle: "We're building the future of test case management for modern QA teams.",
      mission: {
        title: 'Our Mission',
        content:
          'GlitchSnap Studio was founded with a simple mission: to free QA teams from the spreadsheet trap. We believe that quality assurance professionals deserve tools that are as modern and powerful as the software they test.',
      },
      story: {
        title: 'Our Story',
        content1:
          "We've been in the trenches. We've suffered through the v3_final_final.xlsx nightmare. We've lost critical test data when someone accidentally deleted a row. We've waited for colleagues to finish editing so we could make our changes.",
        content2:
          "That's why we built GlitchSnap—a platform that combines the familiarity of spreadsheets with the power of modern collaboration and automation tools.",
      },
      values: {
        title: 'Our Values',
        items: [
          {
            title: 'Simplicity First',
            content: "Complex problems don't require complex solutions. We strive for elegant simplicity in everything we build.",
          },
          {
            title: 'Speed Matters',
            content: 'Your time is valuable. Our platform is optimized for performance at every level.',
          },
          {
            title: 'Quality is Non-Negotiable',
            content: 'We practice what we preach. Our product is rigorously tested to ensure reliability.',
          },
          {
            title: 'Customer Success',
            content: 'We succeed when you succeed. Our support team is here to help you get the most out of GlitchSnap.',
          },
        ],
      },
      join: {
        title: 'Join Us',
        content:
          "We're always looking for talented individuals who are passionate about quality and want to help shape the future of software testing.",
      },
    },

    // Blog
    blog: {
      title: 'QA Blog',
      subtitle: 'Insights, tutorials, and best practices for modern QA teams.',
      readMore: 'Read more',
      backToBlog: 'Back to blog',
      notFound: {
        title: 'Post Not Found',
        description: "The blog post you're looking for doesn't exist.",
      },
    },
  },

  ko: {
    // Navigation
    nav: {
      features: '기능',
      pricing: '요금제',
      resources: '리소스',
      bookDemo: '데모 신청',
    },

    // Hero
    hero: {
      badge: 'NEW: 자동 케이스 동기화',
      title: '엑셀로 QA하지 마세요.',
      titleHighlight: '스케일링을 시작하세요',
      titleBrand: 'GlitchSnap.',
      description:
        '현대적인 QA 팀을 위한 테스트 케이스 관리 플랫폼. 스프레드시트의 골칫거리 없이 익숙한 인터페이스에서 정리, 실행, 결과를 추적하세요.',
      watchVideo: '영상 보기',
      trustedBy: '',
      teamsWorldwide: '개 이상의 QA 팀이 사용 중',
    },

    // Pain Points
    painPoints: {
      label: '문제점',
      title: '엑셀의 함정',
      description:
        '스프레드시트는 복잡한 소프트웨어 테스팅을 위해 만들어지지 않았습니다. 팀 전체를 느리게 만드는 수동 작업의 한계에서 벗어나세요.',
      items: [
        {
          title: '버전 관리 악몽',
          description:
            'v3_최종_진짜최종.xlsx를 찾아 헤매지 마세요. GlitchSnap은 전체 테스팅 히스토리에 대한 단일 불변 소스를 제공합니다.',
        },
        {
          title: '엉망진창 포맷팅',
          description:
            '깨진 수식, 망가진 셀 스타일, 실수로 삭제된 행은 이제 그만. QA 워크플로우를 위해 특별히 설계된 구조화된 데이터 스키마를 활용하세요.',
        },
        {
          title: '협업 사일로',
          description:
            '"파일이 편집 중이라 잠겨 있습니다"와 작별하세요. 동료의 중요한 결과를 덮어쓰지 않으면서 실시간 다중 사용자 테스팅 세션을 활성화하세요.',
        },
      ],
    },

    // Features
    features: {
      label: '핵심 기능',
      title: '현대 QA를 위한 강력한 기능',
      description:
        '속도, 정밀함, 제로 러닝 커브를 위해 설계된 엔터프라이즈급 도구로 테스팅 워크플로우를 간소화하세요.',
      items: [
        {
          title: '스프레드시트 스타일 편집',
          description:
            '러닝 커브 제로의 익숙한 고성능 인터페이스. 타이핑하는 속도만큼 빠르게 테스트 케이스를 작성하고 편집하세요.',
        },
        {
          title: '브라우저 테스트 레코더',
          description:
            'Playwright 기반. 복잡한 사용자 여정을 손쉽게 기록하고 자동화된 테스트 스크립트로 즉시 변환하세요.',
        },
        {
          title: '템플릿 관리',
          description:
            '재사용 가능한 테스트 템플릿과 표준화된 테스팅 절차로 조직 전체의 일관성을 유지하세요.',
        },
        {
          title: '팀 협업',
          description:
            '실시간 코멘트, 포괄적인 활동 히스토리, 원활한 팀 동기화로 속도를 높이세요.',
        },
      ],
      cta: {
        title: 'QA 프로세스를 확장할 준비가 되셨나요?',
        description:
          'GlitchSnap Studio를 사용하여 대규모로 버그 없는 소프트웨어를 제공하는 수백 개의 고성능 팀에 합류하세요.',
        getStarted: '지금 시작하기',
        requestDemo: '데모 요청',
      },
      excellence: {
        title: '탁월함을 위한 설계',
        description:
          'GlitchSnap Studio는 전통적인 도구의 친숙함과 현대적 자동화의 힘을 결합하여 팀이 첫날부터 생산성을 유지할 수 있도록 합니다.',
      },
    },

    // Pricing
    pricing: {
      title: '모든 규모의 팀을 위한 요금제',
      description:
        '개인 프로젝트부터 글로벌 엔터프라이즈 운영까지 QA 노력을 확장하세요. 워크플로우에 맞는 티어를 선택하세요.',
      mostPopular: '가장 인기',
      plans: [
        {
          name: 'Free',
          price: 0,
          period: '/사용자/월',
          description: '개인 테스터와 소규모 취미 프로젝트에 적합합니다.',
          features: [
            '최대 3개 프로젝트',
            '기본 리포팅',
            '커뮤니티 지원',
            '100개 테스트 케이스',
          ],
          cta: '무료로 시작',
        },
        {
          name: 'Pro',
          price: 49,
          period: '/사용자/월',
          description: '고급 자동화와 통합으로 팀을 가속화하세요.',
          features: [
            'Free의 모든 기능',
            '무제한 테스트 케이스',
            '전체 Jira 통합',
            '고급 분석 대시보드',
            '우선 이메일 지원',
          ],
          cta: '14일 무료 체험',
        },
        {
          name: 'Enterprise',
          price: null,
          period: '',
          description: '글로벌 인프라, 보안, 전담 성공 관리.',
          features: [
            'Pro의 모든 기능',
            'SSO/SAML 통합',
            '전담 어카운트 매니저',
            '맞춤 온보딩 및 교육',
            '감사 로그 및 컴플라이언스',
          ],
          cta: '영업팀 문의',
        },
      ],
    },

    // Testimonials
    testimonials: {
      title: '전 세계 QA 리더들이 신뢰합니다',
      items: [
        {
          quote:
            '엑셀에서 GlitchSnap으로 전환한 것은 완전한 게임 체인저였습니다. 첫 분기에만 회귀 테스팅 주기가 45% 감소했습니다.',
          author: 'Sarah Chen',
          role: 'QA 리드',
          company: 'FintechNow',
        },
        {
          quote:
            'Jira 통합이 완벽합니다. 더 이상 도구 간 전환에 시간을 낭비하지 않습니다. 드디어 현대적 QA 워크플로우를 위해 만들어진 플랫폼입니다.',
          author: 'Michael Ross',
          role: 'QA 헤드',
          company: 'CloudStream',
        },
        {
          quote:
            '온보딩이 매끄러웠습니다. 마이그레이션 도구가 1,200개의 레거시 스프레드시트를 몇 분 만에 가져왔습니다. 올해 부서에서 한 최고의 투자입니다.',
          author: 'Elena Rodriguez',
          role: '시니어 QA 매니저',
          company: 'DataScale',
        },
      ],
    },

    // CTA
    cta: {
      title: 'QA 워크플로우를 현대화할 준비가 되셨나요?',
      description:
        'GlitchSnap과 함께 더 빠르게 움직이는 500개 이상의 QA 팀에 합류하세요. 신용카드 불필요. 오늘 14일 체험을 시작하세요.',
      placeholder: '업무용 이메일 입력',
      getStarted: '시작하기',
      importExcel: '또는 엑셀에서 가져오기',
    },

    // Footer
    footer: {
      description:
        'QA 팀을 위한 현대적인 테스트 케이스 관리. 협업과 자동화를 위해 만들어진 플랫폼으로 스프레드시트를 대체하세요.',
      product: '제품',
      resources: '리소스',
      company: '회사',
      legal: '법적 고지',
      copyright: 'GlitchSnap Studio Inc. All rights reserved.',
      links: {
        features: '기능',
        pricing: '요금제',
        integrations: '통합',
        changelog: '변경 로그',
        documentation: '문서',
        apiReference: 'API 레퍼런스',
        qaBlog: 'QA 블로그',
        community: '커뮤니티',
        aboutUs: '회사 소개',
        careers: '채용',
        contact: '문의',
        partners: '파트너',
        privacyPolicy: '개인정보 처리방침',
        termsOfService: '이용약관',
        security: '보안',
        cookieSettings: '쿠키 설정',
      },
    },

    // About
    about: {
      title: 'GlitchSnap Studio 소개',
      subtitle: '현대적인 QA 팀을 위한 테스트 케이스 관리의 미래를 만들어갑니다.',
      mission: {
        title: '우리의 미션',
        content:
          'GlitchSnap Studio는 간단한 미션으로 설립되었습니다: QA 팀을 스프레드시트의 함정에서 해방시키는 것. 우리는 품질 보증 전문가들이 테스트하는 소프트웨어만큼 현대적이고 강력한 도구를 가질 자격이 있다고 믿습니다.',
      },
      story: {
        title: '우리의 이야기',
        content1:
          '우리는 현장에 있었습니다. v3_최종_진짜최종.xlsx의 악몽을 겪었습니다. 누군가 실수로 행을 삭제했을 때 중요한 테스트 데이터를 잃어버렸습니다. 동료가 편집을 끝낼 때까지 기다려야 했습니다.',
        content2:
          "그래서 우리는 GlitchSnap을 만들었습니다—스프레드시트의 친숙함과 현대적인 협업 및 자동화 도구의 힘을 결합한 플랫폼입니다.",
      },
      values: {
        title: '우리의 가치',
        items: [
          {
            title: '단순함 우선',
            content: '복잡한 문제에 복잡한 해결책이 필요한 것은 아닙니다. 우리는 모든 것에서 우아한 단순함을 추구합니다.',
          },
          {
            title: '속도가 중요합니다',
            content: '여러분의 시간은 소중합니다. 우리 플랫폼은 모든 레벨에서 성능에 최적화되어 있습니다.',
          },
          {
            title: '품질은 타협 불가',
            content: '우리는 말한 대로 실천합니다. 우리 제품은 신뢰성을 보장하기 위해 엄격하게 테스트됩니다.',
          },
          {
            title: '고객 성공',
            content: '고객이 성공할 때 우리도 성공합니다. 지원팀이 GlitchSnap을 최대한 활용할 수 있도록 도와드립니다.',
          },
        ],
      },
      join: {
        title: '함께하세요',
        content:
          '품질에 열정적이고 소프트웨어 테스팅의 미래를 만들어가고 싶은 재능 있는 분들을 항상 찾고 있습니다.',
      },
    },

    // Blog
    blog: {
      title: 'QA 블로그',
      subtitle: '현대적인 QA 팀을 위한 인사이트, 튜토리얼, 모범 사례.',
      readMore: '더 보기',
      backToBlog: '블로그로 돌아가기',
      notFound: {
        title: '포스트를 찾을 수 없습니다',
        description: '찾으시는 블로그 포스트가 존재하지 않습니다.',
      },
    },
  },
} as const

export type Language = 'en' | 'ko'
export type Translations = (typeof translations)[Language]
