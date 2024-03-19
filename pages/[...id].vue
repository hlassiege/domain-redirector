<template></template>
<script setup lang="ts">
const config = useRuntimeConfig();
const redirectUrl = config?.public.redirectUrl;
const route = useRoute();

const fullPath = redirectUrl + route.fullPath;
navigateTo(fullPath, { external: true, redirectCode: 301 });
</script>
