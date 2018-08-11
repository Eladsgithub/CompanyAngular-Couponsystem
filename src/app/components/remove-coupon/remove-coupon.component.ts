// import { Component, OnInit } from '@angular/core';
// import { Coupon } from '../../common/Coupon';
// import { Http } from '@angular/http';
// import { CompanyService } from '../../services/company.service';


// @Component({
//   selector: 'app-remove-coupon',
//   templateUrl: './remove-coupon.component.html',
//   styleUrls: ['./remove-coupon.component.css']
// })
// export class RemoveCouponComponent implements OnInit {
//   public coupon : Coupon = new Coupon();
//   public title : String;

//   constructor(private _http:Http) { }

//   ngOnInit() {
//   }
//   removeCoupon()
//   {
//     console.log("1")
//     var url = 'http://localhost:8080/CompanyWS/removeCoupon/' + this.title;
//     console.log("2")
//     this._http.delete(url).subscribe(function(response)
    
//     {
//       console.log("3")
//       console.log(response);
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon';
import { Http } from '@angular/http';

@Component({
  selector: 'app-remove-coupon',
  templateUrl: './remove-coupon.component.html',
  styleUrls: ['./remove-coupon.component.css']
})
export class RemoveCouponComponent implements OnInit {

  public coupon : Coupon = new Coupon();
  public coupontoremove : String;

  // dependancy injection for http object ->will become
  // a member of this class
  constructor(private _http : Http) { }

  ngOnInit() {
  }

  removeCoupon(){
  // this._http.get("http://localhost:8080/test")
  // .subscribe(function(response)
  //    {
  //      console.log(response);
  //    });
    var url = 'http://localhost:8080/CompanyWS/removeCoupon/' + this.coupontoremove;

 
  this._http.delete(url)
  .subscribe(function(response)
     {
       console.log(response);
     });

    }
   }