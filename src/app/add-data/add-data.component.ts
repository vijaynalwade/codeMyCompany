import { Component} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent  {


   arr1=[]; 
   arr2;  
   data1;
   flag;

   productData = new FormGroup({
      productId:new FormControl('',Validators.required), 
      productName:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
      productPrice:new FormControl('',Validators.required)   
 
   })

   

get productId(){
    return this.productData.get('productId');
}

get productName(){
   return this.productData.get('productName');
}

get productPrice(){
   return this.productData.get('productPrice');
}


submit(){
   this.data1=this.productData.value;
   
   localStorage.setItem(this.data1.productId,JSON.stringify(this.data1)); 
    this.flag=0;
   
   }

showTable(){
   this.flag=1;
   this.arr1.push(JSON.parse(localStorage.getItem(this.data1.productId)));
   
console.log(this.arr1);


}

}
