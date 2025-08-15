import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Footer from '@/components/layout/footer';
import AuthHeader from '@/components/auth/auth-header';

export const metadata: Metadata = {
  title: 'RealEstate AI',
  description: 'AI-Driven Deal Ranking and Analysis for Real Estate Investors',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Check if Clerk environment variables are available
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  
  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </head>
        <body className="font-body antialiased min-h-screen flex flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthHeader />
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
