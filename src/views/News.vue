<template>
  <section class="d-flex justify-content-center align-items-center w-90 m-auto">
    <div class="w-100 d-flex flex-wrap align-items-center justify-content-center">
        <h1 class="slogan text-white">Actualités</h1>
        <ion-list>
            <ion-item v-for="actu in news"  v-bind:key="actu.id">
                <div class="w-100 d-flex align-items-center flex-column">
                    <div class="w-75 d-flex flex-column justify-content-between mt-5 mb-5" style="background-color: rgba(112,112,112,0.2)">
                        <img v-if="actu.url == null" class="w-100" src="https://picsum.photos/1000/1000">
                        <img v-else class="w-100" :src="actu.url">
                        <div class="p-3 w-100 d-flex flex-column justify-content-around">
                            <div class="d-flex w-100 justify-content-between ">
                                <h1 class="text-white">{{ actu.title }}</h1>
                                <span class="text-white">{{ actu.date }}</span>
                            </div>
                            <div class="d-flex w-100 ">
                                <h4 class="text-white">{{ actu.text_description }}</h4>
                            </div>
                            <div class="d-flex w-100 justify-content-end">
                                <a @click.prevent="showNew(actu.id)" class="btn btn-info rounded-pill fw-bold" style="background: linear-gradient(to left, #1E64D7, #1ED761);">En savoir plus</a>
                            </div>
                        </div>
                    </div>
                </div>
            </ion-item>
        </ion-list>
        <ion-infinite-scroll
            @ionInfinite="loadData($event)"
            threshold="100px"
            id="infinite-scroll"
            :disabled="isDisabled"
        >
            <ion-infinite-scroll-content
                loading-spinner="bubbles"
                loading-text="Loading more data...">
            </ion-infinite-scroll-content>
        </ion-infinite-scroll>
    </div>
  </section>
</template>


<script>
import { IonInfiniteScroll,  IonInfiniteScrollContent, IonItem, IonList } from '@ionic/vue'
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "News",
    data() {
        return {

        };
    },
    computed: {
        ...mapGetters(['news'])
    },
    methods: {
        ...mapActions(['getAllNews']),
        ...mapActions(['getNew']),
        callGetNews(){
            this.getAllNews()
        },
        showNew(id){
            this.getNew(id)
        }
    },
    components: {
        IonInfiniteScroll,
        IonInfiniteScrollContent,
        IonItem,
        IonList,
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
