<template>
  <span>
    <v-chip @click="dialog = true" color="primary" class="px-1" outlined link label small>
      <!-- <v-icon left small>mdi-shape</v-icon> -->
      <slot></slot>
    </v-chip>
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
                <v-card-text style="max-height:80vh; overflow-y:auto">
                  <nuxt-content :document="dialogItem"></nuxt-content>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </span>
  <!-- <v-btn color="primary" x-small outlined elevation="2">
    <b><slot></slot></b>
  </v-btn> -->
</template>

<script>
export default {
  props: {
    path: {
      required: true,
      type: String,
    }
  },
  data() {
    return {
      dialog: false,
      dialogItem: null,
    }
  },
  async created() {
    this.dialogItem = await this.$content(this.path).fetch();
  }
}
</script>