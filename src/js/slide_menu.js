'use strict';

import $ from 'jquery'

export default class SlideMenu {
  constructor () {
    this.menuButton = $("#js_animation_menu_button");
    this.slideMenuPart = $('#js_animation_menu');
    this.openedMenu = false;
    this.fixedWindow = false;
    this.scrollpos;
  }

  playSlideMenu () {
    this.menuButton.on('click', () => {
      this.menuAnimation(this.menuToggle);
      this.switchWindow ();
      return false;
    });
  }

  menuAnimation () {
    $.when(
      this.changeClass()
    ).done (() => {
      this.menuToggle();
    });
  }

  changeClass() {
    this.menuButton.toggleClass("open");

    if (this.openedMenu === true) {
      this.openedMenu = false;
    } else {
      this.openedMenu = true;
    }
  }

  menuToggle () {
    if (this.openedMenu === true) {
      this.menuOpen();
    } else {
      this.menuClose ();
    }
  }

  menuOpen() {
    this.slideMenuPart.addClass('open');

    this.slideMenuPart.animate({
      'right': 0
    }, 300);
  }

  menuClose () {
    let menuWidth = this.slideMenuPart.outerWidth();

    $.when(this.slideMenuPart.animate({
      'right': -menuWidth
    }, 300)).done(() => {
      return this.slideMenuPart.removeClass('open');
    });
  }

  switchWindow () {
    if(this.fixedWindow == false) {
      this.lockWindow ();
    } else {
      this.unlockWindow();
    }
  }

  lockWindow () {
    this.scrollpos = $(window).scrollTop();
    $('body').addClass('fixed').css({'top': -this.scrollpos});
    this.fixedWindow = true;
  }

  unlockWindow () {
    $('body').removeClass('fixed').css({'top': 0});
    window.scrollTo( 0 , this.scrollpos );
    this.fixedWindow = false;
  }
}
