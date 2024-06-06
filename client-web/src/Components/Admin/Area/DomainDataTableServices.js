import { ip } from "../../../Config/ip";

export const DomainDataTableServices = {
  getData() {
    return fetch(`${ip}/stateWiseCount`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        return res.resultArray;
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

  getCustomersXLarge() {
    return Promise.resolve(this.getData());
  },
};
