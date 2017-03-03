import { bindable } from 'aurelia-framework';
import { Person } from './person';
export class CustomRow {
  @bindable person: Person
  @bindable isCompact: boolean;
}
