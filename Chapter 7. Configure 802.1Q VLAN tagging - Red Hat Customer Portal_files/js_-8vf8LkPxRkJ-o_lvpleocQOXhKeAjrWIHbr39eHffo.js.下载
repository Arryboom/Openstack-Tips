/**
 * @file
 *   All the JS needed for the toast.
 */
chrometwo_require(['jquery', 'analytics/main', 'data-action'], function($,paf) {
    // Wait for document to load.
    $(function () {
        /**
         * Add analytics needed for tracking click events on the toast.
         */
        function add_paf_analytics() {
            // Check it out; btn.
            paf.on('#edit-submit-btn-in', 'click', undefined, 'NewUserOnboardingPromptTry');
            // No thanks; btn.
            paf.on('#edit-submit-btn-out', 'click', undefined, 'NewUserOnboardingPromptNo');
            // Toast is presented.
            paf.trigger('NewUserOnboardingPromptImpression');
            // User clicks dismiss; bad move buddy.
            paf.on('#optinToast .cp-modal-close', 'click', undefined, 'NewUserOnboardingPromptDismiss');
        }

        // Default hide toast.
        $('.getting-started').removeClass('show');
        $('.getting-started').addClass('hidden');

        // Make sure user is logged in.
        if ($.isEmptyObject(portal.user_info) == false) {
            // Check local storage first.
            switch (window.localStorage.getting_started_toast) {
                case "not_accepted":
                    // Show the toast.
                    $('.getting-started').addClass('show');
                    $('.getting-started').removeClass('hidden');
                    // Add analytics.
                    add_paf_analytics();
                    break;

                case "accepted":
                    // Don't show toast they did it already.
                    $('.getting-started').removeClass('show');
                    $('.getting-started').addClass('hidden');
                    break;

                case "never_seen_never_will":
                    // API was called once and they will never see it again.

                    // Make sure it is not showing by default.
                    $('.getting-started').removeClass('show');
                    $('.getting-started').addClass('hidden');
                    break;

                default:
                    // No localStorage found; call to the api to set it.
                    // Make API Call to see if it should be showing.
                    var URL = portal.host + "/api/toasts/";

                    // Call out to the dynamic API for toasts.
                    $.getJSON(URL, function (toasts) {
                        if (toasts.toasts.getting_started_toast == true) {
                            // Toast should be shown.
                            $('.getting-started').addClass('show');
                            $('.getting-started').removeClass('hidden');
                            window.localStorage.setItem("getting_started_toast", "not_accepted");
                            // Add analytics.
                            add_paf_analytics();
                        }
                        else {
                            // Hide the toast.
                            $('.getting-started').removeClass('show');
                            $('.getting-started').addClass('hidden');
                            window.localStorage.setItem("getting_started_toast", "never_seen_never_will");
                        }
                    });
                    break;
            }

            // Adjust localStoarage flag if someone responds to toast.
            $('#edit-submit-btn-in').on('click', function () {
                // Hide the toast.
                $('.getting-started').removeClass('show');
                window.localStorage.setItem("getting_started_toast", "accepted");
            });
            $('#edit-submit-btn-out').on('click', function () {
                // Hide the toast.
                $('.getting-started').removeClass('show');
                window.localStorage.setItem("getting_started_toast", "accepted");
            });
        }

    });
});
;
