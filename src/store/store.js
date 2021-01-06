import propductList, { dataGame, getCategories } from '../connectFirebase/Connect';
var redux = require('redux');

const noteInitialState = {
    products: [],
    product: 'aaa',
    cart: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).cart : [],
    // idUserCart : JSON.parse(localStorage.getItem('user'))? JSON.parse(localStorage.getItem('user')).key:null
    carts: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [],
    totalCarts: 0,
    cartLength: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')).length : 0,
    userLogin :null
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            console.log(JSON.stringify(action.getItem));
            dataGame.ref('products').push(action.getItem);
            return state
        case 'GET_PRODUCT':
            var productlist = [];
            dataGame.ref('products').on('value', (products) => {
                products.forEach(element => {
                    productlist.push(element.val());

                });

                return { ...state, products: productlist }

            })

        case 'ADD_TO_CART':
            console.log(action.getItem);
            console.log(state.carts);
            var i = 0;
            state.carts.length == 0 ? state.carts.push(action.getItem) :
                state.carts.map((value, key) => {
                    // console.log(action.getItem.key+'keyyy');
                    if (value.key === action.getItem.key) {

                        state.carts[key].quantity = Number(state.carts[key].quantity) + Number(action.getItem.quantity);
                        console.log(state.carts[key].quantity);
                        i = 1;

                    }
                    else if (key == state.carts.length - 1 && i == 0) {
                        state.carts.push(action.getItem);
                    }
                })
            state.cartLength = state.carts.length;
            localStorage.setItem('carts', JSON.stringify(state.carts));
            console.log(state.carts);
            return state;
        case 'GET_TOTAL':

            var total = 0;
            state.carts.forEach(element => {
                total += element.quantity * element.price;
            })
            return { ...state, totalCarts: total };
        case 'ADD_BILL':
            console.log(action.userId);
            alert('cảm ơn bạn đã mua !!!')
            dataGame.ref('users/' + action.userId + '/bills').push(action.bill);
            localStorage.setItem('carts', []);
            return { ...state, carts: [] };
        case 'ADD_CART_USER':
            alert(action.userId)
            console.log(action.carts);
            console.log();
            state.carts.map((value, key) => {
                dataGame.ref('users/' + action.userId + '/carts').push(value);
            })

            localStorage.setItem('carts', []);
            return { ...state, carts: [] };
        case 'ADD_CATEGORY':
            console.log(JSON.stringify(action.getItem));
            dataGame.ref('categories').push(action.getItem);
            return state;
        case 'CURRENT_USER':
            return {...state,currentUser : action.getUser}

        case 'GET_USERLOGIN':
            console.log(action.getUser);
            return {...state,userLogin : action.getUser}

        default:
            return state
    }

}
var store = redux.createStore(allReducer);

export default store;