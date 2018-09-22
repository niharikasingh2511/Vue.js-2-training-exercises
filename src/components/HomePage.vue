<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/exOne">Exercise One</router-link>
      </li>
      <li>
        <router-link to="/exTwo">Exercise Two</router-link>
      </li>
      <li>
        <router-link to="/exThree">Exercise Three</router-link>
      </li>
      <li>
        <router-link to="/exFour">Exercise Four</router-link>
      </li>
       <li>
        <router-link to="/exFive">Exercise Five</router-link>
      </li>
      <li>
        <router-link to="/exSix">Exercise Six</router-link>
      </li>
      <li>
        <router-link to="/exSeven">Exercise Seven</router-link>
      </li>
      <li>
        <router-link to="/exEight">Exercise Eight</router-link>
      </li>
      <li>
        <router-link to="/exNine">Exercise Nine</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
      msg: "Vue.js training exercises"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
