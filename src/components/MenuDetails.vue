<template>
    <div v-if="menu" class="z-40 text-white w-[53%] pt-20">
        <div class=" font-semibold font-serif" style="font-size: xx-large">{{ menu.name }}</div>
        <div class="flex items-center text-lg pt-4">
            <div style="font-size: small;">{{ menu.year }}</div>
            <div class="relative" style="font-size: medium;">
                <span class="absolute left-[2px] -top-[12px] text-[40px]">.</span>
                <span class="pl-4">{{ menu.genre.one }}</span>
            </div>
            <div class="relative" style="font-size: small;">
                <span class="absolute left-[2px] -top-[12px] text-[40px]">.</span>
                <span class="pl-4" style="color: Gold;">{{ menu.genre.two }}</span>
            </div>
            <!-- <div class="relative">
                <span class="absolute left-[2px] -top-[12px] text-[40px]">.</span>
                <span class="pl-4">{{ menu.genre.three }}</span>
            </div> -->
        </div>
        <div class="text-2xl pt-6 overflow-hidden " style="-webkit-line-clamp: 10; display: -webkit-box; -webkit-box-orient: vertical; max-height: 6 em; line-height: 1em;font-size: 18px;">
            {{ menu.description }}
        </div>
    </div>
</template>

<script setup>
    defineProps({ menu: Object })
</script>