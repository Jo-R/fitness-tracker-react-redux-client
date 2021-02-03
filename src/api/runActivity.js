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