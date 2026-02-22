
import { UserButton } from "@daveyplate/better-auth-ui";
import Link from "next/link";



export default async function TopNav() {

    return (
        <nav className="flex items-center justify-between w-full p-4 text-2xl font-semibold border-b">
        <Link href="/"> Realbook</Link>
            <div>
                <UserButton
                    size={"icon"}
                    className="cursor-pointer"
                />
            </div>
        </nav>

    )
}
