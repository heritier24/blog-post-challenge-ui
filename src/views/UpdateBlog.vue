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
                <h2>Update Blog Posts</h2><br><br><br>
              <div class="row">
                <label for="">Title:</label>
                <input type="text" class="form-control" placeholder="title of Blog" v-model="title"><br><br><br>
                <label for="">Published At::</label>
                <input type="date" class="form-control" placeholder="email address" v-model="published_at">
                <br><br><br>
                <label for="">Content:</label>
                <textarea type="text" class="form-control" placeholder="Entering Content" v-model="content"></textarea>
                <p></p><br><br><br><br><br>
                <button type="button" class="btn btn-success" style="margin-left: 500px;" @click="updateBlogPost();">Update Blog</button>
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
    async updateBlogPost () {
      const data = {
        titles: this.title,
        content: this.content,
        published_at: this.published_at,
        author_id: this.$store.state.authorID
      }
      try {
        const response = await axios.put(
          'http://localhost:8000/api/update-post-blog/' + this.$route.params.id, data
        )
        alert(response.data)
        this.$router.push('/author/blog')
      } catch (error) {
        alert(error.response.data.errors[0])
      }
    },
    async listBlogPostsToupdate () {
      try {
        const response = await axios.get(
          'http://localhost:8000/api/list-blog/' + this.$route.params.id
        )
        this.title = response.data.titles
        this.content = response.data.content
        this.published_at = response.data.published_at
      } catch (error) {
        alert(error.response.data.errors[0])
      }
    }
  },
  mounted () {
    this.listBlogPostsToupdate()
  }
}
</script>
