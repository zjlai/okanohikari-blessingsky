<template>
  <div class="shine_star" ref="star">
    <div><span></span></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { dom } from 'quasar'
const { css } = dom

export default defineComponent({
  name: 'ShiningStar',
  setup (_, ctx) {
    onMounted(() => {
      const ele = ctx.refs.star as Element
      css(ele, {
        left: randNum(25, document.documentElement.clientWidth - 25).toString() + 'px',
        top: randNum(50, document.documentElement.clientHeight - 200).toString() + 'px',
        animationDuration: randNum(3, 5).toString() + 's',
        animationDelay: randNum(0, 2).toString() + 's'
      })
    })

    const randNum = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  }
})
</script>

<style scoped>
.shine_star {
  position: absolute;
  width: 0; height: 0;
  left: -2px; top: -2px;
  opacity: 1;
  animation-name: shine;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
.shine_star div {
  position: absolute;
  width: 5px;
  height: 5px;
  box-shadow: 0 0 14px 7px rgba(195,234,230,1);
  border-radius: 50%;
  background: #C3EAE6;
}
.shine_star div::before {
  content: ''; display: block;
  position: absolute;
  margin: 0 0 0 -22px;
  width: 50px;
  height: 2px;
  background: #C3EAE6;
  border-radius: 50%;
  box-shadow: 0 0 3px 1px rgba(195,234,230,1);
}
.shine_star div::after {
  content: ''; display: block;
  position: absolute;
  margin: 0 0 0 -30px;
  width: 65px;
  height: 2px;
  background: #C3EAE6;
  border-radius: 50%;
  box-shadow: 0 0 4px 0px rgba(195,234,230,1);
  transform: rotate(80deg);
}
.shine_star div span {
  display: block;
  position: absolute;
  margin: 0 0 0 -17px;
  width: 39px;
  height: 2px;
  background: #C3EAE6;
  border-radius: 50%;
  box-shadow: 0 0 19px 1px rgba(195,234,230,1);
  transform: rotate(-56deg);
}
@-webkit-keyframes shine {
  0% {
    opacity: 0;
    transform: scale(0,0);
  }
  70% {
    opacity: 1;
    transform: scale(1, 1);
  }
  100% {
    opacity: 0;
    transform: scale(0, 0);
  }
}
@keyframes shine {
  0% {
    opacity: 0;
    transform: scale(0, 0);
  }
  70% {
    opacity: 1;
    transform: scale(1, 1);
  }
  100% {
    opacity: 0;
    transform: scale(0, 0);
  }
}
</style>
