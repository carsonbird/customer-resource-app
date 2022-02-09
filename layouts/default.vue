<template>
  <v-app>
    <v-app-bar app elevate-on-scroll class="background">
      <v-app-bar-nav-icon @click="$store.dispatch('ui/drawer/open')">
        <!-- <v-icon color="green">mdi-checkbox-marked-circle-outline</v-icon> -->
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>{{$store.state.ui.appbar.title}}</v-toolbar-title>
    </v-app-bar>

    <app-drawer />

    <v-main class="background">
      <Nuxt/>
    </v-main>
  </v-app>
</template>

<script>
export default {

}
</script>