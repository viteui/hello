<template>
  <div class="nba-player-info-container">
    <img
      src="../assets/imgs/avatar-curry.png"
      alt="Curry"
      style="width: 300px; height: 241px"
    />

    <div class="detail">
      <div class="item">
        <span class="desc">姓名：</span>
        <span class="value">斯蒂芬·库里</span>
      </div>
      <div class="item">
        <span class="desc">年龄：</span>
        <span class="value">34 岁</span>
      </div>
      <div class="item">
        <span class="desc">体重：</span>
        <span class="value">84 KG</span>
      </div>
      <div class="item">
        <span class="desc">场均得分：</span>
        <span class="value">25.5 分</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nba-player-info-container {
  display: flex;
  justify-content: center;
  font-family: sans-serif;
  padding: 40px;
  border-radius: 48px;
  border: 2px solid white;
  width: 64%;
  margin: 0 auto;
  overflow: hidden;
}

.detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
}

.desc {
  font-size: 16px;
}

.value {
  font-size: 20px;
  font-weight: bold;
}
</style>