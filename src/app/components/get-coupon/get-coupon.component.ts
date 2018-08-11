import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon';
import { Http } from '@angular/http';
import { CompanyService } from '../../services/company.service';


@Component({
  selector: 'app-get-coupon',
  templateUrl: './get-coupon.component.html',
  styleUrls: ['./get-coupon.component.css']
})
export class GetCouponComponent implements OnInit {

  public _id;
  _coupon:Coupon;
  constructor(private _companyService: CompanyService) { }

  ngOnInit() {
  }

  getCoupon(){
   
     this._companyService.getCoupon(this._id).subscribe(res =>{
          this._coupon = res;
      },err=>{
          console.log(err);
      });
  }
}
