import {LightningElement} from 'lwc';
export default class App extends LightningElement {
 name = 'Electra X4';
 description = 'A sweet bie built for comfort.';
 category = 'Mountain';
 material = 'Steel';
 price = '$2.700';
 pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
 // so initially ready is false 
 ready = false; 
 
 // so when first this component is inserted into DOM then connectedCallback will take place
 bike = {
    name: 'Electra X4',
    picture: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg'
  };
 connectedCallback(){
    // after 300ms set ready to true
    setTimeout(()=>{
       this.ready=true; 
    },300)
 }
}