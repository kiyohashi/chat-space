$(function(){
  function buildHTML(message){
    var html = `
                <div class="message">
                <div class="message__upper-info">
                <p class="message__upper-info__taker">
                ${message.user_name}
                </p>
                <p class="message__upper-info__date">
                ${message.date}
                </p>
                </div>
                <p class="message__text">
                </p>
                <p class="lower-message__content">
                ${message.content}
                </p>
                <img class="lower-message__image" src="${message.image}">
                <p></p>
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.form__message').val('')
      $('#message_image').val('')
      $('.form__message').removeAttr('disabled');
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail(function(){
      alert('error');
    });
    return false;
  });
});

