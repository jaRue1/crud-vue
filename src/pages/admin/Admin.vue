<template lang="">
<Nav /> 
<div class="container-fluid">
  <div class="row">
    <Menu />
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">

      <div class="table-responsive">
       <router-view />
      </div>

    </main>
  </div>
</div>
</template>
<script>
// @ in vue stands for the src folder
import Nav from '@/components/Nav.vue'
import Menu from '@/components/Menu.vue'
export default {
name: "Admin",
components: {Nav , Menu }
};
</script>
<style lang="">
</style>