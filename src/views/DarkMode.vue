<template>
  <div>
    <!-- 크래스 바인딩 class binding 을 배워본다 -->
    <!-- 조건 ? 'true일 경우' : 'false인 경우' -->
    <nav id="gnb" :class="다크모드켜짐 ? '어둠의네비게이션' : '빛의네비게이션'">
      <div class="container">
        <h1 class="logo">logo</h1>
        <!-- style 속성도 바인딩이 가능합니다 조건 ? {조건이 true일 경우 스타일 내용}:{조건이 false일 경우 스타일내용} -->
        <!-- 단, 스타일 이름은 카멜케이스로 적어야함, border-right => borderRight -->
        <div class="hbg-button">
          <span :style="다크모드켜짐 ? { backgroundColor: 'white' } : { backgroundColor: 'black' }" />
          <span :style="다크모드켜짐 ? { backgroundColor: 'white' } : { backgroundColor: 'black' }" />
          <span :style="다크모드켜짐 ? { backgroundColor: 'white' } : { backgroundColor: 'black' }" />
        </div>
      </div>
    </nav>
    <!-- class binding은 {true일경우추가할클래스 : 조건} 이런식으로도 가능합니다. false인 경우에 넣는게 없다면 이렇게 추가합니다. -->
    <main id="main" :class="{ 어둠의메인: 다크모드켜짐 }">
      <article class="container">
        <header>
          <!-- 내용으로 들어갈 것을 조건에 따라 만들 수도 있다 -->
          <h1>
            {{ 다크모드켜짐 ? "다크모드" : "라이트모드" }}
          </h1>
        </header>
        <section></section>
      </article>
    </main>
    <footer id="footer" :class="{ 어둠의푸터: 다크모드켜짐 }">
      <div class="container">this is footer</div>
    </footer>

    <!-- 다크모드 토글 버튼 -->
    <button class="dark-mode-toggler" @click="다크모드켜짐 = !다크모드켜짐">
      <!-- 내용으로 들어갈 것을 조건에 따라 만들 수도 있다 -->
      {{ 다크모드켜짐 ? "라이트모드" : "다크모드" }}로 변환
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      다크모드켜짐: false,
    };
  },
};
</script>

<style lang="scss" scoped>
#gnb {
  position: fixed;
  transition: all 0.3s;
  top: 0;
  left: 0;
  padding: 17px 0;
  width: 100%;
  max-width: 100vw;
  &.빛의네비게이션 {
    background: #ededed;
    color: #333;
  }
  &.어둠의네비게이션 {
    background: #222;
    color: #ededed;
  }
  .container {
    display: flex;
    justify-content: space-between;
    h1.logo {
      font-size: 16px;
    }
    .hbg-button {
      width: 24px;
      height: 24px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 5px 2px;
      span {
        width: 100%;
        height: 2px;
      }
    }
  }
}

#main {
  min-height: 100vh;
  margin-top: 60px;
  padding: 64px 0;
  transition: all 0.3s;
  &.어둠의메인 {
    background-color: #333;
    color: #ededed;
  }
}

.dark-mode-toggler {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}

#footer {
  transition: all 0.3s;
  padding: 16px;
  &.어둠의푸터 {
    background: #222;
    color: #ededed;
  }
}
</style>
