<template>
  <div class="exFive">
    <li>
      <router-link to="/">Return to Homepage</router-link>
    </li>
    <h1>{{msg}}</h1>
    <p>{{subtitle}}</p>
  </div>
</template>

<script>
export default {
  name: "exFive",
  data() {
    return {
      msg: "vue js Excercise 5",
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
