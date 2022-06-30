<template>
  <div>
    <header>
      <h1>Cafe</h1>
    </header>
    <section class="menu-container">
      <ul class="menu-list">
        <!-- 메뉴 아이템을 반복해보자 -->
        <li>
          <figure>
            <img src="../assets/cafemenu/americano.jpeg" alt="아메리카노 이미지" />
            <figcaption>
              <h1>아메리카노</h1>
              <span>2500원</span>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <!-- @는 src폴더에서 시작한다는 의미이다 -->
            <img src="@/assets/cafemenu/latte.jpeg" alt="카페라떼 이미지" />
            <figcaption>
              <h1>카페라떼</h1>
              <span>3000원</span>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src="@/assets/cafemenu/yogurt-shake.jpeg" alt="딸기 요거트 쉐이크 이미지" />
            <figcaption>
              <h1>딸기 요거트 쉐이크</h1>
              <span>4000원</span>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src="@/assets/cafemenu/mecard-orange.jpeg" alt="터닝메카드 오렌지 이미지" />
            <figcaption>
              <h1>터닝메카드 오렌지</h1>
              <span>4500원</span>
            </figcaption>
          </figure>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
/**
 * 1. 조건문, 반복문을 배운다
 * 2. component를 배운다
 * 3. component에 props하는 법을 배운다
 */
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
header {
  padding: 56px 0 32px;
  text-align: center;
}
.menu-container {
  width: 1140px;
  margin: 0 auto;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  .menu-list {
    list-style: none;
    display: flex;
    width: 100%;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 0;
    li {
      padding: 12px;
      flex: 0 0 25%;
      figure img {
        transition: transform 0.3s;
      }
      &:hover {
        figure img {
          cursor: pointer;
          transform: scale(1.04);
        }
      }
      figure {
        width: 100%;
        img {
          width: 100%;
          height: auto;
        }
        figcaption {
          padding: 8px 0 12px;
          h1 {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
