"use client";

import { useParams, useRouter } from 'next/navigation';
import { useState, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Monitor, 
  Smartphone, 
  Palette, 
  BarChart3, 
  TrendingUp, 
  Bot, 
  HeadphonesIcon, 
  Megaphone, 
  FolderOpen,
  CheckCircle,
  Star,
  Clock,
  Users,
  Award,
  ArrowRight,
  ChevronRight,
  Mail,
  Phone,
  User,
  MessageSquare,
  Zap,
  Shield,
  Target,
  Rocket
} from 'lucide-react';

const servicesData = {
  'portfolio': {
    title: 'Portfolio Development',
    icon: FolderOpen,
    description: 'Create stunning personal portfolios that showcase your skills and achievements with modern design and seamless user experience.',
    heroDescription: 'Stand out from the crowd with a professionally designed portfolio that tells your story and highlights your unique value proposition. Our portfolio development service combines aesthetic excellence with strategic presentation to help you land your dream opportunities.',
    features: [
      'Responsive design across all devices',
      'SEO-optimized for better visibility',
      'Interactive animations and transitions',
      'Content management system'
    ],
    process: [
      { step: 'Discovery & Planning', description: 'We analyze your goals, target audience, and content requirements to create a strategic foundation.' },
      { step: 'Design Concept', description: 'Our designers create wireframes and visual concepts that reflect your personal brand.' },
      { step: 'Development', description: 'We build your portfolio using modern technologies ensuring fast loading and smooth interactions.' },
      { step: 'Content Integration', description: 'Your projects, skills, and achievements are strategically organized and presented.' },
      { step: 'Launch & Optimization', description: 'We deploy your portfolio and optimize it for search engines and performance.' }
    ],
    packages: [
      {
        name: 'Basic',
        price: '$799',
        features: ['5 project showcases', 'Contact form', 'Mobile responsive', 'Basic SEO', '3 revisions']
      },
      {
        name: 'Professional',
        price: '$1,299',
        features: ['10 project showcases', 'Blog integration', 'Advanced animations', 'Analytics setup', '5 revisions', 'CMS integration']
      },
      {
        name: 'Enterprise',
        price: '$1,999',
        features: ['Unlimited projects', 'Custom features', 'Advanced SEO', 'Performance optimization', 'Unlimited revisions', '6 months support']
      }
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    timeline: '2-4 weeks',
    faqs: [
      {
        question: 'What content do I need to provide?',
        answer: 'You\'ll need to provide project descriptions, images, your resume/CV, and any specific content you want to highlight. We can help guide you on the best way to present your work.'
      },
      {
        question: 'Can I update my portfolio myself after it\'s built?',
        answer: 'Yes! We can integrate a user-friendly CMS that allows you to add new projects, update content, and manage your portfolio without technical knowledge.'
      },
      {
        question: 'Will my portfolio work on mobile devices?',
        answer: 'Absolutely! All our portfolios are built with mobile-first design principles, ensuring they look and function perfectly on all devices.'
      }
    ],
    testimonials: [
      {
        name: 'Sarah Johnson',
        role: 'UX Designer',
        content: 'My new portfolio helped me land three job interviews in the first week. The design perfectly represents my work style.',
        rating: 5
      },
      {
        name: 'Mike Chen',
        role: 'Full Stack Developer',
        content: 'The portfolio showcases my projects beautifully. I\'ve received multiple freelance inquiries since launching.',
        rating: 5
      }
    ]
  },
  'website-development': {
    title: 'Website Development',
    icon: Monitor,
    description: 'Build powerful, scalable websites with modern technologies that drive business growth and deliver exceptional user experiences.',
    heroDescription: 'Transform your digital presence with custom websites that combine stunning design with robust functionality. From corporate sites to e-commerce platforms, we create web solutions that engage users and achieve your business objectives.',
    features: [
      'Custom web application development',
      'E-commerce solutions',
      'Content management systems',
      'API integrations and third-party services'
    ],
    process: [
      { step: 'Requirements Analysis', description: 'We gather detailed requirements and define project scope, timeline, and technical specifications.' },
      { step: 'Architecture Design', description: 'Our team creates system architecture, database design, and technical roadmap for your project.' },
      { step: 'Frontend Development', description: 'We build responsive, interactive user interfaces using modern frameworks and best practices.' },
      { step: 'Backend Development', description: 'Server-side logic, database integration, and API development for robust functionality.' },
      { step: 'Testing & Deployment', description: 'Comprehensive testing followed by secure deployment and performance optimization.' }
    ],
    packages: [
      {
        name: 'Basic',
        price: '$2,499',
        features: ['5-10 pages', 'Responsive design', 'Contact forms', 'Basic SEO', 'SSL certificate']
      },
      {
        name: 'Professional',
        price: '$4,999',
        features: ['Unlimited pages', 'CMS integration', 'E-commerce ready', 'Advanced SEO', 'Analytics', 'Performance optimization']
      },
      {
        name: 'Enterprise',
        price: '$9,999',
        features: ['Custom functionality', 'Third-party integrations', 'Advanced security', 'Scalable architecture', 'Dedicated support', 'Maintenance included']
      }
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    timeline: '6-12 weeks',
    faqs: [
      {
        question: 'What\'s included in ongoing maintenance?',
        answer: 'Maintenance includes security updates, performance monitoring, backup management, content updates, and technical support to keep your website running smoothly.'
      },
      {
        question: 'Can you integrate with my existing systems?',
        answer: 'Yes, we can integrate with CRMs, payment processors, inventory systems, and other business tools through APIs and custom development.'
      },
      {
        question: 'How do you ensure my website is secure?',
        answer: 'We implement SSL certificates, regular security updates, secure coding practices, data encryption, and security monitoring to protect your website and user data.'
      }
    ],
    testimonials: [
      {
        name: 'David Rodriguez',
        role: 'CEO, TechStart Inc.',
        content: 'Our new website increased conversions by 150%. The team delivered exactly what we needed on time and budget.',
        rating: 5
      },
      {
        name: 'Emma Thompson',
        role: 'Marketing Director',
        content: 'The e-commerce platform they built has been flawless. Sales have doubled since the launch.',
        rating: 5
      }
    ]
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    icon: Smartphone,
    description: 'Create native and cross-platform mobile applications that engage users and deliver seamless experiences across iOS and Android.',
    heroDescription: 'Bring your ideas to life with mobile apps that users love. Our expert team develops high-performance, feature-rich applications that work flawlessly across all devices and platforms, helping you reach your audience wherever they are.',
    features: [
      'Native iOS and Android development',
      'Cross-platform solutions with React Native',
      'UI/UX design optimized for mobile',
      'App store optimization and deployment'
    ],
    process: [
      { step: 'Concept Validation', description: 'We analyze your app idea, target market, and create a strategic roadmap for development.' },
      { step: 'UX/UI Design', description: 'Our designers create intuitive interfaces optimized for mobile user behavior and platform guidelines.' },
      { step: 'Development', description: 'We build your app using native or cross-platform technologies based on your requirements.' },
      { step: 'Testing & QA', description: 'Comprehensive testing across devices, operating systems, and real-world usage scenarios.' },
      { step: 'App Store Launch', description: 'We handle app store submissions, optimization, and post-launch monitoring and updates.' }
    ],
    packages: [
      {
        name: 'Basic',
        price: '$8,999',
        features: ['Single platform (iOS or Android)', '5-8 screens', 'Basic functionality', 'App store submission', '3 months support']
      },
      {
        name: 'Professional',
        price: '$15,999',
        features: ['Cross-platform (iOS + Android)', '10-15 screens', 'Advanced features', 'Backend integration', 'Push notifications', '6 months support']
      },
      {
        name: 'Enterprise',
        price: '$25,999',
        features: ['Custom native development', 'Complex functionality', 'Third-party integrations', 'Advanced analytics', 'Unlimited screens', '12 months support']
      }
    ],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify'],
    timeline: '12-20 weeks',
    faqs: [
      {
        question: 'Should I choose native or cross-platform development?',
        answer: 'Cross-platform is cost-effective for most apps, while native development offers the best performance for complex applications. We\'ll recommend the best approach based on your requirements.'
      },
      {
        question: 'How long does app store approval take?',
        answer: 'Apple App Store typically takes 1-3 days, while Google Play Store usually approves within 2-3 hours. We handle the entire submission process for you.'
      },
      {
        question: 'Do you provide ongoing app maintenance?',
        answer: 'Yes, we offer maintenance packages that include bug fixes, OS compatibility updates, performance monitoring, and feature enhancements.'
      }
    ],
    testimonials: [
      {
        name: 'Alex Park',
        role: 'Startup Founder',
        content: 'They transformed our idea into a beautiful, functional app. We hit 10K downloads in the first month!',
        rating: 5
      },
      {
        name: 'Lisa Wang',
        role: 'Product Manager',
        content: 'The cross-platform approach saved us months of development time while maintaining excellent quality.',
        rating: 5
      }
    ]
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    icon: Palette,
    description: 'Design intuitive and beautiful user experiences that convert visitors into customers with research-driven design strategies.',
    heroDescription: 'Create digital experiences that delight users and drive business results. Our UI/UX design process combines user research, strategic thinking, and aesthetic excellence to deliver interfaces that are both beautiful and functional.',
    features: [
      'User research and persona development',
      'Wireframing and prototyping',
      'Visual design and brand integration',
      'Usability testing and optimization'
    ],
    process: [
      { step: 'User Research', description: 'We conduct user interviews, surveys, and competitor analysis to understand your target audience.' },
      { step: 'Information Architecture', description: 'Creating user flows, sitemaps, and wireframes to structure the optimal user journey.' },
      { step: 'Visual Design', description: 'Developing high-fidelity mockups, design systems, and interactive prototypes.' },
      { step: 'Usability Testing', description: 'Testing designs with real users to identify and resolve usability issues before development.' },
      { step: 'Design Handoff', description: 'Providing developers with detailed specifications, assets, and guidelines for perfect implementation.' }
    ],
    packages: [
      {
        name: 'Basic',
        price: '$1,999',
        features: ['5-10 screens', 'Wireframes', 'Visual designs', 'Basic prototype', 'Style guide']
      },
      {
        name: 'Professional',
        price: '$3,999',
        features: ['15-25 screens', 'User research', 'Interactive prototype', 'Usability testing', 'Design system', 'Developer handoff']
      },
      {
        name: 'Enterprise',
        price: '$7,999',
        features: ['Unlimited screens', 'Comprehensive research', 'Multiple iterations', 'A/B testing design', 'Advanced prototyping', 'Ongoing consultation']
      }
    ],
    technologies: ['Figma', 'Adobe Creative Suite', 'Principle', 'InVision', 'Hotjar'],
    timeline: '4-8 weeks',
    faqs: [
      {
        question: 'What\'s the difference between UI and UX design?',
        answer: 'UX focuses on the overall user experience and journey, while UI focuses on the visual interface design. Both work together to create effective digital products.'
      },
      {
        question: 'Do you conduct user testing?',
        answer: 'Yes, we conduct usability testing with real users to validate design decisions and ensure the final product meets user needs and expectations.'
      },
      {
        question: 'Can you work with our existing brand guidelines?',
        answer: 'Absolutely! We can adapt your existing brand guidelines or help evolve them for digital applications while maintaining brand consistency.'
      }
    ],
    testimonials: [
      {
        name: 'Jennifer Martinez',
        role: 'Product Owner',
        content: 'The UX research insights completely changed our approach. Our user engagement increased by 200%.',
        rating: 5
      },
      {
        name: 'Tom Anderson',
        role: 'CEO, RetailTech',
        content: 'Beautiful designs that actually work. Our conversion rate improved significantly after the redesign.',
        rating: 5
      }
    ]
  },
  'data-science-analytics': {
    title: 'Data Science & Analytics',
    icon: BarChart3,
    description: 'Transform raw data into actionable insights with advanced analytics, machine learning, and predictive modeling solutions.',
    heroDescription: 'Unlock the power of your data with cutting-edge data science solutions. From predictive analytics to machine learning models, we help businesses make data-driven decisions that drive growth and competitive advantage.',
    features: [
      'Machine learning model development',
      'Predictive analytics and forecasting',
      'Data visualization and dashboards',
      'Statistical analysis and reporting'
    ],
    process: [
      { step: 'Data Assessment', description: 'We evaluate your data sources, quality, and business objectives to define the analytics strategy.' },
      { step: 'Data Preparation', description: 'Cleaning, transforming, and structuring data for analysis using advanced ETL processes.' },
      { step: 'Model Development', description: 'Building and training machine learning models tailored to your specific business use cases.' },
      { step: 'Validation & Testing', description: 'Rigorous testing and validation to ensure model accuracy and reliability in production.' },
      { step: 'Deployment & Monitoring', description: 'Deploying models to production with ongoing monitoring and performance optimization.' }
    ],
    packages: [
      {
        name: 'Basic',
        price: '$4,999',
        features: ['Data analysis', 'Basic visualizations', 'Statistical reporting', 'Simple dashboard', '1 month support']
      },
      {
        name: 'Professional',
        price: '$9,999',
        features: ['Predictive modeling', 'Interactive dashboards', 'Automated reporting', 'ML model deployment', '3 months support']
      },
      {
        name: 'Enterprise',
        price: '$19,999',
        features: ['Advanced ML solutions', 'Real-time analytics', 'Custom algorithms', 'Integration support', 'Ongoing optimization', '6 months support']
      }
    ],
    technologies: ['Python', 'R', 'TensorFlow', 'Tableau', 'Apache Spark'],
    timeline: '8-16 weeks',
    faqs: [
      {
        question: 'What type of data do you work with?',
        answer: 'We work with all types of data including structured (databases, spreadsheets), unstructured (text, images), and semi-structured (JSON, XML) from various sources.'
      },
      {
        question: 'How do you ensure data privacy and security?',
        answer: 'We follow strict data privacy protocols, use secure processing environments, and comply with regulations like GDPR and CCPA to protect your sensitive data.'
      },
      {
        question: 'Can you integrate with our existing systems?',
        answer: 'Yes, we can integrate with your databases, CRMs, ERPs, and other systems to create seamless data pipelines and automated analytics workflows.'
      }
    ],
    testimonials: [
      {
        name: 'Dr. Rachel Kim',
        role: 'Head of Analytics',
        content: 'Their predictive models helped us reduce costs by 30% while improving customer satisfaction. Exceptional work!',
        rating: 5
      },
      {
        name: 'Mark Stevens',
        role: 'Operations Director',
        content: 'The real-time dashboard transformed how we make decisions. We can now respond to trends immediately.',
        rating: 5
      }
    ]
  },
  'business-analytics': {
    title: 'Business Analytics',
    icon: TrendingUp,
    description: 'Make smarter business decisions with comprehensive analytics solutions that provide clear insights into your operations and market.',
    heroDescription: 'Turn your business data into strategic advantage. Our business analytics solutions provide clear, actionable insights that help you optimize operations, understand customers better, and identify new growth opportunities.',
    features: [
      'Performance dashboards and KPI tracking',
      'Customer behavior analysis',
      'Market research and competitive analysis',
      'ROI measurement and optimization'
    ],
    process: [
      { step: 'Business Discovery', description: 'Understanding your business goals, challenges, and key performance indicators.' },
      { step: 'Data Integration', description: 'Connecting and consolidating data from various business systems and sources.' },
      { step: 'Analytics Framework', description: 'Building comprehensive analytics framework with custom metrics and benchmarks.' },
      { step: 'Dashboard Development', description: 'Creating interactive dashboards and reports for different stakeholders and use cases.' },
      { step: 'Training & Support', description: 'Training your team to use analytics tools effectively and providing ongoing support.' }
    ],
    packages: [
      {
        name: 'Basic',
        price: '$2,999',
        features: ['Basic dashboard', 'Key metrics tracking', 'Monthly reports', 'Email support', '3 months access']
      },
      {
        name: 'Professional',
        price: '$5,999',
        features: ['Advanced dashboards', 'Custom analytics', 'Real-time monitoring', 'Automated alerts', 'Training included', '6 months access']
      },
      {
        name: 'Enterprise',
        price: '$12,999',
        features: ['Enterprise dashboard suite', 'Predictive analytics', 'Custom integrations', 'Dedicated analyst', 'Unlimited users', '12 months access']
      }
    ],
    technologies: ['Power BI', 'Tableau', 'Google Analytics', 'SQL Server', 'Excel'],
    timeline: '6-10 weeks',
    faqs: [
      {
        question: 'How quickly will I see ROI from business analytics?',
        answer: 'Most clients see measurable improvements in decision-making within the first month, with significant ROI typically achieved within 3-6 months of implementation.'
      },
      {
        question: 'Can you work with our existing business tools?',
        answer: 'Yes, we integrate with most popular business tools including CRMs, ERPs, marketing platforms, and financial systems to provide comprehensive analytics.'
      },
      {
        question: 'Do you provide training for our team?',
        answer: 'Absolutely! We provide comprehensive training to ensure your team can effectively use the analytics tools and interpret the insights for better decision-making.'
      }
    ],
    testimonials: [
      {
        name: 'Sarah Collins',
        role: 'CFO, GrowthCorp',
        content: 'The analytics dashboard gave us visibility we never had before. We identified $500K in cost savings in the first quarter.',
        rating: 5
      },
      {
        name: 'James Wilson',
        role: 'Marketing Manager',
        content: 'Finally, we can see which campaigns actually drive revenue. Our marketing ROI improved by 180%.',
        rating: 5
      }
    ]
  },
  'ai-automation-services': {
    title: 'AI & Automation Services',
    icon: Bot,
    description: 'Streamline operations and boost efficiency with intelligent automation solutions powered by cutting-edge AI technologies.',
    heroDescription: 'Harness the power of artificial intelligence to automate repetitive tasks, enhance decision-making, and unlock new levels of productivity. Our AI solutions are designed to integrate seamlessly with your existing workflows.',
    features: [
      'Process automation and workflow optimization',
      'Chatbots and virtual assistants',
      'Document processing and OCR',
      'Predictive maintenance and monitoring'
    ],
    process: [
      { step: 'Process Analysis', description: 'Identifying automation opportunities and analyzing current workflows for optimization potential.' },
      { step: 'AI Strategy Design', description: 'Designing custom AI solutions that align with your business objectives and technical requirements.' },
      { step: 'Development & Training', description: 'Building and training AI models using your data and business-specific requirements.' },
      { step: 'Integration & Testing', description: 'Integrating AI solutions with existing systems and conducting thorough testing for reliability.' },
      { step: 'Deployment & Optimization', description: 'Deploying solutions to production and continuously optimizing performance based on real-world usage.' }
    ],
    packages: [
      {
        name: 'Basic',
        price: '$6,999',
        features: ['Simple chatbot', 'Basic automation', 'Process optimization', 'Documentation', '3 months support']
      },
      {
        name: 'Professional',
        price: '$12,999',
        features: ['Advanced AI assistant', 'Workflow automation', 'Document processing', 'API integrations', '6 months support']
      },
      {
        name: 'Enterprise',
        price: '$24,999',
        features: ['Custom AI solutions', 'Complex automation', 'Predictive analytics', 'Dedicated support', 'Ongoing optimization', '12 months support']
      }
    ],
    technologies: ['OpenAI GPT', 'Python', 'TensorFlow', 'AWS AI/ML', 'RPA Tools'],
    timeline: '8-16 weeks',
    faqs: [
      {
        question: 'What processes can be automated with AI?',
        answer: 'We can automate data entry, customer service responses, document processing, scheduling, reporting, and many other repetitive tasks. We\'ll assess your specific processes to identify the best opportunities.'
      },
      {
        question: 'How do you ensure AI solutions are reliable?',
        answer: 'We use rigorous testing, validation datasets, and continuous monitoring to ensure AI solutions perform reliably. We also implement fallback mechanisms for edge cases.'
      },
      {
        question: 'Can AI solutions integrate with our current software?',
        answer: 'Yes, we design AI solutions to integrate seamlessly with your existing software stack through APIs, webhooks, and custom connectors.'
      }
    ],
    testimonials: [
      {
        name: 'Michael Chang',
        role: 'COO, LogisticsPro',
        content: 'The AI automation saved us 40 hours per week on manual tasks. The ROI was achieved within two months.',
        rating: 5
      },
      {
        name: 'Anna Rodriguez',
        role: 'Customer Service Director',
        content: 'Our AI chatbot handles 70% of customer inquiries automatically, allowing our team to focus on complex issues.',
        rating: 5
      }
    ]
  },
  'it-consulting-support': {
    title: 'IT Consulting & Support',
    icon: HeadphonesIcon,
    description: 'Get expert IT guidance and reliable support services to optimize your technology infrastructure and solve complex challenges.',
    heroDescription: 'Navigate the complex world of technology with confidence. Our IT consulting and support services provide strategic guidance, technical expertise, and reliable support to help your business leverage technology for maximum efficiency and growth.',
    features: [
      'Technology strategy and planning',
      'Infrastructure optimization',
      '24/7 technical support',
      'Security assessments and compliance'
    ],
    process: [
      { step: 'IT Assessment', description: 'Comprehensive evaluation of your current IT infrastructure, processes, and pain points.' },
      { step: 'Strategy Development', description: 'Creating a customized IT roadmap aligned with your business goals and budget constraints.' },
      { step: 'Implementation Planning', description: 'Detailed planning for technology improvements, migrations, and system implementations.' },
      { step: 'Execution & Migration', description: 'Careful execution of IT initiatives with minimal business disruption and comprehensive testing.' },
      { step: 'Ongoing Support', description: 'Continuous monitoring, maintenance, and support to ensure optimal IT performance and security.' }
    ],
    packages: [
      {
        name: 'Basic',
        price: '$1,999/month',
        features: ['Business hours support', 'Basic monitoring', 'Email support', 'Monthly reports', 'Security updates']
      },
      {
        name: 'Professional',
        price: '$3,999/month',
        features: ['24/7 support', 'Proactive monitoring', 'Phone & chat support', 'Weekly reports', 'Security management', 'Backup management']
      },
      {
        name: 'Enterprise',
        price: '$7,999/month',
        features: ['Dedicated IT team', '24/7 priority support', 'Strategic consulting', 'Custom solutions', 'Compliance management', 'Disaster recovery']
      }
    ],
    technologies: ['Microsoft 365', 'AWS/Azure', 'VMware', 'Cisco', 'Security Tools'],
    timeline: 'Ongoing service',
    faqs: [
      {
        question: 'What\'s included in 24/7 support?',
        answer: 'Our 24/7 support includes system monitoring, incident response, troubleshooting, emergency fixes, and escalation to senior engineers for critical issues.'
      },
      {
        question: 'Do you work with small businesses?',
        answer: 'Yes, we provide IT consulting and support services for businesses of all sizes, with packages tailored to different needs and budgets.'
      },
      {
        question: 'Can you help with cloud migration?',
        answer: 'Absolutely! We specialize in cloud migrations to AWS, Azure, and Google Cloud, ensuring secure, efficient transitions with minimal downtime.'
      }
    ],
    testimonials: [
      {
        name: 'Robert Taylor',
        role: 'CEO, ManufacturingPlus',
        content: 'Their proactive IT support prevented three major outages last year. The cost savings have been substantial.',
        rating: 5
      },
      {
        name: 'Linda Foster',
        role: 'Office Manager',
        content: 'Finally, IT support that actually responds quickly and fixes issues correctly the first time. Highly recommended!',
        rating: 5
      }
    ]
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    icon: Megaphone,
    description: 'Grow your online presence and drive conversions with data-driven digital marketing strategies and campaign management.',
    heroDescription: 'Amplify your brand\'s reach and drive meaningful results with comprehensive digital marketing strategies. From SEO to social media marketing, we create campaigns that connect with your audience and deliver measurable ROI.',
    features: [
      'Search engine optimization (SEO)',
      'Pay-per-click advertising (PPC)',
      'Social media marketing',
      'Content marketing and strategy'
    ],
    process: [
      { step: 'Market Analysis', description: 'Research your target audience, competitors, and market opportunities to inform strategy.' },
      { step: 'Strategy Development', description: 'Create comprehensive marketing strategy with clear goals, KPIs, and channel selection.' },
      { step: 'Campaign Creation', description: 'Develop compelling content, ads, and marketing materials optimized for each platform.' },
      { step: 'Launch & Optimization', description: 'Launch campaigns with continuous monitoring, A/B testing, and performance optimization.' },
      { step: 'Reporting & Analysis', description: 'Regular performance reports with insights and recommendations for continuous improvement.' }
    ],
    packages: [
      {
        name: 'Basic',
        price: '$1,499/month',
        features: ['SEO optimization', 'Social media management', 'Monthly reporting', 'Basic PPC campaigns', 'Content creation']
      },
      {
        name: 'Professional',
        price: '$2,999/month',
        features: ['Advanced SEO & PPC', 'Multi-platform social media', 'Email marketing', 'Conversion optimization', 'Weekly reporting', 'Competitor analysis']
      },
      {
        name: 'Enterprise',
        price: '$5,999/month',
        features: ['Comprehensive digital strategy', 'Advanced analytics', 'Marketing automation', 'Custom campaigns', 'Dedicated account manager', 'Real-time reporting']
      }
    ],
    technologies: ['Google Ads', 'Facebook Ads', 'Google Analytics', 'HubSpot', 'Mailchimp'],
    timeline: '3-6 months for results',
    faqs: [
      {
        question: 'How long does it take to see results from SEO?',
        answer: 'SEO typically shows initial improvements in 3-6 months, with significant results in 6-12 months. The timeline depends on competition and current website status.'
      },
      {
        question: 'What\'s included in social media management?',
        answer: 'We handle content creation, posting schedules, community engagement, hashtag research, performance tracking, and monthly strategy adjustments.'
      },
      {
        question: 'Do you provide detailed reporting?',
        answer: 'Yes, we provide comprehensive reports showing traffic, conversions, ROI, and key metrics with actionable insights for continuous improvement.'
      }
    ],
    testimonials: [
      {
        name: 'Jessica Brown',
        role: 'Marketing Director',
        content: 'Our website traffic increased by 300% and leads by 250% in just 6 months. Outstanding results!',
        rating: 5
      },
      {
        name: 'Kevin Murphy',
        role: 'Small Business Owner',
        content: 'The social media campaigns brought in more customers than we ever expected. Great return on investment.',
        rating: 5
      }
    ]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const contactFormRef = useRef<HTMLElement>(null);

  const slug = params.slug as string;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-700 mb-6">Service Not Found</h2>
            <p className="text-gray-600 mb-8">
              The service you're looking for doesn't exist. Please check the URL or browse our available services.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => router.push('/services')} className="bg-gradient-primary text-black hover:opacity-90">
                View All Services
              </Button>
              <Button variant="outline" onClick={() => router.push('/')}>
                Back to Home
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  const scrollToContact = () => {
    contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <button onClick={() => router.push('/')} className="hover:text-purple-600 transition-colors">
            Home
          </button>
          <ChevronRight className="w-4 h-4" />
          <button onClick={() => router.push('/services')} className="hover:text-purple-600 transition-colors">
            Services
          </button>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-medium">{service.title}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6">
              <Icon className="w-10 h-10 text-black" />
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">{service.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {service.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={scrollToContact} className="bg-gradient-primary text-black hover:opacity-90">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" onClick={() => router.push('/services')}>
                View All Services
              </Button>
            </div>
          </div>

          {/* Key Features */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and exceed your expectations.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {service.process.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mb-4 mx-auto">
                    <span className="text-black font-bold">{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg">{step.step}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pricing Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the package that best fits your needs and budget. All packages include our standard quality guarantee.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {service.packages.map((pkg, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'border-purple-500 shadow-lg scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-black">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={scrollToContact} 
                    className={`w-full ${index === 1 ? 'bg-gradient-primary text-black hover:opacity-90' : ''}`}
                    variant={index === 1 ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Rocket className="w-5 h-5 text-purple-600" />
                Technologies & Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {service.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">Project Timeline: {service.timeline}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what our clients say about our {service.title.toLowerCase()} services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Get answers to common questions about our {service.title.toLowerCase()} services.
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible>
                {service.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={contactFormRef} className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600">
              Let's discuss your {service.title.toLowerCase()} project and how we can help you achieve your goals.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-600" />
                Contact Us
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone</label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Project Details *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    className="min-h-32"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-primary text-black hover:opacity-90">
                  Send Message <Mail className="ml-2 w-4 h-4" />
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-6 text-center">
                  <div>
                    <Phone className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-800">Call Us</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                  <div>
                    <Mail className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-800">Email Us</div>
                    <div className="text-gray-600">hello@company.com</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}