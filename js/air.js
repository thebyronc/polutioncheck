import { apiKey } from './../.env';
export class Air {
  constructor() {
    this.location;
    this.url;
    this.data;
  }

  getCountries() {
    this.url = `countries?`;
    this.location = `countries`;

    let url = this.url;
    let location = this.location;
    this.getData(url).then(function(response){
      console.log('hi');
    })

  }

  getData(url) {
    return new Promise(function(resolve, reject) {
      console.log('hi2');
      $.ajax({
        url: `http://api.airvisual.com/v2/${url}key=${apiKey}`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
          this.data = response.data;
        },
        error: function() {
          $('#errors').text("There was an error processing your request. Please try again.");
        }
      });
    });

  }

  printToForm(data, location){
    console.log(data);
    for(let i=0; i<data.length; i++) {
      if(location == 'countries'){
        $('#countries').append(`<option value="${data[i].country}" selected>${data[i].country}</option>`);
      } else if(location == 'states') {
        $('#states').append(`<option value="${states[i].state}">${states[i].state}</option>`);
      } else if(location == 'cities') {
        $('#cities').append(`<option value="${cities[i].city}" selected>${cities[i].city}</option>`);
      }
    }
  }

}
