import moment from 'moment';

class DateTime {
  toString() {
    return 'The current date time is: ' + moment().format();
  }
}

export default DateTime