import { getSession } from "next-auth/react";
import Text from "../../components/ui/text"

export default async function Dashboard() {

    getSession().then(sesh => {

    });

    return (
        <div className="p-10 pb-40 rounded-md bg-slate-400">
            <Text className="text-xl">hi</Text>
        </div>
    );
}