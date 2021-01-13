import { put } from "./api";

export const incrementViews = async (data) => {
  const response = await put(`questions/${data}/increment-views`);
  return response.data;
};
