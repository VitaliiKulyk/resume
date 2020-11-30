<template>
  <div class="d-flex flex-column parent-block">
    <div class="text-h5 mb-3">Favorite projects</div>

    <div class="d-flex flex-row flex-wrap">
      <div v-for="(item, i) in projects" :key="i" class="my-1 col-12 col-lg-6 pa-1">
        <v-card tile class="elevation-1 pa-3 project-card" color="#3b3b3b">
          <v-card-title class="py-0 my-0"> {{ item.title }} </v-card-title>
          <v-card-text>
            <router-link :to="item.link" target="_blank"> Link </router-link>
            <div v-for="(text, j) in item.description" :key="j">{{ text }}</div>

            <div class="d-flex flex-wrap">
              <v-chip v-for="(tag, i) in item.tags" :key="i" class="ma-1" outlined label>
                {{ tag }}
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        title: 'Bomb. Party Game.',
        link: '//play.google.com/store/apps/details?id=com.bombgameandroid',
        description: [
          'The android game initially made with React Native.',
          'The new version is written on Unity.',
          '175K+ downloads.'
        ],
        tags: ['React native', 'JavaScript', 'Unity', 'C#', 'Android', 'Spine'],
        images: []
      },
      {
        title: 'Bomb. Party Game.',
        link: '//play.google.com/store/apps/details?id=com.bombgameandroid',
        description: [
          'The android game initially made with React Native.',
          'The new version is written on Unity.',
          '175K+ downloads.'
        ],
        tags: ['React native', 'JavaScript', 'Unity', 'C#', 'Android', 'Spine'],
        images: []
      },
      {
        title: 'Bomb. Party Game.',
        link: '//play.google.com/store/apps/details?id=com.bombgameandroid',
        description: [
          'The android game initially made with React Native.',
          'The new version is written on Unity.',
          '175K+ downloads.'
        ],
        tags: ['React native', 'JavaScript', 'Unity', 'C#', 'Android', 'Spine'],
        images: []
      }
    ]
  })
};
</script>

<style lang="less">
.parent-block {
  background-color: #373737;
}

.project-card {
  position: relative;
  overflow: hidden;

  .link {
    text-decoration: none;
    color: inherit;
  }
}
</style>
