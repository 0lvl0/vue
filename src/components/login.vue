<template>
  <div class="login">
    <div style="height:200px"></div>
    <HelloWorld msg="欢迎来到SurrealDrugs" />
    <form
      action="./redirect"
      method="get"
      class="animate__animated animate__fadeInUp"
    >
      <p>
        <b>Username:</b>
        <input type="text" width="130px" />
      </p>
      <p>
        <b>Password:</b>
        <input type="text" width="130px" style="dot" />
      </p>
      <br />
      <input type="submit" value="Submit" class="submit" />
    </form>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld";
export default {
  name: "Loginport",
  props: {
    msg: String,
  },
  components: {
    HelloWorld,
  },
};
</script>

<style>
.login {
  height: 100%;
  background: url("./../assets/background.png");
  background-size: 100% 100%;
  background-attachment: fixed;
}
.submit {
  width: 60px;
}
p {
  color: black;
  font-style: italic;
}
input:focus {
  background-color: chartreuse;
}
</style>
