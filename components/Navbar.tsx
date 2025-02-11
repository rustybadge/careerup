import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">Newsletter App</Link>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-blue-200">Home</Link>
          <Link href="/signup" className="text-white hover:text-blue-200">Sign Up</Link>
          <Link href="/send-newsletter" className="text-white hover:text-blue-200">Send Newsletter</Link>
        </div>
      </div>
    </nav>
  );
}