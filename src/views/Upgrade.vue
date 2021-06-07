<template>
  <div class="firstPage justify-content-start h-100" >
    <div class="position-absolute p-3">
      <h1 class="fw-bold" style="color: #5006A3">ILLIMITÉ</h1>
      <h1 class="sloganService text-white fw-bold mt-3 mb-3">Passer en Premium<br>Soyez heureux</h1>
      <a href="/plans" class="btn btn-light rounded-pill text-white mt-4" style="background-color: #5006A3;border-color: #5006A3">OBTENEZ LE PREMIUM</a>
    </div>

    <img class="h-100" style="object-fit: cover;object-position: -150px;bottom: 0" src="assets/img/servicePage.png">
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
