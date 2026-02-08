import { Cloud, Code, Database, GitBranch, Lock, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * Skills Section Component
 * Features:
 * - Bento grid layout with varying card sizes
 * - Scroll reveal animations for each skill
 * - Icon-based visual representation
 * - Glassmorphism card design with hover effects
 */
export default function Skills() {
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

  const skills = [
    {
      title: "Kubernetes",
      description: "Container orchestration, cluster management, and advanced networking",
      icon: Cloud,
      span: "md:col-span-2",
    },
    {
      title: "Docker",
      description: "Containerization, image optimization, and registry management",
      icon: Code,
      span: "",
    },
    {
      title: "CI/CD Pipelines",
      description: "Jenkins, GitLab CI, GitHub Actions automation",
      icon: GitBranch,
      span: "",
    },
    {
      title: "Infrastructure as Code",
      description: "Terraform, CloudFormation, Ansible provisioning",
      icon: Zap,
      span: "",
    },
    {
      title: "Cloud Platforms",
      description: "AWS, Azure, Google Cloud expertise",
      icon: Cloud,
      span: "",
    },
    {
      title: "Security & Compliance",
      description: "RBAC, secrets management, security scanning",
      icon: Lock,
      span: "md:col-span-2",
    },
    {
      title: "Databases",
      description: "PostgreSQL, MongoDB, Redis optimization",
      icon: Database,
      span: "",
    },
    {
      title: "Monitoring & Logging",
      description: "Prometheus, ELK Stack, Datadog integration",
      icon: Zap,
      span: "",
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/Ya3dddqMQp75WfoZKlTdX2/sandbox/A1RtjEQuiVIaPmgUPFB7ZH-img-2_1770540447000_na1fn_c2tpbGxzLWJn.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWEzZGRkcU1RcDc1V2ZvWktsVGRYMi9zYW5kYm94L0ExUnRqRVF1aVZJYVBtZ1VQRkI3WkgtaW1nLTJfMTc3MDU0MDQ0NzAwMF9uYTFmbl9jMnRwYkd4ekxXSm4ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NpimVF3-yQYAYYwjiY3frrI9~jPCkkd8WDWYKZDraOevPtKphI-lNCb0lAXMLE6JDFsGO-in1b7JZFU~U3a-FRzbHYZTSmX9IohgVHzJG4pditrvcUxAdQi-tKtiTTtt2pcu5qjthN-4SpTAD3-1YAsKEj1ZVaSYqT7hKamp-wYkYyBMqAMeMk~Mev4r8t82EOiXDl6dBFMNR0JXeQplrp1FE5Yqq7NrR2aLM7UhBDbih0LpQXBj0w965IFxT5wXfEWlNFBWruueIs1Psmq18YVckP6CoPJracmqRI62P6rCZyVXR9~TyZFdIp7SPY1W7rN2vbPMWhwryOc67sFrFw__')`,
        }}
      ></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Stack</h2>
          <p className="text-lg text-muted-foreground">
            Expertise across modern cloud infrastructure, containerization, and automation technologies
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            const isVisible = Array.from(visibleItems).includes(index);

            return (
              <div
                key={index}
                data-index={index}
                className={`glass-card p-6 rounded-lg transition-all duration-700 ${
                  skill.span
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/20 flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Badges */}
        <div className="mt-16 pt-16 border-t border-border">
          <h3 className="text-2xl font-bold mb-8">Core Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Kubernetes",
              "Docker",
              "Terraform",
              "AWS",
              "Jenkins",
              "GitLab CI",
              "Prometheus",
              "ELK Stack",
              "Ansible",
              "CloudFormation",
              "GitHub Actions",
              "Datadog",
            ].map((tech, index) => (
              <div
                key={index}
                className="glass-card px-4 py-3 rounded-lg text-center text-sm font-medium hover:bg-card/80 transition-all float-badge"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
