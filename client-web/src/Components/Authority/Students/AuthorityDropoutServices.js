import { ip } from "../../../Config/ip";

export const AuthorityDropoutServices = {
  getData(selectedState, selectedDistrict, selectedTaluka, selectedCity) {
    return fetch(
      `${ip}/getChooseWiseStudents?state=${selectedState}&district=${selectedDistrict}&city=${selectedCity}&taluka=${selectedTaluka}&status=1`
    )
      .then((res) => res.json())
      .then((res) => {
        return res.data;
      });
  },

  getCustomersSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  },

  getCustomersMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  },

  getCustomersLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  },

  getCustomersXLarge(
    selectedState,
    selectedDistrict,
    selectedTaluka,
    selectedCity
  ) {
    return Promise.resolve(
      this.getData(
        selectedState,
        selectedDistrict,
        selectedTaluka,
        selectedCity
      )
    );
  },
};
