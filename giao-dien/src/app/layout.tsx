'use client'
import "./globals.css";
import {Inter} from "next/font/google";
import React from "react";


const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.className} antialiased`}>
        {children}
        </body>
        </html>
    );
}
