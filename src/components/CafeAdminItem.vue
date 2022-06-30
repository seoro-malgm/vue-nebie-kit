<template>
  <div class="item">
    <div class="image">
      <img :src="item.src" :alt="item.name" />
    </div>
    <div class="info">
      <h1>{{ item.name }}</h1>
      <span>{{ item.price }}</span>
    </div>
    <div class="buttton-group">
      <button @click="수정(item)">수정</button>
      <button @click="삭제(item)">삭제</button>
    </div>
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
  methods: {
    수정(뭔진몰라도첫번째로온거) {
      this.$emit("edit", 뭔진몰라도첫번째로온거);
    },
    삭제(뭔진몰라도첫번째로온거) {
      this.$emit("remove", 뭔진몰라도첫번째로온거);
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  .image {
    padding: 8px;
    img {
      width: 300px;
      height: auto;
    }
  }
  .info {
    width: 100%;
  }
  .buttton-group {
    button {
      margin-bottom: 8px;
    }
  }
}
</style>
