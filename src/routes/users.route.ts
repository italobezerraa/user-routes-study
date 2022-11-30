import { NextFunction, Request, Response, Router } from "express";

const usersRoute = Router();

usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: "Italo" }];
  res.status(200).json(users);
});

usersRoute.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ message: "Tudo Ok!" });
});

export default usersRoute;
