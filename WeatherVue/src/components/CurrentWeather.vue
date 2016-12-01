<template>
	<div>
	  <span>{{location}}</span>
	  <div class="temp" v-show="weatherInfo">
	      <div class="deg">{{temp}}</div><div class="zero">0</div>
	  </div>
	  <div class="desc" v-show="weatherInfo">
	      <p>{{description}}</p>
	      <p>{{humidity}}</p>
	  </div>
	</div>
</template>