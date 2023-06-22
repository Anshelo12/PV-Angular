import { CategoryModel } from "./category.model";

export interface ProductModel{
    selectedProduct: any;
    id:number;
    title:string;
    price:number;
    description:string;
    images:string;
    category:CategoryModel;
}

export interface CreateProductDto extends Omit<ProductModel, 'id' | 'category'>{
    categoryId:number;
}
export interface UpdateProductDto extends Partial<ProductModel>{
    categoryId?:number;
}
