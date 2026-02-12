export const translations = {
  en: {
    // Navigation
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      resources: 'Resources',
      bookDemo: 'Get Started',
    },

    // Hero
    hero: {
      badge: 'All-in-One QA Platform',
      title: "Don't chase bugs.",
      titleHighlight: 'Snap them with',
      titleBrand: 'GlitchSnap.',
      description:
        'The all-in-one QA platform. Capture bugs instantly, record sessions, and manage test cases — all without leaving your workflow.',
      watchVideo: 'Watch Demo',
      trustedBy: 'Built for',
      teamsWorldwide: 'QA engineers & developers',
    },

    // Pain Points
    painPoints: {
      label: 'The Problems',
      title: 'QA is Still Broken',
      description:
        'Miscommunication, repetitive tasks, and scattered tools are slowing your team down. GlitchSnap fixes all three.',
      items: [
        {
          title: '"Works on my machine"',
          description:
            'When a bug occurs, environment differences between QA and developers cause reproduction failures. GlitchSnap auto-captures OS, browser, and action context — so every report is reproducible.',
        },
        {
          title: '"Bug reports lack context"',
          description:
            'A screenshot and a vague description aren\'t enough for developers to understand bugs. GlitchSnap auto-captures session replays, environment info, and action logs — so every report tells the full story.',
        },
        {
          title: '"Excel here, tests there"',
          description:
            'Every company has a different Excel TC format. GlitchSnap unifies test case management on the web with custom templates, Excel import/export, and real-time collaboration.',
        },
      ],
    },

    // Features
    features: {
      label: 'Core Modules',
      title: 'Three Weapons for Modern QA',
      description:
        'GlitchSnap Studio combines session recording, bug reporting, and TC management into one powerful platform.',
      items: [
        {
          title: 'Session Recorder',
          description:
            'GlitchSnap continuously records your browser sessions. Every click, scroll, and input is captured — ready to be replayed for bug reproduction or team review.',
        },
        {
          title: 'Bug Reporter',
          description:
            'Eliminates "How did you trigger that bug?" forever. GlitchSnap continuously records the last 3 minutes. One click generates a full report: replay video + screenshot + environment info + action steps.',
        },
        {
          title: 'TC Manager',
          description:
            'Excel-compatible test case management. Create custom templates for your company format, upload/download Excel files, and manage everything on the web with real-time sync.',
        },
      ],
      cta: {
        title: 'Ready to revolutionize your QA workflow?',
        description:
          'Join the teams building better software with GlitchSnap Studio.',
        getStarted: 'Explore Features',
        requestDemo: 'Request Demo',
        emailPlaceholder: 'Enter your work email',
        sending: 'Sending...',
        success: 'Demo request submitted!',
        error: 'Failed to send. Please try again.',
      },
      excellence: {
        title: 'Built for Modern QA Teams',
        description:
          'Professional-grade QA platform with session recording and Excel compatibility. The tools your team needs to ship with confidence.',
      },
    },

    // Pricing
    pricing: {
      title: 'Simple, transparent pricing',
      description:
        'Start free. Scale when you need to. No surprises.',
      mostPopular: 'Most Popular',
      plans: [
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
        },
      ],
    },

    // Testimonials
    testimonials: {
      title: 'Trusted by QA Teams Worldwide',
      items: [
        {
          quote:
            'Bug reproduction used to take 30 minutes of back-and-forth. With GlitchSnap, one click gives the developer everything they need. Our bug resolution time dropped by 60%.',
          author: 'Jiwon Park',
          role: 'QA Lead',
          company: 'FinBridge',
        },
        {
          quote:
            'Bug reports used to be a screenshot and "it doesn\'t work." Now GlitchSnap captures everything — session replay, environment, action log. Developer-QA communication improved overnight.',
          author: 'Alex Chen',
          role: 'Frontend Developer',
          company: 'CloudStack',
        },
        {
          quote:
            'We had 47 different Excel TC formats across teams. GlitchSnap unified everything into one platform while keeping Excel compatibility. Migration took 10 minutes.',
          author: 'Sarah Kim',
          role: 'PM',
          company: 'DataForge',
        },
      ],
    },

    // CTA
    cta: {
      title: "Smarter QA. Faster releases.",
      description:
        'GlitchSnap Studio is the QA tool your team has been waiting for. Start capturing bugs, recording sessions, and managing TCs in minutes.',
      placeholder: 'Enter your work email',
      getStarted: 'Download Free',
      requestDemo: 'Request a demo',
    },

    // Footer
    footer: {
      description:
        'All-in-one QA platform. Capture bugs, record sessions, manage test cases — built for modern development teams.',
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
      subtitle: "We're eliminating the friction between finding bugs and fixing them.",
      mission: {
        title: 'Our Mission',
        content:
          'GlitchSnap Studio was born from a simple frustration: QA is still stuck in 2010. We believe QA engineers and developers deserve tools that are as modern as the software they build. Our mission is to eliminate the communication gap, automate the tedious, and unify the scattered.',
      },
      story: {
        title: 'Our Story',
        content1:
          'We\'ve lived the nightmare. "Can you reproduce it?" "What browser were you using?" "Where\'s the latest TC file?" — we heard these questions a thousand times. Every bug report was a game of telephone. Every test case lived in a different spreadsheet.',
        content2:
          "That's why we built GlitchSnap — an all-in-one QA platform that captures bugs with full context, records sessions for instant replay, and manages test cases without the Excel chaos.",
      },
      values: {
        title: 'Our Values',
        items: [
          {
            title: 'Zero Friction',
            content: 'Every click matters. We obsess over removing unnecessary steps from QA workflows.',
          },
          {
            title: 'Context is King',
            content: 'A bug report without context is useless. We auto-capture everything so nothing gets lost.',
          },
          {
            title: 'Developer-Grade Quality',
            content: 'QA tools should feel like dev tools. Fast, precise, and built for power users.',
          },
          {
            title: 'Bridge the Gap',
            content: 'QA and development are two sides of the same coin. We build tools that bring them together.',
          },
        ],
      },
      join: {
        title: 'Join the Mission',
        content:
          "We're looking for builders who are passionate about developer experience and want to reshape how software gets tested.",
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
      bookDemo: '시작하기',
    },

    // Hero
    hero: {
      badge: '올인원 QA 플랫폼',
      title: 'QA, 이제 하나로 끝내세요.',
      titleHighlight: '',
      titleBrand: 'GlitchSnap.',
      description:
        '올인원 QA 플랫폼. 버그를 즉시 캡처하고, 세션을 녹화하고, TC를 관리하세요 — 워크플로우를 떠나지 않고.',
      watchVideo: '데모 보기',
      trustedBy: '',
      teamsWorldwide: 'QA 엔지니어와 개발자를 위해 만들어졌습니다',
    },

    // Pain Points
    painPoints: {
      label: '핵심 문제',
      title: 'QA는 아직도 비효율적입니다',
      description:
        '소통 오류, 반복 작업, 흩어진 도구 — GlitchSnap이 모두 해결합니다.',
      items: [
        {
          title: '"내 컴퓨터에서는 안 되는데?"',
          description:
            '버그 발생 시 QA와 개발자 간 환경 차이로 인해 재현에 실패합니다. GlitchSnap은 OS, 브라우저, 액션 컨텍스트를 자동 캡처하여 모든 리포트를 재현 가능하게 만듭니다.',
        },
        {
          title: '"버그 리포트에 맥락이 없어"',
          description:
            '스크린샷 하나와 텍스트 설명만으로는 개발자가 버그를 이해하기 어렵습니다. GlitchSnap은 세션 리플레이, 환경 정보, 액션 로그를 자동 수집하여 완벽한 버그 리포트를 생성합니다.',
        },
        {
          title: '"엑셀 따로, 테스트 따로"',
          description:
            '회사마다 엑셀 TC 양식이 다릅니다. GlitchSnap은 커스텀 템플릿, 엑셀 가져오기/내보내기, 실시간 협업으로 TC 관리를 웹에서 통합합니다.',
        },
      ],
    },

    // Features
    features: {
      label: '핵심 모듈',
      title: '현대 QA를 위한 세 가지 무기',
      description:
        'GlitchSnap Studio는 세션 녹화, 버그 리포팅, TC 관리를 하나의 강력한 플랫폼에 담았습니다.',
      items: [
        {
          title: '세션 레코더',
          description:
            'GlitchSnap이 브라우저 세션을 상시 녹화합니다. 클릭, 스크롤, 입력 — 모든 인터랙션이 기록되어 버그 재현이나 팀 리뷰를 위한 리플레이가 가능합니다.',
        },
        {
          title: '버그 리포터',
          description:
            '"방금 그 버그, 어떻게 했어요?"를 영원히 없앱니다. GlitchSnap이 최근 3분을 상시 녹화하고, 버튼 한 번이면 재생 영상 + 스크린샷 + 환경 정보 + 액션 스텝 리포트가 완성됩니다.',
        },
        {
          title: 'TC 매니저',
          description:
            '엑셀과 완벽히 호환되는 TC 관리 도구. 회사 양식에 맞춘 커스텀 템플릿, 엑셀 업로드/다운로드, 웹에서 실시간 동기화까지 모두 가능합니다.',
        },
      ],
      cta: {
        title: 'QA 워크플로우를 혁신할 준비가 되셨나요?',
        description:
          'GlitchSnap Studio와 함께 더 나은 소프트웨어를 만드는 팀에 합류하세요.',
        getStarted: '기능 살펴보기',
        requestDemo: '데모 요청',
        emailPlaceholder: '업무용 이메일 입력',
        sending: '전송 중...',
        success: '데모 요청이 접수되었습니다!',
        error: '전송에 실패했습니다. 다시 시도해주세요.',
      },
      excellence: {
        title: '현대 QA 팀을 위해 설계',
        description:
          '세션 녹화, 엑셀 호환을 갖춘 프로급 QA 플랫폼. 팀이 자신 있게 출시할 수 있는 도구입니다.',
      },
    },

    // Pricing
    pricing: {
      title: '심플하고 투명한 요금제',
      description:
        '무료로 시작하세요. 필요할 때 확장하세요. 숨겨진 비용 없음.',
      mostPopular: '가장 인기',
      plans: [
        {
          name: 'Starter',
          price: 0,
          period: '/사용자/월',
          description: '개인 QA 엔지니어와 시작하는 소규모 팀에 적합합니다.',
          features: [
            '최대 2개 프로젝트',
            '세션 레코더 (기본)',
            '버그 리포터 (일 5건)',
            '커뮤니티 지원',
          ],
          cta: '무료로 시작',
        },
        {
          name: 'Pro',
          price: 29,
          period: '/사용자/월',
          description: '빠르게 출시하는 프로 QA 팀을 위한 풀 파워.',
          features: [
            'Starter의 모든 기능',
            '무제한 세션 녹화',
            '무제한 버그 리포트',
            '엑셀 동기화 TC 매니저',
            'Jira / Slack 연동',
            '우선 지원',
          ],
          cta: '14일 무료 체험',
        },
        {
          name: 'Enterprise',
          price: null,
          period: '',
          description: '맞춤 배포, 보안, 전담 성공 관리.',
          features: [
            'Pro의 모든 기능',
            'SSO / SAML 통합',
            '온프레미스 배포',
            '전담 어카운트 매니저',
            '맞춤 온보딩 및 교육',
            'SLA 및 감사 로그',
          ],
          cta: '영업팀 문의',
        },
      ],
    },

    // Testimonials
    testimonials: {
      title: '전 세계 QA 팀이 신뢰합니다',
      items: [
        {
          quote:
            '버그 재현에 30분씩 핑퐁하던 게 일상이었는데, GlitchSnap 도입 후 클릭 한 번이면 개발자에게 필요한 모든 정보가 전달됩니다. 버그 해결 시간이 60% 줄었습니다.',
          author: '박지원',
          role: 'QA 리드',
          company: 'FinBridge',
        },
        {
          quote:
            '버그 리포트가 스크린샷 한 장에 "안 돼요"가 전부였는데, 이제 GlitchSnap이 세션 리플레이, 환경 정보, 액션 로그까지 다 담아줍니다. QA-개발 소통이 완전히 바뀌었어요.',
          author: 'Alex Chen',
          role: '프론트엔드 개발자',
          company: 'CloudStack',
        },
        {
          quote:
            '팀별로 47개나 되는 엑셀 TC 양식이 있었는데, GlitchSnap이 엑셀 호환을 유지하면서 하나의 플랫폼으로 통합해줬습니다. 마이그레이션은 10분이면 끝.',
          author: 'Sarah Kim',
          role: 'PM',
          company: 'DataForge',
        },
      ],
    },

    // CTA
    cta: {
      title: 'QA, 더 빠르고 정확하게.',
      description:
        'GlitchSnap Studio는 당신의 팀이 기다려온 QA 도구입니다. 지금 시작하고 버그 캡처, 세션 녹화, TC 관리를 몇 분 안에 경험하세요.',
      placeholder: '업무용 이메일 입력',
      getStarted: '무료 다운로드',
      requestDemo: '데모 요청',
    },

    // Footer
    footer: {
      description:
        '올인원 QA 플랫폼. 버그 캡처, 세션 녹화, TC 관리 — 현대 개발팀을 위해 만들어졌습니다.',
      product: '제품',
      resources: '리소스',
      company: '회사',
      legal: '법적 고지',
      copyright: 'GlitchSnap Studio Inc. All rights reserved.',
      links: {
        features: '기능',
        pricing: '요금제',
        integrations: '연동',
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
      subtitle: '버그를 발견하고 고치는 사이의 마찰을 없애고 있습니다.',
      mission: {
        title: '우리의 미션',
        content:
          'GlitchSnap Studio는 단순한 좌절에서 태어났습니다: QA는 아직도 2010년에 머물러 있습니다. QA 엔지니어와 개발자는 자신이 만드는 소프트웨어만큼 현대적인 도구를 가질 자격이 있습니다. 우리의 미션은 소통 격차를 없애고, 반복을 자동화하고, 흩어진 것들을 하나로 모으는 것입니다.',
      },
      story: {
        title: '우리의 이야기',
        content1:
          '우리는 그 악몽을 직접 겪었습니다. "재현 가능해요?" "무슨 브라우저 쓰셨어요?" "최신 TC 파일 어디 있어요?" — 이런 질문을 수천 번 들었습니다. 모든 버그 리포트는 전화 게임이었고, 모든 테스트 케이스는 각기 다른 스프레드시트에 살았습니다.',
        content2:
          '그래서 우리는 GlitchSnap을 만들었습니다 — 전체 컨텍스트와 함께 버그를 캡처하고, 세션을 녹화하여 즉시 리플레이하고, 엑셀 혼돈 없이 TC를 관리하는 올인원 QA 플랫폼입니다.',
      },
      values: {
        title: '우리의 가치',
        items: [
          {
            title: '제로 프릭션',
            content: '모든 클릭이 중요합니다. QA 워크플로우에서 불필요한 단계를 제거하는 데 집착합니다.',
          },
          {
            title: '컨텍스트가 왕이다',
            content: '컨텍스트 없는 버그 리포트는 쓸모없습니다. 모든 것을 자동 캡처하여 놓치는 것이 없도록 합니다.',
          },
          {
            title: '개발자급 품질',
            content: 'QA 도구는 개발자 도구처럼 느껴져야 합니다. 빠르고, 정확하고, 파워 유저를 위해 만들어졌습니다.',
          },
          {
            title: '격차를 잇다',
            content: 'QA와 개발은 동전의 양면입니다. 둘을 하나로 연결하는 도구를 만듭니다.',
          },
        ],
      },
      join: {
        title: '미션에 합류하세요',
        content:
          '개발자 경험에 열정적이고, 소프트웨어 테스팅 방식을 재정의하고 싶은 빌더를 찾고 있습니다.',
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
