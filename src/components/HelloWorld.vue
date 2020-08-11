<template>
  <div class="hello">
    <div>
      <h2 class="animate__animated animate__fadeInDown"><b>SurrealDrugs</b></h2>
    </div>
    <address class="animate__animated animate__fadeInDown">
      2355, Madison ave.,Burnaby ,Vancouver, BC.,Canada<br />
      Phone: 123456 <br />
      PostCode:V5C0B3
    </address>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style>
.hello {
  height: auto;
}
ul {
  list-style-type: none;
  padding: 0;
  color: black;
}
a {
  color: #00ffb3;
  font-size: 30px;
}
h2 {
  font-size: 110px;
  position: center;
  color: darkgrey;
}
address {
  color: rgb(255, 255, 255);
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
