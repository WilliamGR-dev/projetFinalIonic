<template>
  <section class="d-flex justify-content-center align-items-center w-90 m-auto">
    <div class="w-100 d-flex flex-wrap align-items-center justify-content-center">
      <h1 class="slogan text-white">Actualités</h1>
      <div class="w-100 d-flex align-items-center flex-column">
        <div class="w-100 d-flex flex-column justify-content-between mt-5 mb-5" style="background-color: rgba(112,112,112,0.10)">
          <img v-if="onenew.url == null" class="w-100" src="https://picsum.photos/1000/1000">
          <img v-else class="w-100" :src="onenew.url">
          <div class="p-3 w-100 d-flex flex-column justify-content-around">
            <div class="d-flex w-100 justify-content-between mb-4">
              <h1 class="text-white">{{ onenew.title }}</h1>
              <span class="text-white">{{ onenew.date }}</span>
            </div>
            <div class="d-flex w-100 ">
                <h4 class="text-white" style="font-size: 18px">{{ onenew.full_text }}</h4></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import {mapGetters} from 'vuex'

export default {
    name: "New",
    data() {
        return {

        };
    },
    computed: {
        ...mapGetters(['onenew'])
    },
    methods: {

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
