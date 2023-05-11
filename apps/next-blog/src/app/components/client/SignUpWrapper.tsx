'use client'
import dynamic from 'next/dynamic'

const SignUp = dynamic(() => import('./SignUp').then((mod) => mod.SignUp), { ssr: false })

export function SignUpWrapper({ mailId }: { mailId?: string }) {
  return <SignUp mailId={mailId} />
}
