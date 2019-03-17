<template>
  <div class="results">
    <ul>
      <li>
        {{ this.valued }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: ['valued']
  }
</script>
