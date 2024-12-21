import { api } from "./api";

export const fetchCurrentUser = async ()=>{
       const { data } = await api.get("/current_user");
       return data;
}