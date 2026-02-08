import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useEffect } from "react";

/**
 * Home Page Component
 * Main landing page for the Cloud DevOps Portfolio
 *
 * Features:
 * - Navigation with smooth scroll and theme toggle
 * - Hero section with animated background
 * - Technical skills in bento grid layout
 * - Featured projects gallery
 * - Experience timeline
 * - Contact section with form
 * - Smooth scroll reveal animations
 *
 * Architecture:
 * - Modular component structure for maintainability
 * - Intersection Observer API for scroll-based animations
 * - Glassmorphism design throughout
 * - Responsive mobile-first layout
 */
export default function Home() {
  useEffect(() => {
    // Initialize scroll reveal animations
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <Hero />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  );
}
