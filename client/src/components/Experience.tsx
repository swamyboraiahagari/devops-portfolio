import { Briefcase, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * Experience Section Component
 * Features:
 * - Timeline layout for career progression
 * - Glassmorphic cards for each experience
 * - Scroll reveal animations
 * - Responsive design for mobile and desktop
 */
export default function Experience() {
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

  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "Tech Innovation Corp",
      period: "2022 - Present",
      description:
        "Leading infrastructure transformation, managing multi-cloud Kubernetes clusters, and implementing GitOps practices for 50+ microservices. Reduced deployment time by 75% and achieved 99.99% uptime.",
      achievements: [
        "Architected multi-cloud Kubernetes infrastructure",
        "Implemented GitOps with ArgoCD",
        "Reduced deployment time from 2 hours to 15 minutes",
      ],
    },
    {
      title: "DevOps Engineer",
      company: "Cloud Solutions Inc",
      period: "2020 - 2022",
      description:
        "Designed and implemented CI/CD pipelines using Jenkins and GitLab CI. Managed AWS infrastructure with Terraform IaC. Implemented comprehensive monitoring with Prometheus and Grafana.",
      achievements: [
        "Built CI/CD pipelines reducing release cycle to daily",
        "Migrated infrastructure to Terraform (100% IaC)",
        "Implemented monitoring stack for 200+ services",
      ],
    },
    {
      title: "Infrastructure Engineer",
      company: "Enterprise Systems Ltd",
      period: "2018 - 2020",
      description:
        "Managed on-premises and cloud infrastructure. Implemented Docker containerization and began Kubernetes adoption. Established disaster recovery procedures.",
      achievements: [
        "Containerized 30+ legacy applications with Docker",
        "Implemented Kubernetes pilot cluster",
        "Established DR procedures with 15-minute RTO",
      ],
    },
    {
      title: "Systems Administrator",
      company: "Digital Services Group",
      period: "2016 - 2018",
      description:
        "Managed Linux servers, networking, and security. Implemented monitoring solutions and began automation initiatives with Ansible.",
      achievements: [
        "Managed 100+ Linux servers",
        "Implemented Ansible for infrastructure automation",
        "Achieved 99.9% system uptime",
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground">
            Professional journey in cloud infrastructure and DevOps engineering
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-accent to-transparent opacity-30"></div>

          {/* Experience Items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((experience, index) => {
              const isVisible = Array.from(visibleItems).includes(index);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className={`grid md:grid-cols-2 gap-8 items-center`}>
                    {/* Content */}
                    <div
                      className={`glass-card p-6 rounded-lg ${
                        !isEven ? "md:order-2" : ""
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-accent/20 flex-shrink-0">
                          <Briefcase className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{experience.title}</h3>
                          <p className="text-accent text-sm font-medium">
                            {experience.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {experience.period}
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:flex justify-center">
                      <div className="relative">
                        <div className="w-4 h-4 rounded-full bg-accent border-4 border-background"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
