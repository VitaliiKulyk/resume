<template>
  <v-container class="pa-0">
    <Profile class="pa-5" />
    <AboutMe class="pa-5 my-4" />
    <div class="d-flex flex-wrap my-4">
      <Education class="col-12 col-lg-6 pa-5" />
      <Languages class="col-12 col-lg-6 pa-5" />
    </div>
    <Technologies class="pa-5 my-4" />
    <EmployeeHistory class="pa-5 my-4" />
  </v-container>
</template>

<script>
import Profile from './Profile';
import AboutMe from './AboutMe';
import Education from './Education';
import Languages from './Languages';
import Technologies from './Technologies';
import EmployeeHistory from './EmployeeHistory';

export default {
  components: {
    Profile,
    AboutMe,
    Education,
    Languages,
    Technologies,
    EmployeeHistory
  }
};
</script>

<style lang="less">
.container {
  margin-top: 20px;
  max-width: 1000px;
  background-color: #333333;
  z-index: 1;
  color: #dadada;
}
</style>
