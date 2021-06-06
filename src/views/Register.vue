<template>
  <section style="height: 100vh" class="d-flex justify-content-center align-items-center">
    <div class="card card-connexion position-absolute bg-transparent border-0">
      <div class="card-body" id="register">
        <h5 class="card-title text-center title-connexion text-white">Inscription</h5>
        <button class="form_select btn btn-primary button-unselect" name="login" onclick="showLogin()">Login</button>
        <button class="form_select btn btn-primary button-select" name="register" onclick="showRegister()">Register</button>
        <form action="{{ url('home') }}" method="post" class="d-flex flex-column">
          @csrf
          <input type="email" class="input mt-3" name="email" placeholder="Entrée votre email">
          <input type="password" class="input mt-3" name="password" placeholder="Entrée votre mot de passe">
          <button href="#" class="btn btn-primary w-50 m-auto mt-3">Inscription</button>
        </form>
      </div>
    </div>
    <img class="vh-100" style="object-fit: cover" src="assets/img/connexionPage.png">
  </section>
</template>

<script>
import {  } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {

  },
  methods: {

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