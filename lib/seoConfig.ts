export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
}

const baseUrl = 'https://ananthasoftware.com';

export const seoPages: Record<string, SEOConfig> = {
  home: {
    title: 'Anantha Software | AI, IoT & Software Development Company Hyderabad',
    description: 'Anantha Software is a Hyderabad-based technology company delivering AI, IoT, software, hardware & semiconductor engineering solutions across India.',
    canonical: baseUrl,
  },
  services: {
    title: 'Custom Software Development Services India | Anantha Software',
    description: 'We deliver scalable custom software development services in India for enterprises, startups, and product-based companies.',
    canonical: `${baseUrl}/#services`,
  },
  vision: {
    title: 'Best Software Development Company in Hyderabad | Anantha Software',
    description: 'Trusted software development company in Hyderabad providing custom web, mobile, AI and enterprise solutions tailored to your business.',
    canonical: `${baseUrl}/#vision`,
  },
  about: {
    title: 'Anantha Software Solutions Pvt Ltd | Technology Company India',
    description: 'Leading Indian technology company offering end-to-end software, AI, IoT and product engineering services for startups and enterprises.',
    canonical: `${baseUrl}/#about`,
  },
  careers: {
    title: 'Careers at Anantha Software | Hyderabad Tech Jobs',
    description: 'Join Anantha Software in Hyderabad. Explore careers in AI, software development, IoT, embedded systems and semiconductor design.',
    canonical: `${baseUrl}/#careers`,
  },
  contact: {
    title: 'Contact Anantha Software | Get in Touch',
    description: 'Get in touch with Anantha Software for custom software, AI, IoT and engineering solutions. Hyderabad-based technology company.',
    canonical: `${baseUrl}/#contact`,
  },
  login: {
    title: 'Login | Anantha Software',
    description: 'Login to your Anantha Software account.',
    canonical: `${baseUrl}/#login`,
  },
  signup: {
    title: 'Sign Up | Anantha Software',
    description: 'Create a new account with Anantha Software.',
    canonical: `${baseUrl}/#signup`,
  },
};

// Extended SEO pages for future implementation
export const extendedSeoPages: Record<string, SEOConfig> = {
  'software-development': {
    title: 'Custom Software Development Services India | Anantha Software',
    description: 'We deliver scalable custom software development services in India for enterprises, startups, and product-based companies.',
    canonical: `${baseUrl}/software-development`,
  },
  'web-mobile-development': {
    title: 'Web & Mobile App Development Company Hyderabad',
    description: 'Professional web and mobile app development services in Hyderabad with modern UI/UX, secure architecture, and scalable performance.',
    canonical: `${baseUrl}/web-mobile-development`,
  },
  'ai-machine-learning': {
    title: 'AI & Machine Learning Development Company India',
    description: 'Anantha Software provides AI & ML development services including NLP, computer vision, predictive analytics and intelligent automation.',
    canonical: `${baseUrl}/ai-machine-learning`,
  },
  'generative-ai': {
    title: 'Generative AI & Data Science Services | India',
    description: 'Build intelligent applications with our Generative AI, data science, and advanced analytics services designed for real-world impact.',
    canonical: `${baseUrl}/generative-ai`,
  },
  'iot-development': {
    title: 'IoT Application Development Company Hyderabad',
    description: 'End-to-end IoT development services including device integration, cloud platforms, dashboards and real-time monitoring solutions.',
    canonical: `${baseUrl}/iot-development`,
  },
  'embedded-systems': {
    title: 'Embedded Systems & Hardware Design Services India',
    description: 'Expert embedded systems and hardware design services for automotive, industrial, consumer electronics and smart devices.',
    canonical: `${baseUrl}/embedded-systems`,
  },
  'semiconductor-vlsi': {
    title: 'Semiconductor & VLSI Design Services India',
    description: 'Specialized semiconductor services including RTL design, verification, FPGA prototyping and physical design solutions.',
    canonical: `${baseUrl}/semiconductor-vlsi`,
  },
  'product-engineering': {
    title: 'End-to-End Product Engineering Services India',
    description: 'From idea to deployment, we offer complete product engineering services covering design, development, testing and integration.',
    canonical: `${baseUrl}/product-engineering`,
  },
  'enterprise-solutions': {
    title: 'Enterprise Technology Solutions Company India',
    description: 'Helping enterprises digitally transform with scalable software, AI-driven platforms and integrated hardware solutions.',
    canonical: `${baseUrl}/enterprise-solutions`,
  },
  'smart-industries': {
    title: 'AI & IoT Solutions for Smart Industries | India',
    description: 'Innovative AI and IoT solutions enabling smart manufacturing, automation, monitoring and intelligent decision-making.',
    canonical: `${baseUrl}/smart-industries`,
  },
  'hyderabad-tech-solutions': {
    title: 'Technology Solutions Company in Hyderabad | Anantha Software',
    description: 'Hyderabad-based technology solutions provider delivering AI, IoT, software and engineering services across India and globally.',
    canonical: `${baseUrl}/hyderabad-tech-solutions`,
  },
  'hire-developers': {
    title: 'Hire Software & AI Developers in Hyderabad | Anantha Software',
    description: 'Hire experienced software, AI, IoT and embedded engineers in Hyderabad to build scalable and future-ready solutions.',
    canonical: `${baseUrl}/hire-developers`,
  },
  'digital-transformation': {
    title: 'Start Your Digital Transformation with Anantha Software',
    description: 'Partner with Anantha Software to build innovative digital solutions using AI, IoT and modern software engineering practices.',
    canonical: `${baseUrl}/digital-transformation`,
  },
};
