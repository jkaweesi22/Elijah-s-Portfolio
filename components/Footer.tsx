import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Custom Behance icon - not available in lucide-react */
function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M22 7h-7v-2h7v2zM15 13.5c-1.3 0-1.9.7-2.2 1.2-.3-.5-.9-1.2-2.2-1.2-2.5 0-2.8 2.1-2.8 2.8 0 2.2 1.2 3.6 2.8 3.6 1.2 0 1.8-.6 2.1-1.1.1.6.6 1.1 1.2 1.1h2.5c.2 0 .4-.2.4-.4v-.1c0-2.2-1.4-3.5-3.5-3.5zm-4 .6c1.2 0 1.4-1.3 1.4-2 0-.9-.2-2-1.4-2-.9 0-1.4.8-1.4 2 0 1.3.5 2 1.4 2zm7 .6h-2.2c-.2 0-.3.2-.3.4 0 .5.4.8.9.8.6 0 1.2-.3 1.5-.8.2-.3.3-.7.3-1.1 0-.5-.1-.9-.3-1.2-.2-.3-.5-.5-.9-.5-.5 0-.9.2-1.2.5l-.1-.4h-2.1v7h2.2v-2.8c.3.2.7.3 1.1.3 1.1 0 1.8-.9 1.8-2.1 0-.5-.1-1-.3-1.4-.2-.5-.6-.8-1-.9zm-1 3.2c-.4 0-.7-.2-.9-.5-.2-.3-.2-.6-.2-1 0-.7.4-1.2 1-1.2.3 0 .5.1.7.3.2.2.3.4.3.7v.2c0 .6-.4 1.5-1 1.5zM9.9 7H5v2h2.3v1.6H5v2h4.9v1.6H5v2h5.2c2.3 0 4.1-1.3 4.1-4.3 0-2.3-1.5-4.6-4.2-4.6zm.4 6.9h-2V9.6h2c1.4 0 2.2 1.2 2.2 2.2 0 1.1-.7 2.1-2.2 2.1zM2 2h20v20H2V2z" />
    </svg>
  );
}

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
  behance: BehanceIcon,
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
