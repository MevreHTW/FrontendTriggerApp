<template>
<h1>Hier findest du deine Triggerliste</h1>
  <table class="table">
    <thead>
      <tr>
       <th v-for="(column, index) in columns" :key="index"> {{column}}</th>
      </tr>
     </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
       <td v-for="(column, indexColumn) in columns" :key="indexColumn">{{item[column]}}</td>
     </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TriggerView',
  data () {
    return {
      triggers: [
        {
          id: 1,
          datum: '01.01.2023',
          triggerBeschreibung: 'Das ist eine Trigger Beschreibung',
          skala: -3,
          emotion: 'emotion',
          ort: 'ort',
          auswirkungEmotion: 'auswirkungEmotion',
          skalaNachIntervention: -2
        },
        {
          id: 2,
          datum: '01.02.2023',
          triggerBeschreibung: 'Das ist eine zweite Trigger Beschreibung',
          skala: -3,
          emotion: 'emotion',
          ort: 'ort',
          auswirkungEmotion: 'auswirkungEmotion',
          skalaNachIntervention: 0
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
