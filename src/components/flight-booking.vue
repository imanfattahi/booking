<script setup>
  import { reactive, ref, computed } from 'vue'
  import VueSelect from 'vue-next-select'
  import { useStore } from 'vuex';
  const store = useStore();
  let loading = ref(false)
  const origin = ref()
  const destination = ref()
  const flights = computed(() => store.getters.getFlights);
  const origins = computed(() => store.getters.getOrigins);
  const destinations = computed(() => store.getters.getDestinations);

  function search() {
    loading.value = true;
    store.dispatch('fetchFlights', {origin: origin.value, destination: destination.value})
      .then(res => {
        flights.value.push(...res);
        loading.value = false;
      })
      .catch(err => {
        loading.value = false;
        // Something went wrong -> toast error message
      })
  }

  function book() {
    // todo -> functionality???
    alert('Booked!;)')
  }
</script>

<template>
  <section class="flight-booking">
    <h5>
      Discover your next dream destination
    </h5>
    <div class="input-group mb-3 rounded-4 border border-3 border-primary">
      <span class="input-group-text bg-transparent border-0 d-none d-sm-flex">
        <span title="From" class="icon-flight_takeoff"></span>
      </span>
      <VueSelect
        data-test="from-input"
        close-on-select
        searchable
        placeholder="Where from?"
        search-placeholder="Search..."
        v-model="origin"
        :options="origins"
        class="form-control ms-2 ms-sm-0"
      ></VueSelect>
      <span class="input-group-text bg-transparent border-0 d-none d-sm-flex">
        <span title="To" class="icon-flight_land"></span>
      </span>
      <VueSelect
        data-test="to-input"
        close-on-select
        searchable
        placeholder="Where to?"
        search-placeholder="Search..."
        v-model="destination"
        :options="destinations"
        class="form-control"
      ></VueSelect>
      <button :disabled="!origin || !destination" data-test="search-btn" v-on:click="search()" class="btn btn-primary" type="button"
              id="button-addon2">
        <span v-if="!loading">
          Search
        </span>
        <span v-else class="icon-spinner5 spin-animation"></span>
      </button>
    </div>
    <ul class="list-unstyled flight-list" v-if="flights && flights.length">
      <li class="flight-item" v-for="(flight, idx) in flights" :key="idx">
        <div class="card border-primary">
          <div class="card-body">
            <div class="row">
              <div class="col-8 col-md-9 border-primary border-end d-flex justify-content-start">
                <img class="plane-icon me-4 d-none d-sm-inline-block" src="/airplane.png"
                     alt="Test plane"/>
                <div class="align-self-center">
                  <p>
                    <span class="text-black-50">From:</span>
                    {{ flight.origin }}
                  </p>
                  <p>
                    <span class="text-black-50">To:</span>
                    {{ flight.destination }}
                  </p>
                  <p class="mb-0">
                    <span class="text-black-50">Duration:</span>
                    02:00
                  </p>
                </div>
              </div>
              <div class="col-4 col-md-3 d-flex justify-content-center">
                <div class="text-center align-self-center">
                  <h4 class="mb-2">
                    <strong>
                      ${{ flight.price?.amount }}
                    </strong>
                  </h4>
                  <div class="d-grid gap-2 mb-3">
                    <button class="btn btn-outline-primary" v-on:click="book()"
                            data-test="book-btn" v-if="flight.seatAvailability > 0">
                      Book
                    </button>
                    <button class="btn btn-outline-secondary" disabled v-else>
                      Sold Out
                    </button>
                  </div>
                  <p class="mb-0">
                    <small v-if="flight.seatAvailability > 0">
                      Only
                      <strong>
                        {{ flight.seatAvailability }}
                      </strong>
                      seats left
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="row" v-else>
      <div class="col my-5 d-flex justify-content-center">
        <img class="seeking" src="/seeking.jpg" alt="Seeking">
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .booking-wrapper {
    margin: 2vh 0;
    min-height: 96vh;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .plane-icon {
    max-width: 150px;
    height: auto;
  }

  .flight-list {
    .flight-item {
      margin-bottom: 1em;
    }
  }

  .seeking {
    opacity: 40%;
    max-width: 80%;
  }
</style>
