<template>
  <div class="home">
    <!-- END preloader-wrapper -->
    <!-- START main-wrapper -->
    <section class="d-flex">
      <!-- start of sidenav -->
      <aside>
        <div
          class="sidenav position-sticky d-flex flex-column justify-content-between"
        >
          <a class="navbar-brand" href="/">
            <!-- <img src="images/logo.png" alt=""> -->
            <a class="nav-link text-white px-0 pt-0">Blog Challenge</a>
          </a>
          <!-- end of navbar-brand -->

          <DefaultNavbar />
          <!-- end of navbar -->

          <ul class="list-inline nml-2">
            <li class="list-inline-item">
              <a href="#!" class="text-white text-red-onHover pr-2">
                <span class="fab fa-twitter"></span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#!" class="text-white text-red-onHover p-2">
                <span class="fab fa-facebook-f"></span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#!" class="text-white text-red-onHover p-2">
                <span class="fab fa-instagram"></span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#!" class="text-white text-red-onHover p-2">
                <span class="fab fa-linkedin-in"></span>
              </a>
            </li>
          </ul>
          <!-- end of social-links -->
        </div>
      </aside>
      <!-- end of sidenav -->
      <div class="main-content">
        <!-- end of mobile-nav -->
        <div class="container pt-4 mt-5">
          <div class="row justify-content-between">
            <div class="col-lg-7">
                <h2>Register Author To Create Blog Posts</h2><br><br><br>
              <div class="row">
                <label for="">Names:</label>
                <input type="text" class="form-control" placeholder="Names" v-model="name"><br><br><br>
                <label for="">Email:</label>
                <input type="text" class="form-control" placeholder="email address" v-model="email">
                <br><br><br>
                <label for="">Password:</label>
                <input type="password" class="form-control" placeholder="password" v-model="password"><br><br><br>
                <button type="button" class="btn btn-success" style="margin-left: 590px;" @click="loginBtn();">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
import { errorHandlingMixins } from '../mixins/errorHandlingMixins.js'
import DefaultNavbar from '../components/DefaultNavbar.vue'
export default {
  mixins: [errorHandlingMixins],
  components: {
    DefaultNavbar
  },
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async loginBtn () {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      try {
        const response = await axios.post(
          'http://localhost:8000/api/author', data
        )
        alert(response.data)
        this.$router.push('/login')
      } catch (error) {
        alert(error.response.data.errors[0])
      }
    }
  },
  mounted () {
    this.listBlogPosts()
  }
}
</script>
