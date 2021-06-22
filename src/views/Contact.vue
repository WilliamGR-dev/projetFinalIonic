<template>
  <section class="d-flex flex-column w-90 m-auto text-center">
    <h1 class="slogan fw-bold text-white">Contact</h1>
    <div class="d-flex flex-column">
      <div class="w-100 d-flex flex-column p-5 pt-1">
        <div class="mb-4 w-100">
          <h3 class="mb-5">User Location</h3>
          <img class="w-100" src="assets/img/location.png">
        </div>
        <div class="mt-4 w-100">
          <h3 class="mb-4">Youzik Information</h3>
          <div class="card text-dark p-5" style="padding-left: 30px !important;padding-top: 30px !important;border-radius: 22px">
            <span>WebStart</span>
            <span>19 rue Yves Toudic</span>
            <span>75010 Paris</span>
            <span>France</span>
            <span>Tel : 01 42 41 97 76</span>
          </div>
        </div>
      </div>
      <div class="card bg-transparent border-0 w-100 p-5 pt-1">
        <div class="card-body p-0" id="login">
          <form @submit.prevent="sendMail(form)" method="post" class="d-flex flex-column">
            <input type="text" class="input" name="last_name" placeholder="PRENOM" v-model="form.first_name">
            <input type="text" class="input mt-3" name="first_name" placeholder="NOM" v-model="form.last_name">
            <input type="email" class="input mt-3" name="email" placeholder="EMAIL" v-model="form.email">
            <input type="text" class="input mt-3" name="object" placeholder="OBJECT" v-model="form.object">
            <textarea class="form-control text-area" style="background: rgba(255,255,255,0.09)" rows="7" name="message" placeholder="MESSAGE" v-model="form.message"></textarea>
            <button href="#" class="btn btn-primary w-100 m-auto p-3 rounded-pill mt-3 fw-bold" style="background: linear-gradient(300deg, #5500C9, #2b8bfa);border: none">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import {mapActions} from 'vuex'

export default {
    name: "Contact",
    data() {
        return {
            form: {}
        };
    },
    computed: {
    },
    methods: {
        ...mapActions(['sendContact']),
        sendMail(form){
            this.sendContact(form)
            this.form = {}
        },

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
