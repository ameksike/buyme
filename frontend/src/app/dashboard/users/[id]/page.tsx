interface PageProps {
    params: { id: string }
}

export default function ({ params }: PageProps) {
    return (
        <div>
            <h1>Users Details {params.id}</h1>
        </div>
    )
}