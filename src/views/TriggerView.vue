

<template>
  <div class="container">
    <h1 class="mt-4 text-center">Hier ist deine Triggerliste</h1>
    <form>
      <div class="form-group">
        <label >Datum</label>
        <input
          type="text"
          placeholder="22.02.2022"
          v-model="datum"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label >TriggerBeschreibung</label>
        <input
          type="text"
          placeholder="Zum Beispiel: Mit harschen Worten beleidigt werden"
          v-model="triggerBeschreibung"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label >Skala vor Intervention</label>
        <input
          type="number"
          placeholder="Auf einer Skala von -10 bis 10"
          v-model="skala"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label >Gefühlte Emotionen</label>
        <input
          type="text"
          placeholder="Zum Beispiel: Bauchschmerzen"
          v-model="emotion"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label >Ort</label>
        <input
          type="text"
          placeholder="Wo ist es dir passiert? Zum Beispiel: Im Supermarkt"
          v-model="ort"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label >Körperliche Auswirkung der Emotionen</label>
        <input
          type="text"
          placeholder="Wo spürst du die Emotionen? Zum Beispiel: Im Bauch"
          v-model="auswirkungEmotion"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label >Skala nach Intervention</label>
        <input
          type="number"
          placeholder="Nachdem du deine Übung gemacht hast. Auf einer Skala von -10 bis 10"
          v-model="skalaNachIntervention"
          class="form-control"
        />
      </div>
      <button type="button" @click="onSubmit" class="btn btn-dark">
        Submit
      </button>
    </form>
    <table class="table mt-5">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Datum</th>
        <th scope="col">Beschreibung vom Trigger</th>
        <th scope="col">Skala vor Intervention</th>
        <th scope="col">Gefühlte Emotionen</th>
        <th scope="col">Der Ort</th>
        <th scope="col">Körperliche Auswirkung der Emotion</th>
        <th scope="col">Skala nach Intervention</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(entry, i) in sortedList" :key="i">
        <th scope="row">{{ ++i }}</th>
        <td>{{ entry.datum }}</td>
        <td>{{ entry.triggerBeschreibung }}</td>
        <td>{{ entry.skala }}</td>
        <td>{{ entry.emotion }}</td>
        <td>{{ entry.ort }}</td>
        <td>{{ entry.auswirkungEmotion }}</td>
        <td>{{ entry.skalaNachIntervention }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Triggerliste",
  data: () => ({ name: "", score: "", allTriggers: [] }),
  computed: {
    sortedList: function() {
      return this.allTriggers.slice().sort(function(a, b) {
        return b.score - a.score;
      });
    },
  },
  methods: {
    onSubmit() {
      this.allTriggers.push({
        datum: this.datum,
        triggerBeschreibung: this.triggerBeschreibung,
        skala: this.skala,
        emotion: this.emotion,
        ort: this.ort,
        auswirkungEmotion: this.auswirkungEmotion,
        skalaNachIntervention: this.skalaNachIntervention
      });
      this.clearForm();
    },
    clearForm() {
      this.datum = "";
      this.triggerBeschreibung = "";
      this.skala = null;
      this.emotion = "";
      this.ort = "";
      this.auswirkungEmotion = "";
      this.skalaNachIntervention = null
    },
  },
};
</script>

<style scoped>

</style>
