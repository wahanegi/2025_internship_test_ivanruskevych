import { api } from "./api";
import {apiErrorHandler} from "../utils";

export const fetchCurrentUser = async ()=>{
   try {
       const { data } = await api.get("/current_user");
       return data;
   } catch (err) {
       apiErrorHandler(err)
   }
}