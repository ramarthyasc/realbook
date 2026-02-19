import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "~/server/better-auth";
import { getSession } from "~/server/better-auth/server";
import { db } from "~/server/db";


export const dynamic = "force-dynamic";

export default async function Home() {
    // const session = await getSession();

    const images = await db.image.findMany({
        orderBy: { id: "desc" }
    });


    return (
        <main className="">
            <div className="flex flex-wrap justify-center gap-6">
                {
                    [...images, ...images, ...images].map((img, i) => (
                        <div key={i + img.id} className="w-48 h-48 flex flex-col">
                            <img src={img.url} alt="image" />
                            <div>{img.name}</div>
                        </div>
                    ))
                }
            </div>
        </main>
    );
}
