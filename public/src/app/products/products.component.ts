import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts: any=[]

  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    let observable = this._httpService.getProducts();


    observable.subscribe(
       (data:any) =>{
         console.log("esto es data products: ",data)
      this.allProducts = data
      console.log("temp: ",this.allProducts)



    },
    (error:any) =>{
      console.log("Something wet wrong ",error);
    })
    // console.log("After loading the tasks: ", this.taskslist);
  }


  deleteProducts(_id:object):void{

    console.log("Products que se eliminara ", _id);
    this._httpService.deleteProduct(_id)
    .subscribe((data:any) =>{ 
      console.log(data);
    });
    location.reload();
  }
};