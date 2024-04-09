import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8a1ae96251b7480ba6529d70a75c5da5",
  },
});
