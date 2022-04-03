<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <todo>Fill in information from the Simple Selling Framework.</todo>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12" sm="4" lg="3" xl="2" v-for="item in resources" :key="item.slug">
          <v-card class="rounded-lg" elevation="3" ripple @click="setDialogItem(item); openDialog()">
            <v-img v-if="$vuetify.breakpoint.lgAndUp" :src="item.image"></v-img>
            <v-list-item two-line>
              <v-list-item-avatar tile v-if="$vuetify.breakpoint.mdAndDown && item.body.children.length > 0">
                <v-img :src="item.image"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h6 text-wrap">{{item.title}}</v-list-item-title>
                <!-- <v-list-item-subtitle>{{item.description}}</v-list-item-subtitle> -->
              </v-list-item-content>
              <!-- <v-list-item-avatar rounded="lg" v-if="$vuetify.breakpoint.xsOnly">
                <v-img :src="item.image"></v-img>
              </v-list-item-avatar> -->
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog 
      class="rounded-lg" 
      v-model="dialog" 
      max-width="500" 
      :fullscreen="$vuetify.breakpoint.smAndDown"
      :transition="$vuetify.breakpoint.smAndDown ? 'dialog-bottom-transition' : 'dialog-transition'"
    >
      <!-- <v-app-bar flat color="rgba(0, 0, 0, 0)">
        <v-spacer></v-spacer>
        <v-btn icon color="white" @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
      </v-app-bar> -->
      <v-card class="rounded-lg" v-if="dialogItem">
        <!-- <v-img v-if="dialogItem.image" :src="dialogItem.image"></v-img> -->
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
          <!-- <v-row>
            <v-col>
              <nuxt-content :document="dialogItem"></nuxt-content>
            </v-col>
          </v-row>
        </v-container>
        <v-container> -->
          <v-row>
            <v-col>
              <v-card class="rounded-lg" flat>
                <v-card-text class="pa-1" style="max-height:80vh; overflow-y:auto">
                  <nuxt-content :document="dialogItem"></nuxt-content>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  // async asyncData({$content}) {
  //   const resources = await $content("resources").fetch();
  //   return {
  //     resources
  //   }
  // },
  head() {
    return {
      title: "Resources"
    }
  },
  data() {
    return {
      resources: null,
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
    this.$store.dispatch("ui/appbar/setTitle", "Resources");
    this.resources = await this.$content("resources").fetch();
  }
}
</script>