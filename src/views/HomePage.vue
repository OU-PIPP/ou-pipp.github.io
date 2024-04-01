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

          <ion-title class="title" @click="scrollToTop()">Predictive Intelligence for Pandemic Prevention (PIPP) | Phase 1</ion-title>

          <ion-buttons slot="primary" v-if="screen.width >= breakpoint">
            <template v-for="n in navs" :key="n.goto">
              <ion-button @click="scrollToEl(n.goto)">
                {{ n.text }}
                <!-- <ion-icon slot="start" :icon="n.icon"></ion-icon> -->
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
                <ion-row class="ion-justify-content-center">

                  <PersonCard :person="persons.de" role='PI' />
                  <PersonCard :person="persons.tv" role='Co-PI' />
                  <PersonCard :person="persons.jv" role='Co-PI' />
                  <PersonCard :person="persons.aw" role='Co-PI' />
                  <PersonCard :person="persons.mw" role='Co-PI' />

                </ion-row>

                <ion-row class="ion-justify-content-center">

                  <PersonCard :person="persons.mk" role='Project Management' />
                  <PersonCard :person="persons.yt" role='Financials and Administration' />

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
                <img style="width:80%;" :src="'/assets/dashboard.png'" />
              </a>
            </div>

              <p>
                The dashboard visualizes the integrated data sources in a spatio-temporal manner.
                The user can select regions such as counties and states, explore the data, and compare them to each other.
                The time of all charts is linked such that selecting a specific time in a chart will highlight the respective times in the other data sources.
                The map can be animated to understand better how certain signals spread spatially over time.
                The data sources include data from the CDC, climate, symptoms searched in Google search, and animal and human pathogens detected in river and wastewater streams. 
              </p>
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
                The transmission cycles of many pathogens interact with environmental factors, including climate, water, and land use. These relationships include direct effects on the pathogen as well as indirect effects on vectors and hosts. For example, influenza and other upper respiratory viruses are sensitive to weather conditions that influence virus persistence in the environment and host behavior and contact rates. Other infectious diseases, such as gastrointestinal pathogens and vector-borne infections, are influenced by extreme weather events such as localized flooding and heat waves. Understanding the ecological niches of hosts, vectors, and pathogens can support the prediction of potential transmission hotspots on the landscape and prioritization of resources for disease surveillance and control. Environmental reservoirs, such as water and soil, can also be directly sampled to detect the presence of pathogens.
              </p>

              <p>
                The goal of the environmental surveillance team is to collect environmental measurements that can be integrated with data on pathogens, vectors, and hosts and develop predictive models and identify transmission hotspots for specific diseases. We have built a database of environmental variables obtained from multiple sources, including Oklahoma Mesonet ground-based weather stations, GridMET meteorological grids, and satellite Earth observations. We have also prototyped a system for watershed monitoring that involves testing river water samples for human and animal pathogens throughout Oklahoma. These data have been incorporated into the PIPP dashboard and are being used to analyze the relationships between meteorological variables and COVID-19 outbreaks.
              </p>

              <ion-grid>
                <ion-row class="ion-justify-content-center">
                  <PersonCard :person="persons.mw" role='Team Lead / Co-PI' />
                  <PersonCard :person="persons.ks" />
                  <PersonCard :person="persons.bs" />
                  <PersonCard :person="persons.jv" role='Co-PI' />
                </ion-row>
                <ion-row class="ion-justify-content-center">
                  <PersonCard :person="persons.ay" />
                  <PersonCard :person="persons.rz" />
                  <PersonCard :person="persons.wj" role='Coordination' />
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
                The Animal Surveillance team will work with veterinarians and other entities to utilize animal/zoonotic infectious disease data as a potential indicator for human infectious disease outbreaks. This team is also working in conjunction with other project teams to improve the detection and utilization of animal/zoonotic pathogens in wastewater and environmental samples for determining or predicting potential human infectious disease outbreaks.
              </p>

              <ion-grid>
                <ion-row class="ion-justify-content-center">
                  <PersonCard :person="persons.jr" role='Team Co-Lead' />
                  <PersonCard :person="persons.jv" role='Team Co-Lead / Co-PI' />
                  <PersonCard :person="persons.ab" />
                  <PersonCard :person="persons.de" />
                  <PersonCard :person="persons.gm" />
                </ion-row>

                <ion-row class="ion-justify-content-center">
                  <PersonCard :person="persons.gs" />
                  <PersonCard :person="persons.ks" />
                  <PersonCard :person="persons.ay" />
                  <PersonCard :person="persons.rz" />
                </ion-row>

                <ion-row class="ion-justify-content-center">
                  <PersonCard :person="persons.ng" />
                  <PersonCard :person="persons.jt" />
                  <PersonCard :person="persons.if" />
                  <PersonCard :person="persons.wj" role='Coordination' />
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
                Human health accompanies environmental health and animal health as the three pillars of One Health.
                Our project has a unique combination of data sources: waste-water analysis for animal and human pathogens, breathomics analyzing human breath, and data from animal-human transmission studies.
                Sentinel and syndromic approaches are two design aspects to improve early detection of emerging pathogens. 
                One of the primary challenges of these surveillance systems' ability to detect early disease emergence is that they are rare events.
                To address this challenge, we have a multidisciplinary team of experts, representing data science, systems engineering, computer science, as well as health, epidemiology, and bioinformatics. 
                Our approach is to expand the number of data sources used for disease surveillance and combine them to produce information that can be reviewed and analyzed by both machine learning and human experts.
              </p>

              <ion-grid>
                <ion-row class="ion-justify-content-center">
                  <PersonCard :person="persons.aw" role='Team Lead / Co-PI' />
                  <PersonCard :person="persons.ab" />
                  <PersonCard :person="persons.dk" />
                  <PersonCard :person="persons.kk" />
                </ion-row>

                <ion-row class="ion-justify-content-center">
                  <PersonCard :person="persons.cn" />
                  <PersonCard :person="persons.vt" />
                  <PersonCard :person="persons.tv" role='Co-PI' />
                  <PersonCard :person="persons.wj" role='Coordination' />
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>

          

          <ion-card id="novel-technologies">
            <ion-card-header>
              <ion-card-title>
                Novel Technologies: Breathomics &amp; Wastewater-based Epidemiology
              </ion-card-title>
            </ion-card-header>

            <ion-card-content class="vcc">
              <p>
                Pioneers innovative approaches for early detection and surveillance of emerging pathogens, crucial for preemptive public health responses. By harnessing breath analysis and wastewater-based epidemiology, this initiative aims to bridge the gap between traditional surveillance methods and real-time, integrated data management, enabling swift and effective action against potential pandemics. Through collaborative efforts across five specialized teams, this project endeavors to establish a national roadmap for proactive disease detection, emphasizing the vital role of technology in safeguarding public health on a global scale.
              </p>

              <ion-grid>
                <ion-row class="ion-justify-content-center">
                  <PersonCard :person="persons.tv" role='Team Co-Lead / Co-PI' />
                  <PersonCard :person="persons.jv" role='Team Co-Lead / Co-PI' />
                  <PersonCard :person="persons.de" role='PI' />
                  <PersonCard :person="persons.kk" />
                  <PersonCard :person="persons.dh" />
                </ion-row>

                <ion-row class="ion-justify-content-center">
                  
                  
                  
                  <PersonCard :person="persons.gs" />
                  <PersonCard :person="persons.ks" />
                  <PersonCard :person="persons.bs" />
                  <PersonCard :person="persons.vt" />
                  <PersonCard :person="persons.wj" role='Coordination' />
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
                The team focuses on advancing decision-making processes and analytical frameworks across multiple scales to enhance pandemic response strategies. It integrates all data sources in a single database, checks the data for quality issues, and develops machine learning models for prediction and event detection. Furthermore, the team designs a dashboard where domain experts and model experts can explore all data. This initiative aims to provide decision-makers with timely, comprehensive insights for proactive intervention. Through a multidisciplinary approach, this project seeks to optimize resource allocation, risk assessment, and mitigation efforts, ultimately strengthening the resilience of healthcare systems and communities in the face of complex health challenges.
              </p>

              <ion-grid>
                <ion-row class="ion-justify-content-center">
                  <PersonCard :person="persons.de" role='Team Lead / PI' />
                  <PersonCard :person="persons.ab" />
                  <PersonCard :person="persons.dh" />
                  <PersonCard :person="persons.kk" />
                  <PersonCard :person="persons.cl" />
                </ion-row>

                <ion-row class="ion-justify-content-center">
                  <PersonCard :person="persons.cn" />
                  <PersonCard :person="persons.tr" />
                  <PersonCard :person="persons.aw" role='Co-PI' />
                  <PersonCard :person="persons.mw" />
                  <PersonCard :person="persons.wj" role='Coordination' />
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
                <li>David S. Ebert and Aaron M. Wendelboe (2023), "Applying data science advances in disease surveillance and control", Open Access Government July 2023, pp.152-153. doi: <a href="https://doi.org/10.56367/OAG-039-10899">10.56367/OAG-039-10899</a></li>
                <li>Katrin G. Kuhn, Jason R. Vogel and Bradley S. Stevenson (2023), "Wastewater surveillance for infectious disease preparedness", Open Access Government October 2023, pp.22-23. doi: <a href="https://doi.org/10.56367/OAG-040-10923">10.56367/OAG-040-10923</a></li>
                <li>Zhunan Jia, Velmurugan Thavasi, Thirumalai Venkatesan, Pyng LeeBreath (2023), "Analysis for Lung Cancer Early Detection - A Clinical Study", Metabolites 2023, 13, 1197. doi: <a href="https://doi.org/10.3390/metabo13121197">10.3390/metabo13121197</a></li>
                <li>Thirumalai Venkatesan, Velmurugan Thavasi, Jordan P. Metcalf, Donna L Tyungu, Aaron M. Wendelboe, David Ebert, Ong Weiqiang, Zhang Fuchang, Jia Zhunan (2024), "Revolutionising disease detection: The emergence of non-invasive VOC breathomics", Open Access Government January 2024, pp.74-75. doi: <a href="https://doi.org/10.56367/OAG-041-10923">10.56367/OAG-041-10923</a></li>
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
                <li>
                  <h2><a href="https://vis4pandemres.github.io/">IEEE VIS Workshop on Visualization for Pandemic and Emergency Responses 2023 (Vis4PandEmRes)</a></h2>
                  <p>Half-day workshop at <a href="https://ieeevis.org/year/2023/welcome">IEEE VIS</a>, Melbourne, Australia, 22-27 October Workshop date: October 22, 2023</p>
                </li>

                <li>
                  <h2>OU Predictive Intelligence for Pandemic Prevention Phase I Workshop</h2>
                  <p>Full-day workshop at the University of Oklahoma, November 8, 2023</p>
                </li>
                
                <li>
                  <h2><a href="https://hicsspandemic.github.io/">Symposium on Novel Data, Analytics, Predictive Intelligence, and Decision-Making for Pandemics and Emerging Diseases</a></h2>
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

