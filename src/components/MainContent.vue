<template>
  <div :class="cardPostItem">
    <a href="#">
        <!-- <img class="card-img-top rounded-0" src="images/post/post-lg/01.png" alt=""> -->
        <i hidden>{{ blogID }}</i>
    </a>
    <div :class="cardBody">
    <h2 :class="cardTitle">
      <a :class="titleLinkClass" href="#" @click="getDetailsBlog();"
        >{{ title }}</a
      >
    </h2>
    <ul :class="postUrlClass">
      <li :class="postLinkClassPublished">
        <span :class="spanPublishedClassIcon"></span>
        <a class="" href="#">{{ published_at }}</a>
      </li>
      <li :class="postLinkClassAuthor">
        <!-- <span class="fas fa-list-alt text-primary"></span> -->
        <a href="#">author by: <span>{{ authorName }}</span></a>
      </li>
    </ul>
    <p :class="paragraphClassBody">
      {{ content }}
    </p>
    <a href="#" :class="linkClassReadmore"
      >{{ readMore }} <img :src="readMoreImg" @click="getDetailsBlog()"
    /></a>
  </div>
  </div>
</template>
<script>
export default {
  props: {
    blogID: {
      type: String,
      default: '',
      required: true
    },
    cardPostItem: {
      type: String,
      default: 'card post-item bg-transparent border-0 mb-5',
      required: true
    },
    cardBody: {
      type: String,
      default: 'card-body px-0',
      required: true
    },
    cardTitle: {
      type: String,
      default: 'card-title',
      required: true
    },
    titleLinkClass: {
      type: String,
      default: 'text-white opacity-75-onHover',
      required: true
    },
    title: {
      type: String,
      default: 'Id reprehrenderit mollit in tempor naid incididunt cupidatat',
      required: true
    },
    postUlClass: {
      type: String,
      default: 'post-meta mt-3',
      required: true
    },
    postLinkClassPublished: {
      type: String,
      default: 'd-inline-block mr-3',
      required: true
    },
    spanPublishedClassIcon: {
      type: String,
      default: 'fas fa-clock text-primary',
      required: true
    },
    published_at: {
      type: String,
      default: '24 April, 2016',
      required: true
    },
    postLinkClassAuthor: {
      type: String,
      default: 'd-inline-block',
      required: true
    },
    authorName: {
      type: String,
      default: 'Default author',
      required: true
    },
    paragraphClassBody: {
      type: String,
      default: 'card-text my-4',
      required: true
    },
    content: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt leoviverra urna Arcu velit risus, condimentum ut vulputate cursus porttitor turpis in Diam egestas nec massa habitasse Tincidt dui',
      required: true
    },
    linkClassReadmore: {
      type: String,
      default: 'btn btn-primary',
      required: true
    },
    readMore: {
      type: String,
      default: 'Read More',
      required: true
    },
    readMoreImg: {
      type: String,
      default: 'images/arrow-right.png',
      required: true
    }
  },
  methods: {
    getDetailsBlog () {
      this.$router.push('/list-blog/' + this.blogID)
    //   window.location.href = '/list-blog/' + this.blogID
    }
  }
}
</script>
