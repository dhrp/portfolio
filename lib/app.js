/**
 * Created with PyCharm.
 * User: thatcher
 * Date: 23-10-12
 * Time: 17:41
 * To change this template use File | Settings | File Templates.
 */

var Portfolio;

/**************************
 * App Logic
 **************************/

Portfolio = Em.Application.create({

    name: "Thatcher Peskens's portfolio",

    ready: function() {
        console.log("setting up ember");

        // add gridItems to itemCollection
        this.initializeCollection();

        // add containerView to the display
        Portfolio.MyCollectionView.appendTo('#gridContainer');


        $('#selectmenu').change(function(event) {
            console.log('selectmenu changed into ' + event.currentTarget.value + '(' + event.currentTarget.selectedIndex + ')');
            Portfolio.DisplayCollection.setTo(event.currentTarget.value);
//            window.focus();
//            document.getElementById('selectmenu').blur();
        });

        $('#wrapper').css({
            height: window.innerHeight
        });

        // register about buttons
        $('#aboutLink').click(function(e) {
            e.preventDefault();
            Portfolio.JumpToDetail(null, "about");
        });

        $('#contactLink').click(function(e) {
            e.preventDefault();
            Portfolio.JumpToDetail(null, "contact");
        });

    },

    initializeCollection: function() {

        var gridItems = $('#gridContainer > .gridBlock');
        // remove from display

        for (i = 0, _len = gridItems.length; i < _len; i++) {
            // get dom element
            var gridItem = $(gridItems[i]);

            // create item model
            var dictItem = Portfolio.Item.create({
                id: 'gridItem' + i,
                imgsrc: $($(gridItem.html()).html()).attr('src'),
                target: $(gridItem.html()).attr('href').split('=')[1]
            });

            // get categories from html and put them in object
            var categories = gridItem.attr('data-categories').split(' ');
            for (j = 0, len = categories.length; j < len; j++) {
                dictItem[categories[j]] = true;
            }

            // add object to ItemCollection
            Portfolio.ItemCollection.get('content').pushObject(dictItem);
        }

        $(gridItems).remove();
    }

});

/**************************
 * Models
 **************************/

Portfolio.Item = Em.Object.extend({
    imgsrc: null,

    overlimgsrc: function() {
        var originalSrc = this.imgsrc.split('.');
        return originalSrc[0] + '_pt.' + originalSrc[1]
    }.property()
});


/**************************
 * Controllers
 **************************/

Portfolio.ItemCollection = Em.ArrayController.create({
    content: Em.A()
});


Portfolio.DisplayCollection = Em.ArrayController.create({

    content: Portfolio.ItemCollection.content,

    setTo: function(category) {
        var subset = Portfolio.ItemCollection.content.filterProperty(category, true);


        for (var j = 0; j < this.content.length; j++) {
            if (subset.contains(this.content[j])) {
                console.log("match!, keep");
//                this.content[j].set("visible", "true");
            } else {
                console.log("no match!, delete!");
                setTimeout(setInvisible(this.content[j]), 100 * j);
            }
        }

        function setInvisible(element) {
            return function() {
//                alert("this fires once for each element " + l);
                element.set('visible', 'false');
            };
        }


        for (var i = 0; i < subset.length; i++) {

            if (this.content && this.content.contains(subset[i])) {
                console.log("match!, keep:");
                console.log(subset[i]);
                subset[i].set("visible", "true");
            }
            else
            {
                console.log("no match!, add:");
                this.content.pushObject(subset[i]);
                subset[i].set("visible", "true");
            }
        }

        console.log ("end printing subset");

    }

});

/**************************
 * Views
 **************************/

Portfolio.ItemView = Em.View.extend({

    templateName: 'itemTemplate',
    classNames: ['gridBlock'],

    hasTouched: false,
    allowClick: false,

    visibleBinding: 'content.visible',

    init: function() {

        if (!$(window).touchstart) {
//            this.allowClick = true;
//            alert ("touch click enabled");
        }

        // rendering without this._super() takes a really long time..
        this._super();
    },

    visibleListener: function() {
        console.log("set visibility to " + this.visible);
        if (this.visible === "false") {

            this.$().animate({
                width: '0px',
                opacity: 0.0,
                marginLeft: '0px',
                marginRight: '0px'
            });

        }
        else {
            this.$().animate({
                width: '130px',
                opacity: 1,
                marginLeft: '7px',
                marginRight: '7px'
            });
        }

    }.observes('visible'),



    click: function() {
        if (window.ontouchstart === undefined) {
            // undefined means ontouchstart is not available for definition, hence, we are on desktop
            this.allowClick = true;
        } else {
            // so we are on mobile, we want to let the touchstart event to its work
            if (this.allowClick === false) {
                this.allowClick = true;
                return;
            }
        }

        Portfolio.JumpToDetail(this, null);
    },

    touchStart: function() {
        this.$('.overlay').animate({
            opacity: 0.0
        }, 100);
//        this.allowClick = true;
//        alert("setting this.allowClick to true");

    },


    mouseEnter: function() {
        this.$('.overlay').animate({
            opacity: 0.0
        }, 100);
    },

    mouseLeave: function() {
        this.$('.overlay').animate({
            opacity: 1
        }, 500);
        this.allowClick = false;
    }

});


Portfolio.MyCollectionView = Em.CollectionView.create({

    content: function() {
        return Portfolio.DisplayCollection.get('content');
    }.property(),

    itemViewClass: Portfolio.ItemView
});

Portfolio.JumpToDetail = function(item, page) {
    var detailsContainer = $('#detailsContainer');
    var detailsPage = $('#detailsPage');
    var wrapper = $('#wrapper');
    var gridContainer = $('#gridContainer');
    var windowHeight = $(window).height();


    if (page === null) {
        page = item.content.target;
    }

    detailsContainer.load('pages/' + page + '.html').trigger("create");

    if ($(window).height() < (gridContainer.height() + 40)) {
        windowHeight = gridContainer.height() + 40;
    }

    console.log("windowHeight " + windowHeight + '\n' + "wrapperheight " + wrapper.height());

    detailsPage.css({
        visibility: 'visible',
        height: windowHeight
    });

    wrapper.css({
        height: windowHeight
    });

    window.location.hash = 'detailsPage';
    var el = document.getElementById('detailsPage');
    el.scrollIntoView(true);

};