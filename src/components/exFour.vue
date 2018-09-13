<template>
  <div class="exFour">
    <li>
      <router-link to="/">Return to Homepage</router-link>
    </li>
    <h1>{{msg}}</h1>
    <p>{{subtitle}}</p>

    <p>1. Start the Effect with the Button.
    The Effect should alternate the "highlight" or "shrink" class on each new setInterval tick.
    Attach respective class to the div with id "effect" below </p>
    <div>
      <button v-on:click="startEffect">Start Effect</button>
      <div id="effect" v-bind:class="effectClasses"></div>
    </div>
    <p>2. Create a couple of CSS classes and attach them via the array syntax </p>
    <div v-bind:class="['black', 'whiteText']">I need the class!</div>
    <p>3. Let the user enter a class (create some example classes) and attach it </p>
    <div>
      <input type="text">
      <div></div>
    </div>
    <p>4. Let the user enter a class and attach the classes (space separated) to the div </p>
    <div>
      <input type="text">
      <div></div>
    </div>
    <p>5. Create a simple progress bar with setInterval and style bindings. Start it by hitting the below button. </p>
    <div>
      <button v-on:click="startProgress">Start Progress</button>
      <div v-bind:class="['progress-bar']" v-bind:style="progressBar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "exFour",
  data() {
    return {
      msg: "vue js Excercise 4",
      subtitle: "work under progress.",
      effectClasses: {
        highlight: false,
        shrink: true
      },
      progressBar: {
        width: '0px',
        backgroundColor: 'green'
      }
    };
  },
  methods: {
    startEffect: function() {
      let vm = this;
      setInterval(function() {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 500);
    },
    startProgress: function() {
      let vm = this;
      let width = 0;
      setInterval(function() {
        width = width + 20;
        vm.progressBar.width = width + 'px';
      }, 50);
    }
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
  #effect {
    width: 100px;
    height: 100px;
    border: 1px solid black;
  }

  .highlight {
    background-color: red;
    width: 200px !important;
    background-color: cyan;
  }

  .shrink {
    background-color: gray;
    width: 50px !important;
    background-color: blue;
  }

  .black {
    background-color: #000
  }

  .whiteText {
    color: #ffffff
  }

  .progress-bar {
  width: 100px;
  height: 30px;
  border: 1px solid;
  }
</style>
