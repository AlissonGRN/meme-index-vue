import { http } from "./config";

export default {
  getGifs: () => {
    return http.get("/gifs");
  },

  addGif: (gif) => {
    return http.post("/gifs", gif);
  },

  update: (gif) => {
    return http.put("/gifs/" + gif.id, gif);
  },

  delete: (gif) => {
    return http.delete("/gif/" + gif.id, { data: gif });
  },
};
