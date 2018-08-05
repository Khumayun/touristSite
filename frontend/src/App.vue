<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
  @font-face {
    font-family: 'brush';
    src: url('../assets/fonts/levibrush.ttf') format('truetype');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    outline: none
  }

  body {
    font-size: 14px;
    background: #fff;
    font-family: 'Roboto', sans-serif;
  }

  ol, ul {
    list-style: none;
  }

  section,
  li,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  i,
  div,
  html,
  body,
  ul,
  table,
  td,
  tr,
  tbody {
    cursor: default;
    outline: none;
    box-sizing: border-box;
    border: none;
  }

  a, input, textarea, select, option, button {
    text-decoration: none;
    color: inherit;
    outline: none;
    &:hover {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }
    &:visited {
      color: inherit;
      outline: none;
    }
    &:active, &:focus {
      outline: none;
      text-decoration: none;
    }
    textarea {
      resize: none;
    }
    textarea {
      resize: vertical;
    }
    textarea {
      resize: horizontal;
    }
  }

  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    /*-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);*/
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 1);
    /*-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);*/
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255, 255, 255, 0.8);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  #app{
    overflow: hidden;
  }
</style>
