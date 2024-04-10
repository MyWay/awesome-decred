<template>
    <div class="container mx-auto py-8">
        <p class="text-center text-xl mb-8">
            Discover amazing Decred projects and resources.
        </p>
        <div role="alert" class="alert bg-blue-200 mb-6" v-if="isAlertOpen">
            <div>
                <h3 class="font-bold">Suggest a Project</h3>
                <div class="text-xs">
                    Suggest a Decred-related project using the Add button and
                    submitting a Pull Request.
                </div>
                <button
                    @click="isAlertOpen = false"
                    class="btn btn-sm mt-4 btn-warning text-blue-950"
                >
                    Close
                </button>
            </div>
        </div>
        <Search :projects="projects" @search="onSearch" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2">
            <div
                v-for="project in filteredProjects"
                :key="project.id"
                class="bg-white shadow-md rounded-lg p-6"
            >
                <div class="flex items-center mb-4">
                    <img
                        :src="`${
                            GH_PAGES_PREFIX
                                ? '${GH_PAGES_PREFIX}${project.icon}'
                                : project.icon
                        }`"
                        class="w-12 h-12 mr-4"
                    />
                    <h2 class="text-2xl font-semibold">{{ project.title }}</h2>
                </div>
                <p class="text-gray-600">{{ project.description }}</p>
                <div class="mt-4 text-center">
                    <a
                        :href="project.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-blue-600 hover:underline"
                    >
                        <span class="inline-flex items-center">
                            <span class="mr-1">Go to Project</span>
                            <UiIconsExternalLink class="w-4 h-4" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed, onMounted, watch } from 'vue';
    import Search from '@/components/Search.vue';

    const config = useRuntimeConfig();
    const REPO = config.public.REPO;
    const GH_PAGES_PREFIX = config.public.GH_PAGES_PREFIX;

    const projects = ref([]);
    const searchQuery = ref('');
    const selectedCategory = ref('');
    const isAlertOpen = ref(true);

    const fetchProjects = async () => {
        try {
            const response = await fetch(
                'https://api.github.com/repos' +
                    REPO +
                    '/contents/resources.json',
                {
                    headers: {
                        'X-GitHub-Api-Version': '2022-11-28',
                    },
                }
            );
            const data = await response.json();
            if (data.content && data.encoding === 'base64') {
                const decodedContent = atob(data.content);
                projects.value = JSON.parse(decodedContent);
            } else {
                console.error('Invalid response format');
            }
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    onMounted(fetchProjects);

    const onSearch = (payload) => {
        searchQuery.value = payload.query;
        selectedCategory.value = payload.category;
    };

    const filteredProjects = computed(() => {
        return projects.value.filter((project) => {
            const nameMatch = project.title
                .toLowerCase()
                .includes(searchQuery.value.toLowerCase());
            const categoryMatch =
                selectedCategory.value === '' ||
                project.category === selectedCategory.value;
            return nameMatch && categoryMatch;
        });
    });
</script>
