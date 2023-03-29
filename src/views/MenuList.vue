<template>
    <h2> {{ restaurant }} menu List</h2>
    <div id="menu-list">
        <ul>
            <li v-for="product in products" :key="product.id">
                <span class="name">{{ product.name }}</span>
                <span class="price">  Rs. {{ product.price }}</span>   
            </li>
        </ul>
        <h2> Today's offer menu List</h2>

        <ul>
            <li v-for="product in offerProducts" :key="product.id">
                <span class="name">{{ product.name }}</span>
                <span class="price">  Rs. {{ product.price }}</span>   
            </li>
        </ul>
        <div id="pizzaoffer">
        <ul>
            <h3>Click to see the toppings added to pizza</h3>
            <li v-for="product in products" :key="product.id">
                <a href="#" v-on:click="getToppingsbyId(product.id)">
                <span class="name">{{ product.name }}</span>
                <span class="price">  Rs. {{ product.price }}</span>   </a>
            </li>
            <li><button v-on:click="reducePrice(1)">Reduce Price by one rs</button></li>
            <li><button v-on:click="reducePrice(2)">Reduce Price by 2rs</button></li>
        </ul>
    </div>
        <div v-if="product" class="toppings">
            <h3> Toppings added to {{ product.name }}</h3>
            <span>{{ product.toppings}}</span> 

        </div>
    </div>
</template>
<script>
import axios from "axios";
import { mapActions, mapGetters, mapState} from "vuex";

export default{

    data(){
        return{
            restaurant: '',
            toppings: 0,
            product:''
        }
    },
    computed: {
        ...mapState({
            products : (state) => { 
                console.log(state);
                return state.menulist.products
            }
            
        }),
        // products(){
        //     return this.$store.state.products
        // },
        // offerProducts(){
        //     return this.$store.getters.offerProducts;
        // }
        //mapgetters
        ...mapGetters(
        {
            'offerProducts' : 'menulist/offerProducts',
            'getToppingsbyIdGetter': 'menulist/getToppings'
            
        }),
        // product(){
        //     console.log('inside product',this.toppings);

        //    return this.$store.getters.getToppings(this.toppings)
        // //    return this.$store.menulist.getToppings(this.toppings)
        // }
            
        
    },
    async mounted() {
      
            let id = this.$route.params.id     
            let result = await axios.get("http://localhost:3000/restaurants/"+id)
            this.restaurant = result.data.name
    },
    methods:{
        // reducePrice(amount){
        //     this.$store.commit('decreasePrice', amount)
        // },
        //mapactions 
        ...mapActions(['menulist/reducePrice']),
        getToppingsbyId(id){
            this.toppings = id;
            this.product = this.getToppingsbyIdGetter(id)
        },
        reducePrice(value){
            this.$store.dispatch('menulist/actionB', value)
        }

    },
    beforeRouteEnter(){
        console.log("hello before component"); 
        //we can fetch data required for the component
    },
    beforeRouteUpdate(){
        console.log("hello after component");

    },
    beforeRouteLeave(){
        console.log("hello before leave component");
        const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
        if (!answer) return false

    }
}
</script>
<style>

#menu-list{
    /* background: #FFF8B1; */
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#menu-list ul{
    padding: 0;
}
#menu-list li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
    cursor: pointer;
}
.price{
    font-weight: bold;
    color: #E8800C;
}
.toppings{
     font-weight: bold;
    color: #E8800C;
    background: #FFF8B1;
}

#pizzaoffer{
    font-weight: bold;
    color: #E8800C;
    background: #FFF8B1;

}
</style>