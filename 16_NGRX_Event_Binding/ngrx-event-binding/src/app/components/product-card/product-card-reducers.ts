import { createReducer, on } from "@ngrx/store"
import { decrQty, incrQty } from "./product-card-actions"


export const productFeatureKey = 'productItem';

export interface State {
    product: {
        sno: string,
        image: string,
        name: string,
        price: number,
        qty: number
    }
}

let initialState: State = {
    product: {
        sno: '004A5',
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKU83_VW_34FR+watch-40-alum-midnight-nc-se_VW_34FR_WF_CO_GEO_IN?wid=700&hei=700&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171038000%2C1661473982737',
        name: "Apple Watch",
        price: 1250,
        qty: 1
    }
}

export const reducer = createReducer(initialState, on(incrQty, (state) => {
    return {
        product: {
            ...state.product,
            qty: state.product.qty + 1
        }
    }
}), on(decrQty, (state) => {
    return {
        product: {
            ...state.product,
            qty: state.product.qty - 1 < 0 ? 1 : state.product.qty - 1
        }
    }
}))