import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Coupon } from '../../common/Coupon';

@Component({
  selector: 'app-get-coupons-by-date',
  templateUrl: './get-coupons-by-date.component.html',
  styleUrls: ['./get-coupons-by-date.component.css']
})
export class GetCouponsByDateComponent implements OnInit {


  couponsbydate = [];
  public date : Date;
  constructor(private companyService:CompanyService) { }

  ngOnInit() {
  }
  getCouponsByDate(){
    
    this.companyService.getCouponsByDate(this.date).subscribe(res=>{
      this.couponsbydate = res;
    },err=>{
      console.log(err);
      
    })
}
}
