<template>
  <div class="exThree">
    <li>
      <router-link to="/">Return to Homepage</router-link>
    </li>
    <h1>{{msg}}</h1>
    <p>1. Show a "result" of 'Not There Yet' as long as "value" is not equal to 45 - you can change "value" with the buttons.
        Print 'Done' once you did it
    </p>
    <div>
        <p>Current Value: {{ value }}</p>
        <button @click="value += 5">Add 5</button>
        <button @click="value += 1">Add 1</button>
        <p>{{ result }}</p>
    </div>
    <p>2. Watch for changes in the "result" and reset the "value" after 5 seconds </p>
    <div>
        <input type="text" v-model="interval">
        <p>{{ value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "exThree",
  data() {
    return {
      msg: "vue js Excercise 3",
      value: 10,
      interval: 5000,
    };
  },
  computed: {
    result: function() {
      return this.value === 45 ? "Done" : "Not There Yet";
    }
  },
  watch: {
    result: function() {
      var vm = this;
      setTimeout(function() {
        vm.value = 0;
      }, vm.interval);
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
