import { http } from "./config";

export default {
  getImages: () => {
    return http.get("/images");
  },

  addImage: (image) => {
    return http.post("/images", image);
  },

  update: (image) => {
    return http.put("/images/" + image.id, image);
  },

  delete: (image) => {
    return http.delete("/images/" + image.id, { data: image });
  },
};
