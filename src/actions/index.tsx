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
