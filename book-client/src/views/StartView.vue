<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="text">
      <h2>Har du läst en bok?</h2>
      <h2>Gör ett läsmål!</h2>
    </div>
    <div class="button-wrapper">
        <router-link to="/form">
            <button>Klicka här!</button>
        </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  display: grid;
  background-image: url(../assets/bg-football.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-width: 100vw;
  min-height: 100vh;

  .text {
    text-align: left;
    margin-left: 2rem;

    h2 {
    display: inline-block;
    background-color: black;
    color: white;
    padding: 0 4px;
    }
  }

  .button-wrapper {
    grid-row: 4;
    button {
        grid-row: 4;
        min-width: 200px;
        min-height: 60px;
        background-color: red;
        text-transform: uppercase;
        border-radius: 30px;
        color: white;
        font-weight: 700;
        border: none;
    }
    button:hover {
        background-color: darkred;
    }
}
}
</style>
