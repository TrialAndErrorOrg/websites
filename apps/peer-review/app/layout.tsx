import '../styles.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <main>{children}</main>
    </div>
  )
}
