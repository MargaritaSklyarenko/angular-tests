import { ProductState } from "../products/product.reducer"

export interface State {
    products: ProductState;
    user: any;
}