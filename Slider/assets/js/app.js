Vue.component ('gallery', {
  props: ["pictures"],
  template: `
    <div class="container">       
        <button @click=prevImg :disabled=prevDisabled><i class="fa fa-angle-left"></i></button>
        <img :src="pictures[imgIndex]" />
        <button @click=nextImg :disabled=nextDisabled><i class="fa fa-angle-right"></i></button>
    </div>`, 
    data: function() {
      return {
        imgIndex: 0,
      }
    },
    methods: {
      nextImg: function() {
        this.imgIndex++;
      },
      prevImg: function() {
          this.imgIndex--;       
      },
    },
    computed: {
      nextDisabled: function() {
        return this.imgIndex >= (this.pictures.length - 1);
      },
      prevDisabled: function() {
        return this.imgIndex <= 0;
      }
    }
})

var sample = new Vue ({
  el: '#example',
  data: {
    pictures: [ 'assets/img/black_cat.jpg', 'assets/img/white_cat.jpg', 'assets/img/red_cat.jpg', 'assets/img/strange_cat.jpg',]
  }
})