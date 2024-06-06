import { ip } from "../Config/ip";

const FetchSchoolMedium = async () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(`${ip}/getSchoolType`, requestOptions);
  const result = await response.json();
  return result.data || [];
};

export default FetchSchoolMedium;
