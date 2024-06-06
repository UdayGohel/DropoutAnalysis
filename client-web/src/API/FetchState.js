import { ip } from "../Config/ip";

const FetchState = async () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(`${ip}/getStates`, requestOptions);
  const result = await response.json();
  return result.data || [];
};

export default FetchState;
