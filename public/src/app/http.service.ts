import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProducts(){
    console.log("hola")
    return this._http.get('http://localhost:8080/products');
 };
 getAProduct(_id:any){
  console.log("soy getAProducts: ",_id)
 return this._http.get(`http://localhost:8080/products/${_id._id}`);
 
}

postCreateProduct(newProduct:any){
  console.log("info que se guardara: ",newProduct.productName)
return this._http.post('http://localhost:8080/products', newProduct);
};
putUpdateProduct(_id: any, updatedProducts:any){
return this._http.put(`http://localhost:8080/products/${_id._id}`, updatedProducts);
};
deleteProduct(_id: object){
return this._http.delete(`http://localhost:8080/products/${_id}`, _id);
};

}
