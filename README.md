https://www.youtube.com/watch?v=9OoKXOq7ENo

1. install next project files-typescript
2. install prisma as a dev dep
3. install prisma/mongo provider
   \*\*\* npx prisma init --datasource-provider mongodb

4. Inside our Prisma file let's create the Todo model

5. Set the db connection string in .env
6. Create utils fold and prisma.ts with PrismaClient()
7. run npx prisma generate

8. Create the basic components (Home, Input)
9. Create types dir with out inputTypes

10. Create our basic components Form, Input, Button
11. Create an AddTodo component that will use the Form and it's children

12. Server actions
    bring in prisma to access our model/mongo
    grab the form input (check for trim)
    create the new todo with data.title

13. Render the todos by creating getTodos()
    prisma.todo.findMany()

14. New server action ChangeTodo or "Update Status"
    focus on the ID here, validate the id and then update the status
    create changeTodo component to call this server action
    _\*\* we can use import _ as actions for shorthand importing all actions

15. Build out the Todo card to test and view our Update status on the UI
