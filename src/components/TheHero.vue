<template>
    <main>
        <section class="flex flex-col h-screen pt-10 pb-20">
            <div class="grid grid-cols-12">
                <div class="col-span-1 col-start-1"></div>
                <div class="col-span-5 col-start-2">
                    <the-headline />
                    <job-search-form />
                </div>
                <div class="col-span-5 col-start-7"></div>
                <div class="col-span-1 col-start-12"></div>
            </div>
        </section>
    </main>
</template>

<script>
import TheHeadline from '@/components/TheHeadline.vue';
import JobSearchForm from '@/components/JobSearchForm.vue';

export default {
    name: 'TheHero',
    components: {
        TheHeadline,
        JobSearchForm,
    },
};
</script>
