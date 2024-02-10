"use client"

import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import { API } from "@/modules/baseRoute"

export default function Navbar() {
  const getNavbarContent = () => {
    const {data : session } = useSession()
    if (session?.user) {
      return (
        <div className="flex items-center gap-4">
          <button onClick={() => signOut({ callbackUrl: `${API}/` })} className="py-1 px-4 rounded-full border-4 border-black hover:bg-slate-300 text-lg">SIGN OUT</button>
          <Link href={`/onboard`}><img className="h-12 rounded-full" src={session.user.image || ''}></img></Link>
        </div>
      )
    } else {
      return (
        <button onClick={() => signIn('google', { callbackUrl: `${API}/onboard` })} className="py-1 px-4 rounded-full border-4 border-black hover:bg-slate-300 text-lg">SIGN IN</button>
      )
    }
  }

  return (
      <div className="flex flex-column justify-center items-center">
        <div className="flex flex-row justify-between items-center py-4 px-6 text-xl w-4/5">
          <Link className="text-2xl font-medium" href="/">UNISQUARE</Link>
          {getNavbarContent()}
        </div>
      </div>
  )
}
