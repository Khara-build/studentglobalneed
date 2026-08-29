import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://studentglobalneed.com'),

  title: {
    default: 'StudentGlobalNeed — Everything Students Need',
    template: '%s | StudentGlobalNeed',
  },

  description:
    'StudentGlobalNeed is a global platform for university students, offering cover pages, academic tools, resources, and useful student services.',

  keywords: [
    'students',
    'universities',
    'student tools',
    'cover page generator',
    'academic tools',
    'university resources',
    'student resources',
  ],

  authors: [{ name: 'StudentGlobalNeed' }],

  creator: 'StudentGlobalNeed',

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: 'website',
    siteName: 'StudentGlobalNeed',
    title: 'StudentGlobalNeed — Everything Students Need',
    description:
      'A global platform built to help university students with academic documents, tools, and resources.',
    url: 'https://studentglobalneed.com',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'StudentGlobalNeed — Everything Students Need',
    description:
      'A global platform for university students, academic tools, documents, and resources.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
}
