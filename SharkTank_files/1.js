
        $(document).ready(function () {
            $.glue({
                layer: '#beforeyougo',
                cookie: false
            });

            //New York, Chicago, Austin, Seattle, Denver, San Francisco
            var recentPur = [
                ['George - New York', '5', '5 minutes ago'],
                ['Steve - New York', '7', '15 minutes ago'],
                ['Laura - New York', '3', '22 minutes ago'],
                ['Phil - New York', '7', '23 minutes ago'],
                ['Juan - San Francisco', '5', '24 minutes ago'],
                ['Smith - Chicago', '7', '27 minutes ago'],
                ['Harris - Chicago', '7', '30 minutes ago'],
                ['Wilson - Chicago', '7', '31 minutes ago'],
                ['Garcia - Chicago', '7', '33 minutes ago'],
                ['Elliott - San Francisco', '7', '36 minutes ago'],
                ['Tessa - Austin', '7', '45 minutes ago'],
                ['Ashleigh - Austin', '7', '1 hour ago'],
                ['Devin - Austin', '7', '1 hour ago'],
                ['Ariana - Austin', '7', '1 hour ago'],
                ['Elin - San Francisco', '7', '1 hour ago'],
                ['Aleksandra - Seattle', '7', '1 hour ago'],
                ['Peyton - Seattle', '7', '1 hour ago'],
                ['Lucille - Seattle', '3', '1 hour ago'],
                ['Gina - Seattle', '5', '1 hour ago'],
                ['Katharine - San Francisco', '5', '1 hour ago'],
                ['Sumaya - Denver', '7', '1 hour ago'],
                ['Leanne - Denver', '5', '1 hour ago'],
                ['Nettie - Denver', '7', '1 hour ago'],
                ['Jeanne - Denver', '5', '1 hour ago'],
                ['Diane - San Francisco', '7', '1 hour ago']
            ];
            var randPur = Math.floor(Math.random() * recentPur.length);
            var timeRand = Math.round(Math.random() * 29) + 1;
            $('#notify-1').html(recentPur[randPur][0]);
            $('#notify-2').html(recentPur[randPur][1]);
            $('#notify-3').html(timeRand + " seconds ago");

            setInterval(function () {
                $(".custom-social-proof").stop().slideToggle('slow', function () {
                    if ($('.custom-social-proof').css('display') == 'none') {
                        var randPur = Math.floor(Math.random() * recentPur.length);
                        $('#notify-1').html(recentPur[randPur][0]);
                        $('#notify-2').html(recentPur[randPur][1]);
                        $('#notify-3').html(timeRand + " seconds ago");
                    }
                });
            }, 8000);
            $(".custom-close").click(function () {
                $(".custom-social-proof").stop().slideToggle('slow');
            });

        });


        $(document).bind("click", function (e) {
            if ($(e.target).closest("#beforeyougo").length == 0) {
                $.glue_close();
                hideCliamLayer();
            }
        })


        setTimeout(function () {
            window.addEventListener("popstate", function (event) {
                if (event.state && event.state.wisepops === "exit-intent") {
                    showCliamLayer();
                }
            });
        }, 100);
        if (!window.history.state || window.history.state.wisepops !== "normal-intent") {
            window.history.replaceState({ wisepops: "exit-intent" }, "");
            window.history.pushState({ wisepops: "normal-intent" }, "");
        }



        function showCliamLayer() {
            $("#beforeyougo").show();
        }

        function hideCliamLayer() {
            $("#beforeyougo").hide();
        }


        function hideFooter() {
            $(".wisepops-root").hide();
        }




    
