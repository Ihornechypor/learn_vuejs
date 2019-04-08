<template>
  <div class="results">
    <ul>
      <li>
         {{ valued  }}
      </li>
    </ul>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';

  export default {
    props: ['index','valued'],
    computed: {
      ...mapGetters([
        'info'
      ])
    }
  }
</script>
