<template>
  <div class="d-flex flex-column parent-block">
    <div class="text-h5">About me</div>
    <div class="mx-5 mt-4">
      <div class="text-subtitle-1" v-for="(text, i) in text" :key="i">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: [
      'Full-stack engineer with more than 7 years of experience in javascript ecosystem.',
      'My passion is developing code software. Not just working code, but clean, reusable, extendable, consistent, distributed, and self-commented code.',
      ''
    ]
  })
};
</script>

<style lang="less">
.parent-block {
  background-color: #373737;
}
</style>
