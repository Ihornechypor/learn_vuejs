<template>
  <div>
    {{ cnt }}
    <br>
    {{ total }}
    <br>


  </div>

</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: mapGetters([
    'cnt',
    'total'
  ])
}
</script>
