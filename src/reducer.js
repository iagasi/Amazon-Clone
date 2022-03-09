export const initialState = {
    basket: [],
    user: null,
    products:
   [
        {id:"1",title:"Susan Orlean/Library Book",price:11.99,img:"https://images-na.ssl-images-amazon.com/images/I/91oy4zw56KL.jpg"},
        { id:"2",title:"LG",price:11.99,img:"https://metromart.ge/web/image/product.template/14378/image/300x300"},
        {id:"3",title:"Iphone 11",price:560,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-green-select-2019?wid=940&hei=1112&fmt=png-alpha&.v=1566956144838"},
        {id:"4",title:"Samung galaxy -s",price:740,img:"https://images.samsung.com/is/image/samsung/p6pim/levant/sm-g780gzbgmeb/gallery/levant-galaxy-s20-fe-g780-391575-sm-g780gzbgmeb-thumb-456965095?$320_320_PNG$"},
        {id:"5",title:"Samsung Galaxy",price:950,img:"https://images.samsung.com/is/image/samsung/p6pim/levant/2108/gallery/levant-galaxy-z-fold3-f926-5g-sm-f926bzkdmea-thumb-477353619?$264_264_PNG$"},
        {id:"6",title:"Susan Orlean/Library Book",price:11.99,img:"https://images-na.ssl-images-amazon.com/images/I/91oy4zw56KL.jpg"},
      ]


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
            
             case "EMPTY_BASKET":

             return{
                 ...state,
                 basket:[]
             }




        default: return state
    }

}

export default reducer