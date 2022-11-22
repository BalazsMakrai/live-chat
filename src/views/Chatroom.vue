<template>
    <div class="container">
        <Navbar @redirect="redirect" />
        <ChatWindow />
        <NewChatForm />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import NewChatForm from '../components/NewChatForm.vue';
import ChatWindow from '../components/ChatWindow.vue';
import { useRouter } from 'vue-router';

export default {
    components: { Navbar, NewChatForm, ChatWindow },
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