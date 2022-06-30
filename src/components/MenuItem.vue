<template>
  <div>
    <figure>
      <img src="../assets/cafemenu/americano.jpeg" alt="아메리카노 이미지" />
      <figcaption>
        <h1>아메리카노</h1>
        <span>2500원</span>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped></style>
