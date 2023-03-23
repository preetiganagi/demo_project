// import Vue from "vue";
import { createStore } from "vuex";

// Vue.

export default createStore({

    state: {
        products: [ 
            { name: 'Veggie Pizza', price: 250 },
            { name: 'Margherita Pizza', price: 250 },
            { name: 'Pepperoni Pizza', price: 350 },
            { name: 'BBQ Chicken Pizza', price: 400 },
            { name: 'Farm House', price: 350}
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