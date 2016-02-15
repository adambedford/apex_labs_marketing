$(document).ready ->

  $(document).bind "ajaxSuccess", "form.contact-form", (event, xhr, settings) ->
    $form = $(event.data)
    $feedback_container = $(".form-feedback", $form)
    $feedback_container_ul = $("ul", $feedback_container)
    if $("li", $feedback_container_ul).length
      $("li", $feedback_container_ul).remove()
    $("<li>").html("Your request has been submitted. We will respond shortly.").appendTo $feedback_container_ul

  $(document).bind "ajaxError", "form.contact-form", (event, jqxhr, settings, exception) ->
    $form = $(event.data)
    $feedback_container = $(".form-feedback", $form)
    $feedback_container_ul = $("ul", $feedback_container)
    $feedback_container.show()  if $feedback_container.is(":hidden")
    $.each jqxhr.responseJSON, (index, message) ->
      $("<li>").html(message).appendTo $feedback_container_ul