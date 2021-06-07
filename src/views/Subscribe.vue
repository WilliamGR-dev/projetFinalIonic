²<template>
  <section style="height: 100vh;width: 100%;" class="d-flex flex-wrap">
    <section style="height: 100vh;width: 100%" class="">
      <div class="h-100 p-4">
        <div class="h-100 scroll">
          <h1 class="text-white">Dashboard</h1>
          <hr>
          <h3 class="text-white">Abonnement</h3>
          <div>
            <div class="w-100 border" style="border-radius: 15px">
              <div class="w-100 bg-dark p-4"  style="border-top-left-radius: 15px;border-top-right-radius: 15px">Abonnement</div>
              <div class="d-flex flex-column">
                <div class="w-100 d-flex flex-wrap p-4 flex-column" style="margin: 10px 10px 10px 10px;">
                  <div class="w-100">
                    <div class="mb-4">Debut d'abonnement</div>
                    <div class="mb-4">Fin d'abonnement</div>
                    <div class="mb-4">Type d'abonnement</div>
                    <div class="mb-4">Renouvelement</div>
                  </div>
                  <div class="w-100">
                    <div>Abonement</div>
                    <div class="w-100 rounded d-flex flex-column justify-content-center align-items-center mb-4" style="background: linear-gradient(to left, #1E64D7, #1ED761);">
                      <h5 class="text-white" style=" padding: 30px 30px 0 30px">PERSONNEL</h5>
                      <h5 class="text-white" style=" padding: 0 30px 30px 30px">4,99€/mois</h5>
                    </div>
                  </div>
                  <div class="w-100 d-flex flex-column">
                    <button class="text-white fw-bold btn btn-light bg-transparent m-4">Annuler</button>
                    <button class="text-white fw-bold btn btn-light bg-transparent m-4">Mettre en pause</button>
                  </div>
                </div>
                <div class="w-100 p-4">
                  <div>
                    <div>Le prochain abonnement sera
                      renouveler?</div>
                    <div>
                      <input class="form-check" type="checkbox">
                      <div>Oui</div>
                    </div>
                    <div>
                      <input class="form-check" type="checkbox">
                      <div>Non</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button  class="btn btn-light border-0 rounded-pill mt-3 w-100 p-3 fw-bold text-white mb-4" style="background: linear-gradient(to left, #1E64D7, #1ED761);">Enregistrer</button>
          </div>
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
