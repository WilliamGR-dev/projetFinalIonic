<template>
  <section style="height: 100%;width: 100%;" class="d-flex flex-wrap">
    <section style="height: 100%;width: 100%;background-color: #051127" class="">
      <div class="h-100 p-3">
        <div class="h-100">
          <h1 class="text-white">Albums</h1>
          <h4 class="text-white">Pas juste un autre lundi maniaque.</h4>
          <hr>
          <div style="overflow-y: scroll;height: 55vh;" class="scroll">
            <div style="width: 100%;height: 60vh;" class="d-flex mt-3 mb-3 text-center flex-column align-items-center">
              <a href="artist" style="width: 225px;margin-left: 15px;margin-right: 15px">
                <div>
                  <img src="assets/img/artist.png">
                </div>
                <div class="text-white w-100 mt-3 fw-bold">Adele</div>
                <div class="text-white w-100 mt-3 ">20 Musiques</div>
              </a>
              <div style="width: 225px;margin-left: 15px;margin-right: 15px">
                <div>
                  <img src="assets/img/artist.png">
                </div>
                <div class="text-white w-100 mt-3 fw-bold">Adele</div>
                <div class="text-white w-100 mt-3 ">20 Musiques</div>
              </div>
              <div style="width: 225px;margin-left: 15px;margin-right: 15px">
                <div>
                  <img src="assets/img/artist.png">
                </div>
                <div class="text-white w-100 mt-3 fw-bold">Adele</div>
                <div class="text-white w-100 mt-3 ">20 Musiques</div>
              </div>
              <div style="width: 225px;margin-left: 15px;margin-right: 15px">
                <div>
                  <img src="assets/img/artist.png">
                </div>
                <div class="text-white w-100 mt-3 fw-bold">Adele</div>
                <div class="text-white w-100 mt-3 ">20 Musiques</div>
              </div>
              <div style="width: 225px;margin-left: 15px;margin-right: 15px">
                <div>
                  <img src="assets/img/artist.png">
                </div>
                <div class="text-white w-100 mt-3 fw-bold">Adele</div>
                <div class="text-white w-100 mt-3 ">20 Musiques</div>
              </div>
              <div style="width: 225px;margin-left: 15px;margin-right: 15px">
                <div>
                  <img src="assets/img/artist.png">
                </div>
                <div class="text-white w-100 mt-3 fw-bold">Adele</div>
                <div class="text-white w-100 mt-3 ">20 Musiques</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <player></player>
  </section>
</template>

<script>
import {  } from '@ionic/vue';
import { defineComponent } from 'vue';
import Player from "./Player";

export default defineComponent({
  name: 'HomeAuth',
  components: {
    Player,
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
