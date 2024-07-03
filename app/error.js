"use client"

export default function Error({error, reset}) {
    return (
        <main className=" flex justify-center flex-col items-center gap-6">
            <h1>Something went wrong</h1>
            <button className="inline-block bg-accent-500 text-primary-800 px-5 py-3 text-lg" onClick={reset}>Try again</button>
        </main>
    )
}