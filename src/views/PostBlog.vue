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
                <h2>Record To Create Blog Posts</h2><br><br><br>
              <div class="row">
                <label for="">Title:</label>
                <input type="text" class="form-control" placeholder="Names" v-model="title"><br><br><br>
                <label for="">Published At::</label>
                <input type="date" class="form-control" placeholder="email address" v-model="published_at">
                <br><br><br>
                <label for="">Content:</label>
                <textarea type="text" class="form-control" placeholder="Entering Content" v-model="content"></textarea>
                <p></p><br><br><br><br><br>
                <button type="button" class="btn btn-success" style="margin-left: 500px;" @click="createBlog();">Create Blog</button>
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
      title: '',
      content: '',
      published_at: '',
      author_id: ''
    }
  },
  methods: {
    async createBlog () {
      const data = {
        title: this.title,
        content: this.content,
        published_at: this.published_at,
        author_id: this.$store.state.authorID
      }
      try {
        const response = await axios.post(
          'http://localhost:8000/api/post-blog', data
        )
        alert(response.data)
        this.$router.push('/author/blog')
      } catch (error) {
        alert(error.response.data.errors[0])
      }
    }
  },
  mounted () {
    // this.listBlogPosts()
  }
}
</script>
