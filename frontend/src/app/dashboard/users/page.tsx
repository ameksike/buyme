import Link from "next/link";

export default function () {
    return (
        <div>
            <h1>Users</h1>
            <ul>
                <Link href="/dashboard/users/1">User 1</Link>
                <Link href="/dashboard/users/3">User 2</Link>
            </ul>
        </div>
    )
}