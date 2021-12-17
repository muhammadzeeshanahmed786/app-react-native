export let data = {
    authUser: [],
    cartItem: [],
    favoriteCart: [],
    navigate: []
}

export function reducer(state, action) {
    switch (action.type) {



        // Navigate
        case "WINDOW_LOAD": {
            // console.log("navu",navigate)
            // console.log("Complete", data)

            return {
                ...state,
                navigate: action.payload
            }
        }

        // Authentic User

        case "LOGIN_USER": {
            return {
                ...state,
                authUser: action.payload
            }
        }


        // Add To cart

        case "ADD_TO_CART": {

            let CartClone = state.cartItem.slice(0);
            CartClone.push(action.payload);


            return {
                ...state,
                cartItem: CartClone
            }
        }






        // Favorite Cart

        case "FAVORIE_CART": {

            let FavoriteCartClone = state.favoriteCart.slice(0);
            FavoriteCartClone.push(action.payload);


            return {
                ...state,
                favoriteCart: FavoriteCartClone
            }
        }

        default:
            return state;

    }
}
