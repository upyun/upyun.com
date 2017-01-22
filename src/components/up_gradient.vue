<template lang="pug">
.up_gradient(:style="{ 'background-image': 'linear-gradient(312deg, ' + colors.start + ' 0%, ' + colors.end + ' 100%)' }")
  slot
</template>

<script>
export default {
  props: ['colors']
}
</script>
