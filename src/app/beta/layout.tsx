import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Initialize the Inter font
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: 'Chat App - Beta',
    description: 'A minimalist chat application',
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <div className="min-h-screen min-w-screen">{children}</div>
}
