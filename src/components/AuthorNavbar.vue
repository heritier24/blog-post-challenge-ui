<template>
  <div class="navbar navbar-dark my-4 p-0 font-primary">
    <ul class="navbar-nav w-100">
      <li class="nav-item active">
        <router-link to="/" class="nav-link text-white px-0 pt-0">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/post-blog" class="nav-link text-white px-0">New Blog Post</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/" class="nav-link text-white px-0">Logout</router-link>
      </li>
      <!-- <li class="nav-item mt-3">
        <select
          class="custom-select bg-transparent rounded-0 text-white shadow-none"
          id="pick-lang"
        >
          <option selected value="en">English</option>
          <option value="fr">French</option>
        </select>
      </li> -->
    </ul>
  </div>
</template>
