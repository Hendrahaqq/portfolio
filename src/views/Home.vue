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
    <div id="about" class="bg-gray-800 w-full p-2 md:p-10 ">
        <div class=" bg-gray-700 shadow-2xl p-3 md:p-10 md:w-3/4 mx-auto mt-5">
            <div class="border-4 border-white relative 2xl:p-20 min-h-screen">
                <div class="bg-gray-700 flex items-center absolute -top-4 md:-top-7 left-2 p-1 md:p-2">
                    <fa icon="info-circle" class="text-xl md:text-4xl mr-2" />
                    <span class="font-bold  text-green-500 text-sm md:text-lg 2xl:text-2xl"> About Me</span>
                </div>

                <div class="text-center p-10 2xl:text-2xl">
                    <span class="text-green-500 font-medium">Hi, my name is Hendra,</span>
                    <span class="font-source">
                        I am a passionate software developer and computer science graduate with a hands-on, high energy
                        approach, well-developed skills in Agile methodology.
                        Specializing in the web development arena. For the last years, I have been developing web using
                        Javascript, Vue.Js and Golang.

                    </span>
                </div>
                <div class="md:grid md:grid-cols-2 2xl:mt-5">
                    <div class="p-5">
                        <p class="font-bold text-xl 2xl:text-3xl font-source text-green-500">Detail :</p>
                        <div class="text-sm grid grid-cols-7 md:grid-cols-5">
                            <div class="col-span-2 md:col-span-1">
                                <p class="mt-5 text-xs md:text-md  2xl:text-xl text-green-500 font-bold">Name :</p>
                                <p class="mt-5 text-xs md:text-md  2xl:text-xl text-green-500 font-bold">Address :</p>
                                <p class="mt-5 text-xs md:text-md  2xl:text-xl text-green-500 font-bold">DOB :</p>
                                <p class="mt-5 text-xs md:text-md  2xl:text-xl text-green-500 font-bold">Phone :</p>
                                <p class="mt-5 text-xs md:text-md  2xl:text-xl text-green-500 font-bold">Email :</p>
                            </div>
                            <div class="col-span-5 md:col-span-4">
                                <p class="mt-5 text-xs md:text-md  2xl:text-xl">Muhammad Hendra Nailul Haqq</p>
                                <p class="mt-5 text-xs md:text-md  2xl:text-xl">Solo, Indonesia</p>
                                <p class="mt-5 text-xs md:text-md  2xl:text-xl">November 24, 1997</p>
                                <p class="mt-5 text-xs md:text-md  2xl:text-xl">+62 858 0020 0292</p>
                                <p class="mt-5 text-xs md:text-md  2xl:text-xl">hendrahaqq@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div class="p-5">
                        <p class="font-bold text-xl 2xl:text-3xl font-source text-green-500">My Interest :</p>
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
                <div class="p-5">
                    <p class="font-bold text-xl 2xl:text-3xl font-source text-green-500">Education :</p>
                    <div class="py-5">
                        <p class="text-lg  font-bold">2020, Computer Science</p>
                        <p class="italic">Universitas Sebelas Maret</p>
                        <p class="text-sm">GPA 3.45</p>
                    </div>

                </div>
                <div class="p-5">
                    <p class="font-bold text-xl 2xl:text-3xl font-source text-green-500">Skill :</p>
                    <div class="md:grid md:grid-cols-2 2xl:mt-5 gap-5">
                        <div class="mt-5">
                            <div class="flex justify-between">
                                <span class="text-sm md:text-md">
                                    HTML & CSS
                                </span>
                                <span class="text-sm md:text-md">
                                    90%
                                </span>
                            </div>

                            <div class="relative pt-1">
                                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                                    <div style="width:90%"
                                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5">
                            <div class="flex justify-between">
                                <span class="text-sm md:text-md">
                                    Javascript
                                </span>
                                <span class="text-sm md:text-md">
                                    80%
                                </span>
                            </div>
                            <div class="relative pt-1">
                                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                                    <div style="width:80%"
                                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5">
                            <div class="flex justify-between">
                                <span class="text-sm md:text-md">
                                    Vue.Js
                                </span>
                                <span class="text-sm md:text-md">
                                    85%
                                </span>
                            </div>
                            <div class="relative pt-1">
                                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                                    <div style="width:85%"
                                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5">
                            <div class="flex justify-between">
                                <span class="text-sm md:text-md">
                                    PHP
                                </span>
                                <span class="text-sm md:text-md">
                                    70%
                                </span>
                            </div>
                            <div class="relative pt-1">
                                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                                    <div style="width:70%"
                                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5">
                            <div class="flex justify-between">
                                <span class="text-sm md:text-md">
                                    Golang
                                </span>
                                <span class="text-sm md:text-md">
                                    70%
                                </span>
                            </div>
                            <div class="relative pt-1">
                                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                                    <div style="width:70%"
                                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5">
                            <div class="flex justify-between">
                                <span class="text-sm md:text-md">
                                    UI & UX
                                </span>
                                <span class="text-sm md:text-md">
                                    80%
                                </span>
                            </div>
                            <div class="relative pt-1">
                                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                                    <div style="width:80%"
                                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="skill" class="bg-gray-800 w-full p-10 ">
        <div class="bg-gray-900 shadow-2xl p-10 md:w-3/4 mx-auto mt-5">

            <div class="border-4 border-white relative 2xl:p-20 min-h-screen">
                <div class="bg-gray-900 flex items-center absolute -top-7 right-2 p-2">
                    <fa icon="cog" class="text-4xl mr-2" />
                    <span class="font-bold  text-green-500 2xl:text-2xl"> Experience</span>
                </div>
                <div class="p-5">
                    <div class="relative wrap overflow-hidden p-5 h-full">
                        <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border line-timeline"
                            ></div>
                        <!-- right timeline -->
                        <div class="mb-8 flex items-center w-full right-timeline">
                            <div class="order-1 w-1/12 text-xs text-center">
                            <p>Jan 2018 </p> 
                            <p>|</p>
                            <p>Feb 2018</p> 
                          
                            </div>
                            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 class="mx-auto font-semibold text-lg text-white">O</h1>
                            </div>
                            <div class="order-1 bg-gray-400 rounded-lg shadow-xl ml-5 w-10/12 px-6 py-4">
                                <p class=" font-bold text-gray-800 text-xl">Intern Software Developer</p>
                                <p class="italic mb-3">Skynosoft Portal Prime</p>
                                <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Developed a SMS Gateway and modified existing Administrator System for Patient registration at Amal Sehat Hospital using HTML/CSS, GAMMU, Javascript, PHP, CodeIgniter, and MySQL, also responsible from requirement gathering until User Acceptance Testing (UAT) and delivering final product.</p>
                            </div>
                        </div>
                        <div class="mb-8 flex items-center w-full right-timeline">
                            <div class="order-1 w-1/12 text-xs text-center">
                            <p>June 2020 </p> 
                            <p>|</p>
                            <p>Now</p> 
                          
                            </div>
                            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 class="mx-auto font-semibold text-lg text-white">O</h1>
                            </div>
                            <div class="order-1 bg-gray-400 rounded-lg shadow-xl ml-5 w-10/12 px-6 py-4">
                                <p class=" font-bold text-gray-800 text-xl">Web Developer</p>
                                <p class="italic mb-3">PT. Solusi Desain Bangsa</p>
                                <ul class="list-disc ">
                                    <li class="ml-5 text-gray-800 ">
                                       <span class="text-gray-900 font-medium"> Sekolah Desain Web Platform </span>
                                        <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                            Developed and maintain sekolahdesain.id ecosystem as edutech company, including promotional, user, mentor, and administrator web app using Vue.JS as front-end framework and Golang API as backend, also laravel for certain app, MySQL for database, using agile development method, jira and gitlab as project management tool.
                                        </p>
                                       
                                       <p></p>
                                       </li>

                                       <li class="ml-5 text-gray-800 mt-5">
                                       <span class="text-gray-900 font-medium"> Soizee Web Platform </span>
                                        <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                            Developed and maintain soizee.com ecosystem, including user, creator, using laravel and MySQL for database, using agile development method, jira and gitlab as project management tool.
                                        </p>
                                       
                                       <p></p>
                                       </li>
                                </ul>
                            </div>
                        </div>
                        <!-- left timeline -->
                        <!-- <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div class="order-1 w-5/12"></div>
                            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
                            </div>
                            <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                                <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div> -->
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

