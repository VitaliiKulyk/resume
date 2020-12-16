<template>
  <div class="d-flex flex-column parent-block">
    <div class="text-h5 mb-3">Favorite projects</div>

    <div class="grid">
      <div class="grid-sizer" />
      <div v-for="(item, i) in projects" :key="i" class="grid-item">
        <div class="ma-1">
          <Project :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Masonry from 'masonry-layout/dist/masonry.pkgd.js';
import Project from '../components/Project';

export default {
  components: {
    Project
  },
  data: () => ({
    projects: [
      {
        title: 'Bomb. Party Game',
        link: '//play.google.com/store/apps/details?id=com.bombgameandroid',
        description: [
          'Personal project',
          'The android game initially made with React Native.',
          'The new version is written on Unity.',
          '175K+ downloads.'
        ],
        tags: ['React native', 'JavaScript', 'Unity', 'C#', 'Android', 'Spine'],
        images: []
      },
      {
        title: 'ClassWallet',
        link: '//classwallet.com/',
        description: [
          'A huge US service that allows teachers and schools to forget about paperwork and provides digital reimbursement and shopping system for the teaching sector.',
          'Over 3,500 schools use ClassWallet to automate processes for transactions for over 135,000 teachers and principals.'
        ],
        tags: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Redis', 'Backbone', 'AWS services'],
        images: []
      },
      {
        title: 'Ariot',
        link: '//ariot.io/',
        description: [
          'Ariot is an AR (augmented reality) tool for building operators and construction workers.'
        ],
        tags: ['JavaScript', 'React', 'Redux', 'Akita', 'D3.js ', 'Node.js', 'PostgreSQL'],
        images: []
      },
      {
        title: 'Neupart',
        link: '//neupart.com/',
        description: [
          'Neupart provides Information Security Management System, Secure ISMS, allowing organizations to automate IT Governance, Risk, and Compliance management.',
          'Neupart allows being compliant with ISO 27001 or EU Data Protection Regulation (GDPR).'
        ],
        tags: ['JavaScript', 'React', 'Redux', 'D3.js '],
        images: []
      }
    ]
  }),
  mounted() {
    new Masonry('.grid', {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
  }
};
</script>

<style lang="less">
.parent-block {
  background-color: #373737;
}

.grid-sizer,
.grid-item {
  width: 100%;
}

@media (min-width: 960px) {
  .grid-sizer,
  .grid-item {
    width: 50%;
  }
}
</style>
