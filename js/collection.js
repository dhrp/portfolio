/**
 * Created with PyCharm.
 * User: thatcher
 * Date: 01-11-12
 * Time: 15:41
 * To change this template use File | Settings | File Templates.
 */

var Portfolio;
Portfolio = Em.Application.create({


    ready: function() {
        Portfolio.MyCollectionView.appendTo('body');
        Portfolio.MyCollectionView.get('childViews')[0].removeFromParent();
    }

});

/**************************
 * Models
 **************************/

Portfolio.Item = Em.Object.extend({
    imgsrc: null,

    name: "object name",

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

    visibleBinding: 'content.visible'

});


Portfolio.MyCollectionView = Em.ContainerView.create({
   childViews: [Portfolio.MyView.create(), Portfolio.MyView.create()]

});

