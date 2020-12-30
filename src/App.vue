<template>
  <div id="app" class="app">

    <div class="header">

      <h1>Utilidades DIAN</h1>
      <nav>
        <button v-on:click="getPrice"> Precio </button>
      </nav>
    </div>
    
    

    <div class="main-component">
      <router-view ></router-view>
    </div>
    


    <div class="footer">
      <h2>Generacion Internal Group<object data="" type=""></object></h2>
    </div>


  </div>
</template>

<script>

import vueRouter from 'vue-router'


export default {
  name: 'App',

  methods:{
    init: function(){
      if(this.$route.name != "root"){
        this.$router.push({name: "root"})
      }
    },

    getPrice: function(){
      if(this.$route.name != "user_price"){
        this.$router.push({name: "user_price"})
      }
    }
  }
}
</script>

<style>
body{
    margin: 0 0 0 0;
  }

  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh; 
    min-height: 100px;

    background-color: #152100 ;
    color:#E5E7E9  ;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header h1{
    width: 20%;
    text-align: center;
  }

  .header nav {
    height: 100%;
    width: 40%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 20px;
  }

  .header nav button{
    color: #E5E7E9;
    background: #548303;
    border: 1px solid #548303;

    border-radius: 5px;
    padding: 10px 20px;
  }

  .header nav button:hover{
    color: #548303;
    background: #E5E7E9;
    border: 1px solid #548303;
  }

  
  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;

    background: #FDFEFE ;
  }

 
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px; 

    background-color: #152100;
    color: #E5E7E9;

  }

  .footer h2{
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>