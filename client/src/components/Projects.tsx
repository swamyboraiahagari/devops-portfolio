import { ArrowUpRight, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * Projects Section Component
 * Features:
 * - Project gallery with glassmorphic cards
 * - Hover animations with image preview
 * - Technology tags for each project
 * - Scroll reveal animations
 * - Links to GitHub and live demos
 */
export default function Projects() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleItems((prev) => new Set(Array.from(prev).concat(index)));
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Kubernetes Multi-Cloud Platform",
      description:
        "Architected and deployed a highly available Kubernetes cluster spanning AWS, Azure, and GCP with automated failover and load balancing.",
      technologies: ["Kubernetes", "Terraform", "AWS", "Azure", "GCP"],
      link: "#",
      github: "#",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/Ya3dddqMQp75WfoZKlTdX2/sandbox/A1RtjEQuiVIaPmgUPFB7ZH-img-3_1770540455000_na1fn_cHJvamVjdHMtc2hvd2Nhc2U.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWEzZGRkcU1RcDc1V2ZvWktsVGRYMi9zYW5kYm94L0ExUnRqRVF1aVZJYVBtZ1VQRkI3WkgtaW1nLTNfMTc3MDU0MDQ1NTAwMF9uYTFmbl9jSEp2YW1WamRITXRjMmh2ZDJOaGMyVS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=a0wPmhosUpyT6GKen3pK~Yryx0exdsaS6X6Tll8rb9ErS1pgD7ECZtImOVteZDzgzq0tCk6A6Y5lfkGtfhKt7puNg1bYs46bWTFjcHNB41bD3ge1PwdlRF47UKfg7t89RE90i4gelf4n2E0SCtheyMwDoCjFrb2hk7EF00KAQW2OR7NLY5Xx-Djn7Ydr0FXYUQrM55eCeJKZcymXkn0HKdNpZs~oR61UcYThe5UIT234RL4U1C-v9SdHlMWtKx7PF6HKZjGGzZetNySZj2T2y-arER-qoc0MNqaP9zjyKrVilQl9NKuFrOZvKPw0LC5no23rqudb4iL8MvHV6E40bA__",
    },
    {
      title: "CI/CD Pipeline Automation",
      description:
        "Implemented comprehensive CI/CD pipeline using GitLab CI and Jenkins, reducing deployment time by 75% and enabling 50+ daily releases.",
      technologies: ["GitLab CI", "Jenkins", "Docker", "Kubernetes"],
      link: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    },
    {
      title: "Infrastructure as Code Migration",
      description:
        "Migrated legacy infrastructure to Terraform IaC, achieving 100% reproducible deployments and reducing infrastructure provisioning time by 80%.",
      technologies: ["Terraform", "AWS", "Ansible", "Python"],
      link: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=800&q=80",
    },
    {
      title: "Monitoring & Observability Stack",
      description:
        "Designed and deployed enterprise-grade monitoring using Prometheus, Grafana, and ELK Stack with custom dashboards and alerting rules.",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "Alertmanager"],
      link: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      title: "Disaster Recovery & Backup",
      description:
        "Architected disaster recovery solution with automated backups, achieving RPO of 1 hour and RTO of 15 minutes across multiple regions.",
      technologies: ["AWS", "Backup", "Disaster Recovery", "Terraform"],
      link: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    {
      title: "Security & Compliance Framework",
      description:
        "Implemented comprehensive security framework with RBAC, secrets management, and compliance scanning achieving SOC 2 certification.",
      technologies: ["Vault", "RBAC", "Security Scanning", "Compliance"],
      link: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1555949519-2f4b104a6d5e?w=800&q=80",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            Showcasing key infrastructure and DevOps projects that demonstrate expertise in cloud architecture and automation
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const isVisible = Array.from(visibleItems).includes(index);

            return (
              <div
                key={index}
                data-index={index}
                className={`glass-card overflow-hidden rounded-lg transition-all duration-700 group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-card/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <a
                      href={project.link}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent/20 hover:bg-accent/30 text-accent transition-colors text-sm font-medium"
                    >
                      View Project
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-card/80 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
