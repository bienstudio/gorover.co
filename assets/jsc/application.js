$(document).ready(function () {

  /*
    Mobile navigaton
  */
  $('.js-nav-toggle').on('click', function (e) {
    e.preventDefault()

    var toggle = $(this)
    var icon = toggle.find('i')
    var navs = $('.header__nav')

    navs.toggleClass('visible')

    if (icon.html() === 'rows') {
      icon.html('close')
    } else {
      icon.html('rows')
    }
  })


  /*
    Newsletter form
  */
  $('.js-newsletter').on('submit', function (e) {
    e.preventDefault();

    var form = $(this)
    var label = $(this).find('.form__label')
    var input = $(this).find('.form__input')
    var message = $(this).find('.newsletter__message')
    var button = $(this).find('.btn')

    button.html('Subscribing...')
    button.prop('disabled', true)

    var endpoint = form.attr('action') + '?callback=?'

    $.getJSON(endpoint, form.serialize(), function (data) {
      if (data.Status === 200) {
        message.removeClass('hidden')
      } else {
        message.html(data.Message)
      }

      label.addClass('hidden')
      input.addClass('hidden')
      button.addClass('hidden')
    })
  })
})
