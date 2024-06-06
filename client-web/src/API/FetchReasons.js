import { ip } from "../Config/ip";

const FetchReasons = async (id) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(
    `${ip}/getReason` + (id ? `?reason=${id}` : ""),
    requestOptions
  );
  const result = await response.json();
  return result.data || [];
};

export default FetchReasons;
