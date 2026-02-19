import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "~/server/better-auth";
import { getSession } from "~/server/better-auth/server";
import { db } from "~/server/db";

const mockUrls = [
    "https://koatqvtbno.ufs.sh/f/PrJRq7EsZuIM11bCByWWiAQRFzJ43qcV9phkPemouTYLxBsZ",
    "https://koatqvtbno.ufs.sh/f/PrJRq7EsZuIM4PaJDg3aZ8hYQr5eCsT0EpzG9oVSHgvA1xOI",
    "https://koatqvtbno.ufs.sh/f/PrJRq7EsZuIMkHYDDCcHDhbBIaNXPxg612sYiAlQ7MZpz3Ty",
    "https://koatqvtbno.ufs.sh/f/PrJRq7EsZuIMgNYMQv1y6usLHo7BKw5iZaIjtbe90FWCknvP",
    "https://koatqvtbno.ufs.sh/f/PrJRq7EsZuIMcH6Sz2u2ag9xLZBprwotYORkuJyhSvmf1zTD",
    "https://koatqvtbno.ufs.sh/f/PrJRq7EsZuIMaI01jOnhRQ45u9A1fwpXNL70qjvgIoCmVPJH",
]
const mockImgs = mockUrls.map((url, i) => ({
    i: i + 1,
    url
}))

export const dynamic = "force-dynamic";

export default async function Home() {
    // const session = await getSession();

    const posts = await db.post.findMany();
    console.log(posts);


    return (
        <main className="">
            <div className="flex flex-wrap justify-center gap-4">
                {
                    posts.map((row) => (
                        <div key={row.id}> {row.name}</div>
                    ))
                }
                {
                    [...mockImgs, ...mockImgs, ...mockImgs].map((img, i) => (
                        <div key={i} className="w-48 h-48">
                            <img src={img.url} alt="image" />
                        </div>
                    ))
                }
            </div>
        </main>
    );
}
