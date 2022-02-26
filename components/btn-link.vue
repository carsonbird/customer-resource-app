<template>
  <v-btn block color="primary" link :href="href" target="_blank"><slot></slot><v-icon right>{{icon}}</v-icon></v-btn>
</template>

<script>
export default {
  props: {
    href: {
      required: true,
      type: String
    },
    icon: {
      required: false,
      type: String,
      default: "mdi-open-in-new"
    }
  }
}
</script>

<style>

</style>