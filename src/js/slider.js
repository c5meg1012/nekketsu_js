'use strict';

import $ from 'jquery'

export default class slider {
  constructor () {
    this.nowVisibleBox = 1;
    this.wrapper = $('#js_animation_slider');
    this.countBoxes = $('.js_animation_slide').length;
    this.intervalTime = 5000;
    this.fadeTime = 1200;
    this.sliderHeight = $('.js_animation_slide').outerHeight();


    setTimeout(() => {
      this.setSliderHeight();
    }, 10 );

    setInterval(() => {
      this.slideShow();
    }, this.intervalTime);
  }

  slideShow() {
    if (this.nowVisibleBox === this.countBoxes) {
      this.wrapper.find('.js_animation_slide:visible').fadeOut(this.fadeTime);
      this.wrapper.find('.js_animation_slide:first-child').fadeIn(this.fadeTime + 800);
      this.nowVisibleBox = 1;
    } else{
      this.wrapper.find('.js_animation_slide:visible').fadeOut(this.fadeTime);
      this.wrapper.find('.js_animation_slide:visible').next().fadeIn(this.fadeTime + 800);
      this.nowVisibleBox++;
    }
  }

  setSliderHeight() {
    $('#js_animation_after_slider').css({
      "padding-top": this.sliderHeight + 10.5
    });
  }
}
