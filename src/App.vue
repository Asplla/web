<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import CommonHeader from '@/components/common/Header.vue';
import CommonFooter from '@/components/common/Footer.vue';
</script>

<template>
  <CommonHeader />
  <RouterView />
  <CommonFooter />
</template>

<style scoped></style>
