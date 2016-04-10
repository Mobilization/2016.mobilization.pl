$(document).ready(function(){
  $('p.timeline-description').on('click', function(e){
    var $this  = $(this);
    if ($this.hasClass('short')){
      $this.removeClass('short');
    } else {
      $this.addClass('short');
    }
  });

  var $agendaTabs = $('.tab-content .tab-pane');
  $('.modal .speaker-agenda li a').on('click', function(e){
    var $this  = $(this),
        agendaItemId = $this.data('agenda'),
        speakerId = $this.data('speaker'),
        $agendaItem = $('#agenda-' + agendaItemId),
        $agendaTab = $agendaItem.closest('.tab-pane'),
        $agendaTabLabel = $('a[data-target=\"#'+ $agendaTab.attr('id') +'\"]').parent(),
        $agendaTabOtherLabels = $agendaTabLabel.siblings();

	console.log('speakerId: ' + speakerId + ', agenda: ' + agendaItemId);

    $agendaTabs.removeClass('active');
    $agendaTabOtherLabels.removeClass('active');
    $agendaTab.addClass('active');
    $agendaTabLabel.addClass('active');
   
    $('#'+speakerId).modal('hide');
    
    $('html, body').animate({
      scrollTop: ($('#agenda-'+agendaItemId).offset().top - 76)
    }, 1500);
  });
});
