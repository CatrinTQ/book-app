<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="form-section">
      <h2>Log In</h2>
      <form>
        <div class="form-group">
          <label for="login-username">Username:</label>
          <input type="text" id="login-username" />
        </div>
        <div class="form-group">
          <label for="login-password">Password:</label>
          <input type="password" id="login-password" />
        </div>
        <Router-link to="/goals">
            <button type="submit">Log In</button>
        </Router-link>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-image: url(../assets/bg-football.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-width: 100vw;
  min-height: 100vh;

  .form-section {
    background-color: black;
    height: fit-content;
    width: fit-content;
    padding: 1rem;
    border-radius: 4%;
    margin-bottom: 70px;
    margin-top: 3rem;

    .form-group {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      margin-top: 10px;

      label {
        text-align: right;
        width: 110px;
      }
    }

    button {
      max-width: 200px;
      max-height: 60px;
      background-color: green;
      text-transform: uppercase;
      color: white;
      font-weight: 700;
      border: none;
      margin: 1rem;
    }
  }
}
</style>
