({
	toggleSearch : function(component, event, helper) {
        var searchOverlay = document.querySelector(".chSearchOverlay");
        $A.util.toggleClass(searchOverlay, "hidden");
        document.getElementById("headerSearch").focus();
	}
})