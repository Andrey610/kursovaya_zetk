<template>
    <div>
        <div id="header" style="background-position: 50% 0%; height:100vh;" data-stellar-background-ratio="0.5">
            
        </div>
        <!-- End Header -->
        <!-- === END HEADER === -->
        <!-- === BEGIN CONTENT === -->
        <div id="welcome" class="background-white">
            <div class="container">
                <div class="row margin-vert-40">
                    <!-- Main Text -->
                    <div class="col-md-12">
                        <h2 class="text-center article-title">Twice shop</h2>
                        <p class="text-center">TWICE (트와이스) - Південнокорейський герлз-Бенд від JYP Entertainment, що складається з 9 учасниць: Чжіхе, Наен, Чонен, Момо, Сана, Міна, Дахен, Чеєн і Цзиюй. Назва колективу, "TWICE" , також має свій сенс, а його суть полягає в тому
                            що шанувальники отримають подвійну насолоду від групи: візуальне і слухове. </p>
                        <img class="fadeInUp animate" alt="" src="../assets/img/cor/TWICE.png" style="display: block; margin-left: auto; margin-right: auto; margin-top: 40px;">
                    </div>
                    <!-- End Main Text -->
                </div>
            </div>
        </div>


       
         <!-- Portfolio -->
       
         <div id="porfolio" class="parallax-bg2" style="background-position: 50% 0%;" data-stellar-background-ratio="0.5">
            <div class="container">
                <div class="row padding-top-40">
                    <!-- error -->
                    <!-- Portfolio Item -->
                        <!--for-->
                    <div class="portfolio-item col-sm-4 col-xs-6 margin-bottom-40" v-for="(item, index) in album" v-bind:key="index">
                        <router-link v-bind:to="'/tasks/' + item._id">
                            <figure class="animate fadeInLeft">
                                <div class="grid-image">
                                    <div class="featured-info">
                                        <div class="info-wrapper">{{item.name}}</div>
                                    </div>
                                    <img alt="image1" v-bind:src="item.src" width="300px" height="300px">
                                </div>
                            </figure>
                        </router-link>
                    </div>
                    <!--for end-->
                </div>
            </div>
        </div>
   

		
		<!-- Eueee-->
        <!-- Hiring -->
        <div id="hiring" class="parallax-bg3 text-light" style="background-position: 50% 0%;"  data-stellar-background-ratio="0.9" >
            <div class="container" >
                <div class="row" >
                    <div class="col-md-12 margin-vert-40" >
                        <h2 class="animate fadeIn" style="text-align: center; text-color: green;">The year of Yes</h2>
                        <hr>
                        <p class="animate fadeIn" style="text-align: center;">12 грудня в 6 вечора по корейському часу вийде спеціальний альбом.

                        </p>
                        <p class="animate fadeInUp" style="text-align: center;">
                             <router-link v-bind:to="'/reclame'">
                            <button class="btn btn-lg btn-primary" type="button">Подивитися</button>
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
        <!-- End Hiring -->
        <!-- === END CONTENT === -->


            <!-- Footer -->
            <footer>
            <div class="jyplogo">
                <a href="http://www.jype.com/" target="_blank">JYP Entertainment</a>
                </div>
                <div class="snsicon">
                <a href="https://instagram.com/twicetagram" target="_blank" class="sb no-border insta">twicetagram</a>
                <a href="https://twitter.com/JYPETWICE" target="_blank" class="sb no-border twitter">@JYPETWICE</a>
                <a href="https://www.facebook.com/JYPETWICE" target="_blank" class="sb no-border facebook">TWICE Official Facebook</a>
                <a href="http://www.youtube.com/jypentertainment" target="_blank" class="sb no-border youtube">JYPnation Youtube</a>
                <a href="http://fans.jype.com/twice" target="_blank" class="sb no-border fans">TWICE Fan's</a>
                </div>
                <div class="clear">
                </div>
            </footer>
    </div>
</template>



<script>
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
 
Vue.use(VueAxios, axios, VueRouter, Vuex)

export default {
    data: function() {
        return {
            album: []
        };
    },
    mounted: function(){
         Vue.axios.get("http://localhost:3000/tasks").then((response) =>{
             console.log(response.data);
             this.album = response.data.reverse();
         })
         
     }
    
}
</script>
