new Vue({
    el: '#app',
    data: {
      replyCount: 0, // Example initial count of replies
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
      addReply() {
          this.replyCount++; // Increment reply count
      },
      toggleTheme() {
        this.isPrimary = !this.isPrimary;
      }
    }
  });
