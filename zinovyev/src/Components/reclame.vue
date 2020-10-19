<template>
    <div style="display: flex; justyfi-content:center;">
        

<img alt="Reclama 12/10" v-bind:src="src" style=" margin: 0 auto" >
<a class="btn-buy2" v-bind:href="dload">Інформація</a>
<p class="p-rec">"The Best Thing I Ever Did" - пісня, яка поєднує в собі поп звучання TWICE з жанром альтернативного R & B. Головне посилання пісні: "Озираючись в грудні на минулий рік, я розумію, що найдорожчий спогад - зустріч з тим, кого я люблю".<br>
Для написання цієї пісні в Пак Чжіньон використовував новий метод "заповни анкету": спершу він написав приспів, потім шість інших композиторів, в числі яких Пак Чжіньон, написали куплети і переходи між ними і приспівом. Пак Чжіньон сказав, що вони використовували цей метод для того, щоб пісня отримала свій різноманітний і неповторний стиль.<br>
</p>
<div class="nav">
	<ul class="menu">

<li><a href="http://localhost:8080/#/">ГОЛОВНА</a></li>
</ul>
	</div>
    </div>
</template>


<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.use(VueAxios, axios, Vuex)

    export default {
        data: function() {
            return {
                src: "https://lh3.googleusercontent.com/KpVj_w-39kedT9Jhih3AsKrCVeUJ6bn_tHbPprsgNjIWfEhRR0NPspT9-qeDV9kP0ebF0UxGBmf-q-MRGuufMDRbRjD6w9834S3oF0aBbD6Y0Doo3o6kNEaykAzrG5pjYVP4Ff1Za4q0VWsj3tAZCFWgt1RySYRqjm-to9gITC8Pke0K3nd2kIneLmV51aU3PvzbNUtuTmnGYZpoz1S27NsXSJaB10TR8i_W23O2V6qWmct3jJT6aQiZVMpVPG5I6QJZ3OnxGvXeTwP611zM6_UGokjDuyLmPHy0HCvATAq59AZJgeaMzuyVepXOMHkBN4OTlUUj1bwAeNJqiQMXq6fQe-yeZjf6PSSz6QM9TUAw3wHRP4MVbFH2I42J8jD-MQt2pAq5P_vUrN0Oc7rWsz0wr9Ml-irlRD5SvnYwVhkGdclIurofrKrx7Ak5_1SP8mH-ZKB4AnnVCp8ODL13bUjt6GE9BceXSQLghn8CIoWKAApjoX71SLhoDT8w_G77JKZpTkMvNlbNeuQn60nFOnM_pFDODkVy2DIrgMOzr7rwtaS5vfgtzFAfZBdDqZdju0pn6d7GJJ7Ti09KwgaZUJ97urE1JxOMBo7EyfG3TUgmKarlZ6EhXv5ER5ebGwhkhMG09axARPjNNzUyANF7sgt5=w1506-h970-no",
                 dload: "http://localhost:3000/public/rec.jpg",
            };
        },
        
	}
	
</script>

<style>
.btn-buy2{	
position: absolute;
    top: 500px;
    left: 1310px;
display: inline-block;
 border:1px solid #f11885;
 color: rgb(207, 7, 164);
 border-radius: 50px 50px 50px 50px;
 -webkit-border-radius: 50px 50px 50px 50px;
 -moz-border-radius: 50px 50px 50px 50px;
 font-family: Comic Sans MS;
 width: auto;
 height: auto;
 font-size: 16px;
 padding: 10px 40px;
 box-shadow: inset 0px 0px 50px 50px #ffcef7,inset -1px -1px 0px 0 rgb(255, 0, 234),inset 0px 0px 0px 0 rgb(255, 0, 234),0 2px 4px 0 #D4D4D4;
 -moz-box-shadow: inset 0px 0px 50px 50px #ffcef8,inset -1px -1px 0px 0 rgb(255, 0, 234),inset 0px 0px 0px 0 rgb(255, 0, 234),0 2px 4px 0 #D4D4D4;
 -webkit-box-shadow: inset 0px 0px 50px 50px #ffcef4,inset -1px -1px 0px 0 rgb(255, 0, 234),inset 0px 0px 0px 0 rgb(255, 0, 234),0 2px 4px 0 #D4D4D4;
 text-shadow: 0px 0px 0px #fff;
 background-image: linear-gradient(to top, #fdd4af, #fdd4af);
 background-color: #fdd4af;
}
.btn-buy2:hover, .btn-class:active{
 border:1px solid #ee853f;
 color: #bd3d02;
 box-shadow: inset 0 1px 0 0 #f8e9a4,inset 0 -1px 0 0 #e3c852,inset 0 0 0 1px #fce88d;
 -moz-box-shadow: inset 0 1px 0 0 #f8e9a4,inset 0 -1px 0 0 #e3c852,inset 0 0 0 1px #fce88d;
 -webkit-box-shadow: inset 0 1px 0 0 #f8e9a4,inset 0 -1px 0 0 #e3c852,inset 0 0 0 1px #fce88d;
 background-color: #f7d74a;
text-decoration: none;
}
.p-rec{
    
   position: absolute;
    top: 170px;
    left: 1210px; 
    color: white;
    width: 420px;
}
</style>