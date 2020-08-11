import { UserController } from "./controllers/user-controller";
import { IRoutes } from "./models/router.interface";

export const ROUTES: IRoutes[] = [{
  method: "get",
  route: "/users",
  controller: UserController,
  action: "all"
}, {
  method: "get",
  route: "/user/:id",
  controller: UserController,
  action: "one"
}, {
  method: "post",
  route: "/user",
  controller: UserController,
  action: "save"
}, {
  method: "delete",
  route: "/user/:id",
  controller: UserController,
  action: "remove"
}];