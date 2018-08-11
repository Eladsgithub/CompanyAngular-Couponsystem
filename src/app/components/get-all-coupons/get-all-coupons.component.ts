import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon';
import { Http } from '@angular/http';
import { CompanyService } from '../../services/company.service';


@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})
export class GetAllCouponsComponent implements OnInit {
  
  public _coupons : Coupon[] = []; 
  
  constructor(private companyService:CompanyService) { }

  ngOnInit() {
    this.companyService.getAllCoupons().subscribe(res=>{
      this._coupons = res;
    },err=>{console.log(err)})


  }

}
