// import Vue from 'vue'
import moment from 'moment'



//时间
let MomentNow            = moment().format('YYYY-MM-DDThh:mm:ss+08:00');
let MomentAdd1Days       = moment().add(1, 'days').format('YYYY-MM-DDThh:mm:ss+08:00');
let MomentAdd3Days       = moment().add(3, 'days').format('YYYY-MM-DDThh:mm:ss+08:00');
let MomentAdd7Days       = moment().add(7, 'days').format('YYYY-MM-DDThh:mm:ss+08:00');
let MomentAdd30Days      = moment().add(30, 'days').format('YYYY-MM-DDThh:mm:ss+08:00');
let MomentSubtract1Days  = moment().subtract(1, 'days').format('YYYY-MM-DDThh:mm:ss+08:00');
let MomentSubtract3Days  = moment().subtract(3, 'days').format('YYYY-MM-DDThh:mm:ss+08:00');
let MomentSubtract7Days  = moment().subtract(7, 'days').format('YYYY-MM-DDThh:mm:ss+08:00');
let MomentSubtract30Days = moment().subtract(30, 'days').format('YYYY-MM-DDThh:mm:ss+08:00');

export default {
  MomentNow,
  MomentAdd1Days,
  MomentAdd3Days,
  MomentAdd7Days,
  MomentAdd30Days,
  MomentSubtract1Days,
  MomentSubtract3Days,
  MomentSubtract7Days,
  MomentSubtract30Days
}
