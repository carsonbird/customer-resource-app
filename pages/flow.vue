<template>
  <div class="d-flex overflow-x-auto flex-grow-1 flex-shrink-0 px-0 pb-3">
    <section-container name="Sources">
      <info-col>
        <info-row>
          <info-card path="sources/strangers"></info-card>
        </info-row>
        <info-row>
          <info-spacer></info-spacer>
        </info-row>
        <info-row>
          <info-card path="sources/sphere-of-influence"></info-card>
        </info-row>
        <info-row>
          <info-spacer></info-spacer>
        </info-row>
        <!-- <info-row>
          <info-card path="sources/coworkers"></info-card>
        </info-row> -->
        <!-- <info-row>
          <info-card path="sources/family"></info-card>
        </info-row> -->
        <info-row>
          <info-card path="sources/pre-bp-dropouts"></info-card>
        </info-row>
        <info-row>
          <info-card path="sources/post-bp-dropouts"></info-card>
        </info-row>
        <info-row>
          <info-card path="sources/former-ibos"></info-card>
        </info-row>
        <info-row>
          <info-card path="sources/businesses"></info-card>
        </info-row>
      </info-col>
    </section-container>
    <section-container name="Connection">
      <info-col>
        <info-row>
          <info-card path="steps/engage-and-listen"></info-card>
        </info-row>
        <info-row>
          <!-- <info-spacer></info-spacer> -->
          <info-card path="steps/share-products"></info-card>
          <info-card path="steps/conversation-soi"></info-card>
        </info-row>
        <info-row>
          <!-- <info-spacer></info-spacer> -->
          <info-card path="steps/significant-events"></info-card>
          <info-card path="steps/event-gifts"></info-card>
          <info-card path="steps/event-gifts-followup"></info-card>
        </info-row>
        <info-row>
          <info-spacer></info-spacer>
        </info-row>
        <info-row>
          <info-card path="steps/conversation-pre-bp"></info-card>
        </info-row>
        <info-row>
          <info-card path="steps/conversation-post-bp"></info-card>
        </info-row>
        <info-row>
          <info-card path="steps/conversation-ibo"></info-card>
        </info-row>
      </info-col>
    </section-container>
    <section-container name="Make Aware / DTM">
      <info-col>
        <info-row>
          <info-card path="steps/identify-need"></info-card>
          <info-card path="steps/feel-felt-found-verbiage"></info-card>
          <info-card path="steps/dtm"></info-card>
          <info-card path="steps/contact-info"></info-card>
          <info-card path="steps/identify-consult-preference"></info-card>
        </info-row>
        <info-row>
          <info-spacer></info-spacer>
        </info-row>
        <info-row>
          <info-spacer></info-spacer>
        </info-row>
        <info-row>
          <info-card path="steps/invite-to-support"></info-card>
        </info-row>
      </info-col>
    </section-container>
    <section-container name="Clarify Needs">
      <info-col>
        <info-row>
          <info-card path="steps/personal-consult"></info-card>
          <info-card path="steps/set-up-consult"></info-card>
        </info-row>
        <info-row>
          <info-card path="steps/quick-questions"></info-card>
          <info-card path="steps/ask-questions"></info-card>
          <info-card path="steps/identify-samples"></info-card>
          <info-card path="steps/set-followup-expectation"></info-card>
        </info-row>
        <info-row>
          <info-card path="steps/customer-survey"></info-card>
          <info-card path="steps/explain-survey"></info-card>
          <info-card path="steps/send-survey-link"></info-card>
          <info-card path="steps/survey-completed"></info-card>
          <info-card path="steps/thank-for-survey"></info-card>
        </info-row>
        <info-row>
          <info-card path="steps/catalog-samples"></info-card>
        </info-row>
        <info-row>
          <info-card path="steps/gift-basket"></info-card>
        </info-row>
      </info-col>
    </section-container>
    <section-container name="Serve & Add Value; Create Experience">
      <info-col>
        <info-row>
          <info-card path="steps/send-samples"></info-card>
          <info-card path="steps/wait-x-time"></info-card>
        </info-row>
        <info-row>
          <info-card path="steps/they-buy-products"></info-card>
        </info-row>
      </info-col>
    </section-container>
    <section-container name="Follow Up">
      <info-col>
        <info-row>
          <info-card path="steps/followup-about-products"></info-card>
          <info-card path="steps/invite-to-be-customer"></info-card>
        </info-row>
      </info-col>
    </section-container>
    <section-container name="Onboard">
      <info-col>
        <info-row>
          <info-card path="steps/create-account"></info-card>
          <info-card path="steps/identify-service-preference"></info-card>
        </info-row>
      </info-col>
      <info-col>
        <info-row>
          <info-card path="steps/full-consult"></info-card>
          <info-card path="steps/onboarding-meeting"></info-card>
        </info-row>
        <info-row>
          <info-card path="steps/self-ditto"></info-card>
        </info-row>
        <info-row>
          <info-card path="steps/we-deliver"></info-card>
        </info-row>
      </info-col>
    </section-container>
    <section-container name="Maintain Loop">
      <info-col>
        <info-row>
        </info-row>
      </info-col>
    </section-container>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Flow"
    }
  },
  data() {
    return {
      sections: [
        "Connection",
        "DTM",
        "Clarify Needs",
        "Add Value",
        "Follow Up",
        "Onboard",
      ]
    }
  },
  beforeCreate() {
    this.$store.dispatch("ui/appbar/setTitle", "Customer Flow");
  }
}
</script>

<style scoped>
.scrolls {
  overflow-x: scroll;
  white-space: nowrap;
}
.scrollbar-hidden::-webkit-scrollbar {
  display:none;
}
.scrollbar-hidden {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
/* td {
  display: flex;
} */
</style>