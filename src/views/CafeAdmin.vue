<template>
  <div>
    <header>
      <h1>카페 관리자 페이지</h1>
    </header>
    <section>
      <ul>
        <li v-for="(item, i) in menuList" :key="i">
          <div class="item">
            <div class="image">
              <img :src="item.src" :alt="item.name" />
            </div>
            <div class="info">
              <h1>{{ item.name }}</h1>
              <span>{{ item.price }}</span>
            </div>
            <div class="buttton-group">
              <button v-on:click="수정()">수정</button>
              <button v-on:click="삭제()">삭제</button>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
/**
 * 1. component의 event를 emit하는 법을 배운다
 */

export default {
  data() {
    return {
      menuList: [
        {
          name: "아메리카노",
          src: require("@/assets/cafemenu/americano.jpeg"),
          price: 2500,
        },
        {
          name: "카페라떼",
          src: require("@/assets/cafemenu/latte.jpeg"),
          price: 3000,
        },
        {
          name: "딸기 요거트 쉐이크",
          src: require("@/assets/cafemenu/yogurt-shake.jpeg"),
          price: 4000,
        },
        {
          name: "터닝메카드 오렌지",
          src: require("@/assets/cafemenu/mecard-orange.jpeg"),
          price: 4500,
        },
      ],
    };
  },
  methods: {
    수정() {
      console.log("수정");
    },
    삭제() {
      console.log("삭제");
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
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
}
</style>
