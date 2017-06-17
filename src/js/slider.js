'use strict';

import $ from 'jquery'

export default class Slider {
  constructor () {
    this.nowVisibleBox = 1;
    this.wrapper = $('#js_animation_slider');
    this.countBoxes = $('.js_animation_slide').length;
    this.intervalTime = 5000;
    this.fadeTime = 1200;
    this.sliderHeight = $('.js_animation_slide').outerHeight();
  }

  playSlideShow() {
    setInterval(() => {
      this.slideShow();
    }, this.intervalTime);
  }

  slideShow() {
    if (this.nowVisibleBox === this.countBoxes) {
      this.wrapper.find('.js_animation_slide:visible').fadeOut(this.fadeTime);
      this.wrapper.find('.js_animation_slide_1').fadeIn(this.fadeTime + 800);
      this.nowVisibleBox = 1;
    } else{
      this.wrapper.find('.js_animation_slide:visible').fadeOut(this.fadeTime);
      this.wrapper.find('.js_animation_slide:visible').next().fadeIn(this.fadeTime + 800);
      this.nowVisibleBox++;
    }
  }
}
