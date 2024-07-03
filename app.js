new Vue({
    el: '#app',
    data: {
      replyCount: 5, // Example initial count of replies
      isPrimary: true
    },
    computed: {
      buttonClass() {
        return {
          'btn': true,
          'btn-primary': this.isPrimary,
          'btn-success': !this.isPrimary
        };
      }
    },
    methods: {
      toggleTheme() {
        this.isPrimary = !this.isPrimary;
      }
    }
  });
