export class MainController {
  constructor ($http) {
    'ngInject';

    this.$http =  $http;
  }

    postMessage() {
        this.$http.post('http://localhost:9000/api/message', {msg: this.message})
    }
}
