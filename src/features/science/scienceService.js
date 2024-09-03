import axios from "axios";

const fetchStories = async () => {
    const response = await axios.get(
      `https://mxpertztestapi.onrender.com/api/adventure`
    );
    console.log(response.data)
    return response.data;
  };

  const singleStories = async (id) => {
    const response = await axios.get(`https://mxpertztestapi.onrender.com/api/adventure/${id}`)
    return response.data
  }

const service = {
  fetchStories,
  singleStories
};

export default service;
