import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "672de38e41a64d97af8c5cc78f8c3fa1",
  },
});
