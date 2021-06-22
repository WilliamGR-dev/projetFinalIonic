<template>
  <section style="height: 100%;width: 100%;" class="d-flex flex-wrap">
    <section style="height: 100%;width: 100%;background-color: #051127" class="">
      <div class="h-100 p-3">
        <div class="h-100" style="height: 60vh;overflow: scroll">
          <div class="d-flex flex-column">
            <div class="" style="margin-left: 15px">
              <h1 class="text-white">Profile</h1>
              <hr>
              <div class="rounded pb-4" style="border: 2px solid #707070;width: 100%;margin-bottom: 100px;">
                <div  class="mb-5">
                  <div class="d-flex flex-column align-items-center" style="padding-top: 30px">
                    <div class="bg-info" style="width: 150px;height: 150px"></div>
                    <div class="text-white" ><h1>Prenom Nom</h1></div>
                  </div>
                  <div class="w-100 p-4 d-flex justify-content-center" style="background-color: #34465F;width: 100%;">
                    <a href="/subscribe" class="btn btn-light rounded-pill ">Abonnement</a>
                  </div>
                </div>
                <form class="d-flex flex-wrap w-100" @submit.prevent="modifyProfile(formModify)">
                  <div class="w-100 p-4 " style="padding: 0 100px 30px 0">
                    <label>Nom / Prenom</label>
                    <input class="form-control " name="name" v-model="formModify.name">
                  </div>
                  <div class="w-100 p-4 " style="padding: 0 100px 30px 0">
                    <label>Email</label>
                    <input class="form-control " name="email" v-model="formModify.email">
                  </div>
                  <div class="w-100 p-4 " style="padding: 0 100px 30px 0">
                    <label>Password</label>
                    <input class="form-control " name="password" v-model="formModify.password">
                  </div>
                  <div class="w-100 p-4 " style="padding: 0 100px 30px 0">
                    <label>Confirme Password</label>
                    <input class="form-control " name="confirmPassword" v-model="formModify.confirmPassword">
                  </div>
                    <input class="form-control " name="id" type="hidden" v-model="formModify.id">
                  <button class=" m-auto p-2 btn btn-outline-light border-0 rounded-pill  fw-bold " style="background: linear-gradient(to left, #1ED761, #1E64D7);color: black">Modifier</button>
                </form>
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
import { mapActions, mapGetters } from 'vuex'
import Player from "./Player";

export default {
    name: "Profile",
    data() {
        return {
            formModify: {}
        };
    },
    components: {
        Player,
    },
    computed: {
        ...mapGetters(['msg']),
        ...mapGetters(['user'])
    },
    methods: {
        ...mapActions(['modify']),
        modifyProfile(formModify){
            this.modify(formModify)
        }
    },
    mounted(){
        this.msg.success = ''
        this.msg.error = ''
        this.formModify.name = this.user.data.name
        this.formModify.email = this.user.data.email
        this.formModify.id = this.user.data.id
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
