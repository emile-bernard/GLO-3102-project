import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Album from '@/components/Album';
import Artist from '@/components/Artist';
import Playlist from '@/components/Playlist';
import Account from '@/components/Account';
import Settings from '@/components/Settings';
import Logout from '@/components/Logout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, {
      path: '/artist',
      name: 'Artist',
      component: Artist
    }, {
      path: '/album',
      name: 'Album',
      component: Album
    }, {
      path: '/playlist',
      name: 'Playlist',
      component: Playlist
    }, {
      path: '/account',
      name: 'Account',
      component: Account
    }, {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }, {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ],
});
