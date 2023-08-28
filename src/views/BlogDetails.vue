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
                <MainContent
                 v-for="(blog, key) in blogs" :key="key"
                 :blogID="blog.id"
                 :cardPostItem="blog.cardPostItem"
                 :authorName="blog.authorName"
                 :cardBody="blog.cardBody"
                 :cardTitle="blog.cardTitle"
                 :content="blog.content"
                 :linkClassReadmore="blog.linkClassReadmore"
                 :paragraphClassBody="blog.paragraphClassBody"
                 :postLinkClassAuthor="blog.postLinkClassAuthor"
                 :postLinkClassPublished="blog.postLinkClassPublished"
                 :postUlClass="blog.postUlClass"
                 :published_at="blog.published_at"
                 :readMore="blog.readMore"
                 :readMoreImg="blog.readMoreImg"
                 :spanPublishedClassIcon="blog.spanPublishedClassIcon"
                 :title="blog.titles"
                 :titleLinkClass="blog.titleLinkClass"
                 />
              <!-- end of post-item -->
              <!-- end of post-item -->
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
import MainContent from '../components/MainContent.vue'
import DefaultNavbar from '../components/DefaultNavbar.vue'
export default {
  mixins: [errorHandlingMixins],
  components: {
    MainContent,
    DefaultNavbar
  },
  data () {
    return {
      blogs: []
    }
  },
  methods: {
    async listBlogPosts () {
      try {
        const response = await axios.get(
          'http://localhost:8000/api/list-blog/' + this.$route.params.id
        )
        this.blogs = response.data
      } catch (error) {
      }
    }
  },
  mounted () {
    this.listBlogPosts()
  }
}
</script>
