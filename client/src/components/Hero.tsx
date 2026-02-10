import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Hero Section Component
 * Features:
 * - Asymmetric layout with text on left, image on right
 * - Animated background with parallax effect
 * - CTA buttons with hover lift animation
 * - Social media links with glassmorphism
 * - Scroll reveal animation
 */
export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 parallax z-0"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/Ya3dddqMQp75WfoZKlTdX2/sandbox/A1RtjEQuiVIaPmgUPFB7ZH-img-1_1770540448000_na1fn_aGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWEzZGRkcU1RcDc1V2ZvWktsVGRYMi9zYW5kYm94L0ExUnRqRVF1aVZJYVBtZ1VQRkI3WkgtaW1nLTFfMTc3MDU0MDQ0ODAwMF9uYTFmbl9hR1Z5YnkxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aBSaBZfjmpQGpYVOYJOf9B9GLS2JcejN11G4ex7nPdxJ6WoHz~QdGx5mG9lIjUnBZpIALphbZUmRv7rSdJkxgIn~n0Pd57kCea9j4Vb7Iu0~uFiJoJxYovYpscNy7u75L3hKTk3gvZ41Ti0s0ydOPVsgKszJzOZJmQD15~twwxVA0D7YCs8mmRYJWnF9axJcQMl2Tckgn12HoBQJxToIo7osRqJIzT1w8KZiPLjrtLuz2O3vWQ2NjDyM5Bim1Jwx-3aUah4aWskSzjNxyxBGq~~TzM20seU6tTQpaaj2Oz5A-RxLnfGzwLdeT4PzHIFb-C3DQoOrs~HWBodHnib~GA__')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div
          className={`space-y-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border backdrop-blur-sm w-fit">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <span className="text-sm font-medium text-accent">Available for Opportunities</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
               Cloud DevOps
              <br />
              <span className="gradient-text">Engineer</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Architecting scalable infrastructure, automating deployments, and optimizing cloud ecosystems. Specializing in Kubernetes, Docker, CI/CD pipelines, and infrastructure-as-code.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => handleSmoothScroll("#projects")}
              className="glass-card px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 bg-accent/20 border-accent hover:bg-accent/30 transition-all"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleSmoothScroll("#contact")}
              className="glass-card px-6 py-3 rounded-lg font-semibold hover:bg-card/80 transition-all"
            >
              Get in Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-6">
            <a
              href="#"
              className="glass-card p-3 rounded-lg hover:bg-card/80 transition-all glow-effect"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="glass-card p-3 rounded-lg hover:bg-card/80 transition-all glow-effect"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="glass-card p-3 rounded-lg hover:bg-card/80 transition-all glow-effect"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column - Decorative Element */}
        <div
          className={`hidden md:block transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative">
            {/* Floating Cards Stack */}
            <div className="space-y-4">
              <div className="glass-card p-6 rounded-lg transform hover:scale-105 transition-transform">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <p className="text-sm text-muted-foreground">Infrastructure Deployments</p>
              </div>
              <div className="glass-card p-6 rounded-lg ml-8 transform hover:scale-105 transition-transform">
                <div className="text-3xl font-bold gradient-text">99.9%</div>
                <p className="text-sm text-muted-foreground">System Uptime</p>
              </div>
              <div className="glass-card p-6 rounded-lg transform hover:scale-105 transition-transform">
                <div className="text-3xl font-bold gradient-text">8+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
