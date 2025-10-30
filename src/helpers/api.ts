import axios from "axios";

export const fetcher = (url: string) => axios(`http://localhost:3000/${url}`)