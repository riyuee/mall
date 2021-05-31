<template>
  <!-- ref如果是绑定到组件/元素，那么this.$refs.refname获取到的是一个组件/元素 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //   不用document.querySelector('.wrapper')，是因为其他组件也有同样的类名，
    this.scroll = new BScroll(this.$refs.wrapper, {});
  },
};
</script>

<style scoped>
</style>