import Vue from 'vue'
import moment from 'moment'

Vue.prototype.FormaTime = function (val) {
  if (val instanceof Array) {

  } else {
    return moment(val).format('YYYY-MM-DDThh:mm:ss+08:00');
  }
}

