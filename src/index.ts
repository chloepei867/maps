import { User } from "./User";
import { Company } from "./Company";
import { Loader } from "@googlemaps/js-api-loader";

let map: google.maps.Map;

//load google maps
const loader = new Loader({
  apiKey: "AIzaSyBpRL_JR6ZScBBpnqpbWJJp5F2tBo-jpBs",
  version: "weekly",
});

loader
  .importLibrary("maps")
  .then(({ Map }) => {
    map = new Map(document.getElementById("map") as HTMLElement, {
      center: { lat: 37.439712, lng: -122.0096919 },
      zoom: 8,
    });
  })
  .catch((e) => {
    console.log(e);
  });
