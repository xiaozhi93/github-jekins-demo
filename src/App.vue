<template>
  <div id="app">
    <el-scrollbar style="height: 100%">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/table">Table</router-link> |
      <router-link to="/form">form</router-link>
    </div>
      <!-- <div style="height: 800px; overflow: auto;"> -->
        <router-view/>
      <!-- </div> -->
    </el-scrollbar>
  </div>
</template>

<style>
body {
  margin: 0;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  overflow: auto;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
