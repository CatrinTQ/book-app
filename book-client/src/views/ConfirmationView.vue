<template>
  <div class="confirmation-container">
      <h2>Klart!</h2>
      <h2>Tack för ditt bidrag!</h2>
  </div>
</template>

<style scoped lang="scss">
.confirmation-container {
  display: flex;
  justify-content: center; // Centrera horisontellt
  align-items: flex-start; // Centrera vertikalt
  background-image: url(../assets/bg-football.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;

  h2 {
    display: inline-block;
    background-color: black;
    color: white;
    padding: 0 4px;
    margin-top: 5rem;
    }
}
</style>
