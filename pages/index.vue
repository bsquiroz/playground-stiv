<script setup lang="ts">
import { Text } from "@arreglatech/design-system";
import Title from "../components/Title/Title.vue";
</script>

<template>
  <div class="st-bg-primary-300">
    <Title>desde componentes</Title>
    <Text type="title-screen">Hola mundo</Text>
  </div>

  <div>
    <p class="st-title-screen">esto no funciona</p>
  </div>
</template>

<style scoped></style>
