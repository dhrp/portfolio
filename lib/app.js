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
            var dictItem = Portfolio.Item.create();

            // get jquery object
            var gridItem = $(gridItems[i]);
            dictItem.id = 'gridItem' + i;
            dictItem.imgsrc = $($(gridItems[i]).html()).attr('src');
            //$(gridItem).html().attr('src'));

            // get categories from html and put them in object
            var categories = gridItem.attr('data-categories').split(' ');
            for (j = 0, len = categories.length; j < len; j++) {
                dictItem[categories[j]] = true;
            }

            // add object to collection
            collection.pushObject(dictItem);
            Portfolio.DisplayCollection.pushObject(dictItem);

        }
    },

    setDisplay: function(collection) {

        console.log ("display collection");
        console.log (collection);

        var gridItems;

        console.log("setting up test");

        $('#selectmenu').change(function(event) {
//            collection.removeAt(0);
//            collection.query("product");

            Portfolio.DisplayCollection.setTo(event.currentTarget.value);

            console.log('selectmenu changed into ' + event.currentTarget.value + '(' + event.currentTarget.selectedIndex + ')');

        });



        console.log("setting up test complete");


//        gridItems = $('#gridContainer > *');
//        return console.log(gridItems);

    }

});

/**************************
 * Models
 **************************/

Portfolio.Item = Em.Object.extend({
    name: "default object name",
    imgSrc: "",
    visible: true,
    myPropertyBinding: "Portfolio.name"
});


/**************************
 * Views
 **************************/

Portfolio.MyView = Em.View.extend({

    templateName: 'itemTemplate',
    classNames: ['gridBlock'],

    didInsertElement: function(){
        this.$().hide().fadeIn("slow");
    }

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
//    content: Portfolio.ItemCollection.content.filterProperty('product', true),

    myProperty: "set",

    setTo: function(category) {
        var subset = Portfolio.ItemCollection.content.filterProperty(category, true);

        console.log ("content");
        console.log (this.content);

        console.log ("subset");
        console.log (subset);

//        Portfolio.DisplayCollection.set(subset);
//        console.log (this.content);
//        var itemCollection = Portfolio.ItemCollection.content;


        var objectsToRemove = [];
        for (var j = 0; j < this.content.length; j++) {
            if (subset.contains(this.content[j])) {
                console.log("match!, keep");
            }
            else {
                console.log("no match!, delete!");
                objectsToRemove.push(this.content[j]);
                this.content[j].visible = false;
            }
        }

        this.content.removeObjects(objectsToRemove);

        for (var i = 0; i < subset.length; i++) {

            if (this.content && this.content.contains(subset[i])) {
                console.log("match!, keep:");
                console.log(subset[i]);
            }
            else
            {
                console.log("no match!, add:");
                this.pushObject(subset[i]);
            }
        }




//        Portfolio.DisplayCollection.removeObjects();
//        Portfolio.DisplayCollection.pushObjects(subset);

//        console.log (Portfolio.DisplayCollection.content);

        console.log ("end printing subset");



        return (subset);
    }

});



Portfolio.StaticCollection = Em.ArrayController.create({
    content: [{"name": "one"},{"name": "two"},{"name": "three"}]

});





