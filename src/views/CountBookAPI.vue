<template>
    <pre>{{ jsondata }}</pre>
</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'CountBookAPI',
    data() {
      return {
        jsondata: null,
        error: null,
      };
    },
    mounted() {
      this.getBookCountAPI();
    },
    methods: {
      async getBookCountAPI() {
        try {
          const response = await axios.get('https://countbooks-mffymg325q-uc.a.run.app');
          this.jsondata = response.data;
          this.error = null;
        } catch (error) {
          console.error('Error fetching book count:', error);
          this.error = error;
          this.jsondata = null;
        }
      },
    },
  };
  </script>
  