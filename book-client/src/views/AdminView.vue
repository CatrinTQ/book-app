<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import useAuthStore from "../stores/useAuthStore";

const router = useRouter();
const useAuth = useAuthStore();

const API_URL = import.meta.env.VITE_API_URL;

interface Goal {
  name: string;
  age: number;
  bookTitle: string;
  question: string;
  answer: string;
  rating: number;
  organisation: string;
  sport: string;
}

const goals = ref<Goal[]>([]);

const fetchAllGoals = async (): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/goals`, {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Something went wrong when fetching goals");
    }
    const data: Goal[] = await response.json(); // Här förväntar vi oss en array
    goals.value = data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const handleLogout = async () => {
  try {
    await useAuth.logout()
    router.push('/')
  } catch (err) {
    console.error('Logout failed:', err)
  }
}

onMounted(fetchAllGoals);
</script>

<template>
  <div class="goal-list">
    <div class="button-wrapper">
      <button @click="handleLogout" to="/">Log out</button>
    </div>
    <h2>Bokmål</h2>
    <div v-if="goals.length === 0">
      <p>Inga bokmål hittades.</p>
    </div>
    <ul v-else>
      <li v-for="(goal, index) in goals" :key="index" class="goal-item">
        <h3>{{ goal.name }} ({{ goal.age }} år)</h3>
        <p><strong>Boktitel:</strong> {{ goal.bookTitle }}</p>
        <p><strong>Fråga:</strong> {{ goal.question }}</p>
        <p><strong>Svar:</strong> {{ goal.answer }}</p>
        <p><strong>Betyg:</strong> {{ goal.rating }} stjärnor</p>
        <p><strong>Förening:</strong> {{ goal.organisation }}</p>
        <p><strong>Sport:</strong> {{ goal.sport }}</p>
        <hr />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.goal-list {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.goal-item {
  padding: 1rem;
  background: #f3f3f3;
  margin-bottom: 1rem;
  border-radius: 8px;
  color: black;
}

ul {
  list-style: none;
}

.button-wrapper {
  align-self: flex-end;
  align-items: end;
  margin-top: 1rem;
  margin-right: 1rem;

  button {
    max-width: 150px;
    max-height: 60px;
    padding: 1rem;
    background-color: darkred;
    text-transform: uppercase;
    color: white;
    font-weight: 700;
    border: none;

    button:hover {
      background-color: red;
    }
  }
}
</style>
