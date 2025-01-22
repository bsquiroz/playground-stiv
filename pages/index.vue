<script setup lang="ts">
import { Text, Button } from "@arreglatech/alil-stiv";
</script>

<template>
  <div class="st-bg-primary-300">
    <Text text="text subtitle" type="subtitle" />
    <Text text="text title" type="title" />
    <p class="font-secondary font-bold bg-info-100">
      hola mundo desde el padre
    </p>
    <div>
      <Button text="hola mundo" :onClick="() => console.log('hola mundo')" />
    </div>
    <div class="p-4 bg-red-500">
      <p class="text-yellow-500 font-bold text-5xl">Hola mundo</p>
    </div>
  </div>
</template>

<style scoped></style>
