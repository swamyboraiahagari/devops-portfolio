import { Github, Linkedin, Mail, MessageSquare, Phone, Send } from "lucide-react";
import { useState } from "react";

/**
 * Contact Section Component
 * Features:
 * - Contact form with validation
 * - Social media links
 * - Direct contact information
 * - Glassmorphic design
 * - Responsive layout
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss your infrastructure challenges and opportunities
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Email */}
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/20 flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:contact@example.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/20 flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 rounded-lg bg-card/50 hover:bg-card/80 transition-colors glow-effect"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-lg bg-card/50 hover:bg-card/80 transition-colors glow-effect"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-lg bg-card/50 hover:bg-card/80 transition-colors glow-effect"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8 rounded-lg space-y-6">
            {submitted && (
              <div className="p-4 rounded-lg bg-accent/20 border border-accent/50 text-accent text-sm">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}

            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border focus:border-accent focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border focus:border-accent focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-accent/20 border border-accent hover:bg-accent/30 text-accent font-semibold flex items-center justify-center gap-2 transition-all"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-border text-center">
          <p className="text-sm text-muted-foreground mb-4">
            © 2024 Cloud DevOps Portfolio. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <MessageSquare className="w-4 h-4" />
            <span>Built with React, Tailwind CSS, and Glassmorphism</span>
          </div>
        </div>
      </div>
    </section>
  );
}
