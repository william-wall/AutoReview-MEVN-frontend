<template>
  <b-row>
    <b-col align-self="start">&nbsp;</b-col>
    <b-col cols="6" align-self="center">
      <h2>
        Add Room
        <v-btn href="/roomlist" color="success">Room List</v-btn>

      </h2>
      <b-form @submit="onSubmit">

          <v-text-field
            name="room_name"
            label="Enter Room Name"
            id="room_name"
            :state="state" v-model.trim="room.room_name"
            required></v-text-field>

        <b-button type="submit" variant="primary">Add</b-button>
      </b-form>
    </b-col>
    <b-col align-self="end">&nbsp;</b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'AddRoom',
  data () {
    return {
      room: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:8081/api/room`, this.room)
      .then(response => {
        this.$router.push({
          name: 'RoomList'
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>
