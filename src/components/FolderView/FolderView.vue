<template>
  <div class="folder">
    <span class="folder__label">
      <i class="fas fa-chevron-down"></i> <!-- class="fas fa-chevron-right" | Use when folder is not active -->
      <p class="folder__name">{{ name }}</p>
    </span>

    <template v-for="folder in folders">
      <FolderView :name="folder.name" :folders="folder.folders" :files="folder.files"/>
    </template>

    <template v-for="file in files">
      <FileView :type="file.type" :name="file.name"/>
    </template>

  </div>
</template>

<script>
import FileView from './../FileView/FileView.vue';
import './FolderView.css';

export default {
  name: 'FolderView',
  components: {FileView},
  props: {
    name: String,
    folders: Array,
    files: Array,
    type: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
