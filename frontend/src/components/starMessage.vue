<template>
  <div class="starmsg text-purple cursor-pointer z-max" ref="starmsg" :class="genColour()" q-if="message">
    <q-popup-proxy :offset="[10, 10]" @hide="hide">
      <q-card style="width:300px">
        <!-- <q-img :src="message.data.permalink ? '/hikarichan.png' : '/hikarichan.png'" contain /> -->
        <q-card-section>
          {{message.data.permalink ? message.data.caption : message.data.comment}}
        </q-card-section>
      </q-card>
    </q-popup-proxy>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { messagesInterface } from '../services/types'
import { dom } from 'quasar'
const { css } = dom

const colours = ['white', 'red', 'orange', 'yellow', 'blue', 'green', 'purple']
export default defineComponent({
  name: 'StarMessage',
  props: {
    message: {
      type: Object as (() => messagesInterface)
    }
  },
  setup (_, ctx) {
    const randNum = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    onMounted(() => {
      const ele = ctx.refs.starmsg as Element
      css(ele, {
        left: randNum(25, document.documentElement.clientWidth - 25).toString() + 'px',
        top: randNum(300, document.documentElement.clientHeight - 200).toString() + 'px',
        animationDuration: randNum(3, 5).toString() + 's',
        animationDelay: randNum(0, 2).toString() + 's'
      })
    })

    const genColour = () => {
      const colour = colours[Math.floor(Math.random() * colours.length)]
      return `pulse-${colour} ${colour}`
    }
    const hide = () => {
      ctx.emit('hide')
    }
    return {
      genColour,
      hide
    }
  }
})
</script>
<style lang="sass" scoped>
.starmsg
  position: absolute
  background: black
  border-radius: 50%
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 1)
  margin: 10px
  height: 20px
  width: 20px
  transform: scale(1)
  animation: pulse-white 2s infinite

@keyframes pulse-black
  0%
    transform: scale(0.95)
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7)

  70%
    transform: scale(1)
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0)

  100%
    transform: scale(0.95)
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0)

.starmsg.white
  background: white
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 1)
  animation: pulse-white 2s infinite

@keyframes pulse-white
  0%
    transform: scale(0.95)
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7)

  70%
    transform: scale(1)
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0)

  100%
    transform: scale(0.95)
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0)

.starmsg.red
  background: rgba(255, 82, 82, 1)
  box-shadow: 0 0 0 0 rgba(255, 82, 82, 1)
  animation: pulse-red 2s infinite

@keyframes pulse-red
  0%
    transform: scale(0.95)
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7)

  70%
    transform: scale(1)
    box-shadow: 0 0 0 10px rgba(255, 82, 82, 0)

  100%
    transform: scale(0.95)
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0)

.starmsg.orange
  background: rgba(255, 121, 63, 1)
  box-shadow: 0 0 0 0 rgba(255, 121, 63, 1)
  animation: pulse-orange 2s infinite

@keyframes pulse-orange
  0%
    transform: scale(0.95)
    box-shadow: 0 0 0 0 rgba(255, 121, 63, 0.7)

  70%
    transform: scale(1)
    box-shadow: 0 0 0 10px rgba(255, 121, 63, 0)

  100%
    transform: scale(0.95)
    box-shadow: 0 0 0 0 rgba(255, 121, 63, 0)

.starmsg.yellow
  background: rgba(255, 177, 66, 1)
  box-shadow: 0 0 0 0 rgba(255, 177, 66, 1)
  animation: pulse-yellow 2s infinite

@keyframes pulse-yellow
  0%
    transform: scale(0.95)
    box-shadow: 0 0 0 0 rgba(255, 177, 66, 0.7)

  70%
    transform: scale(1)
    box-shadow: 0 0 0 10px rgba(255, 177, 66, 0)

  100%
    transform: scale(0.95)
    box-shadow: 0 0 0 0 rgba(255, 177, 66, 0)

.starmsg.blue
  background: rgba(52, 172, 224, 1)
  box-shadow: 0 0 0 0 rgba(52, 172, 224, 1)
  animation: pulse-blue 2s infinite

@keyframes pulse-blue
  0%
    transform: scale(0.95)
    box-shadow: 0 0 0 0 rgba(52, 172, 224, 0.7)

  70%
    transform: scale(1)
    box-shadow: 0 0 0 10px rgba(52, 172, 224, 0)

  100%
    transform: scale(0.95)
    box-shadow: 0 0 0 0 rgba(52, 172, 224, 0)

.starmsg.green
  background: rgba(51, 217, 178, 1)
  box-shadow: 0 0 0 0 rgba(51, 217, 178, 1)
  animation: pulse-green 2s infinite

@keyframes pulse-green
  0%
    transform: scale(0.95)
    box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7)

  70%
    transform: scale(1)
    box-shadow: 0 0 0 10px rgba(51, 217, 178, 0)

  100%
    transform: scale(0.95)
    box-shadow: 0 0 0 0 rgba(51, 217, 178, 0)

.starmsg.purple
  background: rgba(142, 68, 173, 1)
  box-shadow: 0 0 0 0 rgba(142, 68, 173, 1)
  animation: pulse-purple 2s infinite

@keyframes pulse-purple
  0%
    transform: scale(0.95)
    box-shadow: 0 0 0 0 rgba(142, 68, 173, 0.7)

  70%
    transform: scale(1)
    box-shadow: 0 0 0 10px rgba(142, 68, 173, 0)

  100%
    transform: scale(0.95)
    box-shadow: 0 0 0 0 rgba(142, 68, 173, 0)
</style>
