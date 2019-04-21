<template>
  <div class="app">
    <AppContent></AppContent>
    <AppHeader></AppHeader>
  </div>


</template>

<script>
import AppHeader from './components/Header';
import AppContent from './components/Content';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppContent
  }
}
</script>
