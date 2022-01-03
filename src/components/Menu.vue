<template lang="">
      <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="sidebar-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link :to="`/`" class="nav-link active" >Home</router-link>
            <router-link :to="`/admin/products/create`" class="nav-link active" >Create</router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>
<script>
export default {
  name: "Menu"
}
</script>
<style lang="">
  
</style>