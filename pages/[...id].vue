<template></template>
<script setup lang="ts">
const config = useRuntimeConfig();
const redirectUrl = config?.public.redirectUrl;
const route = useRoute();

onMounted(() => {
    const fullPath = redirectUrl + route.fullPath;
    window.location.href = fullPath;
});
</script>
