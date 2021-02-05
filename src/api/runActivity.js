import Api from "./api";

export const getRunActivityById = async (id) => {
  try {
    const response = await Api.get(`/RunActivity/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const addRunActivity = async (activity) => {
  try {
    const response = await Api.post(`/RunActivity`, activity);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// TODO sort out hard coded id and paging
export const getRunActivitiesForUser = async () => {
  try {
    const response = await Api.get(
      `/RunActivity/user/d30e52b0-304c-4aa1-3c68-08d888b124c0?pageNumber=1&pageSize=50`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
