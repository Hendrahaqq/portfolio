<template>
  <div class="full px-4 py-10 bg-gray-900">
    <div class="md:grid md:grid-cols-2">
      <div class="p-10 order-2 md:order-1">
        <div class="flex items-center">
        <img src="/src/assets/hh.png" class="w-7" alt="">
        <p class="text-sm md:text-xl ml-2">Hendra Haqq Official Website</p>
        
      </div>
      <p class="mt-5">Build With :</p>
    <div class="flex items-center mt-5">
        <img class="mr-5" style="height:30px" src="/src/assets/logo.png" alt="">
        <span class="font-bold">+</span>
        
        <img class="mx-5" style="width:100px" src="/src/assets/tailwind.png" alt="">
    </div>
      <div class="mt-5">
        <p>Found me :</p>
        <div class="flex mt-2">
         <a  class="mr-5" href="https://www.instagram.com/hendrahaqq/"> <fa class="text-5xl text-green-500" :icon="['fab', 'instagram-square']"/> </a>
         <a  class="mr-5" href="https://www.facebook.com/muhammad.hendra.524"> <fa class="text-5xl text-green-500"  :icon="['fab', 'facebook-square']"/> </a>
        </div>
        
      </div>
     
      </div>
    <div class="p-10 order-1 md:order-2">
      <p>Menu :</p>
       <div class="mt-5 grid grid-cols-2">
            <a href="#hero" v-smooth-scroll  class="mt-5 hover:text-green-500">Back to top</a>
            <a href="#about" v-smooth-scroll class="mt-5 hover:text-green-500">About Me</a>
            <a href="#skill" v-smooth-scroll class="mt-5 hover:text-green-500">Experience</a>
            <a href="#hire-me" v-smooth-scroll class="mt-5 hover:text-green-500">Hire Me</a>

        </div></div>      
    </div>
    <div class="text-center">
      <p>&copy; Copyright Hendra Haqq - 2021</p>

  </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>