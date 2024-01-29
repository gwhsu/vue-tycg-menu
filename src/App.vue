<script setup>
import { onMounted, ref } from 'vue';
import menus from './menus.json'

import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';

import VideoCarousel from '@/components/VideoCarousel.vue';
import MenuDetails from '@/components/MenuDetails.vue';

import { useMenuStore } from './stores/menu'
import { storeToRefs } from 'pinia';
const useMenu = useMenuStore()
const { menu, showFullVideo } = storeToRefs(useMenu)

let video = ref(null)

onMounted(() => {
  setTimeout(() => menu.value = menus[0][0], 100)
})
</script>

<template>
  <div class="fixed w-full h-screen bg-black">

    <div v-if="!showFullVideo" id="SideNav" class="flex flex-col z-40 items-center w-full h-[30px] relative">
      <img class="absolute top-0 w-[35px] mt-50" src="/images/logo.png" alt="">
    </div>

    <div v-if="!showFullVideo">
      <div class="fixed flex z-20 top-0 right-0 w-full h-[100%] bg-black pl-[10px] bg-clip-border">
        <div class="absolute z-30 h-[70%] left-[10px] w-[100%] right-0 top-0 bg-gradient-to-r from-black via-black" />
        
        <MenuDetails v-if="menu" :menu="menu" />

        <video 
          v-if="menu" 
          :src="'/videos/'+'crown'+'.mp4'" 
          autoplay 
          loop
          class="absolute z-0 h-[600px] right-0 top-0"
          style="transform: translateX(100px);"
        />

      </div>

      <div class="fixed z-30 bottom-0 right-0 w-full h-[55%] pl-[10px] overflow-y-auto">
        <div class="fixed z-30 bottom-0 right-0 w-full h-[55%] pl-[10px] overflow-y-auto">
          <VideoCarousel class="pb-14 pt-14" category="Popular Menu" :menus="menus[0]" />
          <!-- <VideoCarousel class="pb-14" category="Horror Menus" :menus="menus[1]" />
          <VideoCarousel class="pb-32" category="Featured Menus" :menus="menus[2]" /> -->
        </div>
      </div>

      <div class="absolute z-20 h-[70%] left-[120px] w-[100%] right-0 bottom-0 bg-gradient-to-t from-black via-black" />
    </div>
    <div 
        class="fixed w-full h-screen bg-black"
        @keyup.esc="showFullVideo = false"
        @keydown.left="showFullVideo = false"
        tabindex="0"
    >
      <div v-if="showFullVideo">
        <div @click="showFullVideo = false" class="absolute z-50 p-2 m-4 bg-white bg-opacity-50 rounded-full cursor-pointer">
      
          <ChevronLeft fillColor="#FFFFFF" :size="40"/>
        
        </div>
        <img 
          :src="'/images/'+ menu.name +'.png'" 
          class="absolute z-0  h-full object-fit-cover"
        />
      </div>
    </div>

  </div>

</template>
<style>
  /* 確保頁面寬度與螢幕寬度相同，並禁止縮放 */
  @viewport {
    width: device-width;
    initial-scale: 1;
  }

  /* 定義小於 600px 寬度的螢幕的樣式 */
  @media screen and (max-width: 1000px) {
    body {
      font-size: 8px; /* 使用較大的字體 */
    }

    /* 確保按鈕在小螢幕上看起來更大 */
    button {
      padding: 10px 20px;
      font-size: 10px;
    }
    img.absolute.z-0.object-fit-cover {
      height: auto;
    }
    /* 簡化並堆疊導航欄 */
    #SideNav {
      width: 10%;
      height: auto;
    }

    /* 調整影片輪播的大小和位置 */
    .VideoCarousel {
      width: 50%;
      padding: 1px;
    }
  }
</style>