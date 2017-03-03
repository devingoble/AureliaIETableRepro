import { Person } from './person';
export class App {
  personnel: Person[];
  isCompact: boolean = true;

  constructor() {
    this.personnel = [
      { firstName: "Jimmy", lastName: "Buffett", favoriteColor: "Cheeseburger" },
      { firstName: "Han", lastName: "Solo", favoriteColor: "none, he's dead"}
    ]
  }
}
