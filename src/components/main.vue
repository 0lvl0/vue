<template>
  <div>
    <div class="left_bar_list">
      <img class="left_logo" src="./../assets/logo.png" alt="Surreal">
      <div style="height:30px"></div>
      <a href="/dashboard">Dashboard</a>
      <a href="/profiles">Profiles</a>
      <a href="/bills">Bills</a>
      <a href="/support">Support</a>
      <a href="/account">Account</a>
    </div>
    <div class="container">
      <div class="top_bar_news">
        <a
          class="new_artical"
          href="https://baidu.com"
          aria-label="友情链接"
          target="_blank"
          >新公告</a
        >
        <a
          class="new_info"
          href="https://google.com"
          aria-label="谷歌链接"
          target="_blank"
          >Announcing API</a
        >
        <div class="top_bar_action">
          <a class="top_action" href="/support/" target="_blank">帮助</a>
        </div>
      </div>

      <div style="height:auto">
        <h1>Welcome</h1>
        <map name="map">
          <li><a href="./../">Back</a></li>
          <li></li>
        </map>
      </div>
    </div>
  </div>
</template>
<style>
.left_bar_list a {
  text-decoration: none;
  height: 100px;
  width: 135px;
  overflow: hidden;
  text-align: center;
  border: 90px;
  align-content: center;
  display: grid;
  color: black;
}
</style>
