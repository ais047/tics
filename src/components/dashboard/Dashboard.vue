<template>
  <div class="dashboard">

    <!-- <dashboard-info-widgets></dashboard-info-widgets> -->

    <vuestic-widget class="no-padding no-v-padding">
      <vuestic-tabs
        :names="['Overwatch Heroes',  $t('dashboard.usersAndMembers'), $t('dashboard.dataVisualization')]"
        ref="tabs">
        <div :slot="'Overwatch Heroes'">
          <overwatch-heroes></overwatch-heroes>
        </div>
        <div :slot="$t('dashboard.usersAndMembers')">
          <users-members-tab></users-members-tab>
        </div>
        <div :slot="$t('dashboard.dataVisualization')">
          <data-visualisation-tab></data-visualisation-tab>
        </div>
      </vuestic-tabs>
    </vuestic-widget>

    <!-- <dashboard-bottom-widgets></dashboard-bottom-widgets> -->

  </div>
</template>

<script>
import DashboardInfoWidgets from './DashboardInfoWidgets'
import UsersMembersTab from './users-and-members-tab/UsersMembersTab.vue'
import DataVisualisationTab from './data-visualisation-tab/DataVisualisation.vue'
import DashboardBottomWidgets from './DashboardBottomWidgets.vue'
import OverwatchHeroes from '../OverwatchHeroes/OverwatchHeroes.vue'

export default {
  name: 'dashboard',
  components: {
    DataVisualisationTab,
    DashboardInfoWidgets,
    UsersMembersTab,
    DashboardBottomWidgets,
    OverwatchHeroes
  },

  methods: {
    launchEpicmaxToast () {
      this.showToast(`Let's work together!`, {
        icon: 'fa-star-o',
        position: 'top-right',
        duration: Infinity,
        action: {
          text: 'Hire us',
          href: 'http://epicmax.co/#/contact',
          class: 'vuestic-toasted-link'
        }
      })
    }
  }
}

</script>
<style lang="scss" scoped>
</style>
