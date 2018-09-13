<template>
  <div class="exOne">
  <li>
    <router-link to="/">Return to Homepage</router-link>
  </li>
  <h2>{{msg}}</h2>
    <p>1. Fill the p with your Name and Age - using Interpolation </p>
      <p>Interpolated data - {{name}} {{age}}</p>
      <hr>
      
      <p>2. Output your age, multiplied by 3</p>
      <p> {{ age * 3 }}</p>
      <hr>
      
      <p>3. Call a function to output a random float between 0 and 1 (Math.random())</p>
      <p> {{ randomFloatNo() }} </p>
      <hr>
      
      <p>4. Search any image on Google and output it here by binding the "src" attribute</p>
      <div>
        <img style="width:100px;height:100px" v-bind:src="image">
      </div>
      <hr>
      
      <p>5. Pre-Populate this input with your name (set the "value" attribute)</p>
      <div>
        <input type="text" v-bind:value="name">
      </div>
  </div>
</template>

<script>
export default {
  name: "exOne",
  data() {
    return {
      msg: "vue js Excercise 1.",
      image:"https://images.8tracks.com/cover/i/002/020/260/valar-5547.jpg?rect=0,0,400,400&q=98&fm=jpg&fit=max",
      name:"Nauman Tanwir",
      age: "27"
    };
  },
  methods: {
      randomFloatNo: function () {
        return Math.random();
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  color: #42b983
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
