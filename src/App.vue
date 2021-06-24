<template>
  <ion-app>
    <ion-menu side="start" content-id="main-content">
      <ion-header>
        <ion-toolbar translucent>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
          <ion-list v-if="!user.token" >
          <ion-item>
            <ion-icon name="mail" slot="start"></ion-icon>
            <ion-router-link href="">Home</ion-router-link>
          </ion-item>
          <ion-item>
            <ion-icon name="paper-plane" slot="start"></ion-icon>
            <ion-router-link href="/service">Services</ion-router-link>
          </ion-item>
          <ion-item>
            <ion-icon name="heart" slot="start"></ion-icon>
            <ion-router-link href="/news">News</ion-router-link>
          </ion-item>
          <ion-item>
            <ion-icon name="archive" slot="start"></ion-icon>
            <ion-router-link @click.prevent="showLogin">Connexion</ion-router-link>
          </ion-item>
          <ion-item>
            <ion-icon name="trash" slot="start"></ion-icon>
            <ion-router-link href="/register">Register</ion-router-link>
          </ion-item>
          <ion-item>
            <ion-icon name="warning" slot="start"></ion-icon>
            <ion-router-link href="/contact">Contact</ion-router-link>
          </ion-item>
        </ion-list>
          <ion-list v-if="user.token" >
              <ion-item>
                  <ion-icon name="mail" slot="start"></ion-icon>
                  <ion-router-link @click.prevent="showHomeAuth">Home</ion-router-link>
              </ion-item>
              <ion-item>
                  <ion-icon name="paper-plane" slot="start"></ion-icon>
                  <ion-router-link @click.prevent="showArtistes">Artistes</ion-router-link>
              </ion-item>
              <ion-item>
                  <ion-icon name="paper-plane" slot="start"></ion-icon>
                  <ion-router-link @click.prevent="showAlbums">Albums</ion-router-link>
              </ion-item>
              <ion-item>
                  <ion-icon name="paper-plane" slot="start"></ion-icon>
                  <ion-router-link @click.prevent="showPlaylists">Playlists</ion-router-link>
              </ion-item>
              <ion-item>
                  <ion-icon name="heart" slot="start"></ion-icon>
                  <ion-router-link @click.prevent="showRecentlyPlayed">Recently Played</ion-router-link>
              </ion-item>
              <ion-item>
                  <ion-icon name="archive" slot="start"></ion-icon>
                  <ion-router-link @click.prevent="showLiked">Liked</ion-router-link>
              </ion-item>
              <ion-item v-if="user.data.subscribeNow == false">
                  <ion-icon name="trash" slot="start"></ion-icon>
                  <ion-router-link @click.prevent="showUpgrade">Upgrade</ion-router-link>
              </ion-item>
              <ion-item>
                  <ion-icon name="trash" slot="start"></ion-icon>
                  <ion-router-link @click.prevent="showSearch">Search</ion-router-link>
              </ion-item>
              <ion-item>
                  <ion-icon name="warning" slot="start"></ion-icon>
                  <ion-router-link @click.prevent="showProfile">Profile</ion-router-link>
              </ion-item>
              <ion-item>
                  <ion-icon name="warning" slot="start"></ion-icon>
                  <ion-router-link @click.prevent="logout">Logout</ion-router-link>
              </ion-item>
          </ion-list>
          <ion-list v-if="user.data.is_admin == 1">
              <ion-item>
                  <ion-icon name="mail" slot="start"></ion-icon>
                  <ion-router-link href="/adminusers">Admin Users</ion-router-link>
              </ion-item>
              <ion-item>
                  <ion-icon name="paper-plane" slot="start"></ion-icon>
                  <ion-router-link href="/adminalbums">Admin Albums</ion-router-link>
              </ion-item>
              <ion-item>
                  <ion-icon name="paper-plane" slot="start"></ion-icon>
                  <ion-router-link href="/adminartistes">Admin Artists</ion-router-link>
              </ion-item>
              <ion-item>
                  <ion-icon name="paper-plane" slot="start"></ion-icon>
                  <ion-router-link href="/adminmusic">Admin Music</ion-router-link>
              </ion-item>
              <ion-item>
                  <ion-icon name="heart" slot="start"></ion-icon>
                  <ion-router-link href="/adminnews">Admin News</ion-router-link>
              </ion-item>
          </ion-list>
      </ion-content>
    </ion-menu>

    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title class="ion-text-center">Home</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <RouterView></RouterView>
      </ion-content>
    </div>
  </ion-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import { IonApp, IonTitle, IonToolbar, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenu, IonButtons, IonMenuButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
    data: function () {
        return {
        }
    },
    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        ...mapActions(['logout']),
        ...mapActions(['showProfile']),
        ...mapActions(['showUpgrade']),
        ...mapActions(['showLiked']),
        ...mapActions(['showAlbums']),
        ...mapActions(['showArtistes']),
        ...mapActions(['showPlaylists']),
        ...mapActions(['showRecentlyPlayed']),
        ...mapActions(['showSearch']),
        ...mapActions(['showHomeAuth']),
        ...mapActions(['showLogin']),
    },
  components: {
    IonApp,
    IonTitle,
    IonToolbar,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonList,
    IonMenu,
    IonButtons,
    IonMenuButton

  }
});
</script>
