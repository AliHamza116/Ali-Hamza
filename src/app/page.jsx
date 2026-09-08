"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import TypedText from "@/components/TypedText";
import SectionDivider from "@/components/SectionDivider";
import ServicesSection from "@/components/sections/ServicesSection";
import ResumeSection from "@/components/sections/ResumeSection";
import WorkSection from "@/components/sections/WorkSection";
import ContactSection from "@/components/sections/ContactSection";

const Home = () => {
  return (
    <>
      {/* ── HOME ─────────────────────────────────────────────── */}
      <section id="home" className="min-h-screen flex flex-col justify-center">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <TypedText className="text-xl" />
              <h1 className="h1 mb-6">
                Hello I'm
                <br /> <span className="text-accent">Ali Hamza</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                BS Computer Science Graduate From GC University Fasialabad. I excel at crafting elegant digital experience and i am proficient
                in various programmming language and technologies.
              </p>
              {/* btn and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a href="/assets/ALI-HAMZA-CV.pdf" download>
                  <Button variant="outline" size="lg" className="uppercase flex gap-2">
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section id="services" className="pt-20 pb-16 xl:pt-24 xl:pb-24">
        <SectionDivider num="01" label="What I Offer" title="Services" />
        <div className="mt-14">
          <ServicesSection />
        </div>
      </section>

      {/* ── RESUME ───────────────────────────────────────────── */}
      <section id="resume" className="pt-20 pb-16 xl:pt-24 xl:pb-24">
        <SectionDivider num="02" label="My Background" title="Resume" />
        <div className="mt-14">
          <ResumeSection />
        </div>
      </section>

      {/* ── WORK ─────────────────────────────────────────────── */}
      <section id="work" className="pt-20 pb-16 xl:pt-24 xl:pb-24">
        <SectionDivider num="03" label="My Projects" title="Work" />
        <div className="mt-14">
          <WorkSection />
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="pt-20 pb-16 xl:pt-24 xl:pb-24">
        <SectionDivider num="04" label="Get In Touch" title="Contact" />
        <div className="mt-14">
          <ContactSection />
        </div>
      </section>
    </>
  );
};

export default Home;
