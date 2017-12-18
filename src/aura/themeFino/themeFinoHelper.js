({
    heroAdjust: function(cmp) {
        var heroAdjust = cmp.get("v.heroUnderNav");

        if (heroAdjust) {
            var headerHeight = document.querySelector(".header").offsetHeight;
            cmp.set("v.heroMarginTop", headerHeight);
        }
    },

    navResize: function(cmp) {
        window.onresize = function() {
            // Figure out what to do based on amount of space the nav has. 
            var more = document.querySelector(".chNavMoreLink");
            var vlinks = document.querySelector(".visible-links");
            var vlinksChildren = document.getElementsByClassName("mainNavItem");
            var childrenWidth = 0;

             // Figure out how much width the nav is taking up
            for (var i = 0; i < vlinksChildren.length; ++i) {
               childrenWidth += vlinksChildren[i].clientWidth;
            }
            console.log(childrenWidth);

            var availableSpace = more.classList.contains("hidden") ? vlinks.offsetWidth : vlinks.offsetWidth;
            console.log('avail:'+ availableSpace);
            // // If the menu is as wide as the available space.
            if (childrenWidth == availableSpace) {
                var navResizeEvent = cmp.getEvent("navResize");
                // Why won this event fire?
                navResizeEvent.fire();
            }
        }
    }
})