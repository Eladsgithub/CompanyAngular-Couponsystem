import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Coupon } from '../../common/Coupon';
import { Http } from '@angular/http';


@Component({
  selector: 'app-get-coupons-by-price',
  templateUrl: './get-coupons-by-price.component.html',
  styleUrls: ['./get-coupons-by-price.component.css']
})
export class GetCouponsByPriceComponent implements OnInit {
     
  public _couponsbyprice : Coupon[] = []; 
  public price : number;
  constructor(private _http:Http) { }
 
    ngOnInit() {
  }
  
  getCouponsByPrice(){
    var self = this;
    this._http.get('http://localhost:8080/CompanyWS/getCouponsByPrice/' + this.price).map(function(response)
    {
      return response.json();
    }
  ).subscribe(
    function(couponsbyprice)
    {
      for(let c of couponsbyprice)
      {
        console.log(c);
      }
      self._couponsbyprice = couponsbyprice;
      
    })
  }
}


// var self = this;
//     this._http.get('http://localhost:8080/AdminWS/getAllCustomers').map(function(response)
//     {
//       return response.json();
//     }
//   ).subscribe(
//     function(couponsbyprice)
//     {
//       for(let c of couponsbyprice)
//       {
//         console.log(c);
//       }
//       self._couponsbyprice = couponsbyprice;
//     }
//   )
// } 
// }