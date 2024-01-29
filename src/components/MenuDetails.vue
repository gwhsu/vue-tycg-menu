<template>
    <div v-if="menu" class="z-40 text-white w-[53%] pt-20">
        <div class="text-[55px] font-semibold font-serif">{{ menu.name }}</div>
        <div class="flex items-center text-lg pt-4">
            <div>{{ menu.year }}</div>
            <div class="relative">
                <span class="absolute left-[2px] -top-[12px] text-[40px]">.</span>
                <span class="pl-4">{{ menu.genre.one }}</span>
            </div>
            <div class="relative">
                <span class="absolute left-[2px] -top-[12px] text-[40px]">.</span>
                <span class="pl-4" style="color: Gold;">{{ menu.genre.two }}</span>
            </div>
            <div class="relative">
                <span class="absolute left-[2px] -top-[12px] text-[40px]">.</span>
                <span class="pl-4">{{ menu.genre.three }}</span>
            </div>
        </div>
        <div class="text-2xl pt-6">{{ menu.description }}</div>
    </div>
</template>

<script setup>
    defineProps({ menu: Object })
</script>