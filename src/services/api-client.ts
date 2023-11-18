import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "35ef94f3031a4e83a4d720f6118174ec",
  },
});
