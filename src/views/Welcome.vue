<template>
    <div class="welcome container">
        <p>Welcome</p>
        <div v-if="showLogin">
            <h2>Login to the chatroom</h2>
            <LoginForm @login="enterChat" />
            <p>No account yet? <span @click="showLogin = false">Signup</span> instead</p>
        </div>
        <div v-else>
            <h2>Sign up to the chatroom</h2>
            <SignupForm @signup="enterChat" />
            <p>Already registered? <span @click="showLogin = true">Login</span> instead</p>
        </div>
    </div>
</template>
<script>
import SignupForm from '../components/SignupForm.vue';
import LoginForm from '../components/LoginForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    components: {
        SignupForm,
        LoginForm
    },
    setup() {
        const showLogin = ref(true);
        const router = useRouter();
        const enterChat = () => {
            router.push({ name: 'Chatroom' });
        };
        return {
            showLogin,
            enterChat
        };
    }
};
</script>
<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}

.welcome form {
    width: 300px;
    margin: 20px auto;
}

.welcome label {
    margin: 20px 0 10px;
    display: block;
}

.welcome input {
    margin: 10px auto;
    color: #999;
    outline: none;
    border: 1px solid #eee;
    border-radius: 20px;
    padding: 10px;
    width: 100%
}

.welcome span {
    cursor: pointer;
    text-decoration: underline;
    font-weight: bold;
}

.welcome button {
    margin: 20px auto
}
</style>