<template>
  <v-app class="unselectable">
    <Background />
    <TopBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Background from '@/components/Background';
import TopBar from '@/views/TopBar';

export default {
  components: {
    Background,
    TopBar
  }
};
</script>

<style lang="less" scoped>
.v-application {
  background: #2a2a2a;
}

.unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
