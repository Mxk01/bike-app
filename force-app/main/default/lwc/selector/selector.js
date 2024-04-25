import { LightningElement, wire } from 'lwc'; 
import { getRecord, getFieldValue } from 'lightning/uiRecordApi'; 
import Id from '@salesforce/user/Id'; 
import NAME_FIELD from '@salesforce/schema/User.Name'; 
const fields = [NAME_FIELD]; 
export default class Selector extends LightningElement { 
  selectedProductId; 
  handleProductSelected(evt) { 
    this.selectedProductId = evt.detail; 
  } 
  userId = Id; 
  // so basically here we are using the getRecord (adapterId) to grab a record (row) 
  @wire(getRecord, { recordId: '$userId', fields })  // in the adapter id we are passing the user's id and the fields that we want to get
  user; 
  get name() { 
    // then we want to get the name from that record 
    // we can grab fields from salesforce schema 
    return getFieldValue(this.user.data, NAME_FIELD); 
  } 
}
