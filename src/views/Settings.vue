<template>
    <div class="settings">
        <Sidebar />
        <h1 >Settings</h1>
        <ChangePassword />
    </div>

</template>
<script>
import Sidebar from '../components/Sidebar.vue';
import ChangePassword from '../components/ChangePassword.vue';
export default{
    name:'Settings',
    components: {
    Sidebar,
    ChangePassword,
  },
}
</script>
<style>
    .settings{
        padding-left: 10px;
    }
    .title{
        padding: 5px;
    }
</style>