import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex justify-center items-center text-center p-10 w-full min-h-screen">
      <div>
        <h2 className="text-3xl m-5"> There was a problem.</h2>
        <p>We could not find the page you were looking for.</p>
        <p>
          Go back to the
          <Link
            href="https://portofolio-alexiusadi-circle29.vercel.app/"
            className="underline m-1 text-lg"
          >
            Home
          </Link>
        </p>
      </div>
    </main>
  );
}
