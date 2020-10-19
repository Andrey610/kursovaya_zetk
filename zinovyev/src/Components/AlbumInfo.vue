<template>
    <div>
       
<div class="nav">
	<ul class="menu">

<li><a href="http://localhost:8080/#/">ГОЛОВНА</a></li>
</ul>
	</div>
<section>
<div id="sect-title">DISCOGRAPHY</div>

<div id="sect-main">
	<div class="fullbox">
	<div class="box-l">
	<img v-bind:src="songs.src">
	<div class="tracklist">
	<p>TRACKLIST </p>
		<td >
		<tr >{{songs.lsong[0]}}</tr>
		<tr >{{songs.lsong[1]}}</tr>
		<tr >{{songs.lsong[2]}}</tr>
		<tr >{{songs.lsong[3]}}</tr>
		<tr >{{songs.lsong[4]}}</tr>
		<tr >{{songs.lsong[5]}}</tr>
		<tr >{{songs.lsong[6]}}</tr>
		<tr >{{songs.lsong[7]}}</tr>
		<tr >{{songs.lsong[8]}}</tr>
		<tr >{{songs.lsong[9]}}</tr>
		<tr >{{songs.lsong[10]}}</tr>
		<tr >{{songs.lsong[11]}}</tr>
		<tr >{{songs.lsong[12]}}</tr>
		<tr >{{songs.lsong[13]}}</tr>
		<tr >{{songs.lsong[14]}}</tr>
		<tr >{{songs.lsong[15]}}</tr>
		<tr >{{songs.lsong[16]}}</tr>
		</td>
	</div>
	<audio controls>
    <source v-bind:src="songs.aud">
  </audio>
		
	</div><!--box-l-->
	<div class="box-r">
		<div class="album-title"> 
			<h2>{{songs.name}}</h2>
			<p>{{songs.date}}</p>  
			<div class="clear"></div>
		</div>

		<h3></h3>
		<div v-html="songs.text"></div>
		<div style="height: 20px;"></div>

<!-- <br> -->
		
<hr>
<p>Якщо ви бажаєте придбати залиште свої данні</p>
<input type = "text" name = "login" placeholder = "Введіть свій логін" v-model="d1"/><br> <br>
		<input type = "email" name = "email" placeholder = "Введіть свій email" v-model="d2" /> <br> <br>
		<input type = "text" name = "password" placeholder = "Введіть свій пароль" v-model="d3"/>
		
		<!-- <a class="btn-buy1" v-bind:href="songs.dload">Завантажити</a> -->
<form method="POST" accept-charset="utf-8" action="https://www.liqpay.ua/api/3/checkout">
	<input type="hidden" name="data" value="eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5IjoiaTExNzUzNTkzODQ1IiwiYW1vdW50IjoiMTUwIiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCQ0LvRjNCx0L7QvCIsInR5cGUiOiJidXkiLCJsYW5ndWFnZSI6InJ1In0=" />
	<input type="hidden" name="signature" value="l0wNZGRAR8DfrmG5H48oAJdQXpw=" />
	<button style="border: none !important; display:inline-block !important;text-align: center !important;padding: 7px 20px !important;
		color: #fff !important; font-size:16px !important; font-weight: 600 !important; font-family:OpenSans, sans-serif; cursor: pointer !important; border-radius: 2px !important;
		background: rgb(122,183,43) !important;"onmouseover="this.style.opacity='0.5';" onmouseout="this.style.opacity='1';">
		<img src="https://static.liqpay.ua/buttons/logo-small.png" name="btn_text"
			style="margin-right: 7px !important; vertical-align: middle !important;"/>
		<span style="vertical-align:middle; !important">Оплатить 150 UAH</span>
	</button>
</form>
	</div><!--box-r-->

	<div class="clear"></div>
	<div style="height: 40px;"></div>

	</div><!--fullbox-->



		
</div><!--sect-main-->
</section>





</div><!-- main-->

</template>


<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.use(VueAxios, axios, Vuex)

    export default {
		props:{
			id: ''
		},
        data: function() {
            return {
				songs: [],
				d1: "",
				d2: "",
				d3: "",
            };
        },
        mounted: function() {
			console.log(this.id);
         Vue.axios.get("http://localhost:3000/tasks/" + this.id ).then((response) =>{
             this.songs = response.data;
            console.log(response);
         })
     }
	}
	
</script>
 

 <style>
.nav {
display: block;
float: right;}

.menu > li > a {
margin: 0;
display: block;	
padding: 42px 18px;
text-decoration: none;
font-weight: normal;
color: #ffffff;	
font-size: 16px;	
line-height: 1;	
-webkit-box-sizing: border-box;	
-moz-box-sizing: border-box;
box-sizing: border-box;}

.menu > li > a:hover,
.menu > li > a:focus 
{color: rgb(167, 0, 117);
box-shadow: inset 0px 3px rgb(167, 0, 117);
padding: 45px 18px 34px;}


.btn-buy1{
	
position: absolute;
    left: 55%;
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
.btn-buy1:hover, .btn-class:active{
 border:1px solid #ee853f;
 color: #bd3d02;
 box-shadow: inset 0 1px 0 0 #f8e9a4,inset 0 -1px 0 0 #e3c852,inset 0 0 0 1px #fce88d;
 -moz-box-shadow: inset 0 1px 0 0 #f8e9a4,inset 0 -1px 0 0 #e3c852,inset 0 0 0 1px #fce88d;
 -webkit-box-shadow: inset 0 1px 0 0 #f8e9a4,inset 0 -1px 0 0 #e3c852,inset 0 0 0 1px #fce88d;
 background-color: #f7d74a;
text-decoration: none;
}

	body {
		background-color: salmon !important;
	}
 </style>
 
        
        
       