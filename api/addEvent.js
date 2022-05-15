import appserve from "./appserve";

export default {
  async addEvent(params) {
    return await appserve.post("/addEvent", params);
  },
};
