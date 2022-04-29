var section = document.querySelector("#counter_start"),
    hasEntered = !1;
window.addEventListener("scroll", (t) => {
    window.scrollY + window.innerHeight >= section.offsetTop &&
        !hasEntered &&
        ((hasEntered = !0),
        $(".num_count").each(function () {
            $(this)
                .prop("Counter", 0)
                .animate(
                    { Counter: $(this).text() },
                    {
                        duration: 3000,
                        easing: "swing",
                        step: function (t) {
                            $(this).text(Math.ceil(t).toLocaleString("en"));
                        },
                    }
                );
        }));
});
