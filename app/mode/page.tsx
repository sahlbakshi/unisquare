"use client"

import { useEffect, useState } from "react";
import { session } from "@/modules/auth";
import { redirect } from "next/navigation";
import AdvisorRow from "@/components/advisorRow";
import AdvisorProfile from "@/components/advisorProfile";

export default function Page() {
  // will implement pages if users exceed 40
  const [mode, setMode] = useState("student")
  const [email, setEmail] = useState("")
  const [advisors, setAdvisors] = useState(null)
  const [advisor, setAdvisor] = useState(null)
  const noAdvisorsMessage = "We have no advisors :("
  const addAdvisorProfileMessage = "+ Add your profile"

  useEffect(() => {
    session().then((data) => {
      if (!data?.session) {
        redirect('/')
      } else {
        setEmail(data.session.user.user_metadata.email)
      }
    })
  }, [])

  useEffect(() => {
    if (mode == 'student') {
      fetch(`http://localhost:3000/api/advisors`, {
      method: 'GET'
    })
    .then(result => result.json())
    .then(data => setAdvisors(data))
    } 
    else if (mode == 'advisor') {
      fetch(`http://localhost:3000/api/advisor/${email}`, {
      method: 'GET'
    })
    .then(result => result.json())
    .then(data => setAdvisor(data))
    }
  }, [mode])

  const getModeContent = () => {
    if (mode == 'student') {
      if (advisors) {
        return (<AdvisorRow advisors={advisors}></AdvisorRow>)
      } else {
        return (<div className="text-3xl mt-24">{noAdvisorsMessage}</div>)
      }
    } 
    else if (mode == 'advisor') {
      if (advisor && advisor.length) {
        return (<AdvisorProfile advisor={advisor}></AdvisorProfile>)
      } else {
        return (<button className="py-4 px-8 rounded-md border-black bg-orange-300 hover:bg-orange-500 border-2 text-2xl mt-24">{addAdvisorProfileMessage}</button>)
      }
    }
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="mb-8 text-2xl">Modes</div>
      <div className="flex gap-10 text-lg">
        <button onClick={() => setMode('student')} className={`py-2 px-6 rounded-md border-2 border-black hover:bg-slate-300 hover:cursor-pointer bg-${mode == 'student' ? 'slate-300' : ''}`}>Student</button>
        <button onClick={() => setMode('advisor')} className={`py-2 px-6 rounded-md border-2 border-black hover:bg-slate-300 hover:cursor-pointer bg-${mode == 'advisor' ? 'slate-300' : ''}`}>Advisor</button>
      </div>
      {getModeContent()}
    </div>
  );
}
