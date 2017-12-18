({
    updateNav : function(cmp, menuItems, threshold) {
        var more = document.querySelector(".chNavMoreLink");
        var hiddenNav = cmp.get("v.hiddenNav") === null ? [] : cmp.get("v.hiddenNav");
        var lastItem = [];
        var itemsToHide = 1;

        if (threshold) {
            itemsToHide = menuItems.length - threshold;
        }

        // Move items to the hidden nav.
        for (var i = 0; i < itemsToHide; i++) {
            lastItem = menuItems.pop();
            hiddenNav.push(lastItem);
        }

        cmp.set("v.hiddenNav", hiddenNav);
        cmp.set("v.menuItems", menuItems);

        // Unhide the dropdown nav.
        if (more.classList.contains("hidden")) {
            $A.util.removeClass(more, "hidden");
        }
    }

})