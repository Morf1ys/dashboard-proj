import Darkmode from 'darkmode-js';
import jQuery from 'jquery';
import DataTable from 'datatables.net';
new Darkmode().showWidget();

const options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '70%', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff', // default: '#fff'
  buttonColorDark: '#100f2c', // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();
function addDarkmodeWidget() {
  new Darkmode().showWidget();
}
window.addEventListener('load', addDarkmodeWidget);

Object.assign(window, {
  $: jQuery,
  jQuery,
});

let table = new DataTable('table', {
  search: false,
});
