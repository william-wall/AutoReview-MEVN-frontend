<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h4>Update a Review</h4>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Review Title"
                id="title"
                v-model="title"
                required></v-text-field>
            </v-flex>
          </v-layout>



          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="description"
                label="Review Description"
                id="description"
                multi-line
                rows="20"
                v-model="description"
                required></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                @click="updateReview">Update Review</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ReviewsService from '@/services/ReviewsService'
export default {
  name: 'editreview',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  mounted () {
    this.getReview()
  },
  computed: {
    formIsValid () {
      return this.title !== '' &&
        this.description !== ''
    }
  },
  methods: {
    async getReview () {
      const response = await ReviewsService.getReview({
        id: this.$route.params.id
      })
      this.title = response.data.title
      this.description = response.data.description
      // this.$router.push({ name: 'Posts' })
    },
    async updateReview () {
      await ReviewsService.updateReview({
        id: this.$route.params.id,
        title: this.title,
        description: this.description
      })
      this.$swal(
        'Great!',
        `Your review has been updated!`,
        'success'
      )
      this.$router.push({ name: 'Reviews' })
    }
  }
}
</script>
<style type="text/css">
  .reviews  {
    text-align: center;
  }
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_review_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>

