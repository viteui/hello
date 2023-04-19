<template>
  <div id="app">
    <div class="router-view-wrapper">
      <router-view />
    </div>
    <div class="tabs-container">
      <div
        v-for="(tab, idx) in tabs"
        :key="'tab_' + idx"
        :class="{
          'tab-item': true,
          active: tabIndex === idx,
        }"
        @click="tabIndex = idx"
      >
        <router-link :to="tab.to">{{ tab.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tabs: Object.freeze([
        { to: "/", name: "Curry" },
        { to: "clay", name: "Clay" },
        { to: "green", name: "Green" },
      ]),
      tabIndex: 0,
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: white;
}

#app {
  font-family: sans-serif;
  height: 100vh;
  width: 100%;
  padding-top: 40px;
  background: linear-gradient(to bottom right, #024, #006BB6);
}

.router-view-wrapper {
  padding-bottom: 64px;
}

.tabs-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tab-item a {
  display: block;
  width: 100px;
  color: white;
  font-size: 24px;
  font-weight: bolder;
  padding: 12px 24px;
  background: #006BB6;
  border-radius: 48px;
  border: 2px solid white;
  cursor: pointer;
  text-align: center;
  margin-right: 8px;
}

.tab-item a:hover,
.tab-item.active a {
  transition: all 0.3s;
  background: slateblue;
}
</style>
