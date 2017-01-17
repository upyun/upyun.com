<style lang="sass" src="./layout.sass" scoped></style>
<template lang="pug">
.layout
  .hero(:style="{ 'background-image': 'linear-gradient(312deg, ' + oldColors.start + ' 0%, ' + oldColors.end + ' 100%)' }")
    .cover(:style="{ 'background-image': 'linear-gradient(312deg, ' + newColors.start + ' 0%, ' + newColors.end + ' 100%)', 'opacity': coverOpacity }")
    page_header
    slot
</template>

<script>
import page_header from './page_header'

export default {
  data () {
    return {
      oldColors: {},
      newColors: {},
      coverOpacity: 0
    }
  },
  props: ['colors'],
  methods: {
    switch (from, to) {
      this.oldColors = from
      this.newColors = to
      setTimeout(() => {
        this.coverOpacity = 1
      }, 10)
    }
  },
  mounted () {
    var newColors = this.colors
    var oldColors = JSON.parse(window.sessionStorage.getItem('up_colors')) || newColors
    this.switch(oldColors, newColors)
    window.sessionStorage.setItem('up_colors', JSON.stringify(newColors))
  },
  components: { page_header }
}
</script>
