<template>
    <footer class="bg-gray-800 text-white py-6 mt-auto">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-4 md:mb-0">
                    <h3 class="text-xl font-bold mb-2">Awesome Decred</h3>
                    <p class="text-sm">
                        &copy; {{ currentYear }} Decred Awesome. No rights
                        reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
    const currentYear = new Date().getFullYear();
</script>
