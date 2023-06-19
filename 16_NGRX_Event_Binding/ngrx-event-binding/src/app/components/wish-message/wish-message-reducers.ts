import { createReducer, on } from '@ngrx/store'
import { sayGoodAfternoon, sayGoodEvening, sayGoodMorning } from './wish-message-actions'

const initialState = {
    message: 'Hello'
}

export const WishMessageReducer = createReducer(initialState, on(sayGoodMorning, (store) => {
    return {
        message: 'Good Morning'
    }
}), on(sayGoodAfternoon, (store) => {
    return {
        message: 'Good Afternoon'
    }
}), on(sayGoodEvening, (store) => {
    return {
        message: 'Good Evening'
    }
}))