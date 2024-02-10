"use client"

import { redirect } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react"

export default function Page() {
  const [option, setOption] = useState("")
  const [name, setName] = useState("")

  const getUserName = () => {
    const {data : session } = useSession()
    if (session != undefined) {
      if (session?.user) {
        if (session.user?.name) {
          const name = session.user.name.split(' ')[0] || '';
          return <div className="text-5xl font-semibold mb-4 mt-10">Hey {name}</div>
        } else {
          return <div className="text-5xl font-semibold mb-4">Hey there</div>
        }
      } else {
        redirect('/')
      }
    }
  }

  return (
    <div className="flex flex-col gap-2 text-center">
      {getUserName()}
      <div className="text-3xl font-semibold mb-10">Please choose your form</div>
      <div className="text-3xl py-3 px-3 rounded-full border-4 border-black bg-slate-300 hover:bg-slate-600 hover:text-white my-4 hover:cursor-pointer">Student Form</div>
      <div className="text-3xl py-3 px-3 rounded-full border-4 border-black bg-slate-300 hover:bg-slate-600 hover:text-white my-4 hover:cursor-pointer">Advisor Form</div>
    </div>
  )
}
