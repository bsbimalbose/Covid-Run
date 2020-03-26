import { preProcessCountryData } from "../utils";

export default (state, action) => {
  switch (action.type) {
    case "SET_INDIA_VALUE": {
      return preProcessCountryData(action.value);
    }
    default:
      return action.value;
  }
};
