
onResize = (event) ->
  console.log "log coffeescript event"

onResize()

#
#$ ->
#  $(document).mouseup ->
#    console.log "mouse up registered"
#    onMouseUp()



#$(document).bind 'click', (event) =>
#  onMouseUp(event)

$(document).ready ->
  $('#gridContainer').bind 'mouseenter', (event) =>
    console.log "mouse enter event"

  $('#gridContainer').bind 'click', (event) ->
    console.log "mouse enter event"
    console.log event

  $(document).mousedown (event, x) ->
    console.log "mousedown"
    console.log event
    console.log x




onMouseUp = (event) ->
  alert event



