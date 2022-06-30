<template>
  <div>
    <header>
      <h1>{}의 TO DO LIST</h1>
    </header>
    <div class="input-group">
      <input type="text" />
      <button>추가</button>
    </div>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
/* 
  1. template 문법을 배운다
  2. data와 method를 배운다
  3. v-bind와 v-model을 배운다
*/
export default {
  data() {
    return {};
  },
  methods: {
    name() {
      // ...
    },
  },
};
</script>

<style lang="scss" scoped>
.input-group {
  display: flex;
  align-items: center;
}
</style>
