import { ProductEnum } from "../Enums/Product.enum";

export interface ProductType {
    [ProductEnum.TITLE]: string;
    [ProductEnum.SUBTITLE]: string;
    [ProductEnum.PRICE]: number;
    [ProductEnum.URL]: string
}