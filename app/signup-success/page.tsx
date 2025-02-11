import Link from "next/link"

export default function SignUpSuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Sign Up Successful!</h1>
        <p className="mb-4 text-lg">Thank you for signing up. You'll receive your first newsletter soon.</p>
        <Link href="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  )
}


