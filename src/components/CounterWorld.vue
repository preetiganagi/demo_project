<template>
    <h1>Learning Vue Js</h1>
    <h2>{{ msg }}</h2>
    <!-- <input type="checkbox" v-model="text" placeholder="Type here"> -->
    <!-- <textarea v-model="text" placeholder="Type here"> </textarea> -->
    <div>
            <button @click="increment" class="button"> Count is {{ count }}</button>

        <div>
            <input type="checkbox" v-model="text" value="John"><label for="John"> John</label>
            <input type="checkbox" v-model="text" value="Jack"><label for="Jack"> Jack</label>
            <input type="checkbox" v-model="text" value="Juli"><label for="Juli"> Juli</label>
            selected Names: {{ text }}
        </div>
    
        <div>
            <select name="jobs"  v-model.lazy="jobs" multiple>
                <option value="Engineer">Engineer</option>
                <option value="DC">DC</option>
                <option value="Doctor">Doctor</option>
            </select>
            Selected Jobs: {{ jobs }}
        </div>

    <!-- list rendering -->
        <div>
            <form @submit.prevent="addTodos">
                <input v-model="new_item"><button>add item</button>
            </form>

            <li v-for="item in getids" :key="item.id">
                {{ item.id }}
                {{ item.name }}
            </li>

            <!-- <button v-on:click="getids">get even ids</button> -->
        </div>
            <input v-model="question"> write question...
            {{ answer }}
            <h3> parent prop message : {{ message }}</h3>
            <slot> disply here</slot>
    </div>
</template>

<script>
    let id = 0
export default{
    name: 'CounterWorld',
    // props:{
    //     msg: String,
    //     count: String
    // },
    props: {
        message: String
    },
    emits:['response'],
    response(){
        this.$emit('response', 'Hey call to emits')
    },
    data(){
        return{
            count: 0,
            msg: "Hello",
            text: [],
            jobs:[],
            todos:[{id: id++, name: 'java'}],
            new_item: '',
            even: '',
            answer:'',
            // items:[{ message:"hi"},{ message:"hello"}]
            question: ''
        }
    },
    methods: {
        increment(){
            this.count++
        },
        addTodos(){
            console.log(this.new_item)
            this.todos.push({id: id++, name: this.new_item}),
            this.new_item = ''
        },
        removeItem(){
            this.todos.pop(this.id)
        }
    },
    computed: {
        getids(){
            return this.todos.filter((it)=> !(it.id%2))
        }
    },
    watch: {
        question(new_question,q2){
            console.log(new_question, q2);
            if(new_question.includes('?')){
                this.answer = ' Format correct'
            }
        }
    }

}
</script>

<style>

</style>