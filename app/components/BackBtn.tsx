import Link from "next/link";

export default function BackBtn() {
return (
    <Link
        href="/"
        className="absolute no-underline p-2 flex items-center group text-lg hover:border border-zinc-600 rounded hover:rounded-md hover:shadow-2xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back
      </Link>
      )
};
