import { GroupController } from "./controllers/group-controller";
import { PermissionController } from "./controllers/permission-controller";
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
  action: "find"
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
},
{
  method: "post",
  route: "/addUsersToGroup",
  controller: UserController,
  action: "addUsersToGroup"
},

{
  method: "get",
  route: "/groups",
  controller: GroupController,
  action: "all"
}, {
  method: "get",
  route: "/group/:id",
  controller: GroupController,
  action: "find"
}, {
  method: "post",
  route: "/group",
  controller: GroupController,
  action: "save"
}, {
  method: "delete",
  route: "/group/:id",
  controller: GroupController,
  action: "remove"
},

{
  method: "get",
  route: "/permissions",
  controller: PermissionController,
  action: "all"
}, {
  method: "get",
  route: "/permission/:id",
  controller: PermissionController,
  action: "find"
}, {
  method: "post",
  route: "/permission",
  controller: PermissionController,
  action: "save"
}, {
  method: "delete",
  route: "/permission/:id",
  controller: PermissionController,
  action: "remove"
},

];