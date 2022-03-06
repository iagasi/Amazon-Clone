export const initialState = {
    basket: [],
    user: null
}

const reducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case "DELETE_FROM_BASKET":
            const newBasket = [...state.basket]

            newBasket.splice(action.index, 1)
            return {
                ...state,
                basket: newBasket
            }

        case "SET_USER":
            console.log(action.user);

            return {
                ...state,
                user: action.user
            }
         
            case "DELETE_USER":

            return{
                ...state,
                user:null

            }



        default: return state
    }

}

export default reducer