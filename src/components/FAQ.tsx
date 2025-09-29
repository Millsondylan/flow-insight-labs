import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, ChevronDown, MessageCircle, CreditCard, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

const FAQ = () => {
  useEffect(() => {
    import('aos').then(AOS => {
      AOS.default.init({
        duration: 1200,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
      });
    });
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does the AI Coach integration work?",
      answer: "Our AI Coach seamlessly integrates into your existing platform to analyze user-provided data and deliver personalized recommendations that enhance user performance and satisfaction. The integration is designed for effortless implementation with minimal disruption to your current operations."
    },
    {
      question: "What kind of data does the AI Coach analyze?",
      answer: "The AI Coach can analyze various types of user-provided data including behavioral patterns, performance metrics, usage trends, and historical data to deliver actionable insights. All data processing occurs within secure, compliant environments."
    },
    {
      question: "Can the AI Coach be customized for different industries?",
      answer: "Yes, our AI Coach is fully customizable and scalable across various industries. Whether you're in trading, e-commerce, logistics, or any other sector, we can tailor the AI recommendations to meet your specific business needs and requirements."
    },
    {
      question: "Is my data secure with your platform?",
      answer: "Absolutely. We implement enterprise-grade security measures including end-to-end encryption, secure data transmission, and strict access controls. Our privacy practices comply with GDPR, CCPA, and other major privacy regulations to ensure your data remains protected."
    },
    {
      question: "How long does it take to integrate the AI Coach?",
      answer: "The integration timeline varies based on your platform's complexity, but most integrations can be completed within 2-4 weeks. Our team provides comprehensive support throughout the process to ensure a smooth and successful implementation."
    },
    {
      question: "Do you offer support after implementation?",
      answer: "Yes, we provide ongoing support and maintenance to ensure optimal performance. Our 24/7 support team is available globally to assist with any questions or issues that may arise post-implementation."
    },
    {
      question: "What is the cost structure for the AI Coach?",
      answer: "We offer flexible pricing models based on your business size, usage volume, and customization requirements. Our pricing is designed to provide an excellent return on investment while remaining competitive in the market. Contact us for a personalized quote."
    },
    {
      question: "How does the Trading Journal Pro work?",
      answer: "Trading Journal Pro is an AI-powered journal that analyzes your trading data to deliver personalized insights, optimize entry and exit points, and identify profitable patterns. It's designed to revolutionize your trading strategy with data-driven recommendations."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="faq">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl wave-float-delay-1"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl wave-float"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-accent opacity-5 rounded-full blur-2xl wave-scroll-reverse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-gradient-glass px-4 py-2 rounded-full mb-6 shadow-soft">
            <HelpCircle className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Support</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Find answers to common questions about our AI-powered solutions, integration process, and services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4" data-aos="zoom-in" data-aos-delay="300">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="group shadow-soft hover:shadow-floating transition-spring transform hover:scale-[1.005] bg-gradient-card border-0 overflow-hidden relative wave-float shimmer-wave cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <CardHeader className="relative z-10 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="p-2 bg-gradient-primary rounded-lg shadow-glow group-hover:scale-110 transition-spring">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold group-hover:text-primary transition-smooth text-left">
                      {faq.question}
                    </CardTitle>
                  </div>
                  <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6 text-muted-foreground" />
                  </div>
                </div>
              </CardHeader>
              {openIndex === index && (
                <CardContent className="relative z-10 pb-6 px-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="500">
          <Card className="shadow-floating border-0 bg-gradient-card backdrop-blur-sm overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <ShieldCheck className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">Still Have Questions?</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our support team is here to help you every step of the way.
              </p>
              <a 
                href="mailto:Support@insight-flowai.com"
                className="inline-flex items-center gap-2 h-12 rounded-md px-8 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-smooth"
              >
                <span>Contact Support</span>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;