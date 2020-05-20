import { IUser } from "../../types";
import { IAuth } from "../../types/auth";
import { IImage } from "../../types/attachment";

export interface IRootReducer {
  router: any;
  user: IUser;
  auth: IAuth;
  attachment: IImage;
  post:any
}
