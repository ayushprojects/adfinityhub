"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import AnimatedText from "@/components/animated-text"
import FAQAccordion from "@/components/faq-accordion"

// Service-specific FAQs
const serviceFaqs = {
  seo: [
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO is a long-term strategy that typically takes 3-6 months to show significant results. However, this timeline can vary based on factors like your industry competition, website history, and the current state of your site. We focus on both quick wins and sustainable long-term improvements.",
    },
    {
      question: "What SEO strategies do you implement?",
      answer:
        "Our comprehensive SEO approach includes technical SEO (site speed, mobile-friendliness, indexability), on-page optimization (content, keywords, meta tags), off-page strategies (link building, brand mentions), local SEO, and content marketing. We customize our strategy based on your specific business needs and goals.",
    },
    {
      question: "How do you stay updated with search engine algorithm changes?",
      answer:
        "Our SEO team constantly monitors industry news, search engine announcements, and algorithm updates. We participate in professional communities, attend conferences, and conduct regular testing to understand how changes affect rankings. This proactive approach ensures your SEO strategy remains effective even as algorithms evolve.",
    },
    {
      question: "Do you provide regular SEO reports?",
      answer:
        "Yes, we provide detailed monthly reports that track key performance indicators like organic traffic, keyword rankings, conversion rates, and more. These reports include actionable insights and recommendations for continued improvement. We also schedule regular review meetings to discuss progress and strategy adjustments.",
    },
    {
      question: "What makes your SEO services different from other agencies?",
      answer:
        "Our SEO approach combines data-driven strategies with AI-powered analysis to identify opportunities that others miss. We focus on business outcomes rather than just rankings, ensuring that SEO efforts translate to actual revenue growth. Additionally, our transparent communication and educational approach help you understand exactly what we're doing and why.",
    },
  ],
  "email-marketing": [
    {
      question: "How do you build and grow email lists?",
      answer:
        "We implement various strategies to build quality email lists, including optimized sign-up forms, lead magnets, content upgrades, social media integration, and targeted landing pages. We focus on attracting engaged subscribers who are genuinely interested in your offerings, ensuring higher open rates and conversions.",
    },
    {
      question: "What metrics do you track for email campaigns?",
      answer:
        "We track comprehensive metrics including open rates, click-through rates, conversion rates, bounce rates, list growth rate, email sharing/forwarding rate, overall ROI, and unsubscribe rates. These insights help us continuously refine your email strategy for maximum effectiveness.",
    },
    {
      question: "How do you personalize email campaigns?",
      answer:
        "Our personalization goes beyond just using the recipient's name. We segment your audience based on behavior, preferences, purchase history, and engagement levels. We then create dynamic content that adapts to each segment, delivering relevant messages that resonate with your subscribers' specific interests and needs.",
    },
    {
      question: "How often should emails be sent to subscribers?",
      answer:
        "The optimal email frequency depends on your industry, audience preferences, and content quality. We conduct testing to determine the ideal sending frequency for your specific audience, balancing regular engagement without overwhelming subscribers. Our goal is to maintain high engagement while minimizing unsubscribes.",
    },
    {
      question: "Can you integrate email marketing with our other marketing channels?",
      answer:
        "Absolutely. We create omnichannel strategies that integrate your email marketing with social media, content marketing, PPC, and other channels. This creates a cohesive customer journey and reinforces your messaging across multiple touchpoints, significantly improving overall campaign effectiveness.",
    },
  ],
  "social-media": [
    {
      question: "Which social media platforms should my business be on?",
      answer:
        "The ideal platforms depend on your business goals, target audience, industry, and resources. We conduct thorough audience research to determine where your potential customers spend their time and which platforms align with your brand. Quality engagement on a few relevant platforms is more effective than a scattered presence across many.",
    },
    {
      question: "How often should we post on social media?",
      answer:
        "Posting frequency varies by platform and audience expectations. We develop a customized content calendar based on platform best practices, your resources, and audience engagement patterns. Consistency is more important than frequency—we focus on regular, quality content rather than overwhelming your audience.",
    },
    {
      question: "How do you measure social media ROI?",
      answer:
        "We track both platform-specific metrics (engagement, reach, followers) and business impact metrics (website traffic, lead generation, conversions). We implement proper tracking and attribution models to connect social media efforts to actual business outcomes, providing clear insights into your social media ROI.",
    },
    {
      question: "What type of content works best on social media?",
      answer:
        "Effective content varies by platform and audience, but generally, authentic, value-driven content performs best. We create a mix of educational, entertaining, and promotional content, with emphasis on visual elements like images, videos, and infographics. We continuously test different formats to identify what resonates most with your specific audience.",
    },
    {
      question: "How do you handle negative comments or criticism on social media?",
      answer:
        "We develop a clear response protocol for different types of feedback. For legitimate concerns, we respond promptly, professionally, and move conversations to private channels when appropriate. For trolls or inappropriate comments, we have strategies to address these without escalating issues. Our approach maintains your brand reputation while showing that you value customer feedback.",
    },
  ],
  "web-development": [
    {
      question: "How long does it take to build a website?",
      answer:
        "Website development timelines vary based on complexity, ranging from 4-6 weeks for simpler sites to 3-6 months for complex e-commerce or custom web applications. We provide a detailed timeline during the discovery phase after understanding your specific requirements and scope.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely. All our websites are built with responsive design principles, ensuring they function and look great on all devices—smartphones, tablets, and desktops. We test extensively across multiple device types and screen sizes to guarantee a seamless experience for all users.",
    },
    {
      question: "Do you provide website maintenance after launch?",
      answer:
        "Yes, we offer ongoing maintenance packages that include security updates, performance optimization, content updates, and technical support. Regular maintenance is crucial for keeping your site secure, fast, and functioning properly as technologies evolve.",
    },
    {
      question: "How do you ensure websites are secure?",
      answer:
        "We implement multiple security measures including SSL certificates, secure hosting environments, regular security updates, malware scanning, and secure authentication systems. For e-commerce sites, we ensure PCI compliance and implement additional security layers to protect customer data.",
    },
    {
      question: "Can you integrate third-party tools and systems with my website?",
      answer:
        "Yes, we specialize in integrating various third-party systems including CRMs, email marketing platforms, payment gateways, inventory management systems, booking systems, and more. We ensure these integrations work seamlessly with your website to create efficient workflows and enhanced functionality.",
    },
  ],
  ecommerce: [
    {
      question: "Which e-commerce platform do you recommend?",
      answer:
        "Our platform recommendations are based on your specific business needs, budget, technical requirements, and growth plans. We work with leading platforms like Shopify, WooCommerce, Magento, and BigCommerce. We'll help you select the platform that best aligns with your product complexity, customization needs, and scalability requirements.",
    },
    {
      question: "How do you optimize e-commerce conversion rates?",
      answer:
        "We implement multiple strategies including streamlined checkout processes, persuasive product descriptions, high-quality images, clear pricing, trust signals, mobile optimization, and personalized recommendations. We continuously test and refine these elements based on user behavior data to maximize your conversion rates.",
    },
    {
      question: "Can you help with product photography and descriptions?",
      answer:
        "Yes, we offer comprehensive product content services including professional photography, 360° product views, detailed and SEO-optimized product descriptions, and specification sheets. High-quality product content is crucial for conversions, and we ensure yours stands out in the competitive e-commerce landscape.",
    },
    {
      question: "How do you handle shipping and tax configurations?",
      answer:
        "We set up flexible shipping rules based on your business model, including flat rates, weight-based, location-based, or free shipping thresholds. For taxes, we configure the system to automatically calculate the correct rates based on location and product type, ensuring compliance with relevant tax regulations.",
    },
    {
      question: "What strategies do you use to reduce cart abandonment?",
      answer:
        "We implement multiple tactics including exit-intent popups, abandoned cart email sequences, simplified checkout processes, multiple payment options, transparent shipping costs, guest checkout options, and retargeting campaigns. These strategies work together to recover potentially lost sales and improve overall conversion rates.",
    },
  ],
  ppc: [
    {
      question: "How much should I budget for PPC advertising?",
      answer:
        "PPC budgets vary widely based on industry, competition, and goals. We typically recommend starting with a test budget (often $1,000-$3,000 per month) to gather data, then scaling based on performance. We work with you to determine an appropriate budget that balances your goals with realistic market costs.",
    },
    {
      question: "How long does it take to see results from PPC campaigns?",
      answer:
        "Unlike SEO, PPC can generate immediate traffic once campaigns are live. However, optimization for maximum ROI typically takes 2-3 months as we gather data, refine targeting, improve quality scores, and optimize landing pages. We focus on quick wins while building toward long-term performance improvements.",
    },
    {
      question: "Which PPC platforms do you work with?",
      answer:
        "We manage campaigns across all major platforms including Google Ads, Microsoft Ads, Facebook/Instagram Ads, LinkedIn Ads, Twitter Ads, and Amazon Advertising. We recommend the most appropriate platforms based on your target audience, industry, and specific marketing objectives.",
    },
    {
      question: "How do you measure PPC campaign success?",
      answer:
        "We track comprehensive metrics beyond just clicks and impressions, focusing on conversion rates, cost per acquisition, return on ad spend (ROAS), quality scores, and overall ROI. We set up proper conversion tracking and attribution to ensure you know exactly what results your PPC investment is generating.",
    },
    {
      question: "How often do you optimize PPC campaigns?",
      answer:
        "We perform regular optimizations based on campaign size and performance. This includes weekly bid adjustments, ongoing keyword refinement, ad copy testing, audience targeting improvements, and landing page optimizations. Larger accounts receive more frequent attention, but all campaigns are continuously monitored and improved.",
    },
  ],
  pr: [
    {
      question: "How do you measure the success of PR campaigns?",
      answer:
        "We track multiple metrics including media mentions, publication quality and relevance, sentiment analysis, message penetration, website traffic from PR activities, social media engagement with PR content, and lead generation attributed to PR efforts. We provide comprehensive reports that demonstrate the tangible impact of your PR investments.",
    },
    {
      question: "How do you handle PR during a crisis?",
      answer:
        "We develop proactive crisis management plans that include response protocols, spokesperson training, message development, and communication channels. When crises occur, we provide rapid response support, media monitoring, strategic guidance, and reputation management to minimize negative impact and maintain stakeholder trust.",
    },
    {
      question: "What media relationships do you have?",
      answer:
        "We maintain strong relationships with journalists, editors, and influencers across various industries and media types. Our network includes contacts at major publications, industry-specific outlets, broadcast media, and online platforms. We leverage these relationships to secure quality coverage for our clients.",
    },
    {
      question: "Do you handle social media as part of PR services?",
      answer:
        "Yes, our integrated approach includes social media as a crucial PR channel. We develop strategies for announcement amplification, influencer partnerships, community engagement, and crisis management across social platforms. This ensures consistent messaging and maximizes the reach of your PR efforts.",
    },
    {
      question: "How do you develop PR strategies for different industries?",
      answer:
        "We conduct thorough research into your industry landscape, including media consumption patterns, competitor activities, and industry trends. We then develop customized strategies that align with industry norms while helping you stand out. Our team includes specialists with experience across various sectors to ensure industry-appropriate approaches.",
    },
  ],
  influencer: [
    {
      question: "How do you select the right influencers for a brand?",
      answer:
        "We use a comprehensive vetting process that evaluates audience demographics, engagement quality, content authenticity, values alignment with your brand, and performance history. We look beyond follower counts to ensure influencers have genuine influence with your target audience and represent a good cultural fit with your brand.",
    },
    {
      question: "What size influencers do you work with?",
      answer:
        "We work with influencers across all tiers—nano (1K-10K followers), micro (10K-100K), macro (100K-1M), and celebrity (1M+). Often, a mix of different tiers creates the most effective strategy, combining the high engagement of smaller influencers with the reach of larger ones. We recommend the optimal mix based on your specific goals and budget.",
    },
    {
      question: "How do you measure influencer marketing ROI?",
      answer:
        "We track both engagement metrics (likes, comments, shares) and conversion metrics (clicks, sign-ups, sales) using unique tracking links, promo codes, and UTM parameters. We also measure brand sentiment, audience growth, and content value. This comprehensive approach ensures you understand the full impact of your influencer investments.",
    },
    {
      question: "What types of influencer campaigns do you create?",
      answer:
        "We develop various campaign types including product reviews, brand ambassadorships, account takeovers, co-created content, affiliate partnerships, event coverage, and educational content. The specific approach depends on your goals, whether that's brand awareness, product launches, community building, or direct sales.",
    },
    {
      question: "How do you ensure influencer content aligns with our brand?",
      answer:
        "We create detailed briefs that communicate your brand guidelines, key messages, and campaign objectives while still allowing creative freedom. We review content before publication when appropriate, but also focus on selecting influencers whose natural style and voice align with your brand to ensure authentic content that resonates with audiences.",
    },
  ],
  ai: [
    {
      question: "How can AI improve our marketing efforts?",
      answer:
        "AI enhances marketing through predictive analytics for better targeting, content optimization, personalization at scale, automated campaign management, customer journey mapping, and advanced performance analysis. These capabilities lead to more efficient spending, higher conversion rates, and improved customer experiences.",
    },
    {
      question: "Do we need technical expertise to implement AI marketing solutions?",
      answer:
        "No, we handle the technical implementation and provide user-friendly interfaces for your team. We also offer training and ongoing support to ensure you can effectively use the insights and tools. Our goal is to make AI accessible regardless of your team's technical background.",
    },
    {
      question: "How do you ensure AI recommendations are brand-appropriate?",
      answer:
        "We implement guardrails and human oversight in all AI systems. Our approach combines AI efficiency with human creativity and brand knowledge. We train AI systems with your brand guidelines, tone of voice, and values, then have experienced marketers review AI outputs to ensure brand consistency and quality.",
    },
    {
      question: "What data do you need to implement AI marketing solutions?",
      answer:
        "The specific data requirements depend on the application, but generally include customer behavior data, conversion information, content performance metrics, and customer feedback. We work with whatever data you currently have available, while also helping you implement better data collection practices for future improvements.",
    },
    {
      question: "How do you address privacy concerns with AI marketing?",
      answer:
        "We prioritize privacy by implementing data anonymization, securing data storage, obtaining proper consent, and ensuring compliance with regulations like GDPR and CCPA. Our AI solutions are designed to be effective while respecting user privacy and maintaining trust with your customers.",
    },
  ],
}

