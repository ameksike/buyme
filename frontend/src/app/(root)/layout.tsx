import { Navbar } from "../components/Navbar";

type Params = Readonly<{
    children: React.ReactNode;
}>

export default function ({ children }: Params) {
    return (
        <main className="font-work-sans">
            <Navbar />
            {children}
        </main>
    )
}