<template>
    <nav v-if="user">
        <div>
            <p>Hey there {{ user.displayName }}</p>
            <p class="email">Currently logged in as {{ user.email }}</p>
        </div>
        <button @click="handleClick">Logout</button>
    </nav>
</template>

<script>
import useLogout from '@/composables/useLogout';
import getUser from '@/composables/getUser';
export default {
    setup(props, context) {
        const { logout, error } = useLogout();
        const { user } = getUser();
        const handleClick = async () => {
            await logout();
            if (!error.value) {
                context.emit('redirect');
            }
        };
        return { handleClick, user };
    }
};
</script>
<style>
nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444
}

nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav p.email {
    color: #999;
    font-size: 14px;
}
</style>