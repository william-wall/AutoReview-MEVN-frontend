<template>
  <div id="app">
    <!--<h1>{{userName}}</h1>-->
    <div>
      <button @click="checkout">Sell black matter gun</button>
    </div>
  </div>

</template>
<script>
  export default {
    methods: {
      checkout () {
// this.$checkout.close()
// is also available.
        this.$checkout.open({
          image: 'https://i.imgur.com/1PHlmFF.jpg',
          locale: 'en',
          currency: 'BZD',
          name: 'Blips and Chitz!',
          description: 'An entire afternoon at Blips and Chitz!',
          amount: 9999999,
          panelLabel: 'Play Roy for {{amount}}',
          token: (token) => {
// handle the token
          }
        })
      }
    }
  }
</script>
