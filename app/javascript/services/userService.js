import { httpService } from "./httpService";

const fetchCurrentUser = async ()=>{
       const { data } = await httpService.get("/current_user");
       return data;
}

export const userService = {
       fetchCurrentUser,
}