<template>
  <!-- <div :class="{ active: isActive }" @click="itemClick" class="tab-bar-item"> -->
  <div @click="itemClick" class="tab-bar-item" :style="activeStyle">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
    <!-- 因为插槽部分将会被替换掉，动态绑定的class就没了，所以用div包起来 -->
    <!-- <div :class="{ active: isActive }"><slot name="item-icon"></slot></div>
    <div :class="{ active: isActive }"><slot name="item-text"></slot></div> -->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      //   isActive: true,
    };
  },
  computed: {
    isActive() {
      // $route是处于活跃路由，拿到它的path，看其中是否能找到某个item path，如果能找到即不等于-1
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      // 绑定class时，如果过于复杂，可以抽出来放到methods或computed里面
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      // 防止连续点击而报错
      this.$router.replace(this.path).catch((err) => err);
    },
  },
};
</script>

<style scoped>
.tab-bar-item span {
  font-family: "icomoon";
  width: 24px;
  height: 24px;
  font-size: 24px;
  vertical-align: middle;
}
.tab-bar-item {
  padding-top: 2px;
  flex: 1;
  text-align: center;
  /* 一般都是这个高度 */
  height: 49px;
}
/* .active {
  color: red;
} */
</style>