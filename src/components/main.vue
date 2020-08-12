<template>
  <div>
    <div class="left_bar_list">
      <img class="left_logo" src="./../assets/logo.png" alt="Surreal" />
      <p>
        <a href="/dashboard">Dashboard</a>
      </p>
      <p>Profiles</p>
      <p>Bills</p>
      <p>Support</p>
      <p>account</p>
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
p {
  height: 100px;
  width: 137px;
  overflow: hidden;
  text-align: center;
  background-color: rgb(8, 150, 84);
  border-radius: 30px;
  align-content: center;
  display: grid;
}
</style>