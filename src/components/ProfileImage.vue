<template>
    <img :src="imageLink" alt="Profile Image" class="h-8 w-8 rounded-l-3xl object-contain" />
</template>

<script>
import image from '@/assets/profileImage.jpg';

export default {
    name: 'ProfileImage',

    data() {
        return {
            imageLink: image,
        }
    }
}
</script>