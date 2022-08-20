const state = {
  origins: ['Berlin', 'Hamburg', 'Munich'],
  destinations: ['Frankfurt', 'Stuttgart', 'Dusseldorf', 'Dortmund'],
  flights: [],
};

const getters = {
  getFlights: (state) => state.flights,
  getOrigins: (state) => state.origins,
  getDestinations: (state) => state.destinations,
}

const mutations = {
  set_flights: (state, items) => state.flights = items,
};

const actions = {

  // Fetch flight list from the server
  fetchFlights({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$http.get(`/api/v1/promotions/priceoffers/ond/${data.origin}/${data.destination}`)
        .then(res => {
          // frontend filter --- better to take care of it on the backend side!
          const filteredItems = res.data.filter(x => data.origin === x.origin && data.destination === x.destination)
          commit('set_flights', filteredItems);
          resolve(filteredItems);
        })
        .catch(err => {
          reject(err);
        })
    });
  },

  // Book
  bookFlight({ commit }, time) {
    return new Promise((resolve, reject) => {
      this.$http.post('/book-url-test', time)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        })
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
}
