<template>
  <ExampleWithScopedSlots message="Some text">
    <template #header="{ message }">
      {{ message }}
    </template>
  </ExampleWithScopedSlots>
  <br />
  <Example message="Some text">
    <template #header="{ message }">
      {{ message }}
    </template>
  </Example>
</template>

<script>
import ExampleWithScopedSlots from "./components/Example";

export default {
  name: "App",
  components: {
    ExampleWithScopedSlots,
  },
};
</script>

<style>
</style>
