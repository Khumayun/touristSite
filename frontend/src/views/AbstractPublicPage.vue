<template>
  <div class="abstract-page">
    <router-view/>
    <transition name="fade">
      <div class="loading" v-show="is_loading"><img src="../../assets/img/loading.gif"></div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "AbstractPublicPage",
    data() {
      return {
        is_loading: false
      }
    },
    provide() {
      return {
        globalLoading: this.globalLoading
      }
    },
    methods: {
      globalLoading: function(flag) {
        this.is_loading = flag;
      }
    }
  }
</script>

<style lang="scss">
  .abstract-page{
    .block {
      width: 100%;
      padding-left: 100px;
      padding-right: 100px;
      padding-top: 40px;
      padding-bottom: 40px;
      @media only screen and (max-width: 1220px) {
        padding-left: 50px;
        padding-right: 50px;
      }
      @media only screen and (max-width: 600px) {
        padding-left: 10px;
        padding-right: 10px;
      }
      .button {
        display: block;
          margin: 0 auto;
          margin-top: 20px;
          text-align: center;
          border: 1px solid #bd242b;
          font-weight: 400;
          font-size: 18px;
          text-transform: uppercase;
          letter-spacing: .02em;
          border-radius: 25px;
          padding: 10px 20px;
          color: #bd242b;
          width: max-content;
          transition: .3s;
          &:hover {
            background-color: #bd242b;
              color: white;
          }
      }
      .title {
        h2 {
          font-family: brush;
          text-align: center;
          font-size: 60px;
          letter-spacing: .01em;
          font-weight: 400;
          margin-bottom: 0;
        }
        h3 {
          font-weight: 700;
          text-align: center;
          font-size: 22px;
          line-height: 30px;
          font-weight: 300;
          letter-spacing: 0;
          margin-top: 0;
        }
        margin-bottom: 30px;
      }
    }
    .gray {
      background-color: #f4f4f4
    }
    .row {
      span{
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
      }
    }
    .loading{
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      background: rgba(0,0,0,0.7);
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-items: center;
      img{
        width: 300px;
        height: 300px;
      }
    }
  }
</style>
