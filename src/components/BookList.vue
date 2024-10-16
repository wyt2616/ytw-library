<!-- <template>
    <div>
      <h1>Book List</h1>
      <ul v-if="books.length > 0">
        <li v-for="(book, index) in books" :key="index">
          <strong>{{ book.name }}</strong> - ISBN: {{ book.isbn }}
        </li>
      </ul>
      <p v-else>No books available</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      books: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 5px 0;
    font-size: 18px;
  }
  
  p {
    color: gray;
  }
  </style>
   -->

<template>
<div>
    <h1>Books with ISBN > 1000</h1>
    <ul>
    <li v-for="book in books" :key="book.id">
        {{ book.name }} - ISBN: {{ book.isbn }}
    </li>
    </ul>
</div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import db from '../firebase/init.js';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default {
setup() {
    const books = ref([]);

    const fetchBooks = async () => {
    try {
        const q = query(collection(db, 'books'), where('isbn', '>', 1000));
        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
        booksArray.push({ id: doc.id, ...doc.data() });
        });
        books.value = booksArray;
    } catch (error) {
        console.error('Error fetching books:', error);
    }
    };

    onMounted(() => {
    fetchBooks();
    });

    return {
    books,
    };
},
};
</script>

  