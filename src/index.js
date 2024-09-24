// Import jQuery
import $ from 'jquery';
window.$ = window.jQuery = $;

import { createPopper } from '@popperjs/core';
window.Popper = createPopper; // Bootstrap 4 will look for Popper in the global scope

import 'bootstrap';
import 'jquery.easing';

// Import custom JS files
import './js/portfolio';
import './js/skillchart';
import './js/jqBootstrapValidation';

// Import CSS files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/portfolio.css';
