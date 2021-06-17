<template>
    <div id="hero"
        class="hero-header pt-24 min-h-screen flex justify-items-center place-items-center place-content-center">
        <div class="div">
            <div class="text-center p-5 bg-gray-900 bg-opacity-80 rounded-md">
                <img src="/src/assets/rai.png" class="rai-img mx-auto" alt="">
                <p class="font-bold mt-10 text-xl 2xl:text-3xl text-gray-800 bg-green-500 p-2 rounded-md">Muhammad
                    Hendra
                    Nailul Haqq</p>
                <p class="text-lg 2xl:text-2xl mt-1 text  font-source">Web Developer</p>
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
    <div id="about" class="bg-gray-800 w-full p-10 ">
        <div class=" bg-gray-700 shadow-2xl p-10 md:w-3/4 mx-auto mt-5">
            <div class="border-4 border-white relative 2xl:p-20 min-h-screen">
                <div class="bg-gray-700 flex items-center absolute -top-7 left-2 p-2">
                    <fa icon="info-circle" class="text-4xl mr-2" />
                    <span class="font-bold  text-green-500 2xl:text-2xl"> About Me</span>
                </div>

                <div class="text-center p-10 2xl:text-2xl">
                    <span class="text-green-500 font-medium">Hi, my name is Hendra,</span>
                    <span class="font-source">
                       I am a passionate software developer and computer science graduate with a hands-on, high energy approach, well-developed skills in Agile methodology. 
                        Specializing in the web development arena. For the last years, I have been developing web using Javascript, Vue.Js and Golang.

                    </span>
                </div>
                <div class="grid grid-cols-2 2xl:mt-5">
                    <div class="p-5">
                        <p class="font-bold text-xl 2xl:text-3xl font-source">Detail :</p>
                        <div class="text-sm grid grid-cols-5">
                            <div>
                                <p class="mt-5 2xl:text-xl text-green-500 font-bold">Name :</p>
                                <p class="mt-5 2xl:text-xl text-green-500 font-bold">Address :</p>
                                <p class="mt-5 2xl:text-xl text-green-500 font-bold">DOB :</p>
                                <p class="mt-5 2xl:text-xl text-green-500 font-bold">Phone :</p>
                                <p class="mt-5 2xl:text-xl text-green-500 font-bold">Email :</p>
                            </div>
                            <div class="col-span-4">
                                <p class="mt-5 2xl:text-xl">Muhammad Hendra Nailul Haqq</p>
                                <p class="mt-5 2xl:text-xl">Solo, Indonesia</p>
                                <p class="mt-5 2xl:text-xl">November 24, 1997</p>
                                <p class="mt-5 2xl:text-xl">+62 858 0020 0292</p>
                                <p class="mt-5 2xl:text-xl">hendrahaqq@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div class="p-5">
                        <p class="font-bold text-xl 2xl:text-3xl font-source">My Interest :</p>
                        <div class="grid grid-cols-4 gap-2 mt-5">
                            <div class="text-center per-interest">
                                <fa icon="laptop-code" class="text-2xl 2xl:text-4xl" />
                                <p class="text-xs 2xl:text-sm 2xl:mt-2 mt-1">Coding</p>
                            </div>
                            <div class="text-center per-interest">
                                <fa icon="film" class="text-2xl 2xl:text-4xl" />
                                <p class="text-xs 2xl:text-sm 2xl:mt-2 mt-1">Movie</p>
                            </div>
                            <div class="text-center per-interest">
                                <fa :icon="['far', 'futbol']" class="text-2xl 2xl:text-4xl" />
                                <p class="text-xs 2xl:text-sm 2xl:mt-2 mt-1">Football</p>
                            </div>
                            <div class="text-center per-interest">
                                <fa icon="music" class="text-2xl 2xl:text-4xl" />
                                <p class="text-xs 2xl:text-sm 2xl:mt-2 mt-1">Music</p>
                            </div>
                            <div class="text-center per-interest">
                                <fa icon="money-bill-wave" class="text-2xl 2xl:text-4xl" />
                                <p class="text-xs 2xl:text-sm 2xl:mt-2 mt-1">Money</p>
                            </div>
                            <div class="text-center per-interest">
                                <fa icon="plane" class="text-2xl 2xl:text-4xl" />
                                <p class="text-xs 2xl:text-sm 2xl:mt-2 mt-1">Travel</p>
                            </div>
                            <div class="text-center per-interest">
                                <fa icon="utensils" class="text-2xl 2xl:text-4xl" />
                                <p class="text-xs 2xl:text-sm 2xl:mt-2 mt-1">Eat</p>
                            </div>
                            <div class="text-center per-interest">
                                <fa icon="gamepad" class="text-2xl 2xl:text-4xl" />
                                <p class="text-xs 2xl:text-sm 2xl:mt-2 mt-1">Gaming</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
     <div id="skill" class="bg-gray-800 w-full p-10 ">
        <div  class="bg-gray-900 shadow-2xl p-10 md:w-3/4 mx-auto mt-5">
      
            <div class="border-4 border-white relative 2xl:p-20 min-h-screen">
                  <div class="bg-gray-900 flex items-center absolute -top-7 right-2 p-2">
                    <fa icon="cog" class="text-4xl mr-2" />
                    <span class="font-bold  text-green-500 2xl:text-2xl"> Skill</span>
                </div>
                <div class="md:grid md:grid-cols-2 2xl:mt-5 gap-5">
                    <div class="mt-5"> 
                        <div class="flex justify-between">
                            <span>
                            HTML & CSS
                            </span>
                            <span>
                                90%
                            </span>
                        </div>
                        
                        <div class="relative pt-1">
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                            <div style="width:90%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                        </div>
                        </div>
                    </div>
                    <div class="mt-5"> 
                        <div class="flex justify-between">
                        <span>
                           Javascript
                        </span>
                        <span>
                            80%
                        </span>
                        </div>
                        <div class="relative pt-1">
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                            <div style="width:80%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                        </div>
                        </div>
                    </div>
                    <div class="mt-5"> 
                        <div class="flex justify-between">
                        <span>
                            Vue.Js
                        </span>
                        <span>
                            85%
                        </span>
                        </div>
                        <div class="relative pt-1">
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                            <div style="width:85%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                        </div>
                        </div>
                    </div>
                    <div class="mt-5"> 
                        <div class="flex justify-between">
                        <span>
                            PHP
                        </span>
                        <span>
                            70%
                        </span>
                        </div>
                        <div class="relative pt-1">
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                            <div style="width:70%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                        </div>
                        </div>
                    </div>
                    <div class="mt-5">
                        <div class="flex justify-between"> 
                        <span>
                            Golang
                        </span>
                        <span>
                            70%
                        </span>
                        </div>
                        <div class="relative pt-1">
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                            <div style="width:70%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                        </div>
                        </div>
                    </div>
                    <div class="mt-5"> 
                        <div class="flex justify-between">
                        <span>
                            UI & UX
                        </span>
                        <span>
                            80%
                        </span>
                        </div>
                        <div class="relative pt-1">
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                            <div style="width:80%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                        </div>
                        </div>
                    </div>
                </div>
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