<script setup lang="ts">
  import { useRoute } from 'vue-router'
  const year = new Date().getFullYear();
</script>

<template>
  <router-view :key="useRoute().fullPath"></router-view>
</template>

<style>

</style>
