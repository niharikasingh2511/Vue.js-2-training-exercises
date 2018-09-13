<template>
  <div class="exTwo">
    <li>
      <router-link to="/">Return to Homepage</router-link>
    </li>
    <h1>{{msg}}</h1>

     <p>1. Show an alert when the Button gets clicked </p>
    <div>
        <button v-on:click="alertDisplay()">Show Alert</button>
    </div>
    <p>2. Listen to the "keydown" event and store the value in a data property </p>
    <div>
        <input type="text" v-on:keydown="alertkey">
        <p>{{ value }}</p>
    </div>
    <p>3. Adjust the example from 2. to only fire if the "key down" is the ENTER key </p>
    <div>
        <input type="text" v-on:keydown.enter="alertkey">
        <p>{{ value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "exTwo",
  data() {
    return {
      msg: "vue js Excercise 2.",
    };
  },
  methods: {
    alertDisplay() {
        this.$swal('Alert');
      },
    alertkey: function(event) {
      this.value = event.target.value;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  color: #42b983;
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
