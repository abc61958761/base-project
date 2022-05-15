import appserve from "./appserve";

export default {
  async getCompanyInfo() {
    return await appserve.get("/getCompanyInfo");
  },
};
