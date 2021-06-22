<template>
  <div class=" h-100">
    <div class="position-absolute text-center d-flex ion-justify-content-evenly ion-align-items-center flex-column h-75">
      <h1 class="slogan text-white fw-bold">Écouter,<br> ça change tout</h1>
      <span class="text-center text-white">Des millions de titres et de podcasts. Aucune carte de crédit nécessaire.</span>
    </div>
    <ion-img src="assets/img/landingPage.png" style="height: 80vh;object-fit: cover;" ></ion-img>
    <div class="services" style="margin-top: 20px">
      <div class="w-100 d-flex justify-content-center align-content-center flex-column">
        <div class="w-100 d-flex justify-content-center">
          <img src="assets/img/phone.png">
        </div>
        <div class="w-100 ion-text-center">
          <div><h1>YouZik, c'est quoi ?</h1></div>
          <div class="d-flex w-100 flex-wrap">
            <div class="m-auto w-100 ml-0 p-3">
              YouZik, c'est quoi ?<br><br>
              Parmi 73 millions de titres, retrouvez de vieilles connaissances et laissez-vous séduire par de nouveaux coups de cœur.
            </div>
            <div class="m-auto w-100 ml-0 p-3">
              YouZik, c'est quoi ?<br><br>
              Parmi 73 millions de titres, retrouvez de vieilles connaissances et laissez-vous séduire par de nouveaux coups de cœur.
            </div>
            <div class="m-auto w-100 ml-0 p-3">
              YouZik, c'est quoi ?<br><br>
              Parmi 73 millions de titres, retrouvez de vieilles connaissances et laissez-vous séduire par de nouveaux coups de cœur.
            </div>
            <div class="m-auto w-100 ml-0 p-3">
              YouZik, c'est quoi ?<br><br>
              Parmi 73 millions de titres, retrouvez de vieilles connaissances et laissez-vous séduire par de nouveaux coups de cœur.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sectionNews ion-text-center">
      <h2>Actualité</h2>
      <div class="news">
        <div class="card text-dark" v-for="actu in news.data"  v-bind:key="actu.id" style="width: 75%;margin: auto;margin-top: 50px;margin-bottom: 50px;" >
          <img  src="https://picsum.photos/1000/1000" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ actu.title }}</h5>
            <p class="card-text">{{ actu.text_description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "Home",
    data() {
        return {

        };
    },
    computed: {
        ...mapGetters(['news'])
    },
    methods: {
        ...mapActions(['getNews']),
        callGetNews(){
            this.getNews()
        }
    },
    components:{

    },
    mounted(){
        this.callGetNews()
    }
}
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
