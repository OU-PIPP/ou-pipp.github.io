<template>
  <ion-menu side="start" menu-id="nav" content-id="main">
    <ion-header>
      <ion-toolbar>
        <ion-title>Navigation</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item v-for="n in navs" :key="n.goto" class="nav-item" @click="scrollToEl(n.goto)">
          {{ n.text }}
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-page>
  
    <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start" v-if="screen.width < breakpoint">
            <ion-button @click="openMenu()">
              <ion-icon slot="start" :icon="menu"></ion-icon>
            </ion-button>
          </ion-buttons>

          <ion-title class="title" @click="scrollToTop()">Predictive Intelligence for Pandemic Prevention (PIPP)</ion-title>

          <ion-buttons slot="primary" v-if="screen.width >= breakpoint">
            <template v-for="n in navs" :key="n.goto">
              <ion-button @click="scrollToEl(n.goto)">
                {{ n.text }}
                <ion-icon slot="start" :icon="n.icon"></ion-icon>
              </ion-button>
            </template>
          </ion-buttons>

          <!-- <ion-buttons slot="end">
            <language-switcher></language-switcher>
          </ion-buttons> -->
        </ion-toolbar>
    </ion-header>

    <ion-content id="main" ref="content" :fullpage="true" :scroll-events="true" v-on:ion-scroll="getScrollPos($event.detail.scrollTop)">
      <ion-card id="overview">
            <!-- <img style="width:100%;" alt="Image of VCC building with the main entrance" :src="require('@/'+t('vccimg')+'.png')" /> -->
            <ion-card-header>
              <ion-card-title>
                Overview
              </ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <p>
                Emerging pathogens often spread for months prior to detection, allowing wide dispersal before detection and response. Moreover, the potential for crossover to the human population and subsequent spread is influenced by changing anthropogenic, genetic, ecologic, socioeconomic, and climatic factors. These interrelated driving forces create a Grand Challenge: How can we provide early syndrome and disease detection and effective public health surveillance that can help prevent the spread of new diseases and stop the next pandemic? Traditional epidemiological surveillance methods depend on a sequence of events from people experiencing symptoms, seeking medical attention, and undergoing testing, the tests being analyzed and confirmed, and reporting of cases with a defined infection/disease. Thus, new diseases are often underreported, data availability is delayed, and the information is disconnected from other indicators of emerging disease threats delaying public health responses to the point where action cannot be undertaken in real-time and in proportion to the level of pandemic threat. The lack of coordinated response to COVID-19 underscores the need for new methods of early detection of pathogens or disease/syndrome indicators, novel technologies for more effective data management and integration, efficient monitoring of the human-animal interface to develop One Health surveillance and control systems, and deepening cooperation and information sharing capacities between animal and public health officials across countries, sectors, regions, and localities. This project will prototype solutions and create a national Center roadmap to solve this challenge.
              </p>

              <p>
                The project consists of five teams working on different aspects.
              </p>

              <ion-grid>
                <ion-row>

                  <PersonCard :person="persons.de" role='PI' />
                  <PersonCard :person="persons.tv" role='Co-PI' />
                  <PersonCard :person="persons.jv" role='Co-PI' />
                  <PersonCard :person="persons.aw" role='Co-PI' />
                  <PersonCard :person="persons.mw" role='Co-PI' />

                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>

          <ion-card id="dashboard">
            <ion-card-header>
              <ion-card-title>
                PIPP Dashboard
              </ion-card-title>
            </ion-card-header>

            <ion-card-content class="vcc">
            <div style="text-align:center">
              <a href="https://pipp.disc.ourcloud.ou.edu/">
                <img style="width:80%;" :src="require('@/dashboard.png')" />
              </a>
            </div>

              <p>Description TBD</p>
            </ion-card-content>
          </ion-card>


          <ion-card id="environment">
            <ion-card-header>
              <ion-card-title>
                Environmental Surveillance
              </ion-card-title>
            </ion-card-header>

            <ion-card-content class="vcc">
              <p>
                Description TBD
              </p>

              <ion-grid>
                <ion-row>
                  <PersonCard :person="persons.mw" role='Team Lead / Co-PI' />
                  <PersonCard :person="persons.wj" role='Coordination' />
                  <PersonCard :person="persons.ay" />
                  <PersonCard :person="persons.rz" />
                  <PersonCard :person="persons.ks" />


                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>

          <ion-card id="animals">
            <ion-card-header>
              <ion-card-title>
                Animal Surveillance
              </ion-card-title>
            </ion-card-header>

            <ion-card-content class="vcc">
              <p>
                Description TBD
              </p>

              <ion-grid>
                <ion-row>
                  <PersonCard :person="persons.jv" role='Team Lead / Co-PI' />
                  <PersonCard :person="persons.wj" role='Coordination' />
                  <PersonCard :person="persons.ab" />
                  <PersonCard :person="persons.ay" />
                  <PersonCard :person="persons.jr" />
                </ion-row>

                <ion-row>
                  <PersonCard :person="persons.ks" />
                  <PersonCard :person="persons.kb" />
                  <PersonCard :person="persons.rz" />
                  <PersonCard :person="persons.de" />
                  <PersonCard :person="persons.gs" />
                </ion-row>

                <ion-row>
                  <PersonCard :person="persons.gm" />
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>

          <ion-card id="humans">
            <ion-card-header>
              <ion-card-title>
                Human Surveillance
              </ion-card-title>
            </ion-card-header>

            <ion-card-content class="vcc">
              <p>
                Description TBD
              </p>

              <ion-grid>
                <ion-row>
                  <PersonCard :person="persons.aw" role='Team Lead / Co-PI' />
                  <PersonCard :person="persons.wj" role='Coordination' />
                  <PersonCard :person="persons.ab" />
                  <PersonCard :person="persons.gr" />
                  <PersonCard :person="persons.dk" />
                </ion-row>

                <ion-row>
                  <PersonCard :person="persons.ew" />
                  <PersonCard :person="persons.kk" />
                  <PersonCard :person="persons.tv" />
                  <PersonCard :person="persons.vt" />
                  <PersonCard :person="persons.cn" />
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>

          <ion-card id="analytics">
            <ion-card-header>
              <ion-card-title>
                Multiscale Decision-Making and Analytics
              </ion-card-title>
            </ion-card-header>

            <ion-card-content class="vcc">
              <p>
                Description TBD
              </p>

              <ion-grid>
                <ion-row>
                  <PersonCard :person="persons.de" role='Team Lead / PI' />
                  <PersonCard :person="persons.wj" role='Coordination' />
                  <PersonCard :person="persons.aw" />
                  <PersonCard :person="persons.mw" />
                  <PersonCard :person="persons.kk" />
                </ion-row>

                <ion-row>
                  <PersonCard :person="persons.ab" />
                  <PersonCard :person="persons.lc" />
                  <PersonCard :person="persons.cn" />
                  <PersonCard :person="persons.dh" />
                  <PersonCard :person="persons.tr" />
                </ion-row>

              </ion-grid>
            </ion-card-content>
          </ion-card>

          <ion-card id="novel-technologies">
            <ion-card-header>
              <ion-card-title>
                Novel Technologies: Breathomics &amp; Wastewaters
              </ion-card-title>
            </ion-card-header>

            <ion-card-content class="vcc">
              <p>
                Description TBD
              </p>

              <ion-grid>
                <ion-row>
                  <PersonCard :person="persons.vt" role='Team Lead / Co-PI' />
                  <PersonCard :person="persons.jv" role='Team Lead / Co-PI' />
                  <PersonCard :person="persons.wj" role='Coordination' />
                  <PersonCard :person="persons.de" />
                  <PersonCard :person="persons.ks" />
                  <PersonCard :person="persons.bs" />
                </ion-row>

                <ion-row>
                  <PersonCard :person="persons.dh" />
                  <PersonCard :person="persons.tv" />
                  <PersonCard :person="persons.kd" />
                  <PersonCard :person="persons.gs" />
                </ion-row>

              </ion-grid>
            </ion-card-content>
          </ion-card>


          <ion-card id="publications">
            <ion-card-header>
              <ion-card-title>
                Publications
              </ion-card-title>
            </ion-card-header>

            <ion-card-content class="vcc">
              <ol>
                <li>David S Ebert and Aaron M Wendelboe (2023), "Applying data science advances in disease surveillance and control", Open Access Government July 2023, pp.152-153. doi: <a href="https://doi.org/10.56367/OAG-039-10899">10.56367/OAG-039-10899</a></li>
                <li>Katrin Gaardbo Kuhn (2023), "Wastewater surveillance for infectious disease preparedness", Open Access Government October 2023, pp.22-23. doi: <a href="https://doi.org/10.56367/OAG-040-10923">10.56367/OAG-040-10923</a></li>
              </ol>
            </ion-card-content>
          </ion-card>

          <ion-card id="workshops">
            <ion-card-header>
              <ion-card-title>
                Workshops
              </ion-card-title>
            </ion-card-header>

            <ion-card-content class="vcc">
              <ul>
                <li><h2><a href="https://vis4pandemres.github.io/">IEEE VIS Workshop on Visualization for Pandemic and Emergency Responses 2023 (Vis4PandEmRes)</a></h2>
                  <p>Half-day workshop at <a href="https://ieeevis.org/year/2023/welcome">IEEE VIS</a>, Melbourne, Australia, 22-27 October Workshop date: October 22, 2023</p>
                </li>
                
                <li><h2><a href="https://hicsspandemic.github.io/">Symposium on Novel Data, Analytics, Predictive Intelligence, and Decision-Making for Pandemics and Emerging Diseases</a></h2>
                  <p><a href="https://hicss.hawaii.edu/">Hawaii International Conference on System Sciences (HICSS)</a> Jan 3, 2024 - Jan 6, 2024, Hawaiian Village, Waikiki, Hawaii, USA</p>
                </li>
                
              </ul>
            </ion-card-content>
          </ion-card>

          <ion-card id="lectures">
            <ion-card-header>
              <ion-card-title>
                PIPP Lectures Series
              </ion-card-title>
            </ion-card-header>

            <ion-card-content class="vcc">
              <ul>
                <li>10/26/2022, Michael Wimberly, Frontiers of Data Science for Predicting Emerging Diseases</li>
                <li>11/08/2022, Aaron Wendelboe, The Macroscope Meets the Microscope: Integrating Earth Science Data with Disease Surveillance for Outbreak Forecasting</li>
                <li>12/13/2022, Anni Yang, Leveraging Host Movement with Disease Risk: Uncover the Underlying Mechanism of Disease Transmissions in Ecosystem</li>
                <li>02/14/2023, Ashok Srinivasan, Linking Simulations and Emerging Data Sources to Analyze Infection Risk in Crowded Locations</li>
                <li>03/07/2023, Zhunan Jia, Breathomics: The metabolomics study of exhaled air</li>
                <li>07/18/2023, Sungahn Ko, Visualization Meets AI for Exploring and Forecasting Spatiotemporal Data</li>
                <li>08/22/2023, Min Chen, RAMPVIS: Answering visualization challenges during the COVID-19 pandemic response</li>
                
                
                
                
              </ul>
            </ion-card-content>
          </ion-card>

          
    </ion-content>


  <div class="back-to-top-btn" v-if="showScrollTop" @click="scrollToTop()">
    <ion-icon :icon="chevronUp"></ion-icon>
  </div>
    
  </ion-page>
