import { Loader } from "@googlemaps/js-api-loader";

// instructions to every class on how they can be an argument to addMarker method.
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  //a reference to google map instance
  private googleMap!: google.maps.Map;
  private AdvancedMarkerElement!: typeof google.maps.marker.AdvancedMarkerElement;
  private InfoWindow!: google.maps.InfoWindow;

  public ready: Promise<void>;
  public divId: string;

  constructor(divId: string) {
    this.divId = divId;
    this.ready = this.initGoogleMap();
  }

  public async addMarker(mappable: Mappable) {
    await this.ready;
    const marker = new this.AdvancedMarkerElement({
      map: this.googleMap,
      position: mappable.location,
    });

    //add a info window
    const infowindow = new google.maps.InfoWindow({
      content: `${mappable.markerContent()}`,
    });
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map: this.googleMap,
      });
    });
  }

  private async initGoogleMap(): Promise<void> {
    const loader = new Loader({
      apiKey: "YOUR_GOOGLE_MAP_API_KEY",
      version: "weekly",
    });

    try {
      // load libraries
      const { Map, InfoWindow } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement } = await loader.importLibrary("marker");
      this.googleMap = new Map(
        document.getElementById(this.divId) as HTMLElement,
        {
          // center: { lat: 37.439712, lng: -122.0096919 },
          center: { lat: 0, lng: 0 },
          zoom: 1,
          mapId: "YOUR_MAP_ID",
        }
      );

      this.AdvancedMarkerElement = AdvancedMarkerElement;
    } catch (e) {
      console.error("Failed to initialize map:", e);
    }
  }
}
