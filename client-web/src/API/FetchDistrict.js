import { ip } from "../Config/ip";

const FetchDistrict = async (state) => {
  console.log(state);
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(
    `${ip}/getDistricts?state=${state || null}`,
    requestOptions
  );
  const result = await response.json();
  return result.data || [];
};

export default FetchDistrict;
