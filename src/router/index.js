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

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { tab: 'home' }
    }, {
      path: '/artist',
      name: 'Artist',
      component: Artist,
      meta: { tab: 'artist' }
    }, {
      path: '/album',
      name: 'Album',
      component: Album,
      meta: { tab: 'album' }
    }, {
      path: '/playlist',
      name: 'Playlist',
      component: Playlist,
      meta: { tab: 'playlist' }
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
