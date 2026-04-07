import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-surface-main flex flex-col items-center justify-center p-4 text-center gap-4">
      <p className="text-7xl font-heading font-bold text-primary/30">404</p>
      <h1 className="text-2xl font-heading font-bold text-content">Page nahi mili</h1>
      <p className="text-content-muted font-body text-sm">
        Yeh URL galat hai ya page abhi exist nahi karta.
      </p>
      <Link to="/dashboard">
        <Button>Dashboard pe jao</Button>
      </Link>
    </div>
  )
}
