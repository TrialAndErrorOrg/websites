import '../styles.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body>
        <div className="container">
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
