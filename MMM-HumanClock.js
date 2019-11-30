/* Magic Mirror
 * Module: MMM-HumanClock
 *
 *
 * By Mykle1 - MIT Licensed
 *
 */
Module.register("MMM-HumanClock", {

    defaults: {
        size: "",
        calType: "", // analog or digital

    },

    getStyles: function() {
        return ["MMM-HumanClock.css"];
    },

    getDom: function() {

        var iframe = document.createElement("IFRAME");
        iframe.classList.add("iframe");
        iframe.style = "border:none"
        iframe.scrolling = "no";
        iframe.marginwidth = "0";
        iframe.marginheight = "0";

        // analog size options
        if (this.config.size === "large" && this.config.calType === "analog") {
            iframe.height = "285px";
            iframe.width = "265px";
            type = "text/javascript";
            iframe.src = "https://api.humanclock.com/iframe.php?mode=amd&f=h%3D12";

        } else if (this.config.size === "small" && this.config.calType === "analog") {
            iframe.height = "185px";
            iframe.width = "160px";
            type = "text/javascript";
            iframe.src = "https://api.humanclock.com/iframe.php?mode=asm&f=h%3D15";

        }

        // digital size options
        if (this.config.size === "large" && this.config.calType === "digital") {
            iframe.height = "250px";
            iframe.width = "265px";
            type = "text/javascript";
            iframe.src = "https://api.humanclock.com/iframe.php?mode=mdou&f=h%3D1";

        } else if (this.config.size === "small" && this.config.calType === "digital") {
            iframe.height = "190px";
            iframe.width = "160px";
            type = "text/javascript";
            iframe.src = "https://api.humanclock.com/iframe.php?mode=smou&f=h%3D12";
        }

        return iframe;
    },

    /////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_HUMANS') {
            this.hide(1000);
        } else if (notification === 'SHOW_HUMANS') {
            this.show(1000);
        }

    },

});
