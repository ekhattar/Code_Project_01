import axios from "axios";

export const HTTP = axios.create({
    baseURL: "http://ec2-18-194-144-17.eu-central-1.compute.amazonaws.com:8080/"
});
export default HTTP;
