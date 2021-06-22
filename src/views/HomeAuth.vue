<template>
  <section style="height: 100%;width: 100%;" class="d-flex flex-wrap">
    <section style="height: 100%;width: 100%;background-color: #051127" class="">
      <div class="h-100 p-3">
        <div class="h-100">
          <h1 class="text-white">Home</h1>
          <h4 class="text-white">Pas juste un autre lundi maniaque.</h4>
          <hr>
          <div style="overflow-x: scroll;height: 60vh" class="d-flex flex-column">
            <div style="width: 100%" class="text-center mt-4 mb-4">
              <div>
                <img src="assets/img/musicHit.png">
              </div>
              <div class="text-white w-100 mt-3">Succès cinghalais pop doux. Toutes les dernières chansons pop cinghalaises sont regroupées dans un seul album. Écoutez et appréciez!</div>
              <div class="text-white w-100 mt-3">258,598 LIKES</div>
            </div>
            <div style="width: 100%" class="text-center mt-4 mb-4">
              <div>
                <img src="assets/img/musicHit.png">
              </div>
              <div class="text-white w-100 mt-3">Succès cinghalais pop doux. Toutes les dernières chansons pop cinghalaises sont regroupées dans un seul album. Écoutez et appréciez!</div>
              <div class="text-white w-100 mt-3">258,598 LIKES</div>
            </div>
            <div style="width: 100%" class="text-center mt-4 mb-4">
              <div>
                <img src="assets/img/musicHit.png">
              </div>
              <div class="text-white w-100 mt-3">Succès cinghalais pop doux. Toutes les dernières chansons pop cinghalaises sont regroupées dans un seul album. Écoutez et appréciez!</div>
              <div class="text-white w-100 mt-3">258,598 LIKES</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <player></player>
  </section>
</template>


<script>
import {  } from 'vuex'

import Player from "./Player";
export default {
    name: "HomeAuth",
    data() {
        return {

        };
    },
    computed: {
    },
    components: {
        Player,
    },
    methods: {
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
