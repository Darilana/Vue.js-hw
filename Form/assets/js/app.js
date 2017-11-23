var app = new Vue  ( {
  	el: '#app',
  	data: {
      className: 'WhiteBg',
      password: '',
      answer: '',
      username: '',
      isCompanyAvailable: false,
      initialYear: 1920,
    },
	  methods:  { 
		  changeBackground: function () {
			  this.className = (this.className === 'WhiteBg') ? 'PurpleBg' : 'WhiteBg';
		  },
      getYearsRange: function(start, end) {
        return Array.from({length: (end + 1 - start)}, (v, k) => k + start);
      },
	  },
    watch: {
      password: function (newPassword) {
        this.answer = (newPassword.length > 8) ? 'Strong enough' : 'Your password is too short';
      }
    },
    computed: {
      endYear: function () {
        return (new Date()).getFullYear();
      },
      yearsRange: function () {
        return this.getYearsRange(this.initialYear, this.endYear);
      }
    }
} )