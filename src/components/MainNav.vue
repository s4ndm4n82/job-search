<template>
    <header class="w-full text-sm">
        <div class="fixed top-0 left-0 w-full h-16 bg-white">
            <div class="flex flex-nowrap h-full border-b border-solid border-brand-grey-1 px-8 mx-auto">
                <a href="/" class="flex h-full items-center text-xl">
                    {{ company }}
                </a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'MainNav',
    data() {
        return {
            company: "Careers by S4NDM4M"
        };
    },
};
</script>