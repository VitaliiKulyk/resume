<template>
  <v-app>
    <Background />
    <router-view />
  </v-app>
</template>

<script>
import Background from '@/components/Background';

export default {
  components: {
    Background
  }
};
</script>

<style lang="less" scoped>
.v-application {
  background: #2a2a2a;
}
</style>
