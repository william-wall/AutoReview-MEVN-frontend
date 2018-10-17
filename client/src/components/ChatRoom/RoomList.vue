<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Room List
        <v-btn href="/add-room" color="success">Add Room</v-btn>
      </h2>
      <b-table hover :items="rooms" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="join(row.item._id)">Join</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'RoomList',
  data () {
    return {
      fields: {
        room_name: { label: 'Room Name', sortable: true, 'class': 'text-center text-black' },
        created_date: { label: 'Created Date', sortable: true },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      rooms: [],
      errors: []
    }
  },
  created () {
    axios.get(`https://frozen-earth-21625.herokuapp.com/api/room`)
    .then(response => {
      this.rooms = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    join (id) {
      console.log(id)
      this.$router.push({
        name: 'JoinRoom',
        params: { id: id }
      })
    }
  }
}
</script>
<style>

  </style>
