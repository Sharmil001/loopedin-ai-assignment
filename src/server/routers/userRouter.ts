import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { users } from "@/db/schema";
import { db } from "@/db/db";
// import { eq } from "drizzle-orm";

export const userRouter = router({
  getUsers: publicProcedure.query(async () => {
    const usersList = await db.select().from(users).execute();
    return usersList;
  }),

  addUser: publicProcedure
    .input(
      z.object({
        name: z.string(),
        age: z.number(),
        gender: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const newUser = await db
        .insert(users)
        .values(input)
        .returning()
        .execute();
      return newUser;
    }),

  // deletUser: publicProcedure
  //   .input(
  //     z.object({
  //       id: z.number(),
  //     })
  //   )
  //   .mutation(async ({ input }) => {
  //     const deletedUser = await db
  //       .delete(users)
  //       .where(eq(users.id, input.id))
  //       .returning()
  //       .execute();
  //     return deletedUser;
  //   }),
});
