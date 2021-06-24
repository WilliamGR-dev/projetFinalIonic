<template>
  <div style="height: 100%; margin: 10vh 0;" class="card-decktext-center w-100 d-flex flex-row flex-wrap align-items-center justify-content-evenly p-4" >

    <div class="w-100 d-flex mb-4">
      <button class="btn btn-outline-light">Retour</button>
    </div>

    <table class="table table-borderless">
      <tr class="text-white">
        <td></td>
        <td class="bg-info">PERSONNEL</td>
        <td class="bg-pink">FAMILLE</td>
      </tr>
      <tr>
        <td class="text-white">50 millions de chansons et toute votre bibliothèque YouZik</td>
        <td class="bg-info">
          <i class="fas fa-check"></i>
        </td>
        <td class="bg-pink">
          <i class="fas fa-check"></i>

        </td>
      </tr>
      <tr>
        <td class="text-white">Écoutez en ligne ou hors-ligne</td>
        <td class="bg-info"><i class="fas fa-check"></i></td>
        <td class="bg-pink"><i class="fas fa-check"></i></td>
      </tr>
      <tr>
        <td class="text-white">Ecouter de la musique et des vidéos musicales sans publicité</td>
        <td class="bg-info"><i class="fas fa-check"></i></td>
        <td class="bg-pink"><i class="fas fa-check"></i></td>
      </tr>
      <tr>
        <td class="text-white">Téléchargez des chansons dans votre bibliothèque</td>
        <td class="bg-info"><i class="fas fa-check"></i></td>
        <td class="bg-pink"><i class="fas fa-check"></i></td>
      </tr>
      <tr>
        <td class="text-white">Accès sur vos appareils</td>
        <td class="bg-info"><i class="fas fa-check"></i></td>
        <td class="bg-pink"><i class="fas fa-check"></i></td>
      </tr>
      <tr>
        <td class="text-white">Voyez ce que vos amis écoutent</td>
        <td class="bg-info"><i class="fas fa-check"></i></td>
        <td class="bg-pink"><i class="fas fa-check"></i></td>
      </tr>
      <tr>
        <td class="text-white">Spectacles originaux, concerts et exclusivités</td>
        <td class="bg-info"><i class="fas fa-check"></i></td>
        <td class="bg-pink"><i class="fas fa-check"></i></td>
      </tr>
      <tr>
        <td class="text-white">Émissions de radio Beats 1 en direct et en ligne</td>
        <td class="bg-info"><i class="fas fa-check"></i></td>
        <td class="bg-pink"><i class="fas fa-check"></i></td>
      </tr>
      <tr>
        <td class="text-white">Accédez à jusqu'à six personnes</td>
        <td class="bg-info"><i class="fas fa-check"></i></td>
        <td class="bg-pink"><i class="fas fa-check"></i></td>
      </tr>
      <tr>
        <td class="text-white">Un compte personnel à chaque membre de la famille</td>
        <td class="bg-info"><i class="fas fa-check"></i></td>
        <td class="bg-pink"><i class="fas fa-check"></i></td>
      </tr>
      <tr>
        <td class="text-white">Partager ce que vous voulez, quand vous voulez - ou pas du tout</td>
        <td class="bg-info"><i class="fas fa-check"></i></td>
        <td class="bg-pink"><i class="fas fa-check"></i></td>
      </tr>
      <tr>
        <td class="text-white">Partage des achats de musique YouZik</td>
        <td class="bg-info"><i class="fas fa-check"></i></td>
        <td class="bg-pink"><i class="fas fa-check"></i></td>
      </tr>
      <tr>
        <td class="text-white"></td>
        <td class="bg-info">4,99€/mois</td>
        <td class="bg-pink">9,99€/mois</td>
      </tr>
      <tr>
        <td class="text-white"></td>
        <td class="bg-info"><a @click.prevent="displayCgu('price_1J2H1vGsegk9YRQoKXhtXvqW')" class="btn btn-light w-75 rounded-pill button-service">ACHETER<br>MAINENANT</a></td>
        <td class="bg-pink"><a @click.prevent="displayCgu('price_1J2H2ZGsegk9YRQooblJfbxa')" class="btn btn-light w-75 rounded-pill button-service">ACHETER<br>MAINENANT</a></td>
      </tr>

    </table>

  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: "Plans",
    data() {
        return {

        };
    },
    computed: {

    },
    methods: {
        ...mapActions(['showCgu']),
        displayCgu(id){
            this.showCgu(id)
        }
    },
    components: {

    },
    mounted(){
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
