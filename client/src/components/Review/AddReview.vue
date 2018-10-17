<template>
  <v-container>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <h4>Submit a Review</h4>
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
              @click="addReview">Submit Review</v-btn>
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
    name: 'addreview',
    data () {
      return {
        selectedFile: null,
        title: '',
        description: ''
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' &&
          this.description !== ''
      }
    },
    methods: {
      async addReview () {
        await ReviewsService.addReview({
          title: this.title,
          description: this.description
        })
        this.$swal(
          'Great!',
          `Your review has been added!`,
          'success'
        )
        this.$router.push({name: 'Reviews'})
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

  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>

