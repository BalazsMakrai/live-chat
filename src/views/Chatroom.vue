<template>
    <div class="container">
        <Navbar @redirect="redirect" />
        <NewChatForm />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import NewChatForm from '../components/NewChatForm.vue';
import { useRouter } from 'vue-router';

export default {
    components: { Navbar, NewChatForm },
    setup() {
        const router = useRouter();
        const redirect = () => {
            router.push({ name: 'Welcome' });
        };
        return {
            redirect
        };
    }
};
</script>