const { default: Axios } = require("axios");

const orderAxios = Axios.create({
  baseURL: "https://quote-srv.firebaseio.com/",
});
export default orderAxios;
