import React from "react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const BaseLayout = ({ children }: { children: React.ReactElement }) => (
  <>
    <Header />
    <main className="min-h-full dark:text-slate-200">
      <div className="light-gradient fixed top-0 -z-50 h-[100vh] w-[100vw]" />
      {children}
    </main>
    <Footer />
  </>
)
