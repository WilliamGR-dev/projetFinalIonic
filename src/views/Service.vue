<template>
  <div class="firstPage justify-content-start h-75" >
    <div class="position-absolute p-3">
      <h1 class="fw-bold" style="color: #5006A3">ILLIMITÉ</h1>
      <h1 class="sloganService text-white fw-bold mt-3 mb-3">Passer en Premium<br>Soyez heureux</h1>
      <button class="btn btn-light rounded-pill text-white mt-4" style="background-color: #5006A3;border-color: #5006A3">OBTENEZ LE PREMIUM</button>
    </div>

    <img class="h-100" style="object-fit: cover;object-position: left bottom" src="assets/img/servicePage.png">
  </div>
  <div style="height: 100vh; margin-top: 10vh;" class="card-deck mb-3 text-center w-100 d-flex flex-row flex-wrap align-items-center justify-content-evenly">
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
        <td class="bg-info"><button class="btn btn-light w-75 rounded-pill button-service">ACHETER<br>MAINENANT</button></td>
        <td class="bg-pink"><button class="btn btn-light w-75 rounded-pill button-service">ACHETER<br>MAINENANT</button></td>
      </tr>

    </table>
  </div>
</template>

<script>
import { } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {


  }
});
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