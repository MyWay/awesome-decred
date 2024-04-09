<template>
    <button class="btn btn-primary text-emerald-50" :title="props.text">
        {{ props.text }}
    </button>
</template>

<script setup>
    const props = defineProps({
        text: {
            type: String,
            required: true,
        },
    });
</script>
