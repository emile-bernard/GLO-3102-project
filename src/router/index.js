import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Album from '@/components/Album/AlbumPage';
import Artist from '@/components/Artist/Artist';
import PlaylistList from '@/components/Playlist/PlaylistList';
import Playlist from '@/components/Playlist/Playlist';
import News from '@/components/News/News';
import Account from '@/components/User/Account';
import Settings from '@/components/User/Settings';
import Logout from '@/components/User/Logout';
import Search from '@/components/Search/Search';
import Login from '@/components/User/Login';
import SignUp from '@/components/User/SignUp';


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { tab: 'home' }
    }, {
      path: '/artists',
      name: 'Artists',
      component: Search,
      meta: { tab: 'artists' }
    }, {
      path: '/albums',
      name: 'Albums',
      component: Search,
      meta: { tab: 'albums' }
    }, {
      path: '/artists/:id',
      props: true,
      name: 'Artist',
      component: Artist,
      meta: { tab: 'artists' }
    }, {
      path: '/albums/:id',
      props: true,
      name: 'Album',
      component: Album,
      meta: { tab: 'albums' }
    }, {
      path: '/tracks',
      name: 'Tracks',
      component: Search,
      meta: { tab: 'tracks' }
    }, {
      path: '/playlists',
      name: 'Playlists',
      component: PlaylistList,
      meta: { tab: 'playlists' }
    }, {
      path: '/news',
      name: 'News',
      component: News,
      meta: { tab: 'news' }
    }, {
      path: '/playlists/:id',
      name: 'Playlist',
      component: Playlist,
      meta: { tab: 'playlists' }
    }, {
      path: '/users',
      name: 'Users',
      component: Search,
      meta: { tab: 'users' }
    }, {
      path: '/users/:id',
      props: true,
      name: 'User',
      component: Account,  // TODO: create a user page. For now, we redirect to Account...
      meta: { tab: 'users' }
    }, {
      path: '/account',
      name: 'Account',
      component: Account,
      meta: { tab: 'account' }
    }, {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      meta: { tab: 'account' }
    }, {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      meta: { tab: 'home' }
    }, {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: { tab: 'search' }
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { tab: 'users' }
    }, {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      meta: { tab: 'users' }
    }
  ],
});

function resetAllTabs() {
  const tabsParent = document.getElementById('navigation-tabs');
  if (tabsParent !== null) {
    const tabs = tabsParent.getElementsByTagName('li');
    for (let i = 0; i < tabs.length; i += 1) {
      const tab = document.getElementById(tabs[i].id);
      if (tab.classList.contains('is-active')) {
        tab.classList.remove('is-active');
      }
    }
  }
}

function updateTabs(tabId) {
  resetAllTabs();
  const activeTab = document.getElementById(tabId);
  if (activeTab !== null) {
    activeTab.className = 'is-active';
  }
}

router.beforeEach((to, from, next) => {
  const tabName = to.meta.tab.toLowerCase();
  const tabId = `navigation-tab-${tabName}`;
  updateTabs(tabId);
  next();
});

export default router;
