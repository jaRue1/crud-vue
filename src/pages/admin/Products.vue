<template lang="">
  <div class='pt-3 pb-2 mb-3 border-bottom'>
    <div class='btn-toolbar mb-2 mb-md-0'> 
      <router-link to='/admin/products/create' class='btn btn-outline-secondary'>Add Product</router-link>
    </div>
  </div>
  <div class='table-responsive'>
   <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Likes</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          <!-- A for loop "SPACING MATTERS" -->
            <tr v-for="product in products" :key="product.id">
              <td>{{product.id}}</td>
              <td><img :src="product.image" height="50"/></td>
              <td>{{product.title}}</td>
              <td>{{product.likes}}</td>
              <td>
                <div class="btn-group mr-2">
                  <router-link :to="`admin/products/${product.id}/edit`" class="btn btn-sm btn-outline-secondary" @click="del(product.id)">Edit Product</router-link>
                  <a href="#" class="btn btn-sm btn-outline-secondary" @click="del(product.id)">Delete</a>
                </div>
              </td>
            </tr>
          </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";
 
// importing my product interface
import { Product } from "@/interfaces/product";
export default {
  name: "Products",
  // how to declare a variable that you want to use in within the template of the component you are working with.
  setup() {
    const products = ref([]);
    onMounted(async () => {
      const response = await fetch("http://localhost:8000/api/products");
      // needed to add .value in order for products to render
      products.value = await response.json();
      //  for testings if i got back my data
      // const data = await response.json();
      // console.log(data);
    });
    const del = async (id: number) => {
      if (confirm("Are you sure you want to delete this product ?")) {
        await fetch(`http://localhost:8000/api/products/${id}`, {
          method: "DELETE",
        });
      }
      products.value = products.value.filter((p: Product) => p.id !== id);
    };
    return {
      products,
      del,
    };
  },
};
</script>
<style lang="">
</style>