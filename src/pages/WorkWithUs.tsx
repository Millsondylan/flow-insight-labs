import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Briefcase, Sparkles, Code, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { disableAOS } from "@/utils/aosConfig";
import { useEffect } from "react";

import { AnimationProvider } from "@/contexts/AnimationContext";



const WorkWithUs = () => {

  const navigate = useNavigate();



  return (

    <AnimationProvider enabled={false}>

      <div className="min-h-screen bg-background">

        <Navigation />



        <main>

          {/* Services Overview Section */}

          <section className="py-20 pt-32 bg-background relative overflow-hidden">

            {/* Background decorative elements */}

            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-primary opacity-8 rounded-full blur-3xl wave-float-delay-2"></div>

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent opacity-8 rounded-full blur-3xl wave-float"></div>

            <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-primary opacity-5 rounded-full blur-2xl wave-scroll-reverse"></div>



            <div className="container mx-auto px-4 relative z-10">

              <div className="text-center mb-16" data-aos="fade-up">

                <div className="inline-flex items-center gap-2 bg-gradient-glass px-4 py-2 rounded-full mb-6 shadow-soft">

                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />

                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Our Services</span>

                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">

                  Complete Digital Solutions

                </h2>

                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">

                  Choose the service that best fits your needs. Each service has its own dedicated page with detailed information and specialized forms.

                </p>

              </div>



              <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

                {/* Website Development Card */}

                <div

                  className="group bg-gradient-card p-8 rounded-3xl shadow-soft hover:shadow-floating transition-spring cursor-pointer border border-border/30 backdrop-blur-sm wave-float shimmer-wave relative overflow-hidden"

                  data-aos="fade-up"

                  data-aos-delay="200"

                  onClick={() => navigate('/website-development')}

                >

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>

                  <div className="relative z-10">

                    <div className="p-4 bg-gradient-primary rounded-2xl w-fit mb-6 shadow-glow group-hover:scale-110 transition-spring">

                      <Code className="w-8 h-8 text-white" />

                    </div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-smooth">

                      Website Development

                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-6">

                      Custom websites built with modern technology. Fast, responsive, and designed to turn visitors into customers.

                    </p>

                    <div className="space-y-3 mb-6">

                      <div className="flex items-center gap-3">

                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />

                        <span className="text-sm">Modern React & TypeScript</span>

                      </div>

                      <div className="flex items-center gap-3">

                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />

                        <span className="text-sm">Performance Optimized</span>

                      </div>

                      <div className="flex items-center gap-3">

                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />

                        <span className="text-sm">SEO & Mobile Ready</span>

                      </div>

                    </div>

                    <Button variant="premium" className="w-full group-hover:shadow-glow transition-spring">

                      Start Your Project

                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-spring" />

                    </Button>

                  </div>

                </div>



                {/* App Development Card */}

                <div

                  className="group bg-gradient-card p-8 rounded-3xl shadow-soft hover:shadow-floating transition-spring cursor-pointer border border-border/30 backdrop-blur-sm wave-scroll shimmer-wave relative overflow-hidden"

                  data-aos="fade-up"

                  data-aos-delay="400"

                  onClick={() => navigate('/app-development')}

                >

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>

                  <div className="relative z-10">

                    <div className="p-4 bg-gradient-primary rounded-2xl w-fit mb-6 shadow-glow group-hover:scale-110 transition-spring">

                      <Lightbulb className="w-8 h-8 text-white" />

                    </div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-smooth">

                      Custom App Development

                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-6">

                      Turn your ideas into working applications. We work with you to build exactly what you need.

                    </p>

                    <div className="space-y-3 mb-6">

                      <div className="flex items-center gap-3">

                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />

                        <span className="text-sm">AI-Powered Solutions</span>

                      </div>

                      <div className="flex items-center gap-3">

                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />

                        <span className="text-sm">Cross-Platform Development</span>

                      </div>

                      <div className="flex items-center gap-3">

                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />

                        <span className="text-sm">Scalable Architecture</span>

                      </div>

                    </div>

                    <Button variant="premium" className="w-full group-hover:shadow-glow transition-spring">

                      Share Your Idea

                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-spring" />

                    </Button>

                  </div>

                </div>



              </div>



              {/* Value Proposition Section */}

              <div className="mt-20 max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-delay="800">

                <div className="bg-gradient-card p-10 rounded-3xl shadow-floating border border-border/50 backdrop-blur-sm wave-float-delay-1 shimmer-wave">

                  <h3 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">

                    Why Choose Insight Flow AI?

                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">

                    <div className="space-y-4">

                      <div className="flex items-center gap-3">

                        <div className="p-2 bg-gradient-primary rounded-lg">

                          <CheckCircle className="w-5 h-5 text-white" />

                        </div>

                        <span className="text-lg font-medium">End-to-End Solutions</span>

                      </div>

                      <div className="flex items-center gap-3">

                        <div className="p-2 bg-gradient-primary rounded-lg">

                          <CheckCircle className="w-5 h-5 text-white" />

                        </div>

                        <span className="text-lg font-medium">AI-First Approach</span>

                      </div>

                    </div>

                    <div className="space-y-4">

                      <div className="flex items-center gap-3">

                        <div className="p-2 bg-gradient-primary rounded-lg">

                          <CheckCircle className="w-5 h-5 text-white" />

                        </div>

                        <span className="text-lg font-medium">Proven Track Record</span>

                      </div>

                      <div className="flex items-center gap-3">

                        <div className="p-2 bg-gradient-primary rounded-lg">

                          <CheckCircle className="w-5 h-5 text-white" />

                        </div>

                        <span className="text-lg font-medium">Ongoing Support</span>

                      </div>

                    </div>

                  </div>

                </div>

              </div>



              {/* Call to Action */}

              <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="1000">

                <div className="max-w-3xl mx-auto space-y-6">

                  <h3 className="text-2xl font-bold text-foreground">

                    Ready to Transform Your Business?

                  </h3>

                  <p className="text-lg text-muted-foreground">

                    Pick the service that fits your needs, or contact us to discuss a solution built just for you.

                  </p>

                  <Button

                    variant="outline"

                    size="lg"

                    className="group shadow-soft hover:shadow-floating transition-spring"

                    onClick={() => navigate('/contact')}

                  >

                    <Briefcase className="w-5 h-5 mr-2 group-hover:scale-110 transition-spring" />

                    <span>Get in Touch</span>

                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-spring" />

                  </Button>

                </div>

              </div>

            </div>

          </section>

        </main>



        <Footer />

      </div>

    </AnimationProvider>

  );

};

export default WorkWithUs;