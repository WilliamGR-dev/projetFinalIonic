<template>
  <section style="height: 100vh;width: 100%;" class="d-flex flex-wrap">
    <section style="height: 100vh;width: 100%" class="">
      <div class="h-100 p-4">
        <div class="h-100 scroll">
            <h1 class="text-white">Dashboard</h1>
            <hr>
            <h3 class="text-white">Utilisateurs</h3>
            <form class="w-90">
                <div style="margin-bottom: 20px">
                    <label>Prenom</label>
                    <input class="form-control">
                </div>
                <div style="margin-bottom: 20px">
                    <label>nom</label>
                    <input class="form-control">
                </div>
                <div style="margin-bottom: 20px">
                    <label>email</label>
                    <input class="form-control">
                </div>
                <div style="margin-bottom: 20px">
                    <label>password</label>
                    <input class="form-control">
                </div>
                <div style="margin-bottom: 20px">
                    <label>password</label>
                    <input class="form-control">
                </div>
                <button class="btn btn-light rounded-pill" style="margin-right: 10px">Annuler</button>
                <button class="btn btn-light rounded-pill" style="margin-left: 10px">Enregistrer</button>
            </form>
        </div>
      </div>
    </section>
  </section>
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
