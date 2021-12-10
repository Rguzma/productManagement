import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router} from '@angular/router';
import { AnyObject } from 'mongoose';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.css']
})
export class NotesDetailsComponent implements OnInit {
  singleProducts: any = [];
  id:any={};
  updatedProducts:any={
    productTitle:"",
    productPrice:0,
    productImage:""

  };
  errorMessage:String=""
  constructor(private _httpService: HttpService, private _route:ActivatedRoute, private_router:Router) { }

  ngOnInit(): void {
    console.log("init");
    // this.Products=_id
    this._route.params.subscribe((params:any) => {
    this.id = params;
      console.log("parametros: ",params);
    })
    let observable=this._httpService.getAProduct(this.id);
    observable.subscribe((data:any)=>{
      console.log("info en data: ",data)
      this.singleProducts=data
      console.log("info en singleProducts: ",this.singleProducts.productTitle)
    },
    (error:any)=>{
      console.log("Something went wrong", error);
    })
    
  };


  updateProduct(event:any): void{
    console.log("comienza update")
    let id=this.id
    console.log("este es el id: ",id)
    // let productTitle= event.target.productTitle.value;
    console.log("este es el productTitle: ",this.updatedProducts.productTitle)

    console.log("este es updatedProducts: ",this.updatedProducts)
    if(this.updatedProducts.productTitle.length<4){
      this.errorMessage="Title must have at least 4 characters."
    }
    else if(this.updatedProducts.productTitle==null || this.updatedProducts.productPrice==null ){
      this.errorMessage="Title and price are required."
    }
    else{
      this._httpService.putUpdateProduct(id, this.updatedProducts)
      .subscribe((data:any) =>{
        
        console.log(data);
        location.reload();
      });
  };
  }
  
};
