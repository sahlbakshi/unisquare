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
    return (
        <div className="my-12 w-full">
            <form>
                <input className="border-2" type="text" defaultValue={advisor.name}/>
            </form>
        </div>
    )
}
