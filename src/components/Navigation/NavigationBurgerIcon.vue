<template>
  <div id="navigation-burger-icon" @click="toggleBurgerMenu" class="navigation-burger-icon close">
    <span class="bar top"></span>
    <span class="bar middle"></span>
    <span class="bar bottom"></span>
  </div>
</template>

<style>
  #navigation-burger-icon {
    width: 60px;
    height: 45px;
    position: absolute;
    float: left;
    margin: 20px;
    padding: 10px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  #navigation-burger-icon span {
    position: absolute;
    height: 10px;
    width: 100%;
    background: rgba(148, 207, 201, 1);
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }

  #navigation-burger-icon .top {
    top: 0px;
  }

  #navigation-burger-icon .middle {
    top: 15px;
  }

  #navigation-burger-icon .bottom {
    top: 30px;
  }

  #navigation-burger-icon.open .top {
    top: 18px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  #navigation-burger-icon.open .middle {
    opacity: 0;
    left: -60px;
  }

  #navigation-burger-icon.open .bottom {
    top: 18px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
</style>

<script>
  export default {
    data() {
      return { showBurgerMenu: false };
    },
    methods: {
      toggleBurgerMenu() {
        this.showBurgerMenu = !this.showBurgerMenu;
        const menuIcon = document.getElementById('navigation-burger-icon');
        if (menuIcon.className === 'navigation-burger-icon close') {
          menuIcon.className = 'navigation-burger-icon open';
        } else {
          menuIcon.className = 'navigation-burger-icon close';
        }
        const menuItems = document.getElementById('navigation-burger-menu-items');
        if (menuItems.className === 'navigation-burger-menu-items close') {
          menuItems.className = 'navigation-burger-menu-items open';
        } else {
          menuItems.className = 'navigation-burger-menu-items close';
        }
      }
    },
  };
</script>
