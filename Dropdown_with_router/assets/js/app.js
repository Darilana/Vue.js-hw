const dropdownMenu = {
  props: {
    options: {
      type: Array,
      required: true,
    }
  },
  data: function () {
    return {
      visibility: false,
    };
  },
  methods: {
    changeMenuVisibility: function ( event ) {
      this.visibility = !this.visibility
    },
  },
  template: `
    <div>
      <button class="list-button" 
          @click="changeMenuVisibility">
          <i class="fa fa-bars"></i>
      </button>
      <div class="nav-bar"
            v-if = "visibility">
            <router-link v-for = "item in options" :key="item" :to="{ name: 'cat', params: { id: item }}" >
              <li @click="changeMenuVisibility">
                {{item}}
              </li>
            </router-link>
      </div>
    </div>  `
};

const Cat = {
  props: ['id'],
  template: `<div><img :src="'assets/img/' + pictureName + '.jpg'" /></div>`,
  computed: {
    pictureName: function() {
      return this.id.replace(' ', '_');
    }
  }
};

const router = new VueRouter({
  routes: [
    { 
      path: '/cat/:id', 
      component: Cat, 
      props: true,
      name: 'cat',
    }
  ]
});

const app = new Vue ( {
  router,
  data: {
    mainMenuOptions: ["black cat", "white cat", "red cat", "strange cat"],
  },
  components: {
    dropdownMenu,
  },
  template: `<div>
              <dropdown-menu :options="mainMenuOptions">
              </dropdown-menu>
              <router-view></router-view>
            </div> `
}).$mount('#app');