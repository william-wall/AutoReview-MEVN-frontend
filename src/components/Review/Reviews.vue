<template>
  <v-container>
    <div class="well">
      <form class="form-inline">
        <h1><label>Search Reviews </label></h1>
        <input type="text" title="title" class="form-control" v-model="searchQuery">
      </form>
    </div>
    <v-layout row wrap v-for="review in filteredUsers" :key="review._id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <div class="form-group">
                    </div>
                  </div>
                </v-card-title>
                <v-card-actions>
                </v-card-actions>
              </v-flex>
            </v-layout>
            <label class="titSty" for="reviewTitle">Review Title</label>
            <h5 class="white--text mb-0" id="reviewTitle">{{ review.title }}</h5>
            <label class="titSty" for="comment">Review Comment</label>
            <h5 class="white--text mb-0" rows="10" id="comment">{{review.description}}</h5>
          </v-container>
          <router-link type="button" class="btn btn-warning" v-bind:to="{ name: 'editreview', params: { id: review._id } }">Edit</router-link>
          <a type="button" class="btn btn-danger" @click="deleteReview(review._id)">Delete</a>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import ReviewsService from '@/services/ReviewsService'

  export default {
    name: 'reviews',
    data () {
      return {
        reviews: [],
        searchQuery: ''
      }
    },
    mounted () {
      this.getReviews()
    },
    computed: {
      filteredUsers: function () {
        var self = this
        return self.reviews.filter(function (review) {
          return review.title.indexOf(self.searchQuery) !== -1 || review.description.indexOf(self.searchQuery) !== -1
        })
      },
      meetups () {
        return this.$store.getters.loadedMeetups
      }
    },
    methods: {
      async getReviews () {
        const response = await ReviewsService.fetchReviews()
        this.reviews = response.data.reviews
      },
      async deleteReview (id) {
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
          ReviewsService.deleteReview(id)
          $this.$router.go({
            path: '/'
          })
        })
      }
    }
  }
</script>
<style type="text/css">

  .titSty{
    color: black;
    font-size: 2vw;
    font-family: "Microsoft YaHei";
  }
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

  a.add_review_link {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }
</style>
