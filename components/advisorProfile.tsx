import { useState } from "react";

interface Advisor {
    email: string;
    university: string;
    name: string;
    avatarURL: string;
    linkedinURL: string;
    program: string;
    about: string;
    contactEmail: string;
    services: any;
}

export default function AdvisorProfile({ advisor }: { advisor: Advisor }) {
    const [servicesLen, setServicesLen] = useState(advisor.services.length)

    const removeOneService = () => {
        setServicesLen(servicesLen-1)
    }

    const getServices = () => {
        for (let i = 0; i < servicesLen; i++) {
            const service = advisor.services[i];
            return (
                <div key={i}>
                    <label className="py-2 text-md">Tag<input className="text-lg border-2 rounded-md w-full py-1 px-2" type="text" readOnly defaultValue={service.tag}/></label>
                    <label className="py-2 text-md">Price<input className="text-lg border-2 rounded-md w-full py-1 px-2" type="text" defaultValue={service.cost}/></label>
                    <label className="py-2 text-md">Details<input className="text-lg border-2 rounded-md w-full py-1 px-2" type="text" defaultValue={service.details}/></label>
                </div>
            );
        }
    }

    return (
        <div className="my-12 rounded-md border-2 bg-slate-100 w-full">
            <form className="flex flex-col p-4">
                <div className="py-2 mt-2 text-2xl">Edit Profile</div>
                <label className="py-2 text-md">Full Name<input className="text-lg border-2 rounded-md w-full py-1 px-2" type="text" defaultValue={advisor.name}/></label>
                <label className="py-2 text-md">Contact Email<input className="text-lg border-2 rounded-md w-full py-1 px-2" type="text" defaultValue={advisor.contactEmail}/></label>
                <label className="py-2 text-md">University<input className="text-lg border-2 rounded-md w-full py-1 px-2" type="text" defaultValue={advisor.university}/></label>
                <label className="py-2 text-md">Linkedin<input className="text-lg border-2 rounded-md w-full py-1 px-2" type="text" defaultValue={advisor.linkedinURL}/></label>
                <label className="py-2 text-md">About<input className="text-lg border-2 rounded-md w-full py-1 px-2" type="text" defaultValue={advisor.about}/></label>

                <div className="flex mt-4 items-center justify-between">
                    <div className="py-2 text-xl">Services</div>
                    <button onClick={removeOneService} className="py-1 px-4 rounded-md border-2 border-black bg-red-200 hover:bg-red-500 hover:text-white">Delete Service</button>
                </div>
                {getServices()}
                <button className="text-xl py-1 px-4 my-4 mt-8 w-full border-black border-2 border-black bg-blue-200 hover:bg-blue-500 hover:text-white rounded-md">SUBMIT</button>
            </form>
        </div>
    )
}
