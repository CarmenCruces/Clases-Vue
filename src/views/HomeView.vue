<script>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
      
    <TheWelcome />

</template>

<style scoped>
h2 {
  font-family: "Zen Dots", sans-serif;
  font-size: 5.3vw;
  margin-left: 40px;
}
section {
  padding: 30px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
}
ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 25px;
  list-style: none;
}
@media (max-width:900px) {
  ul {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (max-width:700px) {
  ul {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width:500px) {
  h2 {
    margin-bottom: 30px;
  }
  ul {
    grid-template-columns: 1fr;
  }
  section {
    padding: 0;
  }
}
</style>
