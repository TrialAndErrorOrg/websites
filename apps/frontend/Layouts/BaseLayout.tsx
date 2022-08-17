import React from "react"
import { Header } from "../components/Header"

export const BaseLayout = ({ children }: { children: React.ReactElement }) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
)
