<script setup>
  import { reactive, ref } from 'vue'
  import VueSelect from 'vue-next-select'

  const value = ref()
  const options = reactive([0, 1, 2])

  function search() {
    // do search
  }
</script>

<template>
  <section class="flight-booking">
    <h4>
      Discover your next dream destination
    </h4>
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
        v-model="value"
        :options="options"
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
        v-model="value"
        :options="options"
        class="form-control"
      ></VueSelect>
      <button data-test="search-btn" v-on:click="search()" class="btn btn-primary" type="button"
              id="button-addon2">
        Search
        <span class="icon-spinner5 spin-animation"></span>
      </button>
    </div>
    <ul class="list-unstyled flight-list">
      <li class="flight-item">
        <div class="card border-primary">
          <div class="card-body">
            <div class="row">
              <div class="col-8 col-md-9 border-primary border-end d-flex justify-content-start">
                <img class="plane-icon me-4 d-none d-sm-inline-block" src="/airplane.png"
                     alt="Test plane"/>
                <div class="align-self-center">
                  <p>
                    <span class="text-black-50">From:</span>
                    Munhcs
                  </p>
                  <p>
                    <span class="text-black-50">To:</span>
                    sss
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
                      $455
                    </strong>
                  </h4>
                  <div class="d-grid gap-2 mb-3">
                    <button class="btn btn-outline-primary" v-on:click="book()"
                            data-test="book-btn">
                      Book
                    </button>
                    <button class="btn btn-outline-secondary" disabled>
                      Sold Out
                    </button>
                  </div>
                  <p class="mb-0">
                    <small>
                      Only
                      <strong>
                        2
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
      <li class="flight-item">
        <div class="card border-primary">
          <div class="card-body">
            <div class="row">
              <div class="col-8 col-md-9 border-primary border-end d-flex justify-content-start">
                <img class="plane-icon me-4 d-none d-sm-inline-block" src="/airplane.png"
                     alt="Test plane"/>
                <div class="align-self-center">
                  <p>
                    <span class="text-black-50">From:</span>
                    Munhcs
                  </p>
                  <p>
                    <span class="text-black-50">To:</span>
                    sss
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
                      $455
                    </strong>
                  </h4>
                  <div class="d-grid gap-2 mb-3">
                    <button class="btn btn-outline-primary" v-on:click="book()">
                      Book
                    </button>
                    <button class="btn btn-outline-secondary" disabled>
                      Sold Out
                    </button>
                  </div>
                  <p class="mb-0">
                    <small>
                      Only
                      <strong>
                        2
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
  </section>
</template>

<style lang="scss">
  .logo {
    width: 120px;
  }

  .booking-wrapper {
    margin: 2vh 0;
    height: 96vh;
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
</style>
