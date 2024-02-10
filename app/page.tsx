"use client"

import Link from "next/link";
import { signIn } from "next-auth/react";
import { API } from "@/modules/baseRoute";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center my-10 gap-40">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="text-8xl font-bold">UNISQUARE</div>
        <div className="text-4xl font-semibold mb-10 w-3/5">Your hub of shared wisdom – where students guide students</div>
        <button onClick={() => signIn('google', { callbackUrl: `${API}/onboard` })} className="rounded-full bg-black text-white text-3xl py-6 px-12 hover:bg-zinc-800">JOIN NOW</button>
      </div>

      <div className="flex flex-col items-center gap-4 text-center w-4/6">
        <div className="text-4xl font-bold mb-8">We can help with</div>
        <div className="text-lg flex flex-wrap gap-4">
          <div className="py-2 px-4 rounded-full bg-blue-100 border-4 border-blue-500 text-blue-500">Resume Review</div>
          <div className="py-2 px-4 rounded-full bg-blue-100 border-4 border-blue-500 text-blue-500">Canadian Student Permits</div>
          <div className="py-2 px-4 rounded-full bg-blue-100 border-4 border-blue-500 text-blue-500">International Student Guide</div>
          <div className="py-2 px-4 rounded-full bg-blue-100 border-4 border-blue-500 text-blue-500">Getting Into Faang</div>
          <div className="py-2 px-4 rounded-full bg-blue-100 border-4 border-blue-500 text-blue-500">University Applications</div>
          <div className="text-4xl font-bold">and more!</div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 w-4/6">
        <div className="text-4xl font-bold mb-8">How it works</div>
        <div className="flex gap-14">
          <div>
            <div className="text-3xl font-semibold underline mb-4">For Students</div>
            <div className="text-2xl font-semibold">1 Sign Up</div>
            <div className="text-xl mb-4">Sign up as a student and submit your form</div>
            <div className="text-2xl font-semibold">2 Get recommendations</div>
            <div className="text-xl mb-4">Get our best recommendations based on your submitted form</div>
            <div className="text-2xl font-semibold">3 Schedule Meeting</div>
            <div className="text-xl mb-4">Choose your match and schedule your consult with our team!</div>
          </div>
          <div>
            <div className="text-3xl font-semibold underline mb-4">For Advisors</div>
            <div className="text-2xl font-semibold">1 Sign Up</div>
            <div className="text-xl mb-4">Sign up as an advisor and submit your form</div>
            <div className="text-2xl font-semibold">2 Get requests</div>
            <div className="text-xl mb-4">Get requests from students based on your submitted form</div>
            <div className="text-2xl font-semibold">3 Schedule Meeting</div>
            <div className="text-xl mb-4">Accept requests and schedule your meeting with our team!</div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-24 mb-30">
          <div className="text-4xl font-bold mb-8">Pricing</div>
          <div className="text-2xl p-10 bg-slate-200 border-4 border-black rounded-xl text-center">
            Our pricing differs based on advisors and student preferences so you can always find your match - we make sure to give you the best possible options
          </div>
        </div>
      </div>

      <div className="text-xl font-bold">Contact Us at hello@unisquare.com</div>
    </div>
  );
}
