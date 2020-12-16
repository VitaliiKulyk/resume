<template>
  <v-card tile class="elevation-2 pa-3 project-card" color="#3b3b3b">
    <v-card-title class="py-0 my-0 title">
      <div>{{ item.title }}</div>

      <router-link :to="item.link" target="_blank" class="link"> website link </router-link>
    </v-card-title>
    <v-card-text>
      <div v-for="(text, j) in item.description" :key="j">{{ text }}</div>

      <div class="d-flex flex-wrap mt-2">
        <v-chip v-for="(tag, i) in item.tags" :key="i" class="mr-1 mb-1" outlined label>
          {{ tag }}
        </v-chip>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    item: Object
  }
};
</script>

<style lang="less">
.project-card {
  position: relative;
  overflow: hidden;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .link {
    text-decoration: none;
    font-size: 1.1rem;
  }
}
</style>
