import axios from "axios";

export const fetchCasesForAll = async () => {
  try {
    const { data } = await axios.get("https://api.covid19api.com/summary");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchIndiaData = async () => {
  try {
    const { data } = await axios.get(" https://api.covid19india.org/data.json");
    return data;
  } catch (error) {}
};
