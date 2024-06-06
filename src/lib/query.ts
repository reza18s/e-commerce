import { db } from "./db";

export const getProductAPI = async () => {
  try {
    const res = db.product.findMany();
    return res;
  } catch (error) {
    console.log(error);
  }
};
