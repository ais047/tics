import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Victory', 'Draw', 'Loss'],
  datasets: [{
    label: 'Games',
    backgroundColor: [palette.primary, palette.warning, palette.danger],
    data: [3000, 6000, 1500]
  }]
}
