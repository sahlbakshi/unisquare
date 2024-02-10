"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import { API } from '@/modules/baseRoute'

export default function Navbar() {
  const [picURL, setPicURL] = useState("")
  const [email, setEmail] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
      <div className="flex flex-column justify-center items-center">
        <div className="flex flex-row justify-between items-center py-4 px-6 text-xl w-4/5">
          <Link className="text-2xl font-medium" href="/">UNISQUARE</Link>
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <button className="py-1 px-4 rounded-full border-4 border-black hover:bg-slate-300 text-lg">SIGN OUT</button>
              <Link href={`/onboard`}><img className="h-12 rounded-full" src={picURL}></img></Link>
            </div>
          ) : (
            <button className="py-1 px-4 rounded-full border-4 border-black hover:bg-slate-300 text-lg">SIGN IN</button>
          )}
        </div>
      </div>
  )
}
