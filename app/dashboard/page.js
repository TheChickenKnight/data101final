import { getSession } from "next-auth/react";

export default async function Dashboard() {

    getSession().then(sesh => {

    });

    return (
        <div className="p-10 pb-40 rounded-md bg-slate-400">
            <p className="text-xl text-black dark:text-white">hi</p>
        </div>
    );
}