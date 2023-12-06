<template>

    <ion-col size="12" size-sm class="speaker">
        <img class="img" :alt="person.name" :src="pic" />

        <h1 class="name">{{ person.name }}</h1>

        <ul class="info">
            <li>Professor, FRS, FNAI, FSNAS, FAPS, FMRS, FWIF, FAAIA, AAPAM</li>
            <li>Director, Center for Quantum Research and Technology (CQRT)</li>
            <li>Founding Director, Center of Optimal Materials for Emerging Technologies (COMET)</li>
            <li>Departments of Physics and ECE</li>
            <li>University of Oklahoma</li>
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
    const pic = props?.person?.pic ? `/public/assets/${props.person.pic}` : 'public/assets/tbd.jpg';

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
  width: 50%;
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