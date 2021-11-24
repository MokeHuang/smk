<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ el }}</p>
    <form>
      <el-input v-model="name" placeholder="名称" style="width:200px"></el-input>
      <el-input v-model="price" placeholder="价格" style="width:200px"></el-input>
      <el-button type="primary" @click="addUser">提交</el-button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '',
      price: '',
      el: ''
    }
  },
  methods: {
    addUser() {
      const data = {
        name: this.name,
        price: this.price
      }
      this.$http.post('http://127.0.0.1:3000/api/user/addUser',
        data, {}).then((response) => {
        console.log(response);
      });
      // this.$http.get('http://127.0.0.1:3000/api/user/addUser')
      //   .then((response) => {
      //     console.log(response);
      // });
    }
  }
}
</script>
