import AddTodo from "./components/todos/AddTodo";
import { prisma } from "@/utils/prisma";
import Todo from "./components/todos/Todo";

const getTodos = async () => {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
};

const Home = async () => {
  const data = await getTodos();
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <>
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
      <main className="flex flex-col justify-center items-center w-screen py-10">
        <span className="text-4xl font-extrabold uppercase">ToDo App</span>
        <h1 className="text-2xl font-extrabold uppercase mb-5 text-center">
          <span className="lowercase">W/</span>Server Actions
        </h1>
      </main>
      <div className="flex flex-col justify-center items-center">
        <AddTodo />
        {/* input ToDo */}
        {/* map todo */}
        <div className="flex flex-col gap-4 justify-center items-center mt-10 w-screen">
          {data.map((todo, id) => (
            <div className="w-full" key={id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
      <footer className="mt-3 row-start-3 flex gap-6 flex-wrap items-center justify-center bg-zinc-800 text-white">
        Footer
      </footer>
    </>
  );
};

export default Home;
