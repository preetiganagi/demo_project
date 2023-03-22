<template>
    <div>
        <!-- transition -->
        <button @click="show = !show"> Show message</button>
        <Transition  name="slide-fade"> <p v-if="show">HelloWorld</p> </Transition>

        <span style="margin-right: 20px">Click to cycle through states:</span>
    <div class="btn-container">
		<Transition name="slide-up">
            <button v-if="docState === 'saved'"
                    @click="docState = 'edited'">Edit</button>
            <button v-else-if="docState === 'edited'"
                    @click="docState = 'editing'">Save</button>
            <button v-else-if="docState === 'editing'"
                    @click="docState = 'saved'">Cancel</button>
        </Transition>

        <TransitionGroup name="list" tag="ul">
            <li v-for="item in items" :key="item">
                {{ item }}
            </li>
        </TransitionGroup>
    </div>
    </div>
    <button v-on:click="open = true">Open Modal</button>

<Teleport to="body">
  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</Teleport>
</template>
<script> // why we use setup and export is giving error 
// import { ref } from 'vue'

// const docState = ref('saved')

export default{
    data(){
        return{
            show: true,
            // docState: 'saved'
            open: false
        }
    }
}
</script>
<style>

/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.10s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.btn-container {
  display: inline-block;
  position: relative;
  height: 1em;
}

button {
  position: absolute;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translatey(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translatex(-30px);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>