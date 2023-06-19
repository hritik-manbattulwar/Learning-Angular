import { createActionGroup, emptyProps, props, createAction } from '@ngrx/store';

/* export const ProductItemActions = createActionGroup({
  source: 'ProductItem',
  events: {
    'Increase Qty': emptyProps(),
    'Decrease Qty': emptyProps()
  }
}); */


export const incrQty = createAction('[Product-Item] incrQty')
export const decrQty = createAction('[Product-Item] decrQty')