<script setup lang="ts">
import { IonGrid, IonRow, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenu, IonPage, IonTitle, IonToolbar, menuController } from '@ionic/vue';
import { chevronUp, menu } from 'ionicons/icons';
import { useScreen } from 'vue-screen';
import { ref } from 'vue';
import PersonCard from '@/components/PersonCard.vue'

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
    text: 'Novel Technologies: Breathomics & Wastewater-based Epidemiology',
    goto: 'novel-technologies'
  },
  {
    text: 'Multiscale Descision-Making and Analytics',
    goto: 'analytics'
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
  de: {name: 'David Ebert', pic: 'de.jpg', affiliations: ['Gallogly Chair Professor of ECE and CS', 'Associate Vice President of Research and Partnerships', 'Director, Data Institute for Societal Challenges (DISC)', 'University of Oklahoma']},
  tv: {name: 'Thirumalai Venkatesan', pic: 'tv.jpg', affiliations: ['Professor, FRS, FNAI, FSNAS, FAPS, FMRS, FWIF, FAAIA, AAPAM', 'Director, Center for Quantum Research and Technology (CQRT)', 'Founding Director, Center of Optimal Materials for Emerging Technologies (COMET)', 'Departments of Physics and ECE', 'University of Oklahoma']},
  jv: {name: 'Jason Vogel', pic: 'jv.jpg', affiliations: ['Professor, Civil Engineering and Environmental Science', 'Director, Oklahoma Water Survey', 'Associate Director, Water Technologies for Emerging Regions (WaTER) Center', 'University of Oklahoma']},
  aw: {name: 'Aaron Wendelboe', pic: 'aw.jpg', affiliations: ['Professor, Epidemiology', 'Edward E. and Helen T. Bartlett Chair in Public Health', 'Williams Companies Foundation Presidential Professor', 'Department of Biostatistics and Epidemiology', 'The University of Oklahoma Health Sciences Center']},
  mw: {name: 'Michael Wimberly', pic: 'mw.jpg', affiliations: ['Professor', 'Department of Geography and Environmental Sustainability', 'University of Oklahoma']},
  ay: {name: 'Anni Yang', pic: 'ay.jpg', affiliations: ['Assistant Professor', 'Department of Geography and Environmental Sustainability', 'University of Oklahoma']},
  rz: {name: 'Richard Zamor', pic: null, affiliations: ['Research Scientist', 'Oklahoma Water Survey', 'University of Oklahoma']},
  bs: {name: 'Bradley Stevenson', pic: 'bs.jpg', affiliations: ['Associate Professor, Microbiology', 'School of Biological Sciences', 'University of Oklahoma']},
  ks: {name: 'Kristen Shelton', pic: null, affiliations: ['Research Scientist', 'Oklahoma Water Survey', 'University of Oklahoma']},
  wj: {name: 'Wolfgang Jentner', pic: 'wj.jpg', affiliations: ['Research Scientist', 'Data Institute for Societal Challenges', 'University of Oklahoma']},
  ab: {name: 'Aseel Basheer', pic: 'ab.jpg', affiliations: ['Research Assistant & PhD Candidate', 'Data Institute for Societal Challenges', 'University of Oklahoma']},
  jr: {name: 'Juergen Richt', pic: 'jr.jpg', affiliations: ['Regents Distinguished Professor & KBA Eminent Scholar', 'College of Veterinary Medicine', 'Director, Center of Excellence for Emerging and Zoonotic Animal Diseases (CEEZAD)', 'Director, NIH COBRE Center on Emerging and Zoonotic Infectious Diseases (CEZID)', 'Kansas State University']},
  kb: {name: 'Kyle Bohanan', pic: null, affiliations: null},
  gs: {name: 'Gilson Sanchez', pic: null, affiliations: ['Postdoctoral Fellow', 'Oklahoma Water Survey', 'University of Oklahoma']},
  gm: {name: 'George Moore', pic: 'gm.jpg', affiliations: ['Professor, Epidemiology', 'Department of Veterinary Administration', 'Purdue University']},
  lg: {name: 'Lawrence Glickman', pic: null, affiliations: null},
  kc: {name: 'Karinne Cortes', pic: null, affiliations: null},
  tm: {name: 'Tracy McNara', pic: null, affiliations: null},
  gr: {name: 'Grace Rogers', pic: null, affiliations: null},
  dk: {name: 'David Kendrick', pic: 'dk.jpg', affiliations: ['PI and CEO - MyHealth Access Network', 'Chair of the Board for the National Committee for Quality Assurance (NCQA)', 'Board member for Strategic Health Information Exchange Collaborative (SHIEC)', 'Chair, Department of Medical Informatics, University of Oklahoma']},
  ew: {name: 'Eddie Withers', pic: null, affiliations: null},
  kk: {name: 'Katrin Kuhn', pic: 'kk.jpg', affiliations: ['Assistant Professor', 'Department of Biostatistics and Epidemiology', 'The University of Oklahoma Health Sciences Center']},
  vt: {name: 'Velmurugan Thavasi', pic: 'vt.jpg', affiliations: ['Managing Director', 'Center for Quantum Research and Technology (CQRT)', 'University of Oklahoma']},
  cn: {name: 'Charles Nicholson', pic: 'cn.jpg', affiliations: ['Associate Professor', 'Department of Industrial and Systems Engineering', 'Department of Data Science and Analytics', 'University of Oklahoma']},
  cl: {name: 'Chao Lan', pic: 'cl.png', affiliations: ['Assistant Professor', 'School of Computer Science', 'University of Oklahoma']},
  dh: {name: 'Dean Hougen', pic: 'dh.png', affiliations: ['Associate Professor', 'Lloyd & Joyce Austin Presidential Professor', 'CS Interim Director', 'School of Computer Science', 'University of Oklahoma']},
  tr: {name: 'Talayeh Razzaghi', pic: 'tr.png', affiliations: ['Assistant Professor', 'School of Industrial and Systems Engineering', 'University of Oklahoma']},
  kd: {name: 'Kara Deleon', pic: null, affiliations: null},
  ng: {name: 'Natasha Gaudreault', pic: 'ng.jpg', affiliations: ['Research Assistant Professor', 'College of Veterinary Medicine', 'Kansas State University']},
  jt: {name: 'Jessie Trujillo', pic: 'jt.jpg', affiliations: ['Senior Research Associate', 'College of Veterinary Medicine', 'Kansas State University']},
  if: {name: 'Isaac Fritz', pic: 'if.jpg', affiliations: ['Research Assistant', 'College of Veterinary Medicine', 'Kansas State University']},
  mk: {name: 'Marcie King', pic: 'mk.jpg', affiliations: ['Program Manager', 'Data Institute for Societal Challenges', 'University of Oklahoma']},
  yt: {name: 'Yessenia Torres', pic: 'yt.png', affiliations: ['Senior Managing Director', 'Data Institute for Societal Challenges', 'University of Oklahoma']},
};
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