</template>

<script lang="ts">
// import LanguageSwitcher from '@/components/LanguageSwitcher.vue';
import { IonGrid, IonRow, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenu, IonPage, IonTitle, IonToolbar, menuController } from '@ionic/vue';
import { chevronUp, airplane, train, bus, boat, location, car, bed, help, menu, call } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useScreen } from 'vue-screen'
import PersonCard from '@/components/PersonCard.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent, IonCardHeader, IonCardTitle, IonIcon,
    IonButton,
    IonContent,
    IonGrid,
    IonRow,
    IonButtons,
    IonItem,
    IonMenu,
    IonList,
    PersonCard
    // LanguageSwitcher
  },
  setup() {
    const { t } = useI18n();
    const screen = useScreen();
    const breakpoint = 3400;

    const content = ref();
    const scrollToEl = (id: string) => {
      const titleELe = document.getElementById(id);
      if (!titleELe) {
        return;
      }
      menuController.close('nav');
      content.value.$el.scrollToPoint(0, titleELe.offsetTop, 1000);
    };

    const scrollToTop = () => {
      content.value.$el.scrollToTop(1000);
    }

    const showScrollTop = ref(false);

    const getScrollPos = (pos: number) => {
      showScrollTop.value = pos > 100;
    };

    menuController.enable(true, 'nav');
    const openMenu = () => {
      menuController.open('nav');
    }

    const navs = ref([
      {
        text: 'Overview',
        goto: 'overview'
      },
      {
        text: 'Environmental Surveillance',
        goto: 'environment'
      },
      {
        text: 'Animal Surveillance',
        goto: 'animals'
      },
      {
        text: 'Human Surveillance',
        goto: 'humans'
      },
      {
        text: 'Multiscale Descision-Making and Analytics',
        goto: 'analytics'
      },
      {
        text: 'Novel Technologies',
        goto: 'novel-technologies'
      },
      {
        text: 'Publications',
        goto: 'publications'
      },
      {
        text: 'Workshops',
        goto: 'workshops'
      },
      {
        text: 'Lecture Series',
        goto: 'lectures'
      },
    ]);

    const persons = {
      de: {name: 'David Ebert', pic: 'de.jpg', affiliations: ['Director, Center for Quantum Research and Technology (CQRT)', 'Founding Director, Center of Optimal Materials for Emerging Technologies (COMET)', 'Departments of Physics and ECE', 'University of Oklahoma']},
      tv: {name: 'Thirumalai Venkatesan', pic: 'de.jpg', affiliations: ['Professor, FRS, FNAI, FSNAS, FAPS, FMRS, FWIF, FAAIA, AAPAM', 'Director, Center for Quantum Research and Technology (CQRT)', 'Founding Director, Center of Optimal Materials for Emerging Technologies (COMET)', 'Departments of Physics and ECE', 'University of Oklahoma']},
      jv: {name: 'Jason Vogel', pic: 'jv.jpg', affiliations: ['Professor, Civil Engineering and Environmental Science', 'Director, Oklahoma Water Survey', 'Associate Director, Water Technologies for Emerging Regions (WaTER) Center', 'University of Oklahoma']},
      aw: {name: 'Aaron Wendelboe', pic: 'aw.jpg', affiliations: ['Professor, Epidemiology', 'Edward E. and Helen T. Bartlett Chair in Public Health', 'Williams Companies Foundation Presidential Professor', 'Department of Biostatistics and Epidemiology', 'The University of Oklahoma Health Sciences Center']},
      mw: {name: 'Michael Wimberly', pic: 'mw.jpg', affiliations: []},
      ay: {name: 'Anni Yang', pic: 'ay.jpg', affiliations: []},
      rz: {name: 'Richard Zamor', pic: 'rz.jpg', affiliations: []},
      bs: {name: 'Bradley Stevenson', pic: 'bs.jpg', affiliations: []},
      ks: {name: 'Kristen Shelton', pic: 'ks.jpg', affiliations: []},
      wj: {name: 'Wolfgang Jentner', pic: 'wj.jpg', affiliations: ['Research Scientist', 'Data Institute for Societal Challenges', 'University of Oklahoma']},
      ab: {name: 'Aseel Basheer', pic: 'ab.jpg', affiliations: ['Research Associate & PhD Student', 'Data Institute for Societal Challenges', 'University of Oklahoma']},
      jr: {name: 'Juergen Richt', pic: 'jr.jpg', affiliations: []},
      kb: {name: 'Kyle Bohanan', pic: 'jr.jpg', affiliations: []},
      gs: {name: 'Gilson Sanchez', pic: 'gs.jpg', affiliations: []},
      gm: {name: 'George Moore', pic: 'gs.jpg', affiliations: []},
      lg: {name: 'Lawrence Glickman', pic: 'gs.jpg', affiliations: []},
      kc: {name: 'Karinne Cortes', pic: 'gs.jpg', affiliations: []},
      tm: {name: 'Tracy McNara', pic: 'gs.jpg', affiliations: []},
      gr: {name: 'Grace Rogers', pic: 'gs.jpg', affiliations: []},
      dk: {name: 'David Kendrick', pic: 'gs.jpg', affiliations: []},
      ew: {name: 'Eddie Withers', pic: 'gs.jpg', affiliations: []},
      kk: {name: 'Katrin Kuhn', pic: 'gs.jpg', affiliations: []},
      vt: {name: 'Velmurugan Thavasi', pic: 'gs.jpg', affiliations: []},
      cn: {name: 'Charles Nicholson', pic: 'gs.jpg', affiliations: []},
      lc: {name: 'Lan Chao', pic: 'gs.jpg', affiliations: []},
      dh: {name: 'Dean Hougen', pic: 'gs.jpg', affiliations: []},
      tr: {name: 'Talayeh Razzaghi', pic: 'gs.jpg', affiliations: []},
      kd: {name: 'Kara Deleon', pic: 'gs.jpg', affiliations: []},
    };

    return {
      t,
      airplane,
      train,
      bus,
      boat,
      location,
      car,
      bed,
      content,
      scrollToEl,
      scrollToTop,
      chevronUp,
      getScrollPos,
      showScrollTop,
      help,
      openMenu,
      menu,
      navs,
      screen,
      breakpoint,
      call,
      persons
    }
  }
});
</script>

<style scoped>
.vcc h2, .vcc h3 {
  margin-top: 15px;
}

.vcc h2:first-child  {
  margin-top: auto;
}

.back-to-top-btn {
  cursor: pointer;
    background: rgba(158, 158, 158, 0.5);
    position: fixed;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    
    right: 10px;
    transform: translateX(-50%);
    bottom: 35px;
    z-index: 999;
}

.nav-item {
  cursor:pointer;
}

.nav-item:hover {
  --ion-background-color: #d6d6d6 !important;
}

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

ion-toolbar {
  --background: #841617;
  --color: white;
}
</style>
