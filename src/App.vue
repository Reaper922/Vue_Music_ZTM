<script>
import AppHeader from '@/components/Header.vue';
import Auth from '@/components/Auth.vue';
import { mapWritableState } from 'pinia';
import useUserStore from '@/stores/user';
import { auth } from '@/includes/firebase';
import Player from '@/components/Player.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    Auth,
    Player
  },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
    }
  }
};
</script>

<template>
  <AppHeader />

  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </RouterView>

  <Player></Player>

  <Auth />
</template>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
