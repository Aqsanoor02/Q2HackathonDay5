export interface Product{
    _id: string,
    productName:string,
    _type:"product";
    image? : {
        asset:{
            _ref : string;
            _type : "image";

        }
    };
    price: number;
    description? : string;
    inventory: number;
    category :string;
    colors :[string];
    status: string;
    slug : {
        _type :"slug",
        current : string;
    };
}