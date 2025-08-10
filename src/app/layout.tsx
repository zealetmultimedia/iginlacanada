import type { Metadata } from 'next';
import { Playfair_Display, PT_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

// Define font instances
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-headline',
  display: 'optional', // Changed from 'swap'
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
  display: 'optional', // Changed from 'swap'
});

export const metadata: Metadata = {
  title: 'Canada Divine Visitation 2025 | Grace to Grace',
  description: 'Join Joshua Iginla for a life-transforming experience with healing, deliverance, and anointing services. This is your moment of divine elevation!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={cn(
        "font-body antialiased",
        playfairDisplay.variable,
        ptSans.variable
      )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}