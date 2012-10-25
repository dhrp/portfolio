


# wait for the document to load
$(document).ready ->

  # initialize
  createGrid()

  registerMouseOvers()
  # register body events

  registerSelectBox()

  layout = 'full'

  onResize()

  $(window).resize ->
    onResize()


## Event handlers

layout = 'full'

onResize = () ->
  title = $('#titlecontainer')
  wrapper = $('#wrapper')

  console.log wrapper.height()

  if wrapper.height() > 700
    console.log "is high"

    if layout == 'full'
#      $(title).css("margin-right", "100px")
      $(title).animate( {
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0
      })
      console.log "switched to compact mode"
      layout = 'compact'

  else

    if layout == 'compact'
#      $(title).css("margin-right", "0px")
      $(title).animate( {
        marginTop: 75,
        marginRight: 75,
        marginLeft: 75
      })
      console.log "switched to full mode"
      layout = 'full'


## Regular functions

createGrid = () ->
  # create a bunch of items in the gridcontainer
  gridContainer = $('#gridContainer')






registerMouseOvers = () ->
  gridItems = $('#gridContainer > *')

  # Set mouse over effects to each item in gridItems
  for myItem in gridItems
    overlay = document.createElement('div')
    overlay.setAttribute('class', 'overlay')

    src = myItem.children[0].getAttribute('src').split('.')

    overlaysrc = src[0] + '_pt.' + src[1]

    overlayImage = document.createElement('img')
    overlayImage.setAttribute('src', overlaysrc)
#    $(overlay).('<"img src="' + overlaysrc + '">')
    $(overlay).append(overlayImage)


    $(myItem).append(overlay)

    $(overlay).mouseover () ->
      $(this).animate({
        opacity: 0.0
      }, 100)

    $(overlay).mouseleave () ->
      $(this).animate({
#        width: '130px',
        opacity: 1
      }, 500)

    elCategories = $(myItem).attr("data-categories")

    if elCategories.split(' ')[0] == "product"
      $(myItem).css("border", "red 5px solid")



registerSelectBox = () ->
  $('#selectmenu').change (event) ->
    console.log ('selectmenu changed into ' + event.currentTarget.value + '(' + event.currentTarget.selectedIndex + ')' )

  gridItems = $('#gridContainer > *')
  console.log gridItems

#  for item in gridItems
#    elCategories