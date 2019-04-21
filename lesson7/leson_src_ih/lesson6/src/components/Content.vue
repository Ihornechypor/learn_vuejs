<template>
  <div>

    <div>
      <button type="button" name="button" @click="plus">
        +1
      </button>

      <button type="button" name="button" @click="minus">
        -1
      </button>

    </div>

  </div>


</template>

<script>
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'

export default {
  computed: mapGetters([
    'cnt'
  ]),
  methods: {
    ...mapMutations([
      'minus',
      'plus'

    ])
  }

}
</script>
