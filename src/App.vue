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

<style lang="less">
body {
  background-color: red;
}
</style>
