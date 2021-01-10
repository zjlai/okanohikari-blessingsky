<template>
  <q-layout view="hhh lpR fff">

    <!-- <q-header class="text-center bg-transparent text-black">
      <q-toolbar class="bg-transparent">
        <q-toolbar-title>
          Okanohikari - Blessing Sky
        </q-toolbar-title>
      </q-toolbar>
    </q-header> -->

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'MainLayout'
})
</script>
