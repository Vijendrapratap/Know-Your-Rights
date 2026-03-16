import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/lib/theme';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Know Your Rights — Understand Your Legal Rights',
  description:
    'Empowering citizens with accessible legal knowledge. Ask questions, browse laws, and understand your rights — all explained in simple language with verified sources.',
  keywords: ['legal rights', 'know your rights', 'Indian law', 'fundamental rights', 'legal aid', 'constitution'],
  openGraph: {
    title: 'Know Your Rights — Understand Your Legal Rights',
    description:
      'Empowering citizens with accessible legal knowledge, explained in simple language with verified sources.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)' }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
