import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CreateCouponComponent } from './components/create-coupon/create-coupon.component';
import { RemoveCouponComponent } from './components/remove-coupon/remove-coupon.component';
import { UpdateCouponComponent } from './components/update-coupon/update-coupon.component';
import { GetAllCouponsComponent } from './components/get-all-coupons/get-all-coupons.component';
import { GetCouponComponent } from './components/get-coupon/get-coupon.component';
import { GetCouponsByTypeComponent } from './components/get-coupons-by-type/get-coupons-by-type.component';
import { GetCouponsByDateComponent } from './components/get-coupons-by-date/get-coupons-by-date.component';
import { GetCouponsByPriceComponent } from './components/get-coupons-by-price/get-coupons-by-price.component';
import { CompanyService } from './services/company.service';




@NgModule({
  declarations: [
    AppComponent,
    CreateCouponComponent,
    RemoveCouponComponent,
    UpdateCouponComponent,
    GetAllCouponsComponent,
    GetCouponComponent,
    GetCouponsByTypeComponent,
    GetCouponsByDateComponent,
    GetCouponsByPriceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {
            path :'removeCoupon',
            component : RemoveCouponComponent
        },
        {
            path :'createCoupon',
            component : CreateCouponComponent
        },
        {
            path :'updateCoupon',
            component : UpdateCouponComponent
        },
        {
            path :'getAllCoupons',
            component : GetAllCouponsComponent
        },
        {
            path :'getCoupon',
            component : GetCouponComponent
        },
        {
            path :'getCouponsByType',
            component : GetCouponsByTypeComponent
         },
         {
            path :'getCouponsByDate',
            component : GetCouponsByDateComponent
        },
          {
            path :'getCouponsByPrice',
            component : GetCouponsByPriceComponent
}
    ])
  ],
  providers: [CompanyService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }