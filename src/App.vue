<script setup>
import { onMounted, ref } from 'vue';
import menus from './menus.json'

// import Magnify from 'vue-material-design-icons/Magnify.vue';
// import HomeOutline from 'vue-material-design-icons/HomeOutline.vue';
// import TrendingUp from 'vue-material-design-icons/TrendingUp.vue';
// import Television from 'vue-material-design-icons/Television.vue';
// import MenuOutline from 'vue-material-design-icons/MenuOutline.vue';
// import Plus from 'vue-material-design-icons/Plus.vue';
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

    <div v-if="!showFullVideo" id="SideNav" class="flex z-40 items-center w-[120px] h-screen bg-black relative">
      <img class="absolute top-0 w-[35px] mt-10 ml-10" src="/images/logo.png" alt="">
    </div>

    <div v-if="!showFullVideo">
      <div class="fixed flex z-20 top-0 right-0 w-full h-[50%] bg-black pl-[120px] bg-clip-border">
        <div class="absolute z-30 h-[600px] left-[120px] w-[77%] right-0 top-0 bg-gradient-to-r from-black via-black" />
        
        <MenuDetails v-if="menu" :menu="menu" />

        <video 
          v-if="menu" 
          :src="'/videos/'+'crown'+'.mp4'" 
          autoplay 
          loop
          class="absolute z-0 h-[600px] right-0 top-0"
        />

      </div>

      <div class="fixed z-30 bottom-0 right-0 w-full h-[55%] pl-[120px] overflow-y-auto">
        <div class="fixed z-30 bottom-0 right-0 w-full h-[55%] pl-[120px] overflow-y-auto">
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
        tabindex="0"
    >
      <div v-if="showFullVideo">
        <div @click="showFullVideo = false" class="absolute z-50 p-2 m-4 bg-white bg-opacity-50 rounded-full cursor-pointer">
      
          <ChevronLeft fillColor="#FFFFFF" :size="40"/>
        
        </div>
        <img 
          :src="'/images/'+menu.name+'.png'" 
          class="absolute z-0  h-full object-fit-cover"
        />
      </div>
    </div>

  </div>

</template>
