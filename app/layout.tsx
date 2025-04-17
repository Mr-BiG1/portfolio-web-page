import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darsan Sabu George | Cybersecurity Specialist & Full Stack Developer",
  description: "Portfolio website showcasing expertise in cybersecurity and full-stack development. Specializing in ethical hacking, secure systems design, and building smart IoT/web tools.",
  keywords: ["Cybersecurity", "Full Stack Developer", "Ethical Hacking", "IoT", "Web Development"],
  authors: [{ name: "Darsan Sabu George" }],
  openGraph: {
    title: "Darsan Sabu George | Cybersecurity Specialist & Full Stack Developer",
    description: "Portfolio website showcasing expertise in cybersecurity and full-stack development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
