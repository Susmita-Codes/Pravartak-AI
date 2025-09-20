"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LiquidEther from "@/components/ui/liquid-ether";

const HeroSection = () => {

  return (
    <section className="w-full pt-36 md:pt-48 pb-10 relative min-h-screen overflow-hidden">
      {/* Liquid Ether Background */}
      <div className="absolute inset-0 w-full h-full">
        <LiquidEther 
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          className="opacity-80"
        />
      </div>
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40"></div>
      
      {/* Content Layer */}
      <div className="space-y-12 text-center relative z-10">
        <div className="space-y-8 mx-auto max-w-7xl px-4">
          <h1 className="text-6xl font-bold md:text-7xl lg:text-8xl xl:text-9xl gradient-title animate-gradient drop-shadow-lg">
            Your AI Career Coach for
            <br />
            <span className="text-white drop-shadow-xl">Professional Success</span>
          </h1>
          <p className="mx-auto max-w-[800px] text-white/90 text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed drop-shadow-md font-medium">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>
        <div className="flex justify-center space-x-6">
          <Link href="/dashboard">
            <Button className="px-12 py-4 text-lg md:text-xl bg-white text-gray-900 hover:bg-gray-100 shadow-2xl backdrop-blur-sm font-semibold h-14 md:h-16 rounded-xl">
              Get Started
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="outline" className="px-12 py-4 text-lg md:text-xl border-white/70 text-white hover:bg-white/20 hover:text-white shadow-xl backdrop-blur-sm font-semibold h-14 md:h-16 rounded-xl border-2">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
