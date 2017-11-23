var dropdownComponent = ( 'dropdown-menu', {
  props: {
    options: {
      type: Array,
      required: true,
    }
  },
  data: function () {
    return {
      visibility: false
    }
  },
  methods: {
    changeMenuVisibility: function ( event ) {
      this.visibility = !this.visibility
    },
    optionChoice: function ( event ) {
      this.visibility = false
      this.$parent.$emit ( 'menuSelect', event.target.innerHTML.trim() )
    }
  },
  template: `
    <div>
      <button class="list-button" 
          @click="changeMenuVisibility">
          <i class="fa fa-bars"></i>
      </button>
      <div class="nav-bar"
            v-if = "visibility">
            <li v-for = "item in options"
                  :key="item"
                  @click="optionChoice">
              {{item}}
            </li>
      </div>
    </div>
  `
})


var app = new Vue ( {
  data: {
    optionsImg: {
      "black cat": 'assets/img/black_cat.jpg',
      "white cat": 'assets/img/white_cat.jpg',
      "red cat": 'assets/img/red_cat.jpg',
      "strange cat": 'assets/img/strange_cat.jpg',
    },
    currentImg: '',
  },
  components: {
    'dropdown-menu': dropdownComponent,
  },
  computed: {
    mainMenuOptions: function() {
      return Object.keys(this.optionsImg);
    }
  },
  template: `<div>
              <dropdown-menu :options="mainMenuOptions">
              </dropdown-menu>
              <img :src="currentImg" />
            </div> `
}).$mount('#app')

app.$on ( 'menuSelect', function ( val ) {
    this.currentImg = this.optionsImg [ val ]
})

