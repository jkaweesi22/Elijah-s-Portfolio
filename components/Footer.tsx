import Link from "next/link";
import { Instagram, Linkedin, Behance } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface FooterProps {
  siteName: string;
  tagline: string;
  socialLinks: SocialLink[];
  contactInfo: { email: string; location: string };
  navigation: Array<{ label: string; href: string }>;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  linkedin: Linkedin,
  behance: Behance,
};

export function Footer({
  siteName,
  tagline,
  socialLinks,
  contactInfo,
  navigation,
}: FooterProps) {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <Link
              href={`${basePath}/`}
              className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
            >
              {siteName}
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">{tagline}</p>
            <div className="mt-4 flex gap-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon] || Instagram;
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={link.platform}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Navigate</h4>
            <nav className="mt-4 flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={`${basePath}${item.href}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <a
                href={`mailto:${contactInfo.email}`}
                className="block hover:text-primary transition-colors"
              >
                {contactInfo.email}
              </a>
              <p>{contactInfo.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
