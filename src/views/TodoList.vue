<template>
  <!-- 
  1. Vue는 템플릿 문법을 사용합니다 https://kr.vuejs.org/v2/guide/syntax.html
  2. template 태그 안에 html 코드를 넣습니다
  3. template 안에 template 태그를 또 사용할 수도 있습니다.
  4. 최상단의 template 태그는 자식 태그가 단 하나만 올 수 있습니다.
  -->
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
