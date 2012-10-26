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
    someVariable: 'simpleTemplate blah'
});


/**************************
 * Views
 **************************/

Portfolio.MyView = Em.View.extend({

//    template: '<img {{bindAttr src="imgsrc"}} alt="Logo"><div {{bindAttr id="id"}} {{bindAttr data-visible="visible"}} > div {{tag}}</div>',

    templateName: 'itemTemplate',
    classNames: ['gridBlock'],
    controller: null,

    myViewRootProperty: "base",

    blahBinding: 'content.blah',
    visibleBinding: 'content.visible',

    doBlah: function() {
        this.$().fadeOut("slow");
    }.observes('blah'),

    sendAlert: function() {
        console.log("set visibility to " + this.visible)
    }.observes('visible'),

    didInsertElement: function(){
        this.$().hide().fadeIn("slow");
    },
//
    click: function() {
        alert ("clicked!");
    }
//
//    mouseover: function() {
//
//    }

});

/**************************
 * Controllers
 **************************/

Portfolio.ItemCollection = Em.ArrayController.create({
    content: Em.A(),


    query: function(category) {
        var subset = this.content.filterProperty('product', true);
        console.log (subset);
        return (subset);
    }

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

            }
            else {
                console.log("no match!, delete!");
                objectsToRemove.push(this.content[j]);
                this.content[j].set("visible", "false");

            }
        }

//        this.removeObjects(objectsToRemove);

        for (var i = 0; i < subset.length; i++) {

            if (this.content && this.content.contains(subset[i])) {
                console.log("match!, keep:");
                console.log(subset[i]);
            }
            else
            {
                console.log("no match!, add:");
//                subset[i].set("visible", true);
                this.pushObject(subset[i]);
                subset[i].set("visible", "true");

            }

//            this.content[i].set("blah", category);

        }


        console.log ("end printing subset");

    }

});



Portfolio.StaticCollection = Em.ArrayController.create({
    content: [{"name": "one"},{"name": "two"},{"name": "three"}]

});





