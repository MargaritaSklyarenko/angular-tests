import { ProductState } from "../products/product.reducer"
import { UserState } from '../user/user.reducer';

export interface State {
    products: ProductState;
    user: UserState;
}