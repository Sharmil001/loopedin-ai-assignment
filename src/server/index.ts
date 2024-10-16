import { router } from "./trpc";
import { userRouter } from "./routers/userRouter";

export const appRouter = router({
  user: userRouter,
  // add other routers here
});

export type AppRouter = typeof appRouter;
