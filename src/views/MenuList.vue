<template>
    <Header></Header>
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

        <ul>
            <li v-for="product in products" :key="product.id">
                <span class="name">{{ product.name }}</span>
                <span class="price">  Rs. {{ product.price }}</span>   
            </li>
            <li><button v-on:click="reducePrice(1)">Reduce Price by one rs</button></li>
            <li><button v-on:click="reducePrice(2)">Reduce Price by 2rs</button></li>

        </ul>
    </div>
</template>
<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import Header from "../components/Header.vue"

export default{
    components:{
        Header
    },
    data(){
        return{
            restaurant: ''
        }
    },
    computed: {
        products(){
            return this.$store.state.products
        },
        // offerProducts(){
        //     return this.$store.getters.offerProducts;
        // }
        //mapgetters
        ...mapGetters(['offerProducts'])
            
        
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
        ...mapActions(['reducePrice'])

    },
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
</style>