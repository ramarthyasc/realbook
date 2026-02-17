import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "~/server/better-auth";
import { getSession } from "~/server/better-auth/server";

const mockUrls = [
    "https://koatqvtbno.ufs.sh/f/PrJRq7EsZuIM7aNIqKVHr02nUPSBtiZwjlpCyVJKxu8zNfkM",
    "https://koatqvtbno.ufs.sh/f/PrJRq7EsZuIMyLtzUXVr5L9Ie4ENFz2nGMYJBQfk1cSXuDPo",
    "https://koatqvtbno.ufs.sh/f/PrJRq7EsZuIMinuqBToIC93LySf7XmJwKRaE0gVNYporZDQW",
    "https://koatqvtbno.ufs.sh/f/PrJRq7EsZuIMqk0BjP6gSCkWr1OpsGZHz3X07u8VybL5FxvU",
    "https://koatqvtbno.ufs.sh/f/PrJRq7EsZuIMf0AAtxRAQSW2FEl3UxfedLJoGpD7zh5kPmv9",
    "https://koatqvtbno.ufs.sh/f/PrJRq7EsZuIMFJBhuGQC42fn7mwr8VQ5tclbpP1ZDHj6kXe0",
]
const mockImgs = mockUrls.map((url, i) => ({
    i: i + 1,
    url
}))

export default async function Home() {
    const session = await getSession();



    return (
        <main className="">
            <div className="flex flex-wrap justify-center gap-4">
                {
                    [...mockImgs, ...mockImgs, ...mockImgs].map((img, i) => (
                        <div key={i} className="w-48 h-48">
                            <img src={img.url} alt="image" />
                        </div>
                    ))
                }
            </div>
            Hello bookmarks in progress
        </main>
    );
}
