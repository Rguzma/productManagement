import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  newProduct:any={
    productTitle:"",
    productPrice:0,
    productImage:""

  };
  errorMessage:String="";
  constructor(private _httpService: HttpService) { }
  ngOnInit(): void {
  }

  createProduct(event:any) :void{
    console.log("se crea el product")
    event.preventDefault()
    if(this.newProduct.productTitle.length<4){
      this.errorMessage="Title must have at least 4 characters."
    }
    else if(this.newProduct.productTitle==null || this.newProduct.productPrice==null ){
      this.errorMessage="Title and price are required."
    }
    else{
    let observable = this._httpService.postCreateProduct(this.newProduct)
    console.log("aqui va new product: ",this.newProduct);
    observable.subscribe((data:any) =>{
      console.log(data);
      location.reload();
    });
  };

  }

}