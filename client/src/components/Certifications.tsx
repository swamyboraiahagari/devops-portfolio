import { Award, ExternalLink, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * Certifications Section Component
 * Features:
 * - Professional certification badges with issuer information
 * - Verification links for credential validation
 * - Issue and expiration dates
 * - Glassmorphic card design
 * - Scroll reveal animations
 * - Responsive grid layout
 */
export default function Certifications() {
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

  const certifications = [
    {
      title: "AWS Certified Solutions Architect – Professional",
      issuer: "Amazon Web Services",
      issueDate: "March 2023",
      expirationDate: "March 2026",
      credentialId: "AWS-SA-PRO-2023-001",
      verificationUrl: "https://aws.amazon.com/certification/",
      description: "Advanced expertise in designing scalable, highly available systems on AWS",
      badgeColor: "from-orange-500 to-orange-600",
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      issueDate: "January 2023",
      expirationDate: "January 2026",
      credentialId: "CKA-2023-12345",
      verificationUrl: "https://www.cncf.io/certification/cka/",
      description: "Proficiency in Kubernetes cluster administration and management",
      badgeColor: "from-blue-500 to-blue-600",
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker",
      issueDate: "September 2022",
      expirationDate: "September 2025",
      credentialId: "DCA-2022-98765",
      verificationUrl: "https://www.docker.com/certification/",
      description: "Expertise in containerization and Docker platform",
      badgeColor: "from-cyan-500 to-cyan-600",
    },
    {
      title: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      issueDate: "June 2023",
      expirationDate: "June 2025",
      credentialId: "HCTA-2023-54321",
      verificationUrl: "https://www.hashicorp.com/certification/",
      description: "Proficiency in Infrastructure as Code using Terraform",
      badgeColor: "from-purple-500 to-purple-600",
    },
    {
      title: "AWS Certified DevOps Engineer – Professional",
      issuer: "Amazon Web Services",
      issueDate: "August 2022",
      expirationDate: "August 2025",
      credentialId: "AWS-DEVOPS-PRO-2022-002",
      verificationUrl: "https://aws.amazon.com/certification/",
      description: "Advanced DevOps practices and CI/CD pipeline implementation",
      badgeColor: "from-orange-500 to-red-600",
    },
    {
      title: "Linux Foundation Certified System Administrator",
      issuer: "Linux Foundation",
      issueDate: "April 2022",
      expirationDate: "April 2025",
      credentialId: "LFCSA-2022-11111",
      verificationUrl: "https://www.linuxfoundation.org/certification/",
      description: "Expertise in Linux system administration and management",
      badgeColor: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold">Certifications</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Industry-recognized credentials validating expertise in cloud infrastructure, containerization, and DevOps practices
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const isVisible = Array.from(visibleItems).includes(index);

            return (
              <div
                key={index}
                data-index={index}
                className={`glass-card p-6 rounded-lg transition-all duration-700 group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {/* Badge Icon */}
                <div className="mb-4">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-br ${cert.badgeColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Certification Title */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm text-accent font-semibold mb-3">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">
                  {cert.description}
                </p>

                {/* Dates */}
                <div className="space-y-2 mb-4 text-xs text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Issued:</span>
                    <span className="font-medium">{cert.issueDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expires:</span>
                    <span className="font-medium">{cert.expirationDate}</span>
                  </div>
                </div>

                {/* Credential ID */}
                <div className="mb-4 p-3 rounded-lg bg-card/50 border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Credential ID</p>
                  <p className="text-xs font-mono text-foreground break-all">
                    {cert.credentialId}
                  </p>
                </div>

                {/* Verification Link */}
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent/20 hover:bg-accent/30 text-accent transition-colors text-sm font-medium"
                >
                  Verify Credential
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Certifications Summary */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Active Certifications */}
            <div className="glass-card p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-accent mb-2">6</div>
              <p className="text-sm text-muted-foreground">Active Certifications</p>
            </div>

            {/* Issuing Organizations */}
            <div className="glass-card p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-accent mb-2">4</div>
              <p className="text-sm text-muted-foreground">Issuing Organizations</p>
            </div>

            {/* Renewal Status */}
            <div className="glass-card p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Current & Valid</p>
            </div>
          </div>
        </div>

        {/* Certification Note */}
        <div className="mt-12 p-6 rounded-lg bg-accent/5 border border-accent/20">
          <p className="text-sm text-muted-foreground">
            <span className="text-accent font-semibold">Note:</span> All certifications are current and verified. Click "Verify Credential" on any certification to validate authenticity through the issuing organization's official verification system.
          </p>
        </div>
      </div>
    </section>
  );
}
