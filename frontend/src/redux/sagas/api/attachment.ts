import axios from "axios";
import { getToken } from "../../../utils/getToken";

export function addImage(data: any) {
  return axios({
    url: "http://localhost:3001/post/upload",
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "multipart/form-data",
    },
    data,
  });
}

export function removeItem(id: string) {
  const data = {
    fileId: id,
  };

  return axios({
    url: "http://localhost:3001/post/remove",
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
    data,
  });
}
