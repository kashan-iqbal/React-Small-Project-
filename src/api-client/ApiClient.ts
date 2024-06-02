import axios from "axios";

export default  axios.create({
    
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ed1e43ccb8d04daca3cc63fc97ceb5c8",
  },
});
