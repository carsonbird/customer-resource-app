<template>
  <v-navigation-drawer app touchless v-model="drawer" class="rounded-r-lg">
    <v-sheet>
      <v-list-item>
        <v-list-item-icon class="mr-3 my-3">
          <v-icon large color="primary">mdi-shopping-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-h5 font-weight-medium">
            Retail App
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-sheet>
    <v-list shaped nav class="pl-0">
      <v-list-item-group color="primary">
        <v-list-item link to="/preparations">
          <v-icon right left>mdi-weight-lifter</v-icon>
          <v-list-item-content>
            <v-list-item-title>
              Preparations
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/flow">
          <v-icon right left>mdi-chart-timeline-variant</v-icon>
          <v-list-item-content>
            <v-list-item-title>
              Flow
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-divider></v-divider>
    <v-list shaped nav class="pl-0">
      <v-list-item-group color="primary">
        <v-list-item link to="/resources">
          <v-icon right left>mdi-shape</v-icon>
          <v-list-item-content>
            <v-list-item-title>
              Resources
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <template v-slot:append>
      <v-divider></v-divider>
      <v-sheet color="grey lighten-5">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>
              v0.0.1
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn nuxt link to="/settings" icon><v-icon>mdi-cog</v-icon></v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-sheet>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    drawer: {
      get() { return this.$store.state.ui.drawer.state; },
      set(value) { this.$store.dispatch('ui/drawer/set', value); },
    }
  }
}
</script>