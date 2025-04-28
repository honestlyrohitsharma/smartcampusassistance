import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import UserAwareNavigation from "@/components/user-aware-navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Smart Campus Assistant",
  description: "A comprehensive campus management system for students and teachers",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <UserAwareNavigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
