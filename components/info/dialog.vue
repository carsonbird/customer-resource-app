<template>
  <v-dialog
    v-model="state"
    max-width="600"
  >
    <!-- :fullscreen="$vuetify.breakpoint.smAndDown" -->
    <!-- :transition="$vuetify.breakpoint.smAndDown ? 'dialog-bottom-transition' : 'dialog-transition'" -->
    <v-card class="background rounded-lg">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6" v-if="item">{{item.title}}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click="state=false"><v-icon>mdi-close</v-icon></v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-container>
        <v-row>
          <v-col>
            <v-card class="rounded-lg" flat>
              <v-card-text style="max-height:80vh; overflow-y:auto">
                <nuxt-content :document="item"></nuxt-content>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row v-if="item && item.action">
          <v-col>
            <v-btn block color="primary" link :href="item.action.url" target="_blank">{{item.action.text}}<v-icon right>{{item.action.icon ? item.action.icon : 'mdi-open-in-new'}}</v-icon></v-btn>
          </v-col>
        </v-row>
      </v-container>
      <!-- <v-card-actions v-if="item && item.action">
        <v-spacer></v-spacer>
        <v-btn text color="primary" link href="https://www.amway.com/en_US/my-account/myshop" target="_blank">Visit<v-icon right>mdi-open-in-new</v-icon></v-btn>
      </v-card-actions> -->
    </v-card>
    <template v-slot:activator="{ on, attrs }">
      <v-card v-bind="attrs" v-on="on" class="mr-3 rounded-lg mb-3">
        <v-list-item>
          <v-list-item-content>
            <!-- <v-list-item-title>{{name}}</v-list-item-title> -->
            <v-list-item-title v-if="item">{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  props: {
    path: {
      required: true,
      type: Object
    },
  },
  data() {
    return {
      state: false,
      item: null,
    }
  },
  async created() {
    this.item = await this.$content(this.path).fetch();
    // console.log(this.item);
    // LeaderLine.setLine(
    //   this.$refs["strangers"],
    //   this.$refs["share-products"]
    // )
  }
}
</script>

<style>

</style>