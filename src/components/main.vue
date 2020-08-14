<template>
  <div>
    <!-- 左侧栏设置 -->
    <div class="left_bar_list">
      <img class="left_logo" src="./../assets/logo.png" alt="Surreal" />
      <div style="height:30px"></div>
      <a href="/dashboard">Dashboard</a>
      <a href="/profiles">Profiles</a>
      <a href="/test">Bills</a>
      <a href="/support">Support</a>
      <a href="/account">Account</a>
    </div>
    <!-- 右侧整体容器布局 -->
    <div class="container">
      <!-- 顶部边栏设置 -->
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
        <!-- 右上角按钮 -->
        <div class="top_bar_action">
          <a class="top_action" href="/support/" target="_blank">帮助</a>
        </div>
      </div>
      <!-- 正文内容区域 -->
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
  padding-bottom: 50px;
  padding-top: 50px;
  text-decoration: none;
  width: 135px;
  overflow: hidden;
  align-self: center;
  display: flex;
  color: black;
  flex-direction: column;
}
a .new_artical {
  text-align: center;
  display: flex;
}
a .new_info {
  text-align: center;
  display: flex;
}
</style>