const serviceData = {
  seo: {
    title: "SEO Optimization",
    description: "Boost your search engine rankings and drive organic traffic to your website.",
    icon: "🔍",
    features: [
      "Comprehensive SEO Audit",
      "Keyword Research & Strategy",
      "On-Page SEO Optimization",
      "Technical SEO Improvements",
      "Content Strategy & Creation",
      "Link Building & Outreach",
      "Local SEO Optimization",
      "Regular Performance Reporting",
    ],
    benefits: [
      "Increased Organic Traffic",
      "Higher Search Engine Rankings",
      "Improved Website Visibility",
      "Better User Experience",
      "Higher Conversion Rates",
      "Long-term Sustainable Results",
    ],
  },
  "email-marketing": {
    title: "Email Marketing",
    description: "Create targeted email campaigns that engage your audience and drive conversions.",
    icon: "📧",
    features: [
      "Email Strategy Development",
      "List Building & Segmentation",
      "Campaign Creation & Design",
      "Automated Email Sequences",
      "A/B Testing & Optimization",
      "Personalization & Dynamic Content",
      "Performance Analytics",
      "Deliverability Monitoring",
    ],
    benefits: [
      "Higher Engagement Rates",
      "Increased Customer Retention",
      "Improved Conversion Rates",
      "Better ROI on Marketing Spend",
      "Personalized Customer Experience",
      "Valuable Customer Insights",
    ],
  },
  "social-media": {
    title: "Social Media Marketing",
    description: "Build a strong social presence and engage with your audience across platforms.",
    icon: "📱",
    features: [
      "Social Media Strategy",
      "Content Creation & Curation",
      "Community Management",
      "Paid Social Advertising",
      "Influencer Partnerships",
      "Social Listening & Monitoring",
      "Analytics & Reporting",
      "Platform-Specific Optimization",
    ],
    benefits: [
      "Increased Brand Awareness",
      "Stronger Customer Relationships",
      "Higher Website Traffic",
      "Improved Customer Insights",
      "Enhanced Brand Loyalty",
      "Competitive Advantage",
    ],
  },
  "web-development": {
    title: "Web Development",
    description: "Create stunning, responsive websites that convert visitors into customers.",
    icon: "💻",
    features: [
      "Custom Website Design",
      "Responsive Development",
      "E-commerce Integration",
      "CMS Implementation",
      "Performance Optimization",
      "SEO-Friendly Structure",
      "Security Implementation",
      "Ongoing Maintenance & Support",
    ],
    benefits: [
      "Professional Online Presence",
      "Improved User Experience",
      "Faster Loading Times",
      "Higher Conversion Rates",
      "Mobile-Friendly Design",
      "Scalable Web Solutions",
    ],
  },
  ecommerce: {
    title: "E-commerce Solutions",
    description: "Optimize your online store for maximum sales and customer satisfaction.",
    icon: "🛒",
    features: [
      "E-commerce Platform Development",
      "Product Catalog Management",
      "Payment Gateway Integration",
      "Shopping Cart Optimization",
      "Inventory Management",
      "Order Processing Automation",
      "Mobile Commerce Solutions",
      "Customer Account Management",
    ],
    benefits: [
      "Increased Online Sales",
      "Streamlined Checkout Process",
      "Enhanced Customer Experience",
      "Reduced Cart Abandonment",
      "Improved Inventory Management",
      "Scalable Growth Solutions",
    ],
  },
  ppc: {
    title: "Pay Per Click Advertising",
    description: "Drive targeted traffic and generate leads with strategic PPC campaigns.",
    icon: "👆",
    features: [
      "PPC Strategy Development",
      "Keyword Research & Analysis",
      "Ad Copy Creation",
      "Landing Page Optimization",
      "Bid Management & Optimization",
      "A/B Testing",
      "Conversion Tracking",
      "Performance Reporting",
    ],
    benefits: [
      "Immediate Traffic Generation",
      "Highly Targeted Advertising",
      "Measurable ROI",
      "Flexible Budget Control",
      "Brand Visibility",
      "Competitive Advantage",
    ],
  },
  pr: {
    title: "PR Handling",
    description: "Build and maintain a positive brand image through strategic public relations.",
    icon: "📢",
    features: [
      "PR Strategy Development",
      "Media Relations",
      "Press Release Creation & Distribution",
      "Crisis Management",
      "Reputation Management",
      "Event Planning & Promotion",
      "Thought Leadership Development",
      "Media Monitoring & Analysis",
    ],
    benefits: [
      "Enhanced Brand Reputation",
      "Increased Media Coverage",
      "Stronger Industry Relationships",
      "Crisis Preparedness",
      "Thought Leadership Positioning",
      "Improved Stakeholder Trust",
    ],
  },
  influencer: {
    title: "Influencer Marketing",
    description: "Leverage the power of influencers to reach new audiences and build trust.",
    icon: "🌟",
    features: [
      "Influencer Strategy Development",
      "Influencer Identification & Vetting",
      "Campaign Planning & Execution",
      "Content Collaboration",
      "Performance Tracking",
      "Relationship Management",
      "Compliance & Disclosure Guidance",
      "ROI Analysis",
    ],
    benefits: [
      "Expanded Audience Reach",
      "Authentic Brand Promotion",
      "Increased Social Proof",
      "Higher Engagement Rates",
      "Improved Conversion Rates",
      "Fresh Content Generation",
    ],
  },
  ai: {
    title: "AI Solutions",
    description: "Harness the power of artificial intelligence to transform your marketing strategy.",
    icon: "🤖",
    features: [
      "AI Strategy Development",
      "Predictive Analytics",
      "Automated Content Generation",
      "Chatbot Implementation",
      "Personalization Engines",
      "Customer Insights & Analysis",
      "AI-Powered Optimization",
      "Machine Learning Integration",
    ],
    benefits: [
      "Enhanced Customer Experience",
      "Data-Driven Decision Making",
      "Improved Marketing Efficiency",
      "Personalized Customer Journeys",
      "Predictive Customer Insights",
      "Competitive Advantage",
    ],
  },
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const [service, setService] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get service data based on the slug
    const serviceSlug = params.service
    if (serviceData[serviceSlug as keyof typeof serviceData]) {
      setService(serviceData[serviceSlug as keyof typeof serviceData])
    }
    setLoading(false)
  }, [params.service])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-32 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="text-gray-400 mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <a href="/">Return Home</a>
        </Button>
      </div>
    )
  }

  // Get the FAQs for this specific service
  const faqs = serviceFaqs[params.service as keyof typeof serviceFaqs] || []

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="text-5xl mb-6">{service.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            <AnimatedText
              text={[service.title, "Expert Solutions", "Premium Service", "Strategic Approach"]}
              className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
            />
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">{service.description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-purple-500 text-white hover:bg-purple-900/20">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </motion.div>

        {/* Features Section */}
        <section className="py-16" id="features">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
              Our Approach
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-purple-400">{service.title}</span> Includes
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your specific business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-[#0c0515]/70 border-purple-900/50 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 bg-purple-500/20 p-2 rounded-full">
                        <Check className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">{feature}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-[#050508]/70 rounded-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
              Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our <span className="text-purple-400">{service.title}</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">See the impact our services can have on your business</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.benefits.map((benefit: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-6 border border-purple-500/10"
              >
                <h3 className="font-semibold text-lg mb-2 text-purple-300">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <section className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <Badge variant="outline" className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
                Got Questions?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions About <span className="text-purple-400">{service.title}</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Find answers to common questions about our {service.title.toLowerCase()} services
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <FAQAccordion faqs={faqs} />
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-purple-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your {service.title} Strategy?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch with our experts today and discover how we can help you achieve your business goals.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
