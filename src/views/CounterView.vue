<template>
  <div class="container">
    <div class="child">
      <div>
        <h1>{{ counter }}</h1>
      </div>
      <div>
        <button @click="counter += step">+</button>
        <button @click="counter = 0">0</button>
        <button @click="counter -= step">-</button>
      </div>
      <div>
        <h1>step: {{ step }}</h1>
      </div>
      <div>
        <button @click="step = 1">1</button>
        <button @click="step = 2">2</button>
        <button @click="step = 3">3</button>
        <button @click="step = 4">4</button>
        <button @click="step = 5">5</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CounterView",
  data() {
    return {
      counter: 0,
      step: 3,
    };
  },
};
</script>

<style scoped>
.container {
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.child {
  background-color: #ffffff3f;
  border-radius: 30px;
  width: 50%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  margin: 5px;
}
</style>
