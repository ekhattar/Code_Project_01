import axios from "axios";

export const HTTP = axios.create({
    baseURL: "https://codequiz.turingsimulator.org/"
});
export default HTTP;
