import { LucideIconData, Mail, Linkedin, Github } from 'lucide-angular';

export interface ContactLink {
  readonly label: string;
  readonly href: string;
  readonly icon: LucideIconData;
  readonly external: boolean;
}

export const CONTACT_LINKS: readonly ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:wanieldeiss@gmail.com',
    icon: Mail,
    external: false,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/wanieldeiss',
    icon: Linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/wanieldeiss',
    icon: Github,
    external: true,
  },
];
