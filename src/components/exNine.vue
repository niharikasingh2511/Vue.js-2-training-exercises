<template>
  <div class="exNine">
    <li>
      <router-link to="/">Return to Homepage</router-link>
    </li>
    <h1>{{msg}}</h1>
    <p>{{subtitle}}</p>

     <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <p>Exercise</p>
                <p>Build a Custom Directive which works like v-on (Listen for Events) which accepts a function as the parameter</p>
                <p>Eg - v-custom-on:click="function"</p>
                <!-- Hint - Think about native addEventListener -->

            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "exNine",
  data() {
    return {
      msg: "vue js Excercise 9",
      subtitle: "work under progress."
    };
  }
};
</script>

<style>
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
  margin: 0 10px;
  list-style: none;
}
a {
  color: #42b983;
}
</style>
