import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/ui/header";
import Footer from "@/src/components/ui/footer";
import Menu from "@/src/components/ui/menu";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Cesarien",
    description: "Mini plateforme type Trello pour project d'étude",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased` }>
                <Header />
                <Menu />
                {children}
                <Footer />
            </body>
        </html>
    );
}
