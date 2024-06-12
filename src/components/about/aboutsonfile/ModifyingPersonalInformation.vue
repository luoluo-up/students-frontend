<template>
  <div>
    <about-form @my-event="getMyEvent" :user="user"></about-form>
  </div>
</template>

<script>
import axios from "axios";

import AboutForm from "@/components/about/aboutsonfile/AboutForm.vue";
export default {
  name: "ModifyingPersonalInformation",
  data() {
    return {
      user: null
    };
  },
  mounted() {
    this.getHomeInfo();
  },
  components: {
    AboutForm
  },
  methods: {
    getHomeInfo() {
      axios.get("/api").then(res => this.getHomeInfoSucc(res));
    },
    getHomeInfoSucc(res) {
      if (res.data) {
        this.user = res.data.user;
      }
    }
  }
};
</script>

<style scoped></style>
