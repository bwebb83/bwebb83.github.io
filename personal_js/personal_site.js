(function () {
    "use strict";
//-----------------------------------------navigation tab functionality
    $('.nav-tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show')
    });


})();
