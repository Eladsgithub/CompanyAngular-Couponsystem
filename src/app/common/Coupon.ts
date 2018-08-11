export class Coupon {

    constructor (
            public id?:string,
            public title?:string,
            public startDate?:Date, 
            public endDate?:Date,
            public amount?:number, 
            public type?:string, 
            public message?:string, 
            public price?:number, 
            public image?:string)
{
    
}



}