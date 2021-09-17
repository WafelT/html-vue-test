<template>
  <FolderView name="src" :folders="folders" :files="files" />
</template>

<script>
import FolderView from './components/FolderView/FolderView.vue';
import data from './data/list';
import './index.css'; 


export default {

  name: 'App',
  components: {
    FolderView
  },
  data: () => data
}
</script>

