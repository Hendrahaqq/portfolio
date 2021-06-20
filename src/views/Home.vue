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
                <!-- <p class="text-sm 2xl:text-xl mt-3">Job Status : <span class="px-2 bg-white rounded-md text-md text-gray-900"> Available</span> </p> -->
                <div class="grid grid-cols-3 mt-10 w-3/4 mx-auto">
                    <a href="https://gitlab.com/hendrahaqq" class="text-center icon-hero">
                        <fa :icon="['fab', 'gitlab']" class="text-4xl " />
                        <p>Git</p>
                    </a>
                    <a href="mailto:hendrahaqq@gmail.com" class="text-center icon-hero ">
                        <fa icon="envelope-open-text" class="text-4xl" />
                        <p>Email</p>
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-hendra-nailul-haqq-9aa121104/" class="text-center icon-hero">
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
                        Iam a passionate web developer specializing in front end development and computer science graduate with a hands-on, high energy approach, well-developed skills in Agile methodology. Experienced with all stages of the development cycle for dynamic web projects. For the last years, I have been developing web using Javascript, Vue.Js and Golang.

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
                        
                            <div v-for="(interest, i) in interests" :key="i" class="text-center per-interest">
                                <fa :icon="[interest.type, interest.icon]" class="text-2xl 2xl:text-4xl" />
                                <p class="text-xs 2xl:text-sm 2xl:mt-2 mt-1">{{interest.name}}</p>
                            </div>
                           
                        </div>

                    </div>
                </div>
                <div class="p-5">
                    <p class="font-bold text-xl 2xl:text-3xl font-source text-green-500">Education :</p>
                    <div class="py-5">
                        <p class="text-lg 2xl:text-2xl  font-bold">2020, Computer Science</p>
                        <p class="italic 2xl:text-xl">Universitas Sebelas Maret</p>
                        <p class="text-sm 2xl:text-lg">GPA 3.45</p>
                    </div>

                </div>
                <div class="p-5">
                    <p class="font-bold text-xl 2xl:text-3xl font-source text-green-500">Skill :</p>
                    <div class="md:grid md:grid-cols-2 2xl:mt-5 gap-5">
                        <div v-for="(skill, i) in skills" :key="i" class="mt-5">
                            <div class="flex justify-between">
                                <span class="text-sm md:text-md 2xl:text-xl">
                                   {{skill.name}}
                                </span>
                                <span class="text-sm md:text-md  2xl:text-xl">
                                   {{skill.percentage}}
                                </span>
                            </div>

                            <div class="relative pt-1">
                                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                                    <div :style=" 'width:' + skill.percentage"
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
    <div id="skill" class="bg-gray-800 w-full p-2 md:p-10 ">
        <div class="bg-gray-900 shadow-2xl p-3 md:p-10 md:w-3/4 mx-auto mt-5">

            <div class="border-4 border-white relative 2xl:p-20 min-h-screen">
                <div class="bg-gray-900 flex items-center absolute -top-4 md:-top-7 left-2 p-1 md:p-2">
                    <fa icon="cog" class="text-xl md:text-4xl mr-2" />
                    <span class="font-bold  text-green-500 text-sm md:text-lg 2xl:text-2xl"> Experience</span>
                </div>
                <div class="p-5">
                    <div class="relative wrap overflow-hidden p-2 md:p-5 h-full">
                        <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border line-timeline hidden md:block"
                            ></div>
                        <!-- right timeline -->
                        <div class="mb-8 md:flex items-center w-full right-timeline">
                            <div class="order-1 md:w-1/12 text-md md:text-xs text-center 2xl:text-lg">
                            <p>Jan 2018 </p> 
                            <p>|</p>
                            <p>Feb 2018</p> 
                          
                            </div>
                            <div class="z-20 md:flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden ">
                                <h1 class="mx-auto font-semibold text-lg text-white">O</h1>
                            </div>
                            <div class="order-1 bg-gray-400 rounded-lg shadow-xl ml-5 md:w-10/12 p-5 md:px-6 md:py-4 mt-2 md:mt-0">
                                <p class=" font-bold text-gray-800 text-xl 2xl:text-2xl">Intern Software Developer</p>
                                <p class="italic mb-3 2xl:text-xl">Skynosoft Portal Prime</p>
                                <p class="text-sm 2xl:text-xl leading-snug tracking-wide text-gray-900 text-opacity-100">Developed a SMS Gateway and modified existing Administrator System for Patient registration at Amal Sehat Hospital using HTML/CSS, GAMMU, Javascript, PHP, CodeIgniter, and MySQL, also responsible from requirement gathering until User Acceptance Testing (UAT) and delivering final product.</p>
                            </div>
                        </div>
                        <div class="mb-8 md:flex items-center w-full right-timeline">
                            <div class="order-1 md:w-1/12 text-md md:text-xs text-center 2xl:text-lg">
                            <p>June 2020 </p> 
                            <p>|</p>
                            <p>Now</p> 
                          
                            </div>
                            <div class="z-20 md:flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden">
                                <h1 class="mx-auto font-semibold text-lg text-white">O</h1>
                            </div>
                            <div class="order-1 bg-gray-400 rounded-lg shadow-xl ml-5 md:w-10/12 p-5 md:px-6 md:py-4 mt-2 md:mt-0">
                                <p class=" font-bold text-gray-800 text-xl 2xl:text-2xl">Web Developer</p>
                                <p class="italic mb-3 2xl:text-xl">PT. Solusi Desain Bangsa</p>
                                <ul class="list-disc ">
                                    <li class="ml-5 text-gray-800 ">
                                       <span class="text-gray-900 font-medium 2xl:text-xl"> Sekolah Desain Web Platform </span>
                                        <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 2xl:text-xl">
                                            Developed and maintain sekolahdesain.id ecosystem as edtech company, including promotional, user, mentor, and administrator web app using Vue.JS with Typescript as front-end framework, Tailwind and Bootsrap as CSS framework, and Golang API as backend, also laravel for certain app, MySQL for database, using agile development method, jira and gitlab as project management tool.
                                        </p>
                                       
                                       <p></p>
                                       </li>

                                       <li class="ml-5 text-gray-800 mt-5">
                                       <span class="text-gray-900 font-medium 2xl:text-xl"> Soizee Web Platform </span>
                                        <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 2xl:text-xl">
                                            Developed and maintain soizee.com ecosystem, including user, creator, using laravel and MySQL for database, using agile development method, jira and gitlab as project management tool.
                                        </p>
                                       
                                       <p></p>
                                       </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="hire-me"
        class="hero-header pt-24 min-h-screen flex justify-items-center place-items-center place-content-center">
        <div class="div">
            <div class="text-center p-10 bg-gray-900 bg-opacity-80 rounded-md">
               
                <p class="font-bold text-xl 2xl:text-3xl text-white rounded-md">Want to make me part of your team ?</p>
                <p class="mt-5">Job Status : <span class="text-green-500 px-2 py-1 rounded-md bg-white font-semibold"> • Available</span>  </p>
                
                <div class="md:grid md:grid-cols-2 2xl:w-3/4 mx-auto gap-5 mt-10">
                   <a href="mailto:hendrahaqq@gmail.com" class="px-4 py-3 block mt-2 bg-green-500 text-white font-bold hover:bg-white hover:text-green-500">Hire Me</a>
                   <a href="/file/Hendra_WebDev_CV.pdf" class="px-4 py-3 border-white block mt-2 border-2 text-green-500 font-bold hover:border-green-500 hover:text-white">Download CV</a>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                interests: [
                    {
                        name: 'Coding',
                        icon: 'laptop-code',
                        type: 'fas'
                    },
                     {
                        name: 'Movie',
                        icon: 'film',
                        type: 'fas'
                    },
                     {
                        name: 'Football',
                        icon: 'futbol',
                        type: 'far'
                    },
                      {
                        name: 'Music',
                        icon: 'music',
                        type: 'fas'
                    },
                      {
                        name: 'Money',
                        icon: 'money-bill-wave',
                        type: 'fas'
                    },
                      {
                        name: 'Travel',
                        icon: 'plane',
                        type: 'fas'
                    },
                      {
                        name: 'Eat',
                        icon: 'utensils',
                        type: 'fas'
                    },
                      {
                        name: 'Gaming',
                        icon: 'gamepad',
                        type: 'fas'
                    },

                ],
                skills: [
                    {
                        name: 'HTML & CSS',
                        percentage: '90%'
                    },
                       {
                        name: 'Javascript',
                        percentage: '80%'
                    },
                       {
                        name: 'Vue.JS',
                        percentage: '85%'
                    },
                       {
                        name: 'PHP',
                        percentage: '70%'
                    },
                       {
                        name: 'Golang',
                        percentage: '70%'
                    },
                       {
                        name: 'UI & UX',
                        percentage: '80%'
                    }   
                ]
            }
        }
    }
</script>

