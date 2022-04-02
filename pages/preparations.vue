<template>
  <div>
    <v-container>
      <v-row align="center">
        <v-col cols="12" sm="4" lg="3" xl="2" v-for="item in preparations" :key="item.slug">
          <v-card class="rounded-lg" elevation="3" ripple @click="setDialogItem(item); openDialog()">
            <v-img v-if="$vuetify.breakpoint.smAndUp" :src="item.image"></v-img>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="text-h6 text-wrap">{{item.title}}</v-list-item-title>
                <v-list-item-subtitle>{{item.description}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar rounded="lg" v-if="$vuetify.breakpoint.xsOnly">
                <v-img :src="item.image"></v-img>
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog 
      class="rounded-lg" 
      v-model="dialog" 
      max-width="400" 
      :fullscreen="$vuetify.breakpoint.smAndDown"
      :transition="$vuetify.breakpoint.smAndDown ? 'dialog-bottom-transition' : 'dialog-transition'"
    >
      <!-- <v-app-bar flat color="rgba(0, 0, 0, 0)">
        <v-spacer></v-spacer>
        <v-btn icon color="white" @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
      </v-app-bar> -->
      <v-card class="rounded-lg" v-if="dialogItem">
        <v-img v-if="dialogItem.image" :src="dialogItem.image"></v-img>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="text-h6 text-wrap">{{dialogItem.title}}</v-list-item-title>
            <v-list-item-subtitle>{{dialogItem.description}}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-container class="pt-0" v-if="dialogItem.body.children.length > 0">
          <v-row>
            <v-col>
              <nuxt-content :document="dialogItem"></nuxt-content>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Preparations"
    }
  },
  // async asyncData({$content}) {
  //   const preparations = await $content("preparations").fetch();
  //   return {
  //     preparations
  //   }
  // },
  data() {
    return {
      preparations: null,
      // UI
      dialog: false,
      dialogItem: null,
    }
  },
  methods: {
    setDialogItem(value) {
      this.dialogItem = value;
    },
    openDialog() {
      this.dialog = true;
    }
  },
  async beforeCreate() {
    this.$store.dispatch("ui/appbar/setTitle", "Preparations");
    this.preparations = await this.$content("preparations").fetch();
  }
}
</script>