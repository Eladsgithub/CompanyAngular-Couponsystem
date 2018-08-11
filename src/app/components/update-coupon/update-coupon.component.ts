import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon';
import { Http } from '@angular/http';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  public coupon : Coupon = new Coupon();
  // public coupontoupdate : Coupon;

  // dependancy injection for http object ->will become
  // a member of this class
  constructor(private _http : Http) { }

  ngOnInit() {
  }

  updateCoupon(){
    // var url = 'http://localhost:8080/CompanyWS/updateCoupon';
 
        this._http.put('http://localhost:8080/CompanyWS/updateCoupon' ,this.coupon).subscribe(function(response)
     {
       console.log(response);
     });

    }
}
