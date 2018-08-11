import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Coupon } from '../common/Coupon';
import 'rxjs/add/operator/map'; 

@Injectable()
export class CompanyService {

  public coup : Coupon = new Coupon();
  public _coupon : Coupon;
  private getAllCouponsUrl = "http://localhost:8080/companyWS/getallcoupons";

  constructor(private _http : Http) { }

  public createCoupon(coupon : Coupon){
      
      this._http.post('http://localhost:8080/CompanyWS/createCoupon',this._coupon)
          .subscribe(function(response)
          { 
          console.log(response);

          },function(err)
            {
              console.log(err);
          })
      }
      
      public removeCoupon(coupon)
      {
           this._http.delete('http://localhost:8080/CompanyWS/removeCoupon');
      }

      public getAllCoupons() {
          return this._http.get('http://localhost:8080/CompanyWS/getAllCoupons').map(res=>{return res.json()});
        }
       public getCoupon(id) {
          return this._http.get(`http://localhost:8080/CompanyWS/getCoupon/${id}`).map(res=>{return res.json()});
        
      }
      public getCouponsByType(type) {
        return this._http.get(`http://localhost:8080/CompanyWS/getCouponsByType/${type}`).map(res=>{return res.json()});
      
    }
    public getCouponsByPrice(price) {
        return this._http.get(`http://localhost:8080/CompanyWS/getCouponsByPrice/${price}`).map(res=>{return res.json()});
      
    }
    public getCouponsByDate(date) {
        console.log(`http://localhost:8080/CompanyWS/getCouponsByDate/${date}`);
        return this._http.get(`http://localhost:8080/CompanyWS/getCouponsByDate/${date}`).map(res=>{return res.json()});
      
    }

}
