<script setup lang="ts">
import { NuxtLayout } from "#components";

// import "@arreglatech/alil-stiv/dist/transversal-design-system-stiv.css";

const layout = "default";
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
