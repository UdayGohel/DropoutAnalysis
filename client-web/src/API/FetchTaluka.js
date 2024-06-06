import { ip } from "../Config/ip";

const FetchTaluka = async (state, district) => {
  console.log(state, district);
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(
    `${ip}/getTalukas?state=${state || null}&district=${district || null}`,
    requestOptions
  );
  const result = await response.json();
  return result.data || [];
};

export default FetchTaluka;
