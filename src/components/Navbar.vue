<template>
 <div class="font-sans bg-gray-900 text-white fixed w-full z-50">
  <nav class="flex items-center justify-between flex-wrap p-4">
    <a href="#hero" class="flex items-center flex-no-shrink text-white mr-6" v-smooth-scroll>
      <img src="/src/assets/hh.png" width="40" height="40" class="mr-2" alt="">
      <!-- <svg class="fill-current bg-green-500 p-1 rounded-full h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> -->
      <span class="font-semibold text-xl  text-green-500 tracking-tight">HENDRA</span>
    </a>
    <div class="block sm:hidden">
      <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div :class="open ? 'inline-block': 'hidden'" class="w-full text-right flex-grow sm:flex sm:items-center sm:w-auto ">
      <div class="text-sm sm:flex-grow">
        <a href="#about" class="no-underline block mt-4 sm:inline-block sm:mt-0 font-medium hover:text-green-500 text-white mx-5" v-smooth-scroll>
          About
        </a>
        <a href="#skill" class="no-underline block mt-4 sm:inline-block sm:mt-0 font-medium hover:text-green-500 text-white mx-5" v-smooth-scroll>
          Experience
        </a>
        <a href="#hire-me" class="no-underline block mt-4 sm:inline-block sm:mt-0 font-medium hover:text-green-500 text-white mx-5" v-smooth-scroll>
          Hire Me
        </a>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  data(){
    return {
      open: false
    }
  },
  methods: {
    toggle() {
    	this.open = !this.open
    }
  },
}
</script>

<style>

</style>