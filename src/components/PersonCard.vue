<template>

    <h1 style="color:red;" v-if="!person">Person is null</h1>

    <ion-col v-if="person" size="12" size-sm class="speaker">
        <img class="img" :alt="person.name" :src="pic" />

        <h1 class="name">{{ person.name }}</h1>
        <h3 v-if="role">{{ role }}</h3>

        <ul class="info" v-if="person.affiliations">
            <li v-for="l in person.affiliations" :key="l">{{ l }}</li>
        </ul>
    </ion-col>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IonCol } from '@ionic/vue'

export interface Person {
    name: string;
    pic: string;
    affiliations: string[];
}

export default defineComponent({
  name: 'LanguageSwitcher',
  components: {
    IonCol
  },
  props: {
    person: Object as PropType<Person>,
    role: String
  },
  setup(props) {

    // const pic = props?.person?.pic ? new URL(`../public/assets/${props.person.pic}`, import.meta.url) : new URL("/public/assets/tbd.jpg", import.meta.url);
    // const pic = props?.person?.pic ? `/public/assets/${props.person.pic}` : 'public/assets/tbd.jpg';
    const pic = new URL("/public/assets/tbd.jpg", import.meta.url);

    return {
      props,
      pic
    }
  }
});
</script>

<style scoped>
.speaker {

}

.speaker .img {
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
}

.speaker .name {
  text-align: center;
  font-size: 20px
}

.speaker .info {
  list-style-type: none;
  padding-left: 0px;
}

.speaker .info li {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>