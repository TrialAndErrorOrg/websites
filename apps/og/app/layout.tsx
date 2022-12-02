import '../styles.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Trial and Error OG Generation API</title>
      </head>
      <body className="h-screen w-screen">{children}</body>
    </html>
  )
}
