import { auth, signOut, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";

export async function Navbar() {
    const session = await auth()
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/" >
                    <Image src="/next.svg" alt="logo" width={144} height={30} />
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>

                            <form action={async () => {
                                "use server";
                                await signOut({ redirectTo: "/" });
                            }}>
                                <button type="submit">
                                    <span>Logout</span>
                                </button>
                            </form>
                            
                            <Link href={`/user/${session.user.id}`}>
                                <span>{session.user.name}</span>
                            </Link>
                        </>
                    ) : (

                        <button onClick={async () => {
                            "use server";
                            await signIn("github");
                        }}>
                            <span>Login</span>
                        </button>
                    )}
                </div>
            </nav>
        </header>
    )
}