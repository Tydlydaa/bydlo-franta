import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="max-w-5xl mx-auto px-4 py-6">
      <Link to="/" className="text-2xl font-black tracking-tight hover:opacity-70 transition-opacity">
        Bydlo
      </Link>
    </header>
  )
}
