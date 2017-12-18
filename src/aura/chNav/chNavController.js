({
    navigate : function(cmp, event, helper) {
        var id = event.target.dataset.menuItemId;
        if (id) {
            cmp.getSuper().navigate(id);
         }
    },
    
    menuItemsLoaded : function(cmp, event, helper) {
        var firstLoad = cmp.get("v.firstLoad");
        var menuItems = cmp.getSuper().get("v.menuItems");
        var threshold = cmp.get("v.navItemThreshold");

        if (firstLoad) {
            // If there is a threshold, do that first.
            if (threshold && menuItems.length > threshold) {
                helper.updateNav(cmp, menuItems, threshold);
                cmp.set("v.firstLoad", false);
            }
        }

    },

    toggleItems : function(cmp, event, helper) {
        var items = document.querySelector(".hidden-links");
        $A.util.toggleClass(items, "hidden");
    },

    handleResizeEvent: function(cmp, event) {
        console.log(event);
        console.log("event can be handled");
    }
})