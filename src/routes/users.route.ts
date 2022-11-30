import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const usersRoute = Router();

usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: "Italo" }];
  res.status(StatusCodes.OK).json(users);
});

usersRoute.get("/users/:uuid", (req: Request, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  res.status(StatusCodes.OK).json({ message: `ID buscado foi: ${uuid}` });
});

usersRoute.post("/users", (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  res.status(StatusCodes.CREATED).send(newUser);
});

usersRoute.put("/users/:uuid", (req: Request, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  res.status(StatusCodes.OK).send({ uuid });
});

usersRoute.delete("/users/:uuid", (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(StatusCodes.OK);
});

export default usersRoute;
