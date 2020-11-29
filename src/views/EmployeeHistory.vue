<template>
  <div class="d-flex flex-column">
    <div class="text-h5 mb-3">Employment history</div>

    <v-card
      tile
      class="elevation-1 pa-3 my-2 history-card"
      color="#3b3b3b"
      v-for="(item, i) in history"
      :key="i"
    >
      <router-link v-if="item.link" :to="item.link" class="link" target="_blank">
        <v-card-title class="py-0 my-0"> {{ item.companyName }} </v-card-title>
      </router-link>
      <v-card-title v-else class="py-0 my-0"> {{ item.companyName }} </v-card-title>

      <div v-for="(position, j) in item.positions" :key="j" class="my-3">
        <v-card-title class="py-0 my-0"> {{ position.name }} </v-card-title>
        <v-card-subtitle class="py-0 my-0"> {{ position.dates }} </v-card-subtitle>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    history: [
      {
        companyName: 'Freelance',
        positions: [
          {
            name: 'Javascript Developer',
            dates: 'Jul 2020 - Present'
          }
        ]
      },
      {
        companyName: 'Eliftech',
        link: '//www.eliftech.com',
        positions: [
          {
            name: 'Software Developer',
            dates: 'Jan 2015 – Jul 2020'
          },
          {
            name: 'Competence Manager',
            dates: 'May 2018 – Jun 2020'
          },
          {
            name: 'Mentor at IT School',
            dates: 'Jan 2016 – Dec 2018'
          }
        ]
      },
      {
        companyName: 'Compta Software',
        positions: [
          {
            name: 'Software Developer',
            dates: 'Jun 2014 – Dec 2014'
          }
        ]
      }
    ]
  })
};
</script>

<style lang="less">
.history-card {
  position: relative;
  overflow: hidden;

  .link {
    text-decoration: none;
    color: inherit;
  }
}
</style>
