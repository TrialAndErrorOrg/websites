import React from "react"
import { Header } from "../components/Header"

export const BaseLayout = ({ children }: { children: React.ReactElement }) => (
  <div className="dark:bg-blue-600 dark:text-slate-200">
    <Header />
    <main>{children}</main>
  </div>
)
