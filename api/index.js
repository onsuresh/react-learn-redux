import axios from "axios";

const dataURL = "https://dog.ceo/api/breeds/image/random";

const makeApi = dataURL => {
  axios
    .get(dataURL)
    .then(data => {
      return data;
    })
    .catch(data => {
      return data;
    });
};

export { dataURL, makeApi };
