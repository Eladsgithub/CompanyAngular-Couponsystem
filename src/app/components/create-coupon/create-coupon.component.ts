import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Coupon } from '../../common/Coupon';
import { CompanyService } from '../../services/company.service';



@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {
  
  public VACATION : string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyEC3ASTrh6xGJlInNo7D-7rhcKjpF9lf-Ch0QkpwgNWHLbC8k";
  public ELECTRICAPPLIANCE : string = "https://cdn.pixabay.com/photo/2016/10/26/21/05/modern-kitchen-1772638__480.jpg";
  public FOOD : string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDGqININ6M7fKZzy8Gt58A1NULZau_VPVcWQoP3sKb7rT2YfbM";
  public LEISURE : string = "https://cdn.pixabay.com/photo/2016/08/14/18/27/sailing-boat-1593613__480.jpg";
  
  public images : string [] = [];
  
  public coupon : Coupon = new Coupon();

  constructor(private _http : Http, private _companyWS : CompanyService) { }


  ngOnInit() {

  }
  
  public createCoupon()
  {
    this._http.post('http://localhost:8080/CompanyWS/createCoupon',this.coupon)
    .subscribe(function(response)
    { 
    console.log(response);

    },function(err)
      {
        console.log(err);
    })

 }
   }
 
