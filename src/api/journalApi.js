import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://vue-demos-d7ffa-default-rtdb.firebaseio.com",
});

export default journalApi;
