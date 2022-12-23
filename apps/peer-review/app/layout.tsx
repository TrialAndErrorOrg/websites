import '../styles.css'

export default function Layout({ children }) {
  return (
    <div className="container">
      <main>{children}</main>
    </div>
  )
}
