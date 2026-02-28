import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin } from "lucide-react";
import contactData from "@/data/pages/contact.json";
import siteConfig from "@/data/site-config.json";
import { generateSEO } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateSEO({
  title: "Contact",
  description:
    "Get in touch with Elijah for your next design project. Let's create something beautiful together.",
  path: "/contact/",
});

export default function ContactPage() {
  const { title, subtitle, description, contactInfo, formLabels } = contactData;
  const info = contactInfo || siteConfig.contactInfo;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <RevealOnScroll>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            {title}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">{subtitle}</p>
          <p className="mt-4 text-muted-foreground">{description}</p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <a
              href={`mailto:${info.email}`}
              className="flex items-center gap-3 rounded-xl bg-card border border-border p-4 hover:border-primary transition-colors"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-foreground">{info.email}</span>
            </a>
            <div className="flex items-center gap-3 rounded-xl bg-card border border-border p-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-foreground">{info.location}</span>
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-card border border-border p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Send a Message
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill out the form and submit to open your email client with your
              message ready to send.
            </p>
            <ContactForm email={info.email} formLabels={formLabels} />
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
