<template>
  <div class="container">
    <h1 class="mt-4 text-center">Hier ist deine Triggerliste</h1>
    <form class="needs-validation" id="trigger-create-form">
      <div class="form-group">
        <label >Datum</label>
        <input
          type="text"
          placeholder="22.02.2022"
          v-model="datum"
          required
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label >TriggerBeschreibung</label>
        <input
          type="text"
          placeholder="Zum Beispiel: Mit harschen Worten beleidigt werden"
          v-model="triggerBeschreibung"
          required
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label >Skala vor Intervention</label>
        <input
          type="number"
          placeholder="Auf einer Skala von -10 bis 10"
          v-model="skala"
          required
          class="form-control"
        />
        <div class="invalid-feedback">
          Bitte gebe eine Zahl zwischen -10 bis 10.
        </div>
      </div>
      <div class="form-group">
        <label >Gefühlte Emotionen</label>
        <input
          type="text"
          placeholder="Zum Beispiel: Bauchschmerzen"
          v-model="emotion"
          required
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label >Ort</label>
        <input
          type="text"
          placeholder="Wo ist es dir passiert? Zum Beispiel: Im Supermarkt"
          v-model="ort"
          required
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label >Körperliche Auswirkung der Emotionen</label>
        <input
          type="text"
          placeholder="Wo spürst du die Emotionen? Zum Beispiel: Im Bauch"
          v-model="auswirkungEmotion"
          required
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label >Skala nach Intervention</label>
        <input
          type="number"
          placeholder="Nachdem du deine Übung gemacht hast. Auf einer Skala von -10 bis 10"
          v-model="skalaNachIntervention"
          required
          class="form-control"
        />
      </div>
      <p>
      </p>
      <button type="submit" @click="onSubmit" class="btn btn-dark">
        Trigger hinterlegen
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
        <th scope="col">Trigger löschen</th>
        <th scope="col">Trigger durchgefühlt</th>
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
        <td><button @click="deleteTrigger(entry.id, i - 1)">Löschen</button></td>
        <div class="form-check d-flex justify-content-center align-items-center">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
          </label>
        </div>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Triggerliste",
  data: () => ({ datum: "", triggerBeschreibung: "", skala: null,
    emotion:"", ort:"", auswirkungEmotion:"", skalaNachIntervention: null,
    allTriggers: [] }),
  computed: {
    sortedList: function() {
      return this.allTriggers.slice().sort(function(a, b) {
        return b.score - a.score;
      });
    },
  },
  methods: {
    deleteTrigger(id, index) {
      console.log(`delete ${id} / ${index}`)
      this.allTriggers.splice(index, 1);
      var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      fetch("http://localhost:8080/api/v1/trigger/"+ id, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    },
    onSubmit() {
      const valid = this.validate()
      if (valid) {
        console.log("is valid")
        this.allTriggers.push({
          datum: this.datum,
          triggerBeschreibung: this.triggerBeschreibung,
          skala: this.skala,
          emotion: this.emotion,
          ort: this.ort,
          auswirkungEmotion: this.auswirkungEmotion,
          skalaNachIntervention: this.skalaNachIntervention
        });
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
          datum: this.datum,
          triggerBeschreibung: this.triggerBeschreibung,
          skala: this.skala,
          emotion: this.emotion,
          ort: this.ort,
          auswirkungEmotion: this.auswirkungEmotion,
          skalaNachIntervention: this.skalaNachIntervention
        });
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        fetch("http://localhost:8080/api/v1/trigger", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      }
    },
    validate () {
      const form = document.getElementById('trigger-create-form')
      form.classList.add('was-validated')
      return form.checkValidity()
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
    createTrigger() {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      var raw = JSON.stringify({
        datum: this.datum,
        triggerBeschreibung: this.triggerBeschreibung,
        skala: this.skala,
        emotion: this.emotion,
        ort: this.ort,
        auswirkungEmotion: this.auswirkungEmotion,
        skalaNachIntervention: this.skalaNachIntervention
      });
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      fetch("http://localhost:8080/api/v1/trigger", requestOptions)
        .catch(error => console.log('error', error));
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch('http://localhost:8080/api/v1/trigger', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(trigger => {
        this.allTriggers.push(trigger)
      }))
      .catch(error => console.log('error', error))
  }
};
</script>

<style scoped>
</style>
