import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

// console.log(faker.person.firstName());

export class User implements Mappable {
  username: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.username = faker.person.fullName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
  markerContent(): string {
    return `User Name: ${this.username}`;
  }
}
