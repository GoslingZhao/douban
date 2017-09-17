<template>
    <button id="headerToTop"><i class="iconfont icon-top"></i>
  </button>
</template>

<script>
export default {
  
  name: 'headerToTop',

  data () {
    return {

    };
  },
  
};
</script>

<style lang="scss" scoped>
#headerToTop{
  display: block;
  position: fixed;
  bottom: 0.62rem;
  left: 0;
  z-index: 2;
  background: #2196f3;
  width: 0.4rem;
  height: 0.4rem;
  margin: 0 0.06rem;
  padding: 0.08rem;
  border-radius: 50%;
  border: none;
  outline: none;
}
</style>