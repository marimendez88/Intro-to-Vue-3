/** Large solution */
/**  const app = Vue.createApp({
  data: function(){
    return {
      product: 'Sockets'
    }
  }
}) */

const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
})
