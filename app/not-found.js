import Link from "next/link";

export default function NotFound() {
    return (
        <main className=" flex justify-center flex-col items-center gap-6">
            <h1>Something went wrong</h1>
            <Link href="/"  className="inline-block bg-accent-500 text-primary-800 px-5 py-3 text-lg">
                Go Back Home
            </Link>
        </main>
    )
}