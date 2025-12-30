import React, { useState } from 'react';

const Services: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('guidewire');
  const [expandedPlatforms, setExpandedPlatforms] = useState<Set<string>>(new Set());
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set());

  const togglePlatformExpand = (categoryKey: string) => {
    const newSet = new Set(expandedPlatforms);
    if (newSet.has(categoryKey)) {
      newSet.delete(categoryKey);
    } else {
      newSet.add(categoryKey);
    }
    setExpandedPlatforms(newSet);
  };

  const toggleServiceExpand = (categoryKey: string) => {
    const newSet = new Set(expandedServices);
    if (newSet.has(categoryKey)) {
      newSet.delete(categoryKey);
    } else {
      newSet.add(categoryKey);
    }
    setExpandedServices(newSet);
  };

  const servicePortfolios = [
    {
      id: 'guidewire',
      name: 'Guidewire Services',
      icon: '📋',
      categories: [
        {
          service: 'Guidewire Core Platform Services',
          platforms: 'PolicyCenter, BillingCenter, ClaimCenter, ContactManager, Digital Portals, Guidewire Cloud Platform (GWCP)',
          offerings: 'Greenfield & brownfield implementations, legacy migration, on-prem to cloud migration, upgrades, cloud readiness, performance tuning'
        },
        {
          service: 'Product & Underwriting Services',
          platforms: 'Guidewire Product Model, Advanced Product Designer (APD)',
          offerings: 'Product modeling, coverage & rating configuration, product rollout, regulatory alignment, new product launches'
        },
        {
          service: 'SBT & Bureau Content Management',
          platforms: 'ISO, AAIS, NCCI, SBT, ERC',
          offerings: 'SBT adoption, bureau alignment, customization analysis, circular impact assessment, ERC integration & validation'
        },
        {
          service: 'Digital & Integration Services',
          platforms: 'Guidewire Digital (Jutro), Integration Framework, ACORD, REST/SOAP APIs',
          offerings: 'Customer/agent portals, UX optimization, third-party integrations, ACORD messaging'
        },
        {
          service: 'Data, Analytics & Reporting',
          platforms: 'Guidewire DataHub, InfoCenter, Snowflake, Databricks, BigQuery',
          offerings: 'Analytics & regulatory reporting, actuarial data extraction, enterprise data integration'
        },
        {
          service: 'Testing, QA & Automation',
          platforms: 'Automated Test Frameworks',
          offerings: 'Functional, regression & performance testing, automation for product & rating validation, UAT support'
        },
        {
          service: 'Guidewire AMS',
          platforms: 'Policy, Billing & Claims Modules',
          offerings: 'L2/L3 support, release management, incident handling, continuous optimization'
        },
        {
          service: 'Cloud, DevOps & Security',
          platforms: 'CI/CD, Cloud Automation Tools',
          offerings: 'CI/CD setup, environment automation, cloud cost optimization, security & compliance reviews'
        },
        {
          service: 'Advanced Capabilities',
          platforms: 'AI/ML, GenAI, Analytics Accelerators',
          offerings: 'AI underwriting, GenAI document ingestion, reusable accelerators, SBT automation'
        },
        {
          service: 'Engagement Models',
          platforms: 'Onshore–Offshore, Hybrid',
          offerings: 'End-to-end delivery, staff augmentation, factory model, hybrid delivery'
        }
      ]
    },
    {
      id: 'sap',
      name: 'SAP Services',
      icon: '🏢',
      categories: [
        {
          service: 'SAP Advisory & Implementation',
          platforms: 'SAP S/4HANA, RISE with SAP, GROW with SAP, SAP BTP',
          offerings: 'S/4HANA Implementation & Migration (Brownfield/Bluefield), SAP Business Process Automation, SAP Digital Supply Chain Transformation, RISE/GROW with SAP Enablement'
        },
        {
          service: 'Spend Management & Invoice Automation',
          platforms: 'SAP VIM, SAP Ariba, OpenText',
          offerings: 'VIM Deployment, Upgrade & Improvement Packs, VIM–Ariba Integration, Vendor Invoice Management for S/4HANA, AP Analytics & Executive Insights'
        },
        {
          service: 'Data Management & Analytics',
          platforms: 'SAP ILM, MDG, DaRT, BTP Analytics, AI Tools',
          offerings: 'Data Archiving, Migration & Governance, Predictive Analytics & Forecasting, Data Privacy & Compliance Solutions, System Decommissioning'
        },
        {
          service: 'SAP Application Management Services (AMS)',
          platforms: 'SAP Solution Manager, Cloud AMS Tools',
          offerings: 'Proactive System Monitoring, Flexible Support Packages, Continuous Enhancement & Optimization, Performance Tuning'
        },
        {
          service: 'Cloud & Integration Services',
          platforms: 'AWS, Azure, GCP, SAP Cloud, Terraform, Ansible',
          offerings: 'Cloud Migration & Integration for SAP Ecosystem, DevOps Enablement & Automation, Infrastructure as Code (IaC), Cloud Cost Optimization'
        }
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics Services',
      icon: '📊',
      categories: [
        {
          service: 'Cognitive Analytics (AI/ML)',
          platforms: 'Neural Networks (CNN, RNN), PyTorch, Caffe, ONNX, TensorFlow, Keras, OpenCV, Scikit-Learn, NumPy, Pandas',
          offerings: 'ML/DL Application development and testing, Federated learning apps, Natural Language Processing, Algorithm development, testing, Model onboarding, Quantization & Optimization, GPU benchmarking, Parallel programming (CUDA), ML compiler optimizations, NLP & Image processing, Resource management, Web & Marketing analytics'
        },
        {
          service: 'Predictive/Prescriptive Analytics',
          platforms: 'TensorFlow, Keras, OpenCV, Scikit-Learn, NumPy, Pandas',
          offerings: 'Quality prediction, Forecasting, Advanced statistical modeling'
        },
        {
          service: 'Descriptive/Diagnostic Analytics',
          platforms: 'Python, R, Tableau, PowerBI, SPSS',
          offerings: 'Data mining, Visualizations, Analysis & Reporting'
        }
      ]
    },
    {
      id: 'genai',
      name: 'Generative AI & LLMs Services',
      icon: '🤖',
      categories: [
        {
          service: 'Foundation & Language Models',
          platforms: 'OpenAI (GPT-4, GPT-3.5), Anthropic Claude, Mistral AI, LangChain, LangGraph',
          offerings: 'LLM fine-tuning & optimization, Custom LLM development, Prompt engineering, RAG system implementation'
        },
        {
          service: 'AI Workflow & Agents',
          platforms: 'Crew.AI, AutoGen, HuggingFace Transformers, PEFT, LoRA, QLoRA, ONNX Runtime, vLLM, TGI',
          offerings: 'AI workflow design & development, Autonomous agent development, LLM monitoring & observability, Model quantization & deployment'
        },
        {
          service: 'Vector & Knowledge Management',
          platforms: 'Pinecone, Weaviate, ChromaDB, FAISS',
          offerings: 'Context window optimization, Vector database integration, Knowledge base integration, Semantic search implementation'
        },
        {
          service: 'Enterprise LLM Solutions',
          platforms: 'Multi-modal LLM integration',
          offerings: 'Enterprise LLM solutions, AI application development, Custom model fine-tuning, Production-ready deployments'
        }
      ]
    },
    {
      id: 'dataeng',
      name: 'Data Engineering Services',
      icon: '⚙️',
      categories: [
        {
          service: 'Data Acquisition',
          platforms: 'Apache/Microsoft/Google/Amazon, SQOOP, Kafka, Flume, Nifi, Gobblin, Azure Data Factory, Pub/Sub, AWS Kinesis',
          offerings: 'Batch processing, Streaming data, Data Pipelines, Data Lakes, Architectural design, Data migration & cleanup, Data Processing & Upgrades, Cluster Setup'
        },
        {
          service: 'Data Processing',
          platforms: 'MapReduce, Spark, Pig, Azure Databricks, HDInsight, Cloud Dataflow, Spark Streaming, Kafka, Flink, Storm, Samza',
          offerings: 'Batch & streaming data processing, Big Data applications, ETL/ELT pipelines, Data Warehousing, Data Governance, Infrastructure upkeep'
        },
        {
          service: 'Data Organization & Storage',
          platforms: 'RedShift, Snowflake, BigQuery, Delta Lake',
          offerings: 'Data Warehouse (DWH) design, Data Marts, Distributed storage, Cloud-native solutions'
        }
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud Infrastructure Services',
      icon: '☁️',
      categories: [
        {
          service: 'Cloud Architectural Services',
          platforms: 'Apache, Azure, GCP, AWS',
          offerings: 'Ecosystem design, Application design, Cloud migration, HPC solutions, Virtualization (VmWare, Hyper-V, EC2), Serverless computing, PaaS/SecaaS/DaaS consulting, IaC, Infrastructure management & migration'
        },
        {
          service: 'Cloud Development Services',
          platforms: 'API Gateway, REST API, Lambda, Kubernetes',
          offerings: 'Development, Deployment, Debugging, Containerization, Orchestration'
        },
        {
          service: 'Cloud Maintenance Services',
          platforms: 'Kubernetes, Ansible, ARM templates, Python, Terraform',
          offerings: 'DevOps & CI/CD, Cloud orchestration, Automation, Operating cost management, Performance optimization'
        }
      ]
    }
  ];

  return (
    <div className="section-padding bg-gradient-to-b from-color-bg via-color-bg-light to-color-bg wavy-bg relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-20 animate-float" style={{animation: 'float 15s ease-in-out infinite'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section - Enhanced */}
        <div className="text-center mb-28">
          <div className="inline-block mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-primary/18 to-primary/10 border border-primary/50 text-primary text-xs font-bold uppercase tracking-widest hover:border-primary/80 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500">
            <span className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-secondary rounded-full inline-block mr-3 animate-pulse-scale"></span>
            Our Expertise
          </div>
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white text-center" style={{letterSpacing: '-0.025em', lineHeight: '1.15'}}>
              Comprehensive<br />Technology Solutions
            </h2>
          </div>
          <div className="divider w-20 mx-auto mb-12 hover:w-32 transition-all duration-500"></div>
          <p className="text-text-secondary max-w-4xl mx-auto text-lg md:text-xl lg:text-2xl leading-relaxed font-light animate-fade-in-up hover:text-text-primary transition-colors duration-500 group" style={{animationDelay: '0.1s', letterSpacing: '0.3px', lineHeight: '1.8'}}>
            End-to-end engineering and <span className="text-text font-medium">software solutions</span> designed for businesses that demand excellence and innovation.
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl rounded-xl -z-10 pointer-events-none"></div>
          </p>
        </div>

        {/* Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Integrated Hardware/Software */}
          <div className="gradient-card-subtle p-8 md:p-10 rounded-3xl card-hover group border-primary/40 animate-fade-in-up relative overflow-hidden transform hover:-translate-y-3" style={{animationDelay: '0.1s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-600 -z-10"></div>
            <div className="flex items-start gap-6 md:gap-8 relative z-10">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary/50 to-primary/20 rounded-3xl flex items-center justify-center flex-shrink-0 text-primary group-hover:scale-125 group-hover:shadow-2xl group-hover:shadow-primary/40 transition-all duration-600">
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="8" height="8" rx="1" strokeWidth="1.5" />
                  <rect x="13" y="3" width="8" height="8" rx="1" strokeWidth="1.5" />
                  <rect x="3" y="13" width="8" height="8" rx="1" strokeWidth="1.5" />
                  <rect x="13" y="13" width="8" height="8" rx="1" strokeWidth="1.5" />
                  <line x1="11" y1="7" x2="13" y2="7" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="11" y1="17" x2="13" y2="17" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="7" y1="11" x2="7" y2="13" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="17" y1="11" x2="17" y2="13" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-500 tracking-tight">Integrated Hardware & Software</h4>
                <p className="text-text-muted text-sm md:text-base leading-relaxed group-hover:text-text-secondary transition-colors duration-500 font-light">
                  End-to-end solutions for semiconductor, AI/ML, and IoT industries across consumer, storage, automotive, wireless, and data center domains.
                </p>
              </div>
            </div>
          </div>

          {/* Silicon Engineering */}
          <div className="gradient-card-subtle p-8 md:p-10 rounded-3xl card-hover group border-primary/40 animate-fade-in-up relative overflow-hidden transform hover:-translate-y-3" style={{animationDelay: '0.2s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-600 -z-10"></div>
            <div className="flex items-start gap-6 md:gap-8 relative z-10">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-accent/50 to-accent/20 rounded-3xl flex items-center justify-center flex-shrink-0 text-accent group-hover:scale-125 group-hover:shadow-2xl group-hover:shadow-accent/40 transition-all duration-600">
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="7" y="7" width="10" height="10" rx="1" strokeWidth="1.5" />
                  <line x1="12" y1="3" x2="12" y2="5" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="12" y1="19" x2="12" y2="21" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="12" x2="5" y2="12" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="19" y1="12" x2="21" y2="12" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="10" cy="10" r="0.8" fill="currentColor" />
                  <circle cx="14" cy="10" r="0.8" fill="currentColor" />
                  <circle cx="10" cy="14" r="0.8" fill="currentColor" />
                  <circle cx="14" cy="14" r="0.8" fill="currentColor" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg md:text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-500 tracking-tight">Silicon Engineering</h4>
                <ul className="text-sm md:text-base text-text-muted space-y-2.5 group-hover:text-text-secondary transition-colors duration-500 font-light">
                  <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-accent rounded-full flex-shrink-0"></span><span>Architecture & Design</span></li>
                  <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-accent rounded-full flex-shrink-0"></span><span>RTL Integration</span></li>
                  <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-accent rounded-full flex-shrink-0"></span><span>Design Verification</span></li>
                  <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-accent rounded-full flex-shrink-0"></span><span>FPGA Prototyping</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI/ML Development */}
          <div className="gradient-card-subtle p-8 md:p-10 rounded-3xl card-hover group border-primary/40 animate-fade-in-up relative overflow-hidden transform hover:-translate-y-3" style={{animationDelay: '0.3s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-600 -z-10"></div>
            <div className="flex items-start gap-6 md:gap-8 relative z-10">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-3xl flex items-center justify-center flex-shrink-0 text-secondary group-hover:scale-125 group-hover:shadow-2xl group-hover:shadow-secondary/40 transition-all duration-600">
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="8" cy="6" r="1.5" fill="currentColor" />
                  <circle cx="16" cy="6" r="1.5" fill="currentColor" />
                  <circle cx="12" cy="14" r="1.5" fill="currentColor" />
                  <circle cx="8" cy="18" r="1.5" fill="currentColor" />
                  <circle cx="16" cy="18" r="1.5" fill="currentColor" />
                  <line x1="8" y1="7.5" x2="12" y2="12.5" strokeWidth="1.5" />
                  <line x1="16" y1="7.5" x2="12" y2="12.5" strokeWidth="1.5" />
                  <line x1="12" y1="15.5" x2="8" y2="16.5" strokeWidth="1.5" />
                  <line x1="12" y1="15.5" x2="16" y2="16.5" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg md:text-xl font-bold mb-3 group-hover:text-secondary transition-colors duration-500 tracking-tight">AI/ML Development</h4>
                <p className="text-text-muted text-sm md:text-base leading-relaxed group-hover:text-text-secondary transition-colors duration-500 font-light">
                  Advanced AI/ML solutions leveraging NLP, LLM, and Generative AI to drive business innovation and insights.
                </p>
              </div>
            </div>
          </div>

          {/* Software Development */}
          <div className="gradient-card-subtle p-8 md:p-10 rounded-3xl card-hover group border-primary/40 animate-fade-in-up relative overflow-hidden transform hover:-translate-y-3" style={{animationDelay: '0.4s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-600 -z-10"></div>
            <div className="flex items-start gap-6 md:gap-8 relative z-10">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary/50 to-primary/20 rounded-3xl flex items-center justify-center flex-shrink-0 text-primary group-hover:scale-125 group-hover:shadow-2xl group-hover:shadow-primary/40 transition-all duration-600">
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8 7l-5 5 5 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 7l5 5-5 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 4l-2 16" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-500 tracking-tight">Software Development</h4>
                <p className="text-text-muted text-sm md:text-base leading-relaxed group-hover:text-text-secondary transition-colors duration-500 font-light">
                  Web, mobile, and enterprise solutions with emphasis on scalability, security, and peak performance.
                </p>
              </div>
            </div>
          </div>

          {/* Cloud Services */}
          <div className="gradient-card-subtle p-8 md:p-10 rounded-3xl card-hover group border-primary/40 animate-fade-in-up relative overflow-hidden transform hover:-translate-y-3" style={{animationDelay: '0.5s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-600 -z-10"></div>
            <div className="flex items-start gap-6 md:gap-8 relative z-10">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-accent/50 to-accent/20 rounded-3xl flex items-center justify-center flex-shrink-0 text-accent group-hover:scale-125 group-hover:shadow-2xl group-hover:shadow-accent/40 transition-all duration-600">
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M12 6c-2.76 0-5 2.24-5 5 0 1.16.39 2.24 1.05 3.1M12 6c2.76 0 5 2.24 5 5-.66.86-1.05 1.94-1.05 3.1" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="12" cy="11" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg md:text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-500 tracking-tight">Cloud Services</h4>
                <p className="text-text-muted text-sm md:text-base leading-relaxed group-hover:text-text-secondary transition-colors duration-500 font-light">
                  AWS, Azure, and GCP deployment, management, and optimization for enterprise infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Data Engineering */}
          <div className="gradient-card-subtle p-8 md:p-10 rounded-3xl card-hover group border-primary/40 animate-fade-in-up relative overflow-hidden transform hover:-translate-y-3" style={{animationDelay: '0.6s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-600 -z-10"></div>
            <div className="flex items-start gap-6 md:gap-8 relative z-10">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-3xl flex items-center justify-center flex-shrink-0 text-secondary group-hover:scale-125 group-hover:shadow-2xl group-hover:shadow-secondary/40 transition-all duration-600">
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <cylinder x="3" y="6" r="3" h="4" strokeWidth="1.5" />
                  <ellipse cx="6" cy="6" rx="3" ry="1.5" strokeWidth="1.5" />
                  <path d="M3 10v4c0 .83 1.34 1.5 3 1.5s3-.67 3-1.5v-4" strokeWidth="1.5" />
                  <ellipse cx="6" cy="14.5" rx="3" ry="1.5" strokeWidth="1.5" />
                  <path d="M12 8l3-2m0 10l-3 2M15 10v4" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="18" cy="8" r="1.5" fill="currentColor" />
                  <circle cx="18" cy="18" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg md:text-xl font-bold mb-3 group-hover:text-secondary transition-colors duration-500 tracking-tight">Data Engineering</h4>
                <p className="text-text-muted text-sm md:text-base leading-relaxed group-hover:text-text-secondary transition-colors duration-500 font-light">
                  Data pipelines, ETL/ELT, data warehousing, and real-time analytics for data-driven decisions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Portfolios Section */}
        <div className="mt-24 pt-20 border-t border-primary/20 relative">
          {/* Background decorations */}
          <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
          <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

          <div className="text-center mb-16 animate-fade-in-up relative z-10">
            <div className="inline-block mb-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 border border-primary/40 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-secondary rounded-full inline-block mr-3 animate-pulse-scale"></span>
              Expertise Breakdown
            </div>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">
              Service Portfolios
            </h3>
            <div className="divider w-20 mx-auto hover:w-32 transition-all duration-500"></div>
            <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto mt-6 font-medium">
              Comprehensive solutions across multiple domains and technologies
            </p>
          </div>

          {/* Portfolio Tabs - Enhanced Design */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 mb-20 relative z-10">
            {servicePortfolios.map((portfolio, index) => (
              <button
                key={portfolio.id}
                onClick={() => setExpandedCategory(expandedCategory === portfolio.id ? null : portfolio.id)}
                className={`relative group overflow-hidden rounded-3xl transition-all duration-600 animate-fade-in-up transform hover:-translate-y-2 ${
                  expandedCategory === portfolio.id
                    ? 'shadow-2xl shadow-primary/50 -translate-y-2 scale-105'
                    : 'hover:shadow-2xl hover:shadow-primary/30'
                }`}
                style={{animationDelay: `${0.05 * index}s`}}
              >
                <div className={`absolute inset-0 transition-all duration-600 ${
                  expandedCategory === portfolio.id
                    ? 'bg-gradient-to-br from-primary/50 via-primary/30 to-accent/25'
                    : 'bg-gradient-to-br from-primary/15 to-accent/8 group-hover:from-primary/25 group-hover:to-accent/15'
                }`}></div>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ${
                  expandedCategory === portfolio.id ? 'opacity-100' : ''
                } bg-gradient-to-t from-primary/15 to-transparent`}></div>
                <div className="relative p-6 md:p-8 border border-primary/40 rounded-3xl backdrop-blur-sm h-full flex flex-col items-center justify-center gap-3">
                  <div className={`text-5xl md:text-6xl transform transition-all duration-600 ${
                    expandedCategory === portfolio.id ? 'scale-150' : 'group-hover:scale-125'
                  }`}>{portfolio.icon}</div>
                  <div className={`text-xs md:text-sm font-bold uppercase tracking-widest text-center transition-all duration-400 ${
                    expandedCategory === portfolio.id ? 'text-primary' : 'text-text-secondary group-hover:text-primary'
                  }`}>{portfolio.name}</div>
                  {expandedCategory === portfolio.id && (
                    <div className="mt-3 w-10 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-pulse"></div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Expanded Portfolio Details - Enhanced */}
          {expandedCategory && (
            <div className="animate-fade-in-up relative z-10">
              {servicePortfolios.map((portfolio) => {
                if (portfolio.id !== expandedCategory) return null;

                return (
                  <div key={portfolio.id} className="space-y-6">
                    {/* Portfolio Title */}
                    <div className="mb-8">
                      <h4 className="text-3xl md:text-4xl font-black text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text uppercase tracking-tight mb-4">
                        {portfolio.name}
                      </h4>
                      <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    </div>

                    {/* Service Cards Grid */}
                    {portfolio.categories.map((category, idx) => (
                      <div
                        key={idx}
                        className="group relative overflow-hidden rounded-3xl border border-primary/30 backdrop-blur-sm hover:border-primary/70 transition-all duration-600 animate-fade-in-up transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/30"
                        style={{animationDelay: `${0.1 * idx}s`}}
                      >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/6 to-secondary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        {/* Animated Border Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-600 -z-10"></div>

                        <div className="relative p-6 md:p-10">
                          {/* Service Header */}
                          <div className="mb-10">
                            <div className="flex items-start gap-5 mb-4">
                              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary/50 to-secondary/25 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-primary/35 transition-all duration-600">
                                <svg className="w-8 h-8 md:w-10 md:h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <h5 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-400 mb-3 tracking-tight">
                                  {category.service}
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                  <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/25 to-primary/15 border border-primary/50 text-primary text-xs font-bold uppercase tracking-wider hover:border-primary/70 transition-all duration-300">
                                    Service
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Content Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Platforms/Tools */}
                            <div className="border-l-2 border-primary/30 pl-6 group/col">
                              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                                Platforms & Tools
                              </p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {category.platforms.split(',').slice(0, expandedPlatforms.has(`${expandedCategory}-${idx}`) ? undefined : 3).map((tool, i) => (
                                  <span
                                    key={i}
                                    className="inline-block px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-text-secondary text-xs font-medium group-hover/col:border-primary/40 transition-colors duration-300"
                                  >
                                    {tool.trim()}
                                  </span>
                                ))}
                                {category.platforms.split(',').length > 3 && (
                                  <button
                                    onClick={() => togglePlatformExpand(`${expandedCategory}-${idx}`)}
                                    className="inline-block px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-medium hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer"
                                  >
                                    {expandedPlatforms.has(`${expandedCategory}-${idx}`) ? '- Show less' : `+${category.platforms.split(',').length - 3} more`}
                                  </button>
                                )}
                              </div>
                              <p className="text-sm text-text-secondary leading-relaxed">
                                {category.platforms}
                              </p>
                            </div>

                            {/* Services Offered */}
                            <div className="border-l-2 border-accent/30 pl-6 group/col">
                              <p className="text-xs font-bold text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-gradient-to-r from-accent to-secondary rounded-full"></span>
                                Services Offered
                              </p>
                              <ul className="space-y-2 mb-4">
                                {category.offerings.split(',').slice(0, expandedServices.has(`${expandedCategory}-${idx}`) ? undefined : 3).map((offering, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                                    {offering.trim()}
                                  </li>
                                ))}
                                {category.offerings.split(',').length > 3 && (
                                  <button
                                    onClick={() => toggleServiceExpand(`${expandedCategory}-${idx}`)}
                                    className="flex items-start gap-2 text-sm text-accent font-medium hover:text-accent/80 transition-colors duration-300 cursor-pointer"
                                  >
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                                    {expandedServices.has(`${expandedCategory}-${idx}`) ? '- Show less services' : `+ ${category.offerings.split(',').length - 3} more services`}
                                  </button>
                                )}
                              </ul>
                              <p className="text-sm text-text-secondary leading-relaxed">
                                {category.offerings}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Stats Section - Enhanced */}
        <div className="mt-32 pt-24 border-t border-primary/25">
          <div className="text-center mb-20 animate-fade-in-up">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">Proven Expertise & Impact</h3>
            <div className="divider w-20 mx-auto hover:w-32 transition-all duration-500"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              { val: '4+', label: 'Years of Excellence', icon: '⏱️' },
              { val: '50+', label: 'Team Members', icon: '👨‍💼' },
              { val: '3', label: 'Global Locations', icon: '🌎' },
              { val: '100+', label: 'Projects Delivered', icon: '🚀' },
              { val: '2', label: 'Industry Awards', icon: '🏆' }
            ].map((s, i) => (
              <div key={s.label} className="gradient-card-subtle p-8 md:p-10 rounded-3xl text-center card-hover group animate-fade-in-up border-primary/40 relative overflow-hidden transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/25" style={{animationDelay: `${0.1 * (i + 1)}s`}}>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/15 to-primary/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-600 -z-10"></div>
                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl mb-4 group-hover:scale-125 transition-transform duration-600 inline-block">{s.icon}</div>
                  <div className="text-5xl md:text-6xl font-black text-transparent group-hover:scale-110 transition-transform duration-600 mb-4" style={{backgroundImage: 'linear-gradient(135deg, #1e3a8a 0%, #14b8a6 50%, #fbbf24 100%)', backgroundSize: '200% 200%', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'gradient-shift 6s ease infinite'}}>{s.val}</div>
                  <div className="text-xs md:text-sm uppercase tracking-widest text-text-muted group-hover:text-primary font-bold transition-colors duration-600">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
