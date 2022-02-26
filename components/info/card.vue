<template>
  <v-dialog
    v-model="dialog"
    max-width="600"
  >
    <!-- :fullscreen="$vuetify.breakpoint.smAndDown" -->
    <!-- :transition="$vuetify.breakpoint.smAndDown ? 'dialog-bottom-transition' : 'dialog-transition'" -->
    <v-card class="background rounded-lg">
      <v-list-item>
        <v-list-item-content v-if="item">
          <v-list-item-title class="text-h6">{{item.title}}</v-list-item-title>
          <v-list-item-subtitle v-for="next, index in item.to" :key="index">To: {{next}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click="dialog=false"><v-icon>mdi-close</v-icon></v-btn>
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
      <v-card :id="id" v-bind="attrs" v-on="on" class="mr-3 rounded-lg mb-3">
        <v-list-item>
          <v-list-item-content v-if="item">
            <!-- <v-list-item-title>{{name}}</v-list-item-title> -->
            <v-list-item-title>{{item.title}}</v-list-item-title>
            <!-- <v-list-item-subtitle v-for="next, index in item.to" :key="index">{{next}}<v-icon x-small>mdi-arrow-right</v-icon></v-list-item-subtitle> -->
          </v-list-item-content>
          <!-- <v-list-item-icon><v-icon small>mdi-arrow-right</v-icon></v-list-item-icon> -->
        </v-list-item>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
// import LeaderLine from 'leader-line-vue';
// let LeaderLine = require("leader-line-vue");

export default {
  props: {
    // name: {
    //   required: false,
    //   type: String
    // },
    // type: {
    //   required: true,
    //   type: String,
    // },
    // slug: {
    //   required: true,
    //   type: String,
    // },
    path: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      item: null,
      dialog: false,
      id: 1
    }
  },
  // computed: {
  //   item() {
  //     return this.$content(`${this.type}/${this.slug}`).fetch();
  //   }
  // },
  async created() {
    this.item = await this.$content(this.path).fetch();
    this.id = this.item.slug;
    // console.log(this.item);
    // LeaderLine.setLine(
    //   this.$refs["strangers"],
    //   this.$refs["share-products"]
    // )
  }
}
</script>