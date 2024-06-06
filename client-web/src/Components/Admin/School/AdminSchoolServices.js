import { ip } from "../../../Config/ip";

export const AdminSchoolServices = {
  getData(selectedState, selectedDistrict, selectedTaluka, selectedCity) {
    console.log(selectedDistrict);
    return fetch(
      `${ip}/getSchool` +
        (selectedState && `?State=${selectedState}`) +
        (selectedDistrict && `&District=${selectedDistrict}`) +
        (selectedTaluka && `&Taluka=${selectedTaluka}`) +
        (selectedCity && `&City=${selectedCity}`)
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
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
    selectedDistrict,
    selectedTaluka,
    selectedCity,
    selectedState
  ) {
    return Promise.resolve(
      this.getData(
        selectedDistrict,
        selectedTaluka,
        selectedCity,
        selectedState
      )
    );
  },
};
