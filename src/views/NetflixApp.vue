<template>
  <div>
    <section class="wrapper">
      <header>
        <h1>NETFLIX</h1>
      </header>
      <article class="movie-container">
        <ul>
          <li v-for="(item, i) in 영화목록" :key="i">
            <figure>
              <img :src="item.large_cover_image" :alt="`${item.title} poster`" />
              <figcaption>
                <h1>{{ item.title }}</h1>
                <p>
                  {{ item.summary }}
                </p>
                <div class="">
                  <strong>
                    {{ item.rating }}
                  </strong>
                </div>
              </figcaption>
            </figure>
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script>
import axios from "axios";
/**
 * 1. 라이프사이클을 배운다
 * 2. computed를 배운다
 */

export default {
  data() {
    return {
      영화목록: [],
    };
  },
  computed: {},
  methods: {
    async 영화불러오기() {
      try {
        // 영화 API 실행
        const {
          data: { data: data },
        } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        // 실행해서 movies에 넣는다
        if (data) {
          this.영화목록 = data.movies;
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  // 라이프사이클
  mounted() {
    this.영화불러오기();
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  header {
    text-align: center;
    padding: 64px 0 72px;
  }
  .movie-container {
    width: 1200px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    ul {
      list-style: none;
      display: flex;
      width: 100%;
      align-items: flex-start;
      flex-wrap: wrap;
      padding: 0;
      li {
        flex: 0 0 25%;
        max-width: 25%;
        padding: 0 12px;
        figure {
          width: 100%;
          img {
            width: 100%;
          }
          figcaption {
            h1 {
              margin: 0;
              padding: 8px 0 12px;
              font-size: 20px;
            }
            p {
              width: 100%;
              margin: 0;
              height: 56px;
              font-size: 14px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #999999;
            }
            strong {
              color: red;
            }
          }
        }
      }
    }
  }
}
</style>
