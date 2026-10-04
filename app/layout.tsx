import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import ThemeProvider from '@/components/ThemeProvider';
import { site } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Anupam Paudel — Frontend Developer',
  description:
    'Anupam Paudel (also known as Suresh Paudel), Frontend Developer with 2+ years of experience building scalable web applications using React.js, Next.js, TypeScript and Node.js.',
  keywords: [
    'Anupam Paudel',
    'Suresh Paudel',
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Kathmandu',
    'Portfolio',
  ],
  authors: [{ name: 'Anupam Paudel' }],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f7fa' },
    { media: '(prefers-color-scheme: dark)', color: '#07080d' },
  ],
  openGraph: {
    title: 'Anupam Paudel — Frontend Developer',
    description:
      'Building fast, accessible and scalable web experiences with React, Next.js and TypeScript.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured data so search engines link both names to the same person
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    alternateName: site.alias,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kathmandu',
      addressCountry: 'NP',
    },
    sameAs: [site.socials.linkedin, site.socials.github],
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
