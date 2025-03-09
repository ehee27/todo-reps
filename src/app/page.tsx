import Image from "next/image";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <>
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
      <main className="flex flex-col justify-center items-center w-screen py-20">
        <span className="text-4xl font-extrabold uppercase">ToDo App</span>
        <h1 className="text-5xl font-extrabold uppercase mb-5 text-center">
          <span className="lowercase">W/</span>Server Actions
        </h1>
      </main>
      <div className="flex flex-col justify-center items-center">
        {/* <AddTodo /> */}
        {/* input ToDo */}
        {/* map todo */}
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Footer
      </footer>
    </>
  );
}
