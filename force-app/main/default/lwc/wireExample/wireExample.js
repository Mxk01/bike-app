import { LightningElement,api,wire } from 'lwc';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
export default class WireExample extends LightningElement {

  @api recordId;
  // every wire object has two properties
  // data and error 
  // we use data to grab data lol 
  // and error to catch any error 
  // @wire(adapterId,adapterConfiguration)
  // getRecord - method that we use to get records from db
 // {recordId:'$recordId} is the values we are passing to our 
 // getRecord method 
  @wire (getRecord,{
    recordId:'$recordId',
    // fields that we want to get 
    fields:['Account.Name','Account.Phone']
  }) accounts;

  get getName () {
   if(this.accounts.data){ 
    // from the accounts data select the account name   
    return getFieldValue(this.accounts.data,'Account.Name')
  }
  else {
    return this.accounts.error;
  }
}
get getPhone () {
    if(this.accounts.phone){ 
     // from the accounts data select the account name   
     return getFieldValue(this.accounts.data,'Account.Phone')
   }
   else {
     return this.accounts.error;
   }
 }
}