import { Loader } from "@googlemaps/js-api-loader";

export class CustomMap {
  //a reference to google map
  private googleMap!: google.maps.Map;
  public ready: Promise<void>;
  public divId: string;

  constructor(divId: string) {
    this.divId = divId;
    this.ready = this.initGoogleMap();
  }

  private async initGoogleMap(): Promise<void> {
    const loader = new Loader({
      //need to replace with your own google map api key here
      apiKey: "YOUR_GOOGLE_MAP_API_KEY",
      version: "weekly",
    });

    try {
      const { Map } = await loader.importLibrary("maps");
      this.googleMap = new Map(
        document.getElementById(this.divId) as HTMLElement,
        {
          center: { lat: 37.439712, lng: -122.0096919 },
          zoom: 8,
        }
      );
    } catch (e) {
      console.error("Failed to initialize map:", e);
    }
  }
}
