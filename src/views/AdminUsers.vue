<template>
  <section style="height: 100vh;width: 100%;" class="d-flex flex-wrap">
    <section style="height: 100vh;width: 100%" class="">
      <div class="h-100 p-4">
        <div class="h-100 scroll">
          <h1 class="text-white">Utilisateurs</h1>
          <hr>
          <div>
            <h3>Ajouter un utilisateurs</h3>
            <button class="btn btn-light">Ajouter</button>
          </div>
          <table class="w-90 table table-striped table-light table-hover" style="margin-top: 50px">
            <thead>
            <tr>
              <td>NOM</td>
              <td>PRENOM</td>
              <td>EMAIL</td>
              <td>IS ADMIN</td>
              <td>CREATED AT</td>
              <td>ACTIONS</td>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>William</td>
              <td>William</td>
              <td>William@gmail.com</td>
              <td>Admin</td>
              <td>30/05/2021</td>
              <td>
                <div class="d-flex flex-row">
                  <div style="margin: 0 10px"><a>Modifier</a></div>
                  <div style="margin: 0 10px"><a>Supprimer</a></div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'adminusers',
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
