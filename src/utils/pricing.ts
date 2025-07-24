const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        'Unlimited basic notes',
        'Mobile access',
        '5 tags per note',
        'Export to PDF',
      ],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$8',
      period: 'per month',
      description: 'For serious note-takers',
      features: [
        'Everything in Free',
        'Unlimited tags',
        'AI-powered connections',
        'Focus mode',
        'Priority support',
        'Offline access',
      ],
      cta: 'Upgrade to Pro',
      popular: true,
    },
    /*{
      name: 'Teams',
      price: '$15',
      period: 'per user/month',
      description: 'Collaborate with your team',
      features: [
        'Everything in Pro',
        'Shared workspaces',
        'Collaborative editing',
        'Admin controls',
        'Team analytics',
        'Custom integrations',
      ],
      cta: 'Contact Sales',
      popular: false,
    },*/
];

export default plans;