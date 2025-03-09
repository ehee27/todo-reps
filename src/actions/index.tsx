"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export const createTodo = async (formData: FormData) => {
  const input = formData.get("input") as string;
  if (!input.trim()) {
    return;
  }
  await prisma.todo.create({
    data: {
      title: input,
    },
  });

  revalidatePath("/");
};

export const changeTodoStatus = async (formData: FormData) => {
  const inputId = formData.get("inputId") as string;
  const todo = await prisma.todo.findUnique({
    where: {
      id: inputId,
    },
  });

  const updateStatus = !todo?.isCompleted;
  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      isCompleted: updateStatus,
    },
  });
  revalidatePath("/");
};
