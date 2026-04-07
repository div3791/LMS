import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { Input }  from '../../components/ui/Input'

export function RegisterPage() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <div className="min-h-screen bg-surface-main flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <span className="font-heading font-bold text-3xl text-primary">LMS</span>
          <p className="text-content-muted text-sm font-body mt-1">Apna account banao</p>
        </div>

        <div className="bg-surface-card rounded-2xl p-6 border border-highlight space-y-5">
          <h1 className="text-xl font-heading font-bold text-content">Register karo</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              placeholder="Divyesh Patel"
              autoComplete="name"
              required
            />
            <Input
              label="Email"
              type="email"
              placeholder="divyesh@example.com"
              autoComplete="email"
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              autoComplete="new-password"
              helper="Minimum 8 characters"
              required
            />
            <Button type="submit" loading={loading} className="w-full">
              Account banao
            </Button>
          </form>

          <p className="text-center text-sm text-content-muted font-body">
            Pehle se account hai?{' '}
            <Link to="/login" className="text-primary hover:underline font-semibold">
              Login karo
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
