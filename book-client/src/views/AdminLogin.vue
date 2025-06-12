<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuthStore from "../stores/useAuthStore";

const useAuth = useAuthStore();
const router = useRouter();

const username = ref("");
const password = ref("");
const loginError = ref("");

/* -------------------------------------------------------------------------- */
/*                                   Log in                                   */
/* -------------------------------------------------------------------------- */

/**
 * Log in user.
 * If succses, show admin panel if admin
 * or redirect to /books if not admin.
 */
const handleLogin = async () => {
  try {
    await useAuth.login(username.value, password.value);

    if (useAuth.isAuthenticated) {
      if (useAuth.isAdmin) {
        router.push("/goals");
      }
    } else {
      loginError.value = "Invalid username or password";
    }
  } catch (err) {
    loginError.value = "Login failed";
    console.error(err);
  }
};
</script>

<template>
  <div class="container">
    <div class="form-section">
      <h2>Log In</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="login-username">Username:</label>
          <input type="text" id="login-username" v-model="username" />
        </div>
        <div class="form-group">
          <label for="login-password">Password:</label>
          <input type="password" id="login-password" v-model="password" />
        </div>
        <button type="submit">Log In</button>
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
