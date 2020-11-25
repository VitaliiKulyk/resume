<template>
  <div>
    <svg id="bg-shape-1" class="d-none d-md-block">
      <polygon class="shape" points="0 500, 600 320, 150 0, 0 100" />
    </svg>
    <svg id="bg-shape-2" class="d-none d-md-block">
      <polygon class="shape" points="0 400, 900 0, 900 400" />
    </svg>
  </div>
</template>

<style lang="less" scoped>
#bg-shape-1 {
  top: -30px;
  position: fixed;
  height: 500px;
  width: 600px;
}

#bg-shape-2 {
  bottom: -30px;
  right: 0px;
  position: fixed;
  height: 400px;
  width: 900px;
}

.shape {
  fill: #212121;
  opacity: 0.7;
}
</style>
