<template>
  <div class="d-flex flex-column">
    <div class="text-h5">Employment history</div>

    <v-timeline dense>
      <v-timeline-item small v-for="n in 2" :key="n">
        <template v-slot:opposite>
          <span сlass="headline" v-text="2211"></span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline"> Lorem ipsum </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut,
            sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando
            voluptatibus, vix an salutandi sententiae.
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style lang="less"></style>
