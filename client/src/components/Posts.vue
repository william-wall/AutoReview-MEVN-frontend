<template>
  <div class="posts">
    <h1>Posts</h1>
    <div v-if="posts.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'addpost' }" class="">Add Post</router-link>
      </div>
      <div class="container">
        <div class="well">
          <form class="form-inline">
            <h1><label>Enter text</label></h1>
            <input type="text" title="title" class="form-control" v-model="searchQuery">
          </form>
        </div>
        <!--<p v-for="post in filteredUsers">{{ post.title }}</p>-->
      <div class="well">
        <ul>
          <li v-for="post in filteredUsers" class="list-group-item">
            <!--| filterBy search in 'title'-->
            <h1>{{post.title}}</h1>
          </li>
        </ul>
      </div>
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Description</td>
          <td width="200" align="center">Action</td>
        </tr>
        <tr v-for="post in filteredUsers">
          <td>{{ post.title }}</td>
          <td>{{ post.description }}</td>
          <td align="center">
            <router-link type="button" class="btn btn-warning" v-bind:to="{ name: 'editpost', params: { id: post._id } }">Edit</router-link>
            |
            <a href="#" type="button" class="btn btn-danger" @click="deletePost(post._id)">Delete</a>
          </td>
        </tr>
      </table>

      <div class="list-unstyled" v-for="post in posts" :key="post._id">
        <li class="media" >
          <div class="media-body">
            <h4 class="mt-0 mb-1">{{post.title}}</h4>
            <h5 class="mt-0 mb-1">{{post.description}}</h5>
            <!--{{message.message}}-->
            <br>
            <!--<small>{{message.created}}</small>-->
          </div>
        </li>
        <hr>
      </div>
    </div>
    <div v-else>
      There are no posts.. Lets add one now <br/><br/>
      <router-link v-bind:to="{ name: 'addpost' }" class="add_post_link">Add Post</router-link>
    </div>
  </div>
</template>

<script>
  import PostsService from '@/services/PostsService'

  export default {
    name: 'posts',
    data () {
      return {
        posts: [],
        searchQuery: ''
      }
    },
    mounted () {
      this.getPosts()
    },
    computed: {
      filteredUsers: function () {
        var self = this
        return self.posts.filter(function (post) {
          return post.title.indexOf(self.searchQuery) !== -1 || post.description.indexOf(self.searchQuery) !== -1
        })
      }
    },
    methods: {
      async getPosts () {
        const response = await PostsService.fetchPosts()
        this.posts = response.data.posts
      },
      async deletePost (id) {
        const $this = this
        $this.$swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(function () {
          PostsService.deletePost(id)
          $this.$router.go({
            path: '/'
          })
        })
      }
    }
  }
</script>
<style type="text/css">
  .table-wrap {
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }

  table th, table tr {
    text-align: left;
  }

  table thead {
    background: #f2f2f2;
  }

  table tr td {
    padding: 10px;
  }

  table tr:nth-child(odd) {
    background: #f2f2f2;
  }

  table tr:nth-child(1) {
    background: #4d7ef7;
    color: #fff;
  }

  a {
    color: #4d7ef7;
    text-decoration: none;
  }

  a.add_post_link {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }
</style>
