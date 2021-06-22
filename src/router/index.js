import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import Service from '../views/Service.vue'
import News from '../views/News.vue'
import New from '../views/New.vue'
import Contact from '../views/Contact.vue'
import Connexion from '../views/Connexion.vue'
import Register from '../views/Register.vue'
import HomeAuth from '../views/HomeAuth.vue'
import Albums from '../views/Albums.vue'
import Album from '../views/Album.vue'
import Artistes from '../views/Artistes.vue'
import Artist from '../views/Artist.vue'
import Search from '../views/Search.vue'
import RecentlyPlayed from '../views/RecentlyPlayed.vue'
import Playlists from '../views/Playlists.vue'
import Playlist from '../views/Playlist.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import Upgrade from '../views/Upgrade.vue'
import Plans from '../views/Plans.vue'
import Cgu from '../views/Cgu.vue'
import Subscribe from '../views/Subscribe.vue'
import AdminUsers from '../views/AdminUsers.vue'
import FormUser from '../views/FormUser.vue'
import AdminAlbums from '../views/AdminAlbums.vue'
import FormAlbum from '../views/FormAlbums.vue'
import AdminArtistes from '../views/AdminArtistes.vue'
import FormArtistes from '../views/FormArtistes.vue'
import AdminMusic from '../views/AdminMusic.vue'
import FormMusic from '../views/FormMusic.vue'
import AdminNews from '../views/AdminNews.vue'
import FormNews from '../views/FormNews.vue'
import Liked from '../views/Liked.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/new',
    name: 'New',
    component: New
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/homeauth',
    name: 'HomeAuth',
    component: HomeAuth,
  },
  {
    path: '/albums',
    name: 'albums',
    component: Albums
  },
  {
    path: '/album',
    name: 'album',
    component: Album
  },
  {
    path: '/artistes',
    name: 'artistes',
    component: Artistes
  },
  {
    path: '/artist',
    name: 'artist',
    component: Artist
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/recentlyplayed',
    name: 'recentlyplayed',
    component: RecentlyPlayed
  },
  {
    path: '/playlists',
    name: 'playlists',
    component: Playlists
  },
  {
    path: '/liked',
    name: 'liked',
    component: Liked
  },
  {
    path: '/playlist',
    name: 'playlist',
    component: Playlist
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/upgrade',
    name: 'upgrade',
    component: Upgrade
  },
  {
    path: '/plans',
    name: 'plans',
    component: Plans
  },
  {
    path: '/cgu',
    name: 'cgu',
    component: Cgu
  },
  {
    path: '/subscribe',
    name: 'subscribe',
    component: Subscribe
  },
  {
    path: '/adminusers',
    name: 'adminusers',
    component: AdminUsers
  },
  {
    path: '/formuser',
    name: 'formuser',
    component: FormUser
  },
  {
    path: '/adminalbums',
    name: 'adminalbums',
    component: AdminAlbums
  },
  {
    path: '/formalbum',
    name: 'formalbum',
    component: FormAlbum
  },
  {
    path: '/adminartistes',
    name: 'adminartistes',
    component: AdminArtistes
  },
  {
    path: '/formartistes',
    name: 'formartistes',
    component: FormArtistes
  },
  {
    path: '/adminmusic',
    name: 'adminmusic',
    component: AdminMusic
  },
  {
    path: '/formmusic',
    name: 'formmusic',
    component: FormMusic
  },
  {
    path: '/adminnews',
    name: 'adminnews',
    component: AdminNews
  },
  {
    path: '/formnews',
    name: 'formnews',
    component: FormNews
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
