({
    onRender: function(cmp, event, helper) {
        helper.heroAdjust(cmp);
        helper.navResize(cmp);


    },

    onInit: function(cmp, event, helper) {
        console.log('init');
    }
})