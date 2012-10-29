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

        var gridItems = $('#gridContainer > .gridBlock');

        // add gridItems to itemCollection
        this.initializeCollection(gridItems, this.ItemCollection);

        // remove from display
        $(gridItems).remove();

        // add back to display
        this.setDisplay(this.ItemCollection.content);

        console.log("setting up ember complete");

        this._super();
    },

    initializeCollection: function(gridItems, collection) {

        for (i = 0, _len = gridItems.length; i < _len; i++) {
            // create object

            var gridItem = $(gridItems[i]);

            var dictItem = Portfolio.Item.create({
                id: 'gridItem' + i,
                imgsrc: $($(gridItems[i]).html()).attr('src'),
                blah: "visible"

            });

            // get categories from html and put them in object
            var categories = gridItem.attr('data-categories').split(' ');
            for (j = 0, len = categories.length; j < len; j++) {
                dictItem[categories[j]] = true;
            }

            // add object to collection, the entire collection
            collection.pushObject(dictItem);

        }

        // set selection to "" (for all)
        Portfolio.DisplayCollection.setTo();

    },

    setDisplay: function(collection) {

        console.log ("register selectmenu event handler");

        $('#selectmenu').change(function(event) {
            console.log('selectmenu changed into ' + event.currentTarget.value + '(' + event.currentTarget.selectedIndex + ')');
            Portfolio.DisplayCollection.setTo(event.currentTarget.value);
        });

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
 * Views
 **************************/

Portfolio.MyView = Em.View.extend({

    templateName: 'itemTemplate',
    classNames: ['gridBlock'],

    visibleBinding: 'content.visible',


    sendAlert: function() {
        console.log("set visibility to " + this.visible);
        if (this.visible === "false") {
            this.$().hide("slow", this.removeElement());
//            Portfolio.DisplayCollection.removeObject(this.content);
        }
        else {
            this.$().fadeIn("slow");
        }
    }.observes('visible'),

    didInsertElement: function(){
//        this.$().hide().fadeIn("slow");
    },

    click: function() {
        alert ("clicked!");
    },
    removeElement: function() {
//        Portfolio.DisplayCollection.removeObject(this.content);
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
    }


});

/**************************
 * Controllers
 **************************/

Portfolio.ItemCollection = Em.ArrayController.create({
    content: Em.A()
});

Portfolio.DisplayCollection = Em.ArrayController.create({

    content: Em.A(),

    setTo: function(category) {
        var subset;

        if (category) {
            subset = Portfolio.ItemCollection.content.filterProperty(category, true);
        }
        else {
            subset = Portfolio.ItemCollection.content;
        }

        var objectsToRemove = [];

        for (var j = 0; j < this.content.length; j++) {
            if (subset.contains(this.content[j])) {
                console.log("match!, keep");
                this.content[j].set("visible", "true");
            } else {
                console.log("no match!, delete!");
                objectsToRemove.push(this.content[j]);
            }
        }

//        this.removeObjects(objectsToRemove);
        for (var k = 0; k < objectsToRemove.length; k++) {
            objectsToRemove[k].set("visible", "false");
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
                this.pushObject(subset[i]);
                subset[i].set("visible", "true");
            }
        }

        console.log ("end printing subset");

    }

});


