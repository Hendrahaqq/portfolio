<template>
    <div id="hero"
        class="hero-header pt-24 min-h-screen flex justify-items-center place-items-center place-content-center">
        <div class="div">

            <div class="text-center p-5 bg-gray-900 bg-opacity-80 rounded-md">
                <img src="/src/assets/rai.png" class="rai-img mx-auto" alt="">
                <p class="font-bold mt-10 text-xl 2xl:text-3xl text-gray-800 bg-green-500 p-2 rounded-md">Muhammad Hendra
                    Nailul Haqq</p>
                <p class="text-lg 2xl:text-2xl mt-1 text  font-source">Front End Developer</p>
                <div class="grid grid-cols-3 mt-10 w-3/4 mx-auto">
                    <a href="" class="text-center icon-hero">
                        <fa :icon="['fab', 'gitlab']" class="text-4xl " />
                        <p>Git</p>
                    </a>
                    <a href="" class="text-center icon-hero ">

                        <fa icon="envelope-open-text" class="text-4xl" />
                        <p>Email</p>

                    </a>
                    <a href="" class="text-center icon-hero">
                        <fa :icon="['fab','linkedin-in']" class="text-4xl " />
                        <p>LinkedIn</p>
                    </a>


                </div>
            </div>
            <div class="text-center mt-10">
                <!-- <p class="text-gray-900 text-xl font-bold mb-0">Know me more</p> -->
                <a href="#about" v-smooth-scroll>
                    <div class="arrow bounce"></div>
                </a>

            </div>


        </div>


    </div>
    <div id="about" class="bg-gray-800 min-h-screen w-full p-10 ">



        <div  class=" bg-gray-700 shadow-2xl p-10 md:w-3/4 mx-auto mt-5 min-h-screen">
            <div class="border-4 border-white relative">
                <div class="bg-gray-700 flex items-center absolute -top-7 left-2 p-2">
                    <fa icon="info-circle" class="text-4xl mr-2" />
                    <span class="font-bold  text-green-500 "> About Me</span>
                </div>

                <div class="text-center p-10">
                    
                            <span class="text-green-500 font-medium">Hi, my name is Hendra,</span>
                            <span class="font-source">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore quibusdam, magni ullam rem praesentium quod accusantium quo iure laboriosam, numquam minima eius! Adipisci, est ipsa? Minima quidem atque maiores?
                            </span>
                        
                </div>

                <div class="grid grid-cols-2">
                    <div class="p-5 ">
                         <p class="font-bold text-xl font-source">Detail :</p>
                         <div class="text-sm grid grid-cols-5">
                        <div>
                           
                       <p class="mt-5 text-green-500 font-bold">Name :</p>
                       <p class="mt-5 text-green-500 font-bold">Address :</p>
                           <p class="mt-5 text-green-500 font-bold">DOB :</p>
                             <p class="mt-5 text-green-500 font-bold">Phone :</p>
                               <p class="mt-5 text-green-500 font-bold">Email :</p>
                        </div>
                        <div class="col-span-4">
                            <p class="mt-5">Muhammad Hendra Nailul Haqq</p>
                             <p class="mt-5">Solo, Indonesia</p>
                              <p class="mt-5">November 24, 1997</p>
                               <p class="mt-5">+62 858 0020 0292</p>
                                <p class="mt-5">hendrahaqq@gmail.com</p>
                                
                        </div>
                       

                    </div>
                    </div>
                    
                    <div class=" p-5">
                          <p class="font-bold text-xl font-source">My Interest :</p>

                    </div>
                </div>

            </div>

        </div>

        <div id="skill" class="grid grid-cols-2 bg-gray-900 shadow-2xl p-10 pt-14 md:w-3/4 mx-auto mt-5 min-h-screen">
            <div class="p-5">
                <p class="font-bold text-white ">My Work</p>
            </div>
            <div class=" p-5">

            </div>
        </div>

    </div>

</template>

<script>
    export default {

    }
</script>

<style>

</style>