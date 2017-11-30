//Component

const mainComponent = ( 'main-component', {
  props: ['picture', 'showPicture' ],
  template: `
      <transition name = "expand-elem">
        <div v-if="showPicture">
          <img :src="picture" 
               class="expand-elem"/>
          <slot></slot>
        </div>
      </transition>
  `,
})

//Vue instance

new Vue ({
  el: '#app',
  data: {
    pictures: [
      {
        id:1,
        url: "https://cdn.shopify.com/s/files/1/0719/7579/products/blue_ice_800.jpg"
      },
      {
        id:2,
        url: "https://iso.500px.com/wp-content/uploads/2016/04/stock-photo-142871511-1500x1000.jpg",
      },
      {
        id:3,
        url: "https://d33wubrfki0l68.cloudfront.net/ca0061c3c33c88b2b124e64ad341e15e2a17af49/c8765/images/alligator-logo3.svg",
      },
      {
        id:4,
        url: "https://garevna.github.io/vue.github.io/images/vue.svg",
      },
      {
        id:5,
        url: "http://www.brightfunnel.com/wp-content/uploads/2017/08/BrightFunnel_GoTDragon.jpg",
      }
    ],
    currentCounterValue:  0,
    currentVisible: true,
  },
  computed: {
    nextCounterValue: function () {
      return this.currentCounterValue === 
  	               this.pictures.length - 1 ? 0 : 
  	               this.currentCounterValue + 1
    },
    currentPicture: function () {
      return this.pictures.filter( ( item, index ) =>
              index === this.currentCounterValue ) [ 0 ].url
    },
    // nextPicture: function () {
    //   return this.pictures.filter( ( item, index ) =>
    //           index === this.nextCounterValue  ) [ 0 ].url
    // }
  },
  methods: {
  	showNextPicture: function () {
  	  this.currentVisible = false
  	  setTimeout ( () => { 
  	      this.currentVisible = true
  	  }, 500 )
  	  this.currentCounterValue  = this.nextCounterValue
  	}
  },
  components: {
    'main-component': mainComponent
  },
  mounted: function () {
    
  }
})