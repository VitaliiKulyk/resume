<template>
  <div class="d-flex">
    <img class="avatar-image ma-1 d-none d-sm-flex" src="@/assets/avatar.jpg" />

    <div class="main-info ma-1 pa-2">
      <div class="text-h3 name">{{ name }}</div>
      <div class="text-h6 position">{{ position }}</div>
      <div class="contacts my-3">
        <div v-for="(contact, i) in contacts" :key="i" class="contact my-1">
          <v-icon class="mr-1" :color="contact.color"> {{ contact.icon }}</v-icon>
          <a class="link" :href="contact.href" target="_blank">{{ contact.text }}</a>
        </div>
      </div>

      <div class="icon-links ml-auto mt-auto">
        <v-btn
          class="mx-2"
          v-for="(contact, i) in iconContacts"
          :key="i"
          :to="contact.link"
          target="_blank"
          color="red"
          elevation="2"
          icon
          tile
          x-large
        >
          <v-icon x-large :color="contact.color"> {{ contact.icon }}</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: 'Vitalii Kulyk',
    position: 'JavaScript developer',
    contacts: [
      {
        icon: 'mdi-email-outline',
        href: 'mailto:vetalkulyk@gmail.com',
        text: 'vetalkulyk@gmail.com',
        color: 'deep-orange lighten-3'
      },
      {
        icon: 'mdi-map-marker',
        href:
          'https://www.google.com.ua/maps/place/%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@48.990886,17.7659202,5.62z/data=!4m5!3m4!1s0x473add7c09109a57:0x4223c517012378e2!8m2!3d49.839683!4d24.029717',
        text: 'Lviv, Ukraine',
        color: 'teal accent-2'
      }
    ],
    iconContacts: [
      {
        color: 'light-blue darken-1',
        icon: 'mdi-linkedin',
        link: '//www.linkedin.com/in/vitaliikulyk/'
      },
      {
        color: 'blue',
        icon: 'mdi-facebook',
        link: '//www.facebook.com/vitalik.kulyk'
      },
      {
        color: 'grey lighten-2',
        icon: 'mdi-github',
        link: '//github.com/VitaliiKulyk'
      }
    ]
  })
};
</script>

<style lang="less">
.avatar-image {
  border-radius: 20px;
  width: 250px;
  height: 250px;
}

.main-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: 600;
}

.position {
  color: #818181;
}

.contacts {
  .contact {
    display: flex;
    align-items: center;

    .link {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
