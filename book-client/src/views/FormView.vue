<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router'

const router = useRouter()

const API_URL = import.meta.env.VITE_API_URL;

interface Question {
  id: string;
  question: string;
}

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

const newGoal = ref<Goal>({
  name: "",
  age: 0,
  bookTitle: "",
  question: "",
  answer: "",
  rating: 0,
  organisation: "",
  sport: "",
});

const postBookGoal = async () => {
  try {
    const response = await fetch(`${API_URL}/goals`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal.value),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Något gick fel vid skapandet av bokmålet");
    }

    alert("Goal skapat!");

    // Rensa formuläret
    newGoal.value = {
      name: "",
      age: 0,
      bookTitle: "",
      question: "",
      answer: "",
      rating: 0,
      organisation: "",
      sport: "",
    };

    router.push('/done')
  } catch (error) {
    console.error("Error:", error);
    alert("Kunde inte skapa ntt bokmål.");
  }
};

const questions = ref<Question[]>([
  { id: "1", question: "Vilken karaktär överraskade dig mest?" },
  { id: "2", question: "Skulle du rekommendera boken till en kompis?" },
  { id: "3", question: "Vem i boken skulle du vilja ha på ditt lag?" },
  { id: "4", question: "Vem tycker du var bäst i boken?" },
  {
    id: "5",
    question: "Var det någon du inte gillade i boken? Vem och varför?",
  },
  { id: "6", question: "Vilken plats i boken skulle du vilja besöka?" },
  { id: "7", question: "Vem i boken skulle du helst vilja vara?" },
  {
    id: "8",
    question: "Vad hade du gjort om du hade varit huvudpersonen i boken?",
  },
]);

const randomQuestion = ref<Question | null>(null);

onMounted(() => {
  if (questions.value.length > 0) {
    const index = Math.floor(Math.random() * questions.value.length);
    randomQuestion.value = questions.value[index];
    newGoal.value.question = randomQuestion.value.question;
  }
});
</script>

<template>
  <div class="container">
    <form @submit.prevent="postBookGoal">
      <label>
        Skriv in ditt namn:
        <input type="text" id="name" v-model="newGoal.name" />
      </label>
      <label>
        Skriv in din ålder:
        <input type="text" id="age" v-model="newGoal.age" />
      </label>
      <label>
        Skriv in titeln på boken du läst:
        <input type="text" id="bookTitle" v-model="newGoal.bookTitle" />
      </label>

      <label v-if="randomQuestion">
        {{ randomQuestion.question }}
        <textarea id="answer" v-model="newGoal.answer" />
      </label>

      <label> Hur många stjärnor får boken? </label>
      <div class="rating">
        <input
          type="radio"
          id="star5"
          name="rating"
          value="5"
          v-model.number="newGoal.rating"
        />
        <label for="star5" title="5 stjärnor">★</label>

        <input
          type="radio"
          id="star4"
          name="rating"
          value="4"
          v-model.number="newGoal.rating"
        />
        <label for="star4" title="4 stjärnor">★</label>

        <input
          type="radio"
          id="star3"
          name="rating"
          value="3"
          v-model.number="newGoal.rating"
        />
        <label for="star3" title="3 stjärnor">★</label>

        <input
          type="radio"
          id="star2"
          name="rating"
          value="2"
          v-model.number="newGoal.rating"
        />
        <label for="star2" title="2 stjärnor">★</label>

        <input
          type="radio"
          id="star1"
          name="rating"
          value="1"
          v-model.number="newGoal.rating"
        />
        <label for="star1" title="1 stjärna">★</label>
      </div>

      <label>
        Mitt läsmål går till
        <input
          type="text"
          id="readGoalSportsClub"
          v-model="newGoal.organisation"
        />
      </label>
      <label>
        Sport:
        <input type="text" id="readGoalSport" v-model="newGoal.sport" />
      </label>

      <button type="submit">Skicka in läsmål</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center; // Centrera horisontellt
  align-items: center; // Centrera vertikalt
  background-image: url(../assets/bg-football.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    width: 100%; // Flexibelt
    max-width: 500px; // Begränsad bredd
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-family: sans-serif;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    color: #333;

    input[type="text"],
    textarea {
      margin-top: 0.5rem;
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      transition: border-color 0.3s;
      background-color: white;
      color: black;

      &:focus {
        border-color: #007acc;
        outline: none;
      }
    }
  }

  input[type="button"] {
    min-width: 200px;
    min-height: 60px;
    background-color: #007acc;
    text-transform: uppercase;
    border-radius: 30px;
    color: white;
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #005fa3;
    }
  }
}

.rating {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  gap: 0.3rem;
}

.rating input[type="radio"] {
  display: none;
}

.rating label {
  font-size: 2rem;
  color: #ccc;
  cursor: pointer;
  transition: color 0.2s;
}

// Gula stjärnor när vald
.rating input:checked ~ label,
.rating label:hover,
.rating label:hover ~ label {
  color: gold;
}
</style>
