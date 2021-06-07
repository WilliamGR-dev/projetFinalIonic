<template>
  <ion-app>
    <ion-menu side="start" content-id="main-content">
      <ion-header>
        <ion-toolbar translucent>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
          <ion-list>
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
            <ion-router-link href="/connexion">Connexion</ion-router-link>
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
          <ion-list>
              <ion-item>
                  <ion-icon name="mail" slot="start"></ion-icon>
                  <ion-router-link href="/homeauth">Home</ion-router-link>
              </ion-item>
              <ion-item>
                  <ion-icon name="paper-plane" slot="start"></ion-icon>
                  <ion-router-link href="/artistes">Artistes</ion-router-link>
              </ion-item>
              <ion-item>
                  <ion-icon name="paper-plane" slot="start"></ion-icon>
                  <ion-router-link href="/albums">Albums</ion-router-link>
              </ion-item>
              <ion-item>
                  <ion-icon name="paper-plane" slot="start"></ion-icon>
                  <ion-router-link href="/playlists">Playlists</ion-router-link>
              </ion-item>
              <ion-item>
                  <ion-icon name="heart" slot="start"></ion-icon>
                  <ion-router-link href="/recentlyplayed">Recently Played</ion-router-link>
              </ion-item>
              <ion-item>
                  <ion-icon name="archive" slot="start"></ion-icon>
                  <ion-router-link href="/liked">Liked</ion-router-link>
              </ion-item>
              <ion-item>
                  <ion-icon name="trash" slot="start"></ion-icon>
                  <ion-router-link href="/upgrade">Upgrade</ion-router-link>
              </ion-item>
              <ion-item>
                  <ion-icon name="trash" slot="start"></ion-icon>
                  <ion-router-link href="/search">Search</ion-router-link>
              </ion-item>
              <ion-item>
                  <ion-icon name="warning" slot="start"></ion-icon>
                  <ion-router-link href="/profile">Profile</ion-router-link>
              </ion-item>
          </ion-list>
          <ion-list>
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
        <ion-router-outlet class="overflow-scroll"/>
      </ion-content>
    </div>
  </ion-app>
</template>

<script>
import { IonRouterOutlet, IonApp, IonTitle, IonToolbar, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenu, IonButtons, IonMenuButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonRouterOutlet,
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
