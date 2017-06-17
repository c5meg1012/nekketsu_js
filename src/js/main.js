import $ from 'jquery';
import SlideMenu from './slide_menu.js';
import Slider from './slider.js';

const slider = new Slider();
const slideMenu = new SlideMenu();

$(function(){
  slideMenu.playSlideMenu();
  slider.playSlideShow()
});
