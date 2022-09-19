import React from "react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const BaseLayout = ({ children }: { children: React.ReactElement }) => (
  <>
    <Header />
    <main className="min-h-full dark:bg-blue-600 dark:text-slate-200">
      {children}
    </main>
    <Footer />
  </>
)
