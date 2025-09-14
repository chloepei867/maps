import { User } from "./User";
import { Company } from "./Company";
import { Loader } from "@googlemaps/js-api-loader";
import { CustomMap } from "./CustomMap";

const customMap = new CustomMap("map");

// wait until the initialization of the map is finished
// customMap.ready;

// let map: google.maps.Map;

// //load google maps
// const loader = new Loader({
//   apiKey:
//   version: "weekly",
// });

// loader
//   .importLibrary("maps")
//   .then(({ Map }) => {
//     map = new Map(document.getElementById("map") as HTMLElement, {
//       center: { lat: 37.439712, lng: -122.0096919 },
//       zoom: 8,
//     });
//   })
//   .catch((e) => {
//     console.log(e);
//   });
