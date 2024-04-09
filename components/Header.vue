<template>
    <header class="bg-white shadow">
        <div
            class="container mx-auto py-4 px-6 flex items-center justify-between"
        >
            <div class="flex items-center">
                <img
                    src="/images/logo.webp"
                    alt="Awesome Decred's Logo"
                    class="h-10 mr-4"
                />
                <h1 class="text-2xl font-bold text-gray-800">Awesome Decred</h1>
            </div>
            <div>
                <a
                    :href="
                        'https://github.com' +
                        REPO +
                        '/blob/main/resources.json'
                    "
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button class="btn btn-warning text-blue-950">+Add</button>
                </a>
            </div>
        </div>
    </header>
</template>

<script setup>
    const config = useRuntimeConfig();
    const REPO = config.public.REPO;
</script>
