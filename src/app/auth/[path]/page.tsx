import { AuthView } from "@daveyplate/better-auth-ui"
import { authViewPaths } from "@daveyplate/better-auth-ui/server"

export const dynamicParams = false

//static build time generated paths
export function generateStaticParams() {
    return Object.values(authViewPaths).map((path) => ({ path }))
}

// only use one of those built paths as the dynamic path. Otherwise, send 404
export default async function AuthPage({ params }: { params: Promise<{ path: string }> }) {
    const { path } = await params
    
    return (
        <main className="container flex grow flex-col items-center justify-center self-center p-4 md:p-6">
            <AuthView path={path} />
        </main>
    )
}
