import Api from "./api";

// TODO sort out error handling for api calls
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

// TODO rmeove hard coded-ness from paging
export const getRunActivitiesForUser = async (userId) => {
  try {
    const response = await Api.get(
      `/RunActivity/user/${userId}?pageNumber=1&pageSize=50`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
