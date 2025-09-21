import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import HeroSection from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";

export default function LandingPage() {
  return (
    <>
      <div className="grid-background"></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-28 xl:py-36 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center mb-8 sm:mb-12 md:mb-16">
            Powerful Features for Your Career Growth
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-colors duration-300 p-2 min-h-[240px] sm:min-h-[260px] md:min-h-[280px]"
              >
                <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 text-center flex flex-col items-center h-full">
                  <div className="flex flex-col items-center justify-center h-full space-y-3 sm:space-y-4">
                    <div className="text-3xl sm:text-4xl mb-2">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-3 md:space-y-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">50+</h3>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl">Industries Covered</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-3 md:space-y-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">1000+</h3>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl">Interview Questions</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-3 md:space-y-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">95%</h3>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl">Success Rate</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-3 md:space-y-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">24/7</h3>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl">AI Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">How It Works</h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              Four simple steps to accelerate your career growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-3 sm:space-y-4"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg sm:text-xl">{item.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
            {testimonial.map((testimonial, index) => (
              <Card key={index} className="bg-background p-2 min-h-[280px] sm:min-h-[300px] md:min-h-[320px]">
                <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8">
                  <div className="flex flex-col space-y-4 sm:space-y-6 h-full">
                    <div className="flex items-center space-x-4 sm:space-x-6 mb-3 sm:mb-4">
                      <div className="relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 flex-shrink-0">
                        <Image
                          width={64}
                          height={64}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-full object-cover border-2 border-primary/20"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-base sm:text-lg">{testimonial.author}</p>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-sm sm:text-base text-primary font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <blockquote className="flex-1">
                      <p className="text-muted-foreground italic relative text-sm sm:text-base md:text-lg leading-relaxed">
                        <span className="text-2xl sm:text-3xl md:text-4xl text-primary absolute -top-4 sm:-top-6 -left-2 sm:-left-3">
                          &quot;
                        </span>
                        {testimonial.quote}
                        <span className="text-2xl sm:text-3xl md:text-4xl text-primary absolute -bottom-4 sm:-bottom-6 right-0">
                          &quot;
                        </span>
                      </p>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full">
        <div className="mx-auto py-12 sm:py-16 md:py-20 lg:py-24 gradient rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-primary-foreground">
              Ready to Accelerate Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 text-sm sm:text-base md:text-lg lg:text-xl">
              Join thousands of professionals who are advancing their careers
              with AI-powered guidance.
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-10 sm:h-11 mt-4 sm:mt-5 animate-bounce text-sm sm:text-base px-4 sm:px-6"
              >
                Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
