import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Coupon } from '../../common/Coupon';


@Component({
  selector: 'app-get-coupons-by-type',
  templateUrl: './get-coupons-by-type.component.html',
  styleUrls: ['./get-coupons-by-type.component.css']
})
export class GetCouponsByTypeComponent implements OnInit {
     
  couponsbytype = [];

  constructor(private companyService:CompanyService) { }
  options = ["FOOD", "LEISURE", "ELECTRICAPPLIANCE", "VACATION"]
    ngOnInit() {
  }
  

onChange(option) {
    this.companyService.getCouponsByType(option).subscribe(res=>{
      this.couponsbytype = res;
    },err=>{
      console.log(err);
      
    })
  }
}
