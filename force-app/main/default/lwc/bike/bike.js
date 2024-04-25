// bike.js 
import { LightningElement, api } from 'lwc';
export default class Bike extends LightningElement {
// basically we got the value from the app.js 
  @api bike;
}
