//import {compareAsc, format} from 'date-fns'
import { format} from 'date-fns'
// const { format } = require('date-fns') // CommonJS
import { ru, es } from 'date-fns/locale'

const dt1 = format ( new Date(), 'dd MMMM yyyy EEEE', { locale: ru } )
const dt2 = format ( new Date(), 'dd MMMM yyyy EEEE', { locale: es } )
//const dt1 = format ( new Date(), 'dd-MMMM-yyyy')

console.log('Hello');
console.log (dt1);
console.log (dt2);