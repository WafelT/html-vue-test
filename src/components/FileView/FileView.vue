<template>
  <div class="file__wrapper">
    <i :class="getIconNameByType(type)"></i>
    <p class="file">{{name}}</p>
  </div>
</template>

<script>
import './FileView.css';

export default {

  name: 'FileView',
  props: {
    name: String,
    type: String
  },
  
  setup () {
    function getIconNameByType (type) {
      const iconsMap = {
        'image/svg': 'fas fa-file-image',
        'image/jpeg': 'fas file-icon fa-image',
        'image/png': 'fas file-icon fa-image',
        'application/javascript': 'fab fa-js',
        'application/json': 'fas fa-code',
      };
      return iconsMap[type] ? iconsMap[type] : 'fas fa-file-alt';
    }

    return {
      getIconNameByType
    };
  }
}

</script>
