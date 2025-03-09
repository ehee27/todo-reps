import { todoProps } from "@/types";
import ChangeTodo from "./ChangeTodo";

const Todo = ({ todo }: { todo: todoProps }) => {
  return (
    <div className="w-10/12 mx-auto flex items-center justify-between bg-slate-900 py-4 px-20 rounded-xl">
      <ChangeTodo todo={todo} />
      <span className="text-center font-bold uppercase grow text-white">
        {todo.title}
      </span>
      <div className="flex items-center mx-2">{/* Edit Todo */}</div>
      <div className="flex items-center">{/* DeleteTodo */}</div>
    </div>
  );
};

export default Todo;
