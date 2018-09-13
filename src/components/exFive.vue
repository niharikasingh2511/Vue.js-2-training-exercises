<template>
  <div class="exFive">
    <li>
      <router-link to="/">Return to Homepage</router-link>
    </li>
    <h1>{{msg}}</h1>
    <p>{{subtitle}}</p>

    <p>1. Hook up the button to toggle the display of the two paragraphs.
    Use both v-if and v-show and inspect the elements to see the difference </p>
    <div>
      <button v-on:click="isToggle = !isToggle">Toggle</button>
      <p v-if="isToggle">will the real slim shady.. </p>
      <p v-else> please stand up... </p>

      <!-- <p>will the real slim shady</p> -->
      <p v-show="!isToggle"> please stand up... </p>
    </div>
    <p>2. Output an ul of array elements of your choice. Also print the index of each element. </p>
    <ul>
      <li v-for="(item, index) in items" > element: {{item}} with index:{{index}}</li>
    </ul>
    <p>3. Print all key-value pairs of the following object: {title: 'Lord of the Rings', author: 'J.R.R. Tolkiens',
      books: '3'}.
      Also print the index of each item. </p>
    <ul>
      <li v-for="(value, keyName, index) in myObject" >{{value}}-{{keyName}}-{{index}}</li>
    </ul>
    <p>4. Print the following object (only the values) and also create a nested loop for the testData array</p>
    <ul>
      <li v-for="value in testData">

        <template v-if="Array.isArray(value)">
          <div v-for="element in value">{{element}}</div>
        </template>
        <template v-else>
            {{value}}
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "exFive",
  data() {
    return {
      msg: "vue js Excercise 5",
      subtitle: "work under progress.",
      isToggle: true,
      items: ["Biblo", "Frudo", "Gandalf", "Sam"],
      myObject: {
        title: "Lord of the Rings",
        author: "J.R.R. Tolkiens",
        books: "3"
      },
      testData: {
        name: "Vue Training",
        id: 45,
        data: [0.45, 1.45, 8.87, 6.23]
      }
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
}
a {
  color: #42b983;
}
</style>
