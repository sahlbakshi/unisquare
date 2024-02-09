"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { signInWithGoogle, signOut, session } from "@/modules/auth"
import { useRouter } from 'next/navigation'
import { API } from '@/modules/baseRoute'

export default function Navbar() {
  const router = useRouter()
  const [picURL, setPicURL] = useState("")
  const [email, setEmail] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // better way to render sign in and sign out button after getting 
    // promise from the sign in and sign out auth functions
    session().then((data) => {
      if (data?.session) {
        setIsLoggedIn(true)
        const email = data.session.user.user_metadata.email
        const avaratURL = data.session.user.user_metadata.avatar_url
        const name = data.session.user.user_metadata.name
        handleFirstLogIn(email, avaratURL, name)
      } else {
        setIsLoggedIn(false)
      }
    })
  })

  const insertIntoUserTable = (email:string, avatarURL:string, name:string) => {
    fetch(`${API}/api/user/${email}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({avatarURL: avatarURL, name: name})
    })
  }

  const handleFirstLogIn = (email:string, avatarURL:string, name:string) => {
    setEmail(email) // maybe chnage later
    setPicURL(avatarURL) // chnage later
    fetch(`${API}/api/user/${email}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      if (data.length) {
        // SET PICTURE AS THE COLUM WE HAVE ON FILE
      } else {
        // SET PICTURE AS THE GOOGLE ONE JUST NOW
        // RMEOVE AND GET FROM SEESION ONLY WHENUSER CLICKS PROFILE
        insertIntoUserTable(email, avatarURL, name)
      }
    })
    .catch(error => console.log(error))
  }

  const handleSignIn = () => {
    signInWithGoogle() // redirect in the function
  }

  const handleSignOut = () => {
    signOut()
    router.push('/')
    router.refresh()
  }
  
  return (
      <div className="flex flex-column justify-center items-center">
        <div className="flex flex-row justify-between items-center py-4 px-6 text-xl w-4/5">
          <Link className="text-xl" href="/">LOGO UNISQUARE</Link>
          <div className="flex flex-row gap-6">
              <Link href="/about">ABOUT</Link>
              <Link href="/sop">SOP/HOW IT WORKS</Link>
          </div>
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <button 
              className="py-1 px-4 rounded-md border-2 border-black hover:bg-slate-300 text-lg" onClick={handleSignOut}>SIGN OUT</button>
              <Link href={`/`}><img className="h-12 rounded-full hover:border-8 hover:border-bg-slate-400" src={picURL}></img></Link>
            </div>
          ) : (
            <button className="py-1 px-4 rounded-md border-2 border-black hover:bg-slate-300 text-md" onClick={handleSignIn}>SIGN IN</button>
          )}
        </div>
      </div>
  )
}
