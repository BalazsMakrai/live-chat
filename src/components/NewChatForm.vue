<template>
    <form>
        <textarea placeholder="Type message and hit enter to send..." v-model="message"
            @keypress.enter.prevent="handleSubmit">
        </textarea>
        <div class="error">{{ error }}</div>
    </form>
</template>

<script>
import getUser from '@/composables/getUser';
import { ref } from 'vue';
import { timestamp } from '@/firebase/config';
import useCollection from './useCollection';

export default {
    setup() {
        const { user } = getUser();
        const { addDoc, error } = useCollection('messages');
        const message = ref('');
        const handleSubmit = async () => {
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: timestamp()
            };
            await addDoc(chat);
            if (!error.value) {
                message.value = '';
            }
        };
        {
            return {
                message,
                handleSubmit,
                error
            };
        }
    }
};
</script>
<style scoped>
textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}

form {
    margin: 10px;
}
</style>