<template>
  <section style="height: 100vh" class="d-flex justify-content-center align-items-center">
    <div class="card card-connexion position-absolute bg-transparent border-0">
      <div class="card-body" id="register">
        <h5 class="card-title text-center title-connexion text-white">Inscription</h5>
        <a class="form_select btn btn-primary button-unselect" name="login" href="/connexion">Login</a>
        <a class="form_select btn btn-primary button-select" name="register" href="/register">Register</a>
        <form @submit.prevent="registerUser(form)" method="post" class="d-flex flex-column">
          <input type="name" class="input mt-3" name="name" placeholder="Entrée votre Nom Prenom" v-model="form.name">
          <input type="email" class="input mt-3" name="email" placeholder="Entrée votre email" v-model="form.email">
          <input type="password" class="input mt-3" name="password" placeholder="Entrée votre mot de passe" v-model="form.password">
          <button href="#" class="btn btn-primary w-50 m-auto mt-3">Inscription</button>
        </form>
      </div>
    </div>
    <img class="vh-100" style="object-fit: cover" src="assets/img/connexionPage.png">
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "Register",
    data() {
        return {
            form: {}
        };
    },
    computed: {
        ...mapGetters(['msg'])
    },
    methods: {
        ...mapActions(['register']),
        registerUser(form){
            this.register(form)
        },
        async presentToastError() {
            const toast = document.createElement('ion-toast');
            toast.message = this.msg.error;
            toast.duration = 2000;

            document.body.appendChild(toast);
            return toast.present();
        }
    },
    mounted(){
        if (this.msg.success != ''){
           console.log( this.msg.success)
        }
        if (this.msg.error != ''){
            this.presentToastError()
        }
        this.msg.success = ''
        this.msg.error = ''
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
