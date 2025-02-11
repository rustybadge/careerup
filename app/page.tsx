import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome to Your Personalized Newsletter App</h1>
        <p className="mt-3 text-2xl">Get weekly curated content based on your interests</p>
        <div className="flex mt-6">
          <Link href="/signup">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
          </Link>
        </div>
      </main>
    </div>
  )
}

