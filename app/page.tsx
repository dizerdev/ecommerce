import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1
        className="flex absolute flex-col items-center gap-2 hover:underline hover:underline-offset-4"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/under_construction.svg"
          alt="Globe icon"
          width={160}
          height={160}
        />
        Under Construction
      </h1>
    </div>
  );
}
