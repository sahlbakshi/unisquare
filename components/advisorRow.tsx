interface Advisor {
    email: string;
    name: string;
    avatarURL: string;
    services: Service[]
}

interface Service {
    tag: string
}

export default function AdvisorRow({ advisors }: { advisors: Advisor[] }) {
    return (
        <div className="my-12 w-full">
            {advisors.map((user: Advisor, index: number) => (
            <div className="bg-slate-100 border-slate-200 border-2 rounded-md p-4 my-6" key={index}>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                    <div><img className="h-12 rounded-full" src={user.avatarURL}></img></div>
                    <div className="text-2xl">{user.name}</div>
                    </div>
                    <div className="text-lg flex items-center gap-4">
                    <button className="py-1 px-4 rounded-md border-2 border-black bg-green-200 hover:bg-green-500 hover:text-white hover:cursor-pointer">
                        View Profile
                    </button>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                    {user.services.map((service: Service, index: number) => (
                        <div className="bg-blue-100 text-blue-600 py-1 px-3 rounded-xl" key={index}>{service.tag}</div>
                    ))}
                </div>
            </div>
            ))}
        </div>
    )
}
