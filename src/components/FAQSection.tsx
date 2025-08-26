
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export const FAQSection = () => {
  return (
    <section className="py-16 px-4 lg:px-16" style={{ backgroundColor: '#faf8f1' }}>
      <div className="max-w-6xl mx-auto">
        {/* Desktop Two-Column Layout */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Left Column - Section Title */}
          <div className="lg:col-span-4 mb-8 lg:mb-0">
            <h2 className="font-unna text-3xl lg:text-4xl mb-4" style={{ color: '#798660' }}>
              Your Questions, Answered
            </h2>
            <p className="font-satoshi text-base" style={{ color: '#798660' }}>
              Need Help? <a href="#contact" className="underline hover:opacity-80">Get in touch with us here →</a>
            </p>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-200">
                <AccordionTrigger className="font-satoshi font-bold text-left py-6" style={{ color: '#393f2d' }}>
                  What is included in the Weight Diagnosis Plan?
                </AccordionTrigger>
                <AccordionContent className="font-satoshi pb-6" style={{ color: '#434a35' }}>
                  <div className="space-y-4">
                    <p>Your plan is a complete diagnostic package designed to give you clarity. It includes:</p>
                    <ul className="space-y-2 ml-4">
                      <li>• A Full Body Blood Test (at home)</li>
                      <li>• A 1-on-1 Video Consultation with an Endocrinologist</li>
                      <li>• A Personal Counseling Session with a Nutritionist</li>
                      <li>• A 7-Day Starter Meal Plan</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="font-satoshi font-bold text-left py-6" style={{ color: '#393f2d' }}>
                  How do I get started after I pay?
                </AccordionTrigger>
                <AccordionContent className="font-satoshi pb-6" style={{ color: '#434a35' }}>
                  The process is simple and we guide you every step of the way. After your purchase, one of our Care Coordinators will reach out to you on WhatsApp within a few hours to confirm your details and schedule a convenient time for your at-home blood test.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="font-satoshi font-bold text-left py-6" style={{ color: '#393f2d' }}>
                  What are the next steps after my diagnosis?
                </AccordionTrigger>
                <AccordionContent className="font-satoshi pb-6" style={{ color: '#434a35' }}>
                  <div className="space-y-6">
                    <p>Your diagnosis is the essential first step on your path to sustainable weight loss. It provides the medical blueprint for your journey. Based on your results, your doctor will recommend the best path forward.</p>
                    
                    <div>
                      <h4 className="font-bold mb-2" style={{ color: '#393f2d' }}>Step 1: Get Your Diagnosis</h4>
                      <p>This plan helps you and your doctor find the real, biological reason behind your weight challenges. By analyzing your blood work and health history, we create a clear picture of your body's unique needs.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-2" style={{ color: '#393f2d' }}>Step 2: Start Your Personalized Program</h4>
                      <p>After your diagnosis, the next step is to begin a full program tailored to you. This is typically a medically-guided program that may include lifestyle changes and, if appropriate, doctor-prescribed medication to help manage your body's biology for lasting results.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-200">
                <AccordionTrigger className="font-satoshi font-bold text-left py-6" style={{ color: '#393f2d' }}>
                  Is this plan safe and trustworthy?
                </AccordionTrigger>
                <AccordionContent className="font-satoshi pb-6" style={{ color: '#434a35' }}>
                  Absolutely. Every part of our plan is designed and overseen by our team of medical experts, including specialist doctors and senior nutritionists. We use only NABL-certified labs for all our tests to ensure the highest standards of accuracy and safety.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
