<template>
  <v-sheet class="mx-3 rounded-lg" color="grey lighten-3">
    <v-list-item>
      <v-list-item-content class="grey--text">
      <!-- <v-list-item-content class="primary--text"> -->
        <v-list-item-title class="text-h6">{{name}}</v-list-item-title>
        <!-- <v-list-item-subtitle></v-list-item-subtitle> -->
      </v-list-item-content>
    </v-list-item>
    <div class="d-flex flex-row">
      <!-- <info-col> -->
        <slot></slot>
      <!-- </info-col> -->
    </div>
  </v-sheet>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String,
    }
  }
}
</script>