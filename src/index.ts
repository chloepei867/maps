import { User } from "./User";
import { Company } from "./Company";
import { Loader } from "@googlemaps/js-api-loader";
import { CustomMap } from "./CustomMap";

const customMap = new CustomMap("map");
const position = {
  location: {
    lat: 37.400754,
    lng: -121.971818,
  },
  markerContent(): string {
    return "this is a random location";
  },
};

const user = new User();
const company = new Company();

customMap.addMarker(position);
customMap.addMarker(user);
customMap.addMarker(company);
