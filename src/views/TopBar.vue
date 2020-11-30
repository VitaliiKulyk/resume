<template>
  <v-app-bar app dense elevate-on-scroll>
    <v-tabs dark centered hide-slider :value="null">
      <v-tab
        v-for="(item, i) in tabs"
        :key="i"
        class="not-activable"
        @click="$vuetify.goTo(item.target, options)"
      >
        {{ item.text }}
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    tabs: [
      {
        text: 'About me',
        target: '#about-me'
      },
      {
        text: 'Technologies',
        target: '#technologies'
      },
      {
        text: 'Employment history',
        target: '#employment-history'
      }
    ]
  })
};
</script>

<style lang="less" scoped>
.not-activable {
  color: #cfcfcf !important;
}
</style>
