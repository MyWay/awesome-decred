<template>
    <div class="flex justify-center mb-8">
        <div class="w-full max-w-lg">
            <div class="flex flex-col md:flex-row md:items-center md:space-x-4">
                <label
                    class="input input-bordered flex items-center gap-2 mb-4 md:mb-0 md:w-1/2"
                >
                    <input
                        type="text"
                        v-model="searchQuery"
                        class="grow"
                        placeholder="Search Projects..."
                        @keyup.enter="searchProjects"
                    />
                </label>
                <select
                    v-model="selectedCategory"
                    class="select select-bordered mb-4 md:mb-0 md:w-1/2"
                >
                    <option value="">All Categories</option>
                    <option
                        v-for="category in categories"
                        :key="category"
                        :value="category"
                    >
                        {{ category }}
                    </option>
                </select>
                <PrimaryButton
                    @click="searchProjects"
                    class="md:w-auto"
                    text="Search"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import PrimaryButton from '@/components/ui/PrimaryButton.vue';

    const props = defineProps({
        projects: {
            type: Array,
            required: true,
        },
    });

    const emit = defineEmits(['search']);

    const searchQuery = ref('');
    const selectedCategory = ref('');

    const categories = computed(() => {
        const uniqueCategories = new Set(
            props.projects.map((project) => project.category)
        );
        return [...uniqueCategories];
    });

    const searchProjects = () => {
        emit('search', {
            query: searchQuery.value,
            category: selectedCategory.value,
        });
    };
</script>
