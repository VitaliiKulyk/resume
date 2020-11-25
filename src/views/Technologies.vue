<template>
  <div class="d-flex flex-column parent-block">
    <div class="text-h5">Technologies</div>

    <template v-for="(topic, i) in skills">
      <div :key="i" class="my-3">
        <div class="divider-container">
          <v-divider />
          <div class="divider-text-container">
            <div class="divider-text">{{ topic.title }}</div>
          </div>
        </div>
        <div class="d-flex flex-wrap">
          <v-chip
            v-for="(text, i) in topic.list"
            :key="i"
            class="ma-1"
            :large="topic.size === 'large'"
            outlined
            label
          >
            {{ text }}
          </v-chip>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    skills: [
      {
        title: 'Comfort with',
        size: 'large',
        list: ['JavaScript', 'Typescript', 'Node.js', 'Vue', 'React.js', 'PosgreSQL', 'HTML/CSS']
      },
      {
        title: 'More detailed',
        list: [
          'MongoDB',
          'Less',
          'Webpack',
          'Vuex',
          'Redux',
          'SQL',
          'NoSQL',
          'Socket.io',
          'AWS services',
          'Vuetify',
          'Material design',
          'Express',
          'JWT',
          'd3.js',
          'Three.js',
          'Backbone',
          'REST',
          'GraphQL',
          'Meteor',
          'Redis'
        ]
      },
      {
        title: 'Experienced with',
        list: ['C#', 'Unity', 'React Native']
      }
    ]
  })
};
</script>

<style lang="less">
.parent-block {
  background-color: #373737;
}

.divider-container {
  position: relative;
  padding: 10px 0;
}

.divider-text-container {
  background-color: #373737;
  padding: 0 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.divider-text {
  opacity: 0.7;
}
</style>
