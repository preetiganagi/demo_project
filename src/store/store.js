// import Vue from "vue";
import { createStore } from "vuex";

// Vue.

export default createStore({

    state: {
        products: [ 
            { id: 1, name: 'Veggie Pizza', price: 250, toppings: ['tomato', 'onion', 'mushroom','capsicum', 'olives']},
            { id: 2,name: 'Margherita Pizza', price: 250, toppings: ['cheese'] },
            { id: 3,name: 'Pepperoni Pizza', price: 350, toppings: ['tomato', 'onion', 'olives', 'paneer']},
            { id: 4,name: 'BBQ Chicken Pizza', price: 400 , toppings: ['tomato', 'onion', 'chicken']},
            { id: 5,name: 'Farm House', price: 350, toppings: ['tomato', 'onion', 'mushroom','capsicum', 'olives']}
        ]
    },
    getters:{
        offerProducts: (state) => {
            var offerProducts = state.products.map( product =>{
                return {
                    name: "**"+ product.name,
                    price: product.price/2
                }
            })
            return offerProducts;
        },
        getToppings:(state) => (id) => {
            return state.products.find( (product) => (product.id == id))
        }
    },
    mutations:{
        decreasePrice:(state, payload) => {
            state.products.forEach( product => { product.price -= payload });
        }
    },
    actions:{
        reducePrice:(context, payload)=>{
            context.commit('decreasePrice', payload)
        }
    }
});