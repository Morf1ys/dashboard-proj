// import Darkmode from 'darkmode-js';
import jQuery from 'jquery';
// Import our custom CSS
import './scss/styles.scss';
import DataTable from 'datatables.net';
// new Darkmode().showWidget();
import Editor from 'datatables.net-editor-jqui';
import 'datatables.net-buttons-jqui';
import 'datatables.net-buttons/js/buttons.colVis.mjs';
import 'datatables.net-colreorder-jqui';
import DateTime from 'datatables.net-datetime';
import 'datatables.net-searchpanes-jqui';
import 'datatables.net-select-jqui';
import 'datatables.net-staterestore-jqui';
// const options = {
//   bottom: '64px', // default: '32px'
//   right: 'unset', // default: '32px'
//   left: '70%', // default: 'unset'
//   time: '0.5s', // default: '0.3s'
//   mixColor: '#fff', // default: '#fff'
//   backgroundColor: '#fff', // default: '#fff'
//   buttonColorDark: '#100f2c', // default: '#100f2c'
//   buttonColorLight: '#fff', // default: '#fff'
//   saveInCookies: false, // default: true,
//   label: '🌓', // default: ''
//   autoMatchOsTheme: true, // default: true
// };

// const darkmode = new Darkmode(options);
// darkmode.showWidget();
// function addDarkmodeWidget() {
//   new Darkmode().showWidget();
// }
// window.addEventListener('load', addDarkmodeWidget);

// Object.assign(window, {
//   $: jQuery,
//   jQuery,
// });

let table = new DataTable('#example');
// ------------------------------------------
