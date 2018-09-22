<template>
  <div class="exEight">
    <li>
      <router-link to="/">Return to Homepage</router-link>
    </li>
    <h1>{{msg}}</h1>
    <p>{{subtitle}}</p>

    <div class="container">
        <div>
            <div>
                <b>Exercise 1</b>
                <p>Create a Signup Form where you retrieve the following Information</p>
                <p>First Name</p>
                <p>Last Name</p>
                <p>Mail</p>
                <p>Password</p>
                <p>Store Data? Yes/No</p>

                <b>Exercise 2</b>
                <p>Only display the Form if it has NOT been submitted</p>
                <p>Display the Data Summary ONCE the Form HAS been submitted</p>

                <b>Exercise 3</b>
                <p>Edit the Example from above and create a custom "Full Name" Control</p>
                <p>which still holds the First Name and Last Name Input Field</p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>First Name: </p>
                        <p>Last Name: </p>
                        <p>Mail: </p>
                        <p>Password: </p>
                        <p>Store in Database?: </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "exEight",
  data() {
    return {
      msg: "vue js Excercise 8",
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
