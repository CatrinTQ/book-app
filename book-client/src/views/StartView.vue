<script setup lang="ts"></script>

<template>
  <div class="start-container">
    <div class="text">
      <h2>Har du läst en bok?</h2>
      <h2>Gör ett läsmål!</h2>
    </div>
    <div class="button-wrapper">
      <router-link to="/form">
        <button>Klicka här!</button>
      </router-link>
    </div>
    <div class="admin-wrapper">
      <router-link to="/login">
        <button>Admin login</button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.start-container {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  background-image: url(../assets/bg-football.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;

  .text {
    text-align: left;
    margin-left: 1rem;
    margin-top: 1rem;
    h2 {
      display: inline-block;
      background-color: black;
      color: white;
      padding: 0 4px;
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    grid-row: 3;

    button {
      min-width: 200px;
      min-height: 60px;
  border-radius: 30px;

      background-color: red;
    }
    button:hover {
      background-color: darkred;
    }
  }

  .admin-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: 1rem;
    margin-right: 1rem;
    grid-row: 4;

    button {
      background-color: green;
      padding: 1rem;
    }
    button:hover {
      background-color: darkgreen;
    }
  }
}

button {
  text-transform: uppercase;
  color: white;
  font-weight: 700;
  border: none;
  cursor: pointer;
}
</style>
