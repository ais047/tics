<template>
  <div class="overwatchheroes">

    <!-- <dashboard-info-widgets></dashboard-info-widgets> -->

    <vuestic-widget :headerText="'Support'" class="no-padding no-v-padding">
      <div class="row">
        <span v-bind:key="hero.Name" v-for="(hero) in heroes.Heroes">
          <span v-if="hero.Role === 'Support'">
            <th> <span class="padded" :class="hero.IconLink" /> </th>
            <tr class="heroname"> {{hero.Name}} </tr>
          </span>
        </span>
      </div>
    </vuestic-widget>

    <vuestic-widget :headerText="'Damage'" class="no-padding no-v-padding">
      <div class="row">
        <span v-bind:key="hero.Name" v-for="(hero) in heroes.Heroes">
          <span v-if="hero.Role === 'Damage'">
            <th> <span class="padded" :class="hero.IconLink" /> </th>
            <tr class="heroname"> {{hero.Name}} </tr>
          </span>
        </span>
      </div>
    </vuestic-widget>

    <vuestic-widget :headerText="'Tank'" class="no-padding no-v-padding">
      <div class="row">
        <span v-bind:key="hero.Name" v-for="(hero) in heroes.Heroes">
          <span v-if="hero.Role === 'Tank'">
            <th> <span class="padded" :class="hero.IconLink" /> </th>
            <tr class="heroname"> {{hero.Name}} </tr>
          </span>
        </span>
      </div>
    </vuestic-widget>

    <!-- <dashboard-bottom-widgets></dashboard-bottom-widgets> -->

  </div>
</template>

<script>
import heroes from './Heroes.json'

export default {
  name: 'overwatchheroes',
  created () {
    this.heroes = heroes
  },
  data () {
    return {
      heroes: null
    }
  }
}

</script>
<style lang="scss" scoped>
  .padded{
    padding: 50px;
    margin: 25px;
    margin-bottom: 5px;
  }
  .heroname {
    text-align: center;
    font-weight: bold;
  }
</style>
