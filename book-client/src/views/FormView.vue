<script setup lang="ts"></script>

<template>
  <div class="container">
    <form>
      <label>
        Skriv in ditt namn:
        <input type="text" id="name" />
      </label>
      <label>
        Skriv in din ålder:
        <input type="text" id="age" />
      </label>
      <label>
        Skriv in titeln på boken du läst:
        <input type="text" id="bookTitle" />
      </label>
      <label>
        En fråga som genereras från databasen:
        <textarea id="randomQuestion" />
      </label>
      <label> Hur många stjärnor får boken? </label>

      <div class="rating">
        <input type="radio" id="star5" name="rating" value="5" />
        <label for="star5" title="5 stjärnor">★</label>

        <input type="radio" id="star4" name="rating" value="4" />
        <label for="star4" title="4 stjärnor">★</label>

        <input type="radio" id="star3" name="rating" value="3" />
        <label for="star3" title="3 stjärnor">★</label>

        <input type="radio" id="star2" name="rating" value="2" />
        <label for="star2" title="2 stjärnor">★</label>

        <input type="radio" id="star1" name="rating" value="1" />
        <label for="star1" title="1 stjärna">★</label>
      </div>

      <label>
        Mitt läsmål går till
        <input type="text" id="readGoalSportsClub" />
      </label>
      <label>
        Sport:
        <input type="text" id="readGoalSport" />
      </label>
      <router-link to="/done">
        <input type="button" value="Skicka in läsmål" />
      </router-link>
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
