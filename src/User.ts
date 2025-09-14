import { faker } from "@faker-js/faker";

// console.log(faker.person.firstName());

export class User {
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
}
