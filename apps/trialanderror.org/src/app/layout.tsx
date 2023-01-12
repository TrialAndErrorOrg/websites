import '../styles/globals.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body>
        <nav className="flex gap-4 border p-10">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
        <div className="container">
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
