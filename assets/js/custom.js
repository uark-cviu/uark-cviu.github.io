"use strict";

function createObjInstance(a, b, c) {
    $(a).each(function() {
        var a = Object.create(b);
        a.init($(this), c)
    })
}

function makeid() {
    for (var a = "", b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", c = 0; 5 > c; c++) a += b.charAt(Math.floor(Math.random() * b.length));
    return a
}

function isRetinaDisplay() {
    if (window.matchMedia) {
        var a = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
        return a && a.matches || window.devicePixelRatio > 1
    }
}

function olIsTouchDevice() {
    var a = navigator.userAgent.toLowerCase(),
        b = a.indexOf("chrome") > -1 && (a.indexOf("windows") > -1 || a.indexOf("macintosh") > -1 || a.indexOf("linux") > -1) && a.indexOf("mobile") < 0 && a.indexOf("android") < 0;
    return "ontouchstart" in window && !b
}

function getAllMethods(a) {
    return Object.getOwnPropertyNames(a).filter(function(b) {
        return "function" == typeof a[b]
    })
}! function(a) {
    function b() {
        a(".owl-videobg").owlVideoBg({
            autoGenerate: {
                posterImageFormat: "png"
            },
            preload: "auto"
        })
    }

    function c() {
        var b = 0;
        if (a("body").hasClass("sticky-header")) {
            var c = a("#header");
            c = c.addClass("is-sticky no-transition"), b += c.outerHeight(), c.removeClass("is-sticky no-transition")
        }
        window.olStickyOffset = b
    }

    function d() {
        return void 0 == window.olParallaxController && (window.olParallaxController = {}, window.olParallaxController.ready = !1, window.olParallaxController.num = a(".parallax-layer").length, window.olParallaxController.progress = 1), window.olParallaxController.progress++, window.olParallaxController.progress == window.olParallaxController.num ? (window.olParallaxController.ready = !0, !0) : !1
    }
    a.extend(verge);
    var e = {
            init: function() {
                this.$header = a("#header"), this.$contentWrapper = a("#wrapper"), this.headerHeight = this.$header.outerHeight(), this.absFlag = "absolute" != this.$header.css("position"), this.threshold = this.$header.data("sticky-threshold") ? this.$header.data("sticky-threshold") : 0, this.stickyFlg = !1, this.$pageHead = a(".page-head"), this.setHeadBottom(), this.bindUIActions()
            },
            bindUIActions: function() {
                var b = this;
                a(document).on("scroll", function() {
                    var c = a(this).scrollTop();
                    c > b.headBottom + b.threshold ? b.changeState("stick") : c < b.headBottom && b.changeState("unstick")
                }), a(window).on("debouncedresize", function() {
                    b.setHeadBottom(), b.headerHeight = b.$header.outerHeight()
                })
            },
            changeState: function(b) {
                var c = this;
                a.og.$window.width() <= 768 || a.og.$header.hasClass("mobile-menu") || ("stick" != b || c.stickyFlg ? "unstick" == b && c.stickyFlg && (c.$header.removeClass("is-sticky"), c.absFlag && c.$contentWrapper.css({
                    marginTop: ""
                }), c.stickyFlg = !1, a(document).trigger("sticky-change")) : (c.$header.addClass("is-sticky"), c.absFlag && c.$contentWrapper.css({
                    marginTop: "+=" + c.headerHeight
                }), c.stickyFlg = !0, a(document).trigger("sticky-change")))
            },
            setHeadBottom: function() {
                var b = this;
                b.$pageHead.length ? b.$pageHead.outerHeight() > 70 ? b.headBottom = b.$pageHead.outerHeight() + b.$pageHead.offset().top : b.headBottom = a(window).height() : b.headBottom = b.$header.height() + b.$header.offset().top
            }
        },
        f = {
            init: function(a) {
                this.$elem = a, this.$links = this.$elem.find("a"), this.$hParent = this.$elem.parents(".head-main, .nav-row"), this.prepare(), this.setMobile(this.isMobileActive()), this.bindUIActions(), this.toggleAnimation = {
                    duration: 300,
                    easing: "easeInOutQuint"
                }
            },
            prepare: function() {
                var a = this;
                a.$links.attr("title", "")
            },
            bindUIActions: function() {
                var b = this;
                a(window).on("debouncedresize", function() {
                    b.destroy(), b.setMobile(b.isMobileActive())
                }), a.og.$body.on("click", ".ol-mobile-trigger", function() {
                    a(this).toggleClass("is-active"), b.$elem.stop().slideToggle(b.toggleAnimation)
                }).on("click", ".mobile-menu .menu-item-has-children > a", function(c) {
                    c.preventDefault();
                    var d = a(this).parent();
                    d.toggleClass("is-open").children(".sub-menu").stop().slideToggle(b.toggleAnimation)
                })
            },
            setMobile: function(b) {
                b ? a.og.$header.addClass("mobile-menu") : a.og.$header.removeClass("mobile-menu")
            },
            isMobileActive: function() {
                return a.browser.mobile ? !0 : a.og.$window.width() <= 1200 ? !0 : void 0
            },
            destroy: function() {
                a.og.$header.removeClass("mobile-menu")
            }
        },
        g = {
            init: function() {
                return this.$wrapper = a(".logo-wrapper"), this.$imgs = this.$wrapper.find("img"), this.$imgs.length <= 1 ? !1 : (this.$logoLight = this.$imgs.filter(".logo-light"), this.$logoDark = this.$imgs.filter(".logo-dark"), this.bindUIActions(), void this.changeSrc(this.decision()))
            },
            bindUIActions: function() {
                var b = this;
                a(document).on("sticky-change", function() {
                    b.changeSrc(b.decision())
                })
            },
            decision: function() {
                var b = a.og.$header.hasClass("dark") ? "dark" : "light";
                return a.og.$header.hasClass("is-sticky") && (a.og.$header.hasClass("sticky-dark") ? b = "dark" : a.og.$header.hasClass("sticky-light") && (b = "light")), b
            },
            changeSrc: function(a) {
                var b = this;
                "light" == a ? (b.$logoDark.hide(), b.$logoLight.css("display", "inline-block")) : (b.$logoDark.css("display", "inline-block"), b.$logoLight.hide())
            }
        },
        h = {
            init: function(a) {
                var b = this.getImageInside(a);
                b && a.css("background-image", "url(" + b + ")")
            },
            destroy: function(a) {
                a.css("background-image", ""), a.find("img.set-me").show()
            },
            getImageInside: function(a) {
                var b = a.data("img-src");
                if (b) return b;
                var c = a.find("img.set-me").first();
                return c = c.length ? c : a.find("img").first(), c.length ? (c.hide(), c.attr("src")) : !1
            }
        },
        i = {
            init: function(a) {
                this.$elem = a, this.prepare(), this.run()
            },
            run: function() {
                var a = this,
                    b = !(!a.$elem.hasClass("dark") && !a.$elem.hasClass("dark-wrapper")),
                    c = "#ffffff",
                    d = "#ffffff";
                b || (c = "#000000", d = "#000000"), particlesJS(a.$elem.ID, {
                    particles: {
                        number: {
                            value: 80,
                            density: {
                                enable: !0,
                                value_area: 800
                            }
                        },
                        color: {
                            value: c
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#000000"
                            },
                            polygon: {
                                nb_sides: 5
                            },
                            image: {
                                src: "img/github.svg",
                                width: 100,
                                height: 100
                            }
                        },
                        opacity: {
                            value: .1,
                            random: !1,
                            anim: {
                                enable: !1,
                                speed: 1,
                                opacity_min: .2,
                                sync: !1
                            }
                        },
                        size: {
                            value: 3,
                            random: !0,
                            anim: {
                                enable: !1,
                                speed: 40,
                                size_min: .1,
                                sync: !1
                            }
                        },
                        line_linked: {
                            enable: !0,
                            distance: 200,
                            color: d,
                            opacity: .2,
                            width: 1
                        },
                        move: {
                            enable: !0,
                            speed: 5.8,
                            direction: "none",
                            random: !1,
                            straight: !1,
                            out_mode: "out",
                            bounce: !1,
                            attract: {
                                enable: !1,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: !0,
                                mode: "grab"
                            },
                            onclick: {
                                enable: !0,
                                mode: "push"
                            },
                            resize: !0
                        },
                        modes: {
                            grab: {
                                distance: 158,
                                line_linked: {
                                    opacity: .5
                                }
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3
                            },
                            repulse: {
                                distance: 200,
                                duration: .4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    },
                    retina_detect: !0
                })
            },
            prepare: function() {
                var a = this,
                    b = a.$elem.attr("id");
                if (a.$elem.ID = b, !b) {
                    var c = "ol-particles-" + makeid();
                    a.$elem.attr("id", c), a.$elem.ID = c
                }
            }
        },
        j = {
            init: function(b, c) {
                this.$elem = b;
                var d = {
                    itemSelector: ".ac-item",
                    headSelector: ".item-head",
                    bodySelector: ".item-body",
                    activeClass: "open",
                    initActiveClass: "open",
                    addToggleElem: !0,
                    toggleElemClass: ".item-head",
                    toggleEl: '<i class="ol-toggle-icon">'
                };
                this.options = a.extend({}, d, c), this.$items = this.$elem.children(this.options.itemSelector), this.SingleToggleFlag = !this.$elem.hasClass("toggle-free"), this.prepare(), this.bindUIActions()
            },
            prepare: function() {
                var b = this,
                    c = this.options,
                    d = b.$items.filter("." + c.initActiveClass);
                d.length && (b.SingleToggleFlag && d.length > 1 && (d.removeClass(c.initActiveClass), d = d.first().addClass(c.initActiveClass)), d.addClass(c.activeClass), d.children(c.bodySelector).show()), c.addToggleElem && b.$elem.find(c.toggleElemClass).append(a(c.toggleEl))
            },
            bindUIActions: function() {
                var b = this,
                    c = this.options;
                b.$elem.on("click", c.headSelector, function(d) {
                    var e = a(this),
                        f = e.parent(),
                        g = e.next(c.bodySelector);
                    if (g.length) {
                        if (d.preventDefault(), b.SingleToggleFlag && !f.hasClass(c.activeClass)) {
                            var h = f.siblings("." + c.activeClass).removeClass(c.activeClass);
                            b.toggleElem(h.children(c.bodySelector))
                        }
                        b.toggleElem(g), f.toggleClass(c.activeClass)
                    }
                })
            },
            toggleElem: function(a) {
                a.slideToggle({
                    duration: 400,
                    easing: "easeInOutQuart"
                })
            }
        },
        k = {
            init: function(a) {
                this.$elem = a, this.$bodyItems = a.find(".tab-pane"), this.$headItems = a.find(".tab-navigation").children("li"), this.prepare(), this.bindUIActions()
            },
            prepare: function() {
                var a = this,
                    b = a.$headItems.filter(".active").first();
                b.length < 1 && (a.$bodyItems.removeClass("active").eq(0).addClass("active"), a.$headItems.removeClass("active").eq(0).addClass("active"))
            },
            bindUIActions: function() {
                var b = this;
                b.$elem.on("click", ".tab-navigation a", function(c) {
                    c.preventDefault();
                    var d = (a(this), a(this).parent()),
                        e = d.index();
                    return d.hasClass("active") ? !1 : (b.$headItems.removeClass("active"), d.addClass("active"), void b.$bodyItems.removeClass("active").eq(e).addClass("active"))
                })
            }
        },
        l = {
            init: function(b) {
                this.$olTimeline = b, this.$bodyItems = this.$olTimeline.find(".tl-item"), this.$sections = a(), this.activeIndex = 0;
                this.bindUIActions(), this.prepare()
            },
            bindUIActions: function() {},
            prepare: function() {
                var b = this;
                b.arrangeSections(), b.$sections.each(function() {
                    var b = a(this),
                        c = b.find(".item-section").first();
                    c.parent().hasClass("with-thumb") && b.addClass("with-thumb"), c.parent().hasClass("with-icon") && b.addClass("with-icon"), b.append(c), c.stick_in_parent({
                        offset_top: window.olStickyOffset + 30
                    }).on("sticky_kit:bottom", function(a) {
                        c.addClass("is_bottom")
                    }).on("sticky_kit:unbottom", function() {
                        c.removeClass("is_bottom")
                    })
                })
            },
            arrangeSections: function() {
                var b, c = this,
                    d = 0,
                    e = a();
                if (c.$bodyItems.each(function() {
                        var f = a(this),
                            g = f.find(".item-section").text();
                        if ((void 0 == b || g != b) && g) {
                            if (e.length > 0) {
                                var h = a("<div></div>").addClass("tl-section");
                                e.wrapAll(h), c.$sections = c.$sections.add(e.parent()), e = a()
                            }
                            return e = e.add(f), b = g, d++, !0
                        }
                        void 0 != b && (e = e.add(f))
                    }), e.length > 0) {
                    var f = a("<div></div>").addClass("tl-section");
                    e.wrapAll(f), c.$sections = c.$sections.add(e.parent())
                }
                c.sectionsNum = d - 1
            }
        },
        m = {
            init: function(a) {
                this.$elem = a, this.$head = this.$elem.find(".tl-head"), this.$body = this.$elem.find(".tl-content"), this.$headItems = this.$head.children(), this.$bodyItems = this.$body.children(".tl-item"), this.itemsNumber = this.$headItems.length, this.startFrom = this.$elem.data("start-from") ? this.$elem.data("start-from") : "center", this.fadeEdge = this.$elem.data("fade-edge") ? this.$elem.data("fade-edge") : !0, this.prepare(), this.fadeEdge && this.$elem.addClass("with-fader"), this.bindUIActions()
            },
            prepare: function() {
                var a = this;
                switch (a.startFrom) {
                    case "center":
                        a.activeIndex = Math.floor(a.itemsNumber / 2);
                        break;
                    case "first":
                        a.activeIndex = 0;
                        break;
                    case "last":
                        a.activeIndex = a.itemsNumber - 1;
                        break;
                    default:
                        a.activeIndex = parseInt(a.startFrom)
                }
                a.$headClone = a.$head.clone().addClass("tl-head-clone").prependTo(a.$elem), a.$headCloneItems = a.$headClone.children(), a.set(), a.goTo(a.activeIndex)
            },
            set: function() {
                var a = this;
                a.elemHeight = a.$elem.height(), a.elemTopPos = a.$elem.offset().top, a.headCenterPos = a.elemTopPos + a.elemHeight / 2 - 10, a.headItemHeight = a.$headItems.first().outerHeight(), a.headItemBoundry = a.headItemHeight + parseInt(a.$headItems.first().css("margin-bottom")), a.$bodyItems.outerHeight(a.elemHeight)
            },
            goTo: function(a) {
                var b = this;
                b.$headItems.eq(b.activeIndex).removeClass("active"), b.$headItems.eq(a).addClass("active"), b.set();
                var c = b.calcDistance(a);
                b.$head.velocity({
                    translateY: "+=" + c.head
                }, 0), b.$body.velocity({
                    translateY: "+=" + c.body
                }, 0), b.$headClone.css("margin-top", c.head + parseInt(b.$headClone.css("margin-top"))), b.activeIndex = a, b.assignClasses()
            },
            calcDistance: function(a) {
                var b = this;
                return b.$headCloneItems.eq(b.activeIndex).removeClass("active"), b.$headCloneItems.eq(a).addClass("active"), {
                    head: b.headCenterPos - b.$headCloneItems.eq(a).offset().top,
                    body: b.elemTopPos - b.$bodyItems.eq(a).offset().top
                }
            },
            assignClasses: function() {
                var b = this;
                b.destroy(), b.$headCloneItems.each(function() {
                    var c = a(this),
                        d = c.index();
                    if (d != b.activeIndex) {
                        var e = c.offset().top;
                        return e + b.headItemHeight < b.elemTopPos || e > b.elemTopPos + b.elemHeight ? (c.addClass("out-of-view"), void b.$headItems.eq(d).addClass("out-of-view")) : e + b.headItemHeight < b.elemTopPos + b.headItemBoundry || e > b.elemTopPos + b.elemHeight - b.headItemBoundry ? (c.addClass("on-edge"), void b.$headItems.eq(d).addClass("on-edge")) : e + b.headItemHeight < b.elemTopPos + 2 * b.headItemBoundry || e > b.elemTopPos + b.elemHeight - 2 * b.headItemBoundry ? (c.addClass("near-edge"), void b.$headItems.eq(d).addClass("near-edge")) : void 0
                    }
                })
            },
            destroy: function() {
                var a = this;
                a.$headCloneItems.removeAttr("class"), a.$headCloneItems.eq(a.activeIndex).addClass("active"), a.$headItems.removeAttr("class"), a.$headItems.eq(a.activeIndex).addClass("active")
            },
            bindUIActions: function() {
                var b = this;
                b.$headItems.on("click", function() {
                    b.goTo(a(this).index())
                }), a(window).on("debouncedresize", function() {
                    b.set()
                })
            }
        },
        n = {
            init: function(a) {
                this.$elem = a, this.$elem.hasClass("sticky-type") && this.stickyHead();
                var b = this.$elem.find("ul.filters");
                b.length && this.setFilters(b), this.prepare(), this.bindUIActions()
            },
            bindUIActions: function() {
                var b = this;
                b.$toggleableItems.on("click", function() {
                    var c = a(this),
                        d = "show";
                    c.hasClass("active") && (d = "hide"), c.toggleClass("active"), b.toggleIt(c.find(".extra-description"), d)
                })
            },
            prepare: function() {
                var b = this,
                    c = a("<div></div>").addClass("toggle-trigger");
                b.$toggleableItems = a(), b.$allItems = b.$elem.find(".item"), b.$allItems.each(function() {
                    var d = a(this),
                        e = d.find(".extra-description");
                    e.length && (d.addClass("toggleable"), d.append(c.clone()), b.$toggleableItems = b.$toggleableItems.add(d))
                })
            },
            toggleIt: function(a, b) {
                "show" == b ? a.slideDown() : a.slideUp()
            },
            stickyHead: function() {
                var b = this;
                b.$elem.find(".section-head .date").each(function() {
                    var b = a(this);
                    b.stick_in_parent({
                        offset_top: window.olStickyOffset + 10
                    })
                })
            },
            setFilters: function(b) {
                var c = this,
                    d = b.find("li");
                b.find("a").on("click", function(b) {
                    b.preventDefault();
                    var e = a(this),
                        f = e.data("filter"),
                        g = e.parent();
                    return g.hasClass("active") ? !1 : (d.removeClass("active"), g.addClass("active"), void("*" == e.data("filter") ? c.$allItems.slideDown({
                        duration: 200,
                        easing: "easeInOutQuart"
                    }) : c.$allItems.each(function() {
                        var b = a(this);
                        b.data("filter") == f ? b.slideDown({
                            duration: 200,
                            easing: "easeInOutQuart"
                        }) : b.slideUp({
                            duration: 200,
                            easing: "easeInOutQuart"
                        })
                    })))
                })
            }
        },
        o = {
            init: function() {
                var b = this;
                b.localvideo = {
                    autoPlay: !1,
                    preload: "metadata",
                    webm: !0,
                    ogv: !1
                }, a(".ol-lightbox").each(function() {
                    var c = a(this);
                    c.parents(".ol-lightbox-gallery").length || b.singleBox(c)
                }), a(".ol-lightbox-gallery").each(function() {
                    b.galleryBox(a(this))
                }), this.bindUIActions()
            },
            generateVideo: function(a, b) {
                var c = this,
                    d = a.substr(0, a.lastIndexOf(".mp4")),
                    e = "";
                c.localvideo.autoPlay && (e += " autoplay"), e += 'preload="' + c.localvideo.preload + '"';
                var f = '<video class="mejs-player popup-mejs video-html5" controls ' + e + ' poster="' + b + '"><source src="' + a + '" type="video/mp4" />';
                return c.localvideo.webm && (f += '<source src="' + d + '.webm" type="video/webm" />'), c.localvideo.ogv && (f += '<source src="' + d + '.ogv" type="video/ogg" />'), f += '</video><div class="mfp-close"></div>'
            },
            generatedesc: function(a) {
                var b = '<div class="container"><div class="mfp-figure ' + a + '"><button title="Close (Esc)" type="button" class="mfp-close">x</button><figure><div class="wrapper"><div class="mfp-description"><figcaption class="mfp-figcaption"><div class="mfp-title"></div><div class="mfp-desc"></div></figcaption></div><div class="mfp-content-container"><div class="mfp-img"></div></div></div></figure></div></div>';
                return b
            },
            bindUIActions: function() {
                a("body");
                a("body").on("click", ".mfp-container", function(b) {
                    b.target === this && a(this).find(".mfp-close").trigger("click")
                })
            },
            singleBox: function(a) {
                var b = this;
                a.magnificPopup({
                    type: "image",
                    closeOnContentClick: !1,
                    closeOnBgClick: !1,
                    mainClass: "mfp-fade",
                    iframe: {
                        markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title"></div></div>'
                    },
                    image: {
                        verticalFit: !0
                    },
                    callbacks: {
                        elementParse: function(a) {
                            var c = a.el.attr("data-type") || "image";
                            "descriptive" == c ? (a.type = "image", "descriptive" == a.el.attr("data-type") && (descMode = "with-desc", a.el.hasClass("horizontal") && descMode.concat("horizontal"), this.st.image.markup = b.generatedesc(descMode))) : a.type = c
                        },
                        markupParse: function(a, b, c) {
                            c.el.attr("title") && (b.title = '<h3 class="title">' + c.el.attr("title") + "</h3>"), c.el.attr("desc") && (b.desc = c.el.attr("desc"))
                        },
                        open: function() {}
                    }
                })
            },
            galleryBox: function(a) {
                var b = this,
                    c = [];
                a.magnificPopup({
                    delegate: ".ol-lightbox",
                    closeOnBgClick: !1,
                    closeOnContentClick: !1,
                    removalDelay: 300,
                    mainClass: "mfp-fade",
                    iframe: {
                        markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title"></div><div class="mfp-counter"></div></div>'
                    },
                    gallery: {
                        enabled: !0,
                        tPrev: "Previous",
                        tNext: "Next",
                        tCounter: "%curr% / %total%",
                        arrowMarkup: '<a class="tj-mp-action tj-mp-arrow-%dir% mfp-prevent-close" title="%title%"><i class="fa fa-angle-%dir%"></i></a>'
                    },
                    callbacks: {
                        elementParse: function(a) {
                            var c = a.el.attr("data-type") || "image";
                            a.el.attr("href");
                            "descriptive" == c ? (a.type = "image", "descriptive" == a.el.attr("data-type") && (descMode = "with-desc", a.el.hasClass("horizontal") && descMode.concat("horizontal"), this.st.image.markup = b.generatedesc(descMode))) : a.type = c
                        },
                        markupParse: function(a, b, c) {
                            c.el.attr("title") && (b.title = '<h3 class="title">' + c.el.attr("title") + "</h3>"), c.el.attr("desc") && (b.desc = c.el.attr("desc"))
                        },
                        open: function() {},
                        change: function() {
                            this.isOpen && this.wrap.addClass("mfp-open")
                        }
                    },
                    type: "image"
                }), c = []
            }
        },
        p = {
            init: function(b) {
                this.$grid = b, this.$filtersWrapper = a(".ol-grid-filters"), this.$defaultFilters = this.$filtersWrapper.find(".default-filters"), this.$selectFiltersWrapper = this.$filtersWrapper.find(".select-filters"), this.$selectFilters = this.$selectFiltersWrapper.find("select"), this.$selectDummyValue = a("<span>").addClass("select-value").appendTo(this.$selectFiltersWrapper), this.gridFlg = this.$grid.hasClass("grid"), this.prepare(), this.prepareIsotope(), this.bindUIActions()
            },
            bindUIActions: function() {
                var b, c = this;
                c.$defaultFilters.on("click", "a", function(d) {
                    d.preventDefault(), a(this).parent("li").addClass("active").siblings().removeClass("active"), b = a(this).attr("data-filter"), c.filter(b)
                }), this.$selectFilters.on("change", function() {
                    b = this.value, c.$selectDummyValue.text(c.$defaultFiltersAnchors.filter(function() {
                        return a(this).data("filter") == b
                    }).text()), c.filter(b)
                })
            },
            filter: function(a) {
                var b = this;
                b.$grid.isotope({
                    filter: a
                })
            },
            prepareIsotope: function() {
                var a = this;
                a.gridFlg ? a.isotopeGrid() : a.$grid.imagesLoaded(function() {
                    a.isotopeGrid()
                })
            },
            isotopeGrid: function() {
                var a = this.$grid.find(".grid-sizer").length ? ".grid-sizer" : ".grid-item";
                this.$grid.isotope({
                    itemSelector: ".grid-item",
                    percentPosition: !0,
                    masonry: {
                        columnWidth: a
                    }
                })
            },
            prepare: function() {
                var a = this,
                    b = a.$defaultFilters.children("li"),
                    c = b.filter(".active");
                c = c.length > 0 ? c : b.first(), a.$defaultFiltersAnchors = b.find("a"), a.$selectDummyValue.text(c.text())
            }
        },
        q = function() {
            var b = 60,
                c = function(c, d) {
                    var e = c.find(".items a");
                    c.removeClass("active").addClass("in-active"), "bottom" == d ? e.each(function(c) {
                        a(this).animate({
                            opacity: 0,
                            bottom: "-=15"
                        }, c * b, function() {
                            a(this).fadeOut
                        })
                    }) : e.each(function(c) {
                        a(this).animate({
                            opacity: 0,
                            top: "-=15"
                        }, c * b, function() {
                            a(this).fadeOut
                        })
                    })
                },
                d = function(c, d) {
                    var e = c.find(".items a");
                    c.removeClass("in-active").addClass("active"), "bottom" == d ? e.each(function(c) {
                        a(this).fadeIn().animate({
                            opacity: 1,
                            bottom: 0
                        }, c * b)
                    }) : e.each(function(c) {
                        a(this).fadeIn().animate({
                            opacity: 1,
                            top: 0
                        }, c * b)
                    })
                };
            a(".social-share").each(function() {
                var b = a(this),
                    e = "top";
                b.hasClass("bottom") ? (e = "bottom", c(b, e)) : c(b, e), b.find(".trigger").click(function() {
                    b = a(this).parent(".social-share"), b.hasClass("in-active") ? b.hasClass("bottom") ? (e = "bottom", d(b, e)) : d(b, e) : b.hasClass("bottom") ? (e = "bottom", c(b, e)) : c(b, e)
                })
            })
        },
        r = {
            init: function(a) {
                this.$refEl = a, this.fullWidthMargin = 60;
                var b = this.$refEl.find(".sync-me");
                b.length || (b = a.children()), this.$elems = b, this.checkFullWidth() || this.sync(), this.bindUIActions()
            },
            sync: function() {
                this.$elems.outerHeight(this.$refEl.outerHeight())
            },
            destroy: function(a) {
                a.css("height", "")
            },
            bindUIActions: function() {
                var b = this;
                a(window).on("debouncedresize", function() {
                    b.destroy(b.$elems), b.checkFullWidth() || b.sync()
                })
            },
            checkFullWidth: function() {
                var a = this;
                return a.$refEl.outerWidth() - a.$elems.first().outerWidth() <= a.fullWidthMargin
            }
        },
        s = {
            init: function(a) {
                this.$wrapper = a, this.$extendableElem = a.find(".extend-left,.extend-right"), this.$targetCols = this.$extendableElem.parent(), this.$columns = a.children(), this.fullWidthMargin = 30, this.extendCore(), this.bindUIActions()
            },
            extendCore: function() {
                this.checkFullWidth() ? this.destroy() : (r.init(this.$wrapper), this.extendWidth(this.$extendableElem))
            },
            extendWidth: function(b) {
                var c, d = b.css("width", "").width();
                c = b.hasClass(".extend-right") ? a(window).width() - (b.offset().left + d) : b.offset().left, b.width(d + c)
            },
            destroy: function() {
                r.destroy(this.$columns), h.destroy(this.$wrapper.find(".set-bg")), this.$extendableElem.css("width", ""), this.$wrapper.addClass("extend-destroy")
            },
            checkFullWidth: function() {
                var a = this;
                return a.$wrapper.width() - a.$targetCols.first().width() <= a.fullWidthMargin
            },
            bindUIActions: function() {
                var b = this;
                a(window).on("debouncedresize", function() {
                    b.checkFullWidth() ? b.destroy() : (b.$wrapper.removeClass("extend-destroy"), b.extendCore(), h.init(b.$wrapper.find(".set-bg")))
                })
            }
        },
        t = {
            init: function(a) {
                if (this.$elem = a, this.retinaSuffix = "@2x", !isRetinaDisplay()) return !1;
                var b = this,
                    c = a.attr("src");
                if (!c) return !1;
                var d = c.replace(/\.(?!.*\.)/, b.retinaSuffix + ".");
                this.preload(d, function(a) {
                    return a ? void b.setRetina(a) : (console.warn("Error loading the retina image"), !1)
                })
            },
            preload: function(a, b) {
                var c = new Image;
                c.src = a, c.onerror = function() {
                    return b(!1)
                }, c.onload = function() {
                    return b(c)
                }
            },
            setRetina: function(a) {
                var b = this;
                b.$elem.attr("src", a.src);
                var c = isNaN(parseInt(b.$elem.attr("width"))) && isNaN(parseInt(b.$elem.attr("height")));
                c && (b.$elem.attr("width", a.width / 2), b.$elem.attr("height", a.height / 2))
            }
        },
        u = {
            init: function(b) {
                this.$elem = b, this.$searchArea = a(".search-area"), this.customAnimFlg = this.$searchArea.hasClass("fullscreen"), this.bindUIActions()
            },
            bindUIActions: function() {
                var b = this;
                b.$elem.children("a").on("click", function(a) {
                    a.preventDefault(), b.displayArea("show")
                }), b.$searchArea.find(".close-btn").on("click", function(a) {
                    a.preventDefault(), b.displayArea("hide")
                }), a(document).keyup(function(a) {
                    27 == a.keyCode && b.$searchArea.hasClass("is-visible") && b.displayArea("hide")
                })
            },
            displayArea: function(a) {
                var b = this;
                "show" == a ? b.$searchArea.toggleClass("is-visible") : b.$searchArea.removeClass("is-visible"), b.animateArea(a)
            },
            animateArea: function(a) {
                var b = this;
                b.customAnimFlg && ("show" == a ? b.$searchArea.velocity({
                    opacity: 1,
                    top: 0
                }, {
                    display: "block",
                    duration: 200
                }) : b.$searchArea.velocity({
                    opacity: 0,
                    top: -150
                }, {
                    display: "none",
                    duration: 5
                }))
            }
        },
        v = {
            init: function(a) {
                this.$elem = a, this.disableMobile = !0, this.offset = a.data("offset") ? a.data("offset") : -50, this.animatedFlag = !1, this.animOptions = {
                    duration: a.data("duration"),
                    delay: a.data("delay"),
                    iteration: a.data("iteration")
                }, this.prepare(), this.checkInView(), this.bindUIActions()
            },
            prepare: function() {
                var a = this,
                    b = {};
                a.animOptions.name = a.$elem.css("animation-name");
                for (var c in a.animOptions) a.animOptions[c] && (b["animation-" + c] = a.animOptions[c], b["-webkit-animation-" + c] = a.animOptions[c], a.$elem.css(b));
                a.$elem.css("visibility", "hidden").css("animation-name", "none")
            },
            bindUIActions: function() {
                var b = this;
                a.og.$window.on("scroll", b.checkInView.bind(b))
            },
            checkInView: function() {
                var a = this;
                return a.animatedFlag ? !1 : void(verge.inY(a.$elem, a.offset) && (a.animatedFlag = !0, a.$elem.css("animation-name", a.animOptions.name), a.animOptions.delay ? setTimeout(function() {
                    a.setAnimations()
                }, 1e3 * parseFloat(a.animOptions.delay)) : a.setAnimations()))
            },
            setAnimations: function() {
                this.$elem.css("visibility", "visible").addClass("animated")
            }
        },
        w = {
            settings: function() {
                return {
                    "mode-1": {
                        start: "transform:translate3d(0px, 0px, 0.1px) scale(1);",
                        end: "transform:translate3d(0px, %distance%px, 0.1px) scale(1.4);",
                        "data-anchor-target": "." + this.$elem.UniqueClass,
                        type: "distance"
                    },
                    "mode-2": {
                        start: "transform:translate3d(0px, 0px, 0.1px) scale(1.4);",
                        end: "transform:translate3d(0px, %distance%px, 0.1px) scale(1);",
                        "data-anchor-target": "." + this.$elem.UniqueClass,
                        type: "distance"
                    },
                    "mode-3": {
                        start: "transform:translate3d(0px, 0px, 0.1px) scale(1);",
                        end: "transform:translate3d(0px, 0px, 0.1px) scale(1.4);",
                        "data-anchor-target": "." + this.$elem.UniqueClass,
                        type: "none"
                    },
                    "mode-4": {
                        start: "transform:translate3d(0px, 0px, 0.1px) scale(1.4);",
                        end: "transform:translate3d(0px, 0px, 0.1px) scale(1);",
                        "data-anchor-target": "." + this.$elem.UniqueClass,
                        type: "none"
                    },
                    "mode-5": {
                        start: "transform:translate3d(0px, 0px, 0.1px) scale(1); opacity:0;",
                        end: "transform:translate3d(0px, 0px, 0.1px) scale(1.4); opacity:2",
                        "data-anchor-target": "." + this.$elem.UniqueClass,
                        type: "none"
                    },
                    "mode-6": {
                        start: "transform:translate3d(0px, 0px, 0.1px) scale(1); opacity:2;",
                        end: "transform:translate3d(0px, 0px, 0.1px) scale(1.4); opacity:-1",
                        "data-anchor-target": "." + this.$elem.UniqueClass,
                        type: "none"
                    },
                    "mode-title": {
                        start: "transform:translate3d(0px, 0px, 0.1px) scale(1); opacity:2;",
                        end: "transform:translate3d(0px, 0px, 0.1px) scale(1.4); opacity:0",
                        "data-anchor-target": "." + this.$elem.UniqueClass,
                        type: "none"
                    },
                    "mode-header-content": {
                        start: "transform:translate3d(0px, 0px, 0.1px);opacity:1",
                        end: "transform:translate3d(0px, %height%px, 0.1px);opacity:-0.5",
                        "data-anchor-target": ".page-head",
                        type: "height"
                    },
                    "mode-header-demo-2": {
                        start: "transform:translate3d(0px, 0px, 0.1px);opacity:1",
                        end: "transform:translate3d(0px, %height%px, 0.1px);opacity:-1",
                        "data-anchor-target": ".page-head",
                        type: "height"
                    },
                    "default": {
                        start: "transform:translate3d(0px, 0px, 0.1px);",
                        end: "transform:translate3d(0px, %distance%px, 0.1px);",
                        "data-anchor-target": "." + this.$elem.UniqueClass,
                        type: "distance"
                    }
                }
            },
            init: function(a) {
                this.$elem = a, this.$elem.readyState = !1, this.attsObj = {}, this.parallaxMode = this.$elem.data("parallax-mode") ? this.$elem.data("parallax-mode") : "default", this.setAttributes();
                var b = this;
                this.prepare(function() {
                    b.$elem.readyState = !0, b.$elem.trigger("parallaxReady"), b.$layer.addClass("parallax-" + b.parallaxMode), b.getAnimations(), b.setAnimations()
                }), this.bindUIActions()
            },
            setAttributes: function() {
                this.elementOffsetTop = this.$elem.offset().top, this.elemHeight = this.$elem.outerHeight(), this.elemWidth = this.$elem.outerWidth(), this.windowHeight = a.og.$window.height()
            },
            bindUIActions: function() {
                var b = this;
                a.og.$window.on("olRevsReady", function() {
                    b.$elem.readyState ? b.manualRevUpdate() : b.$elem.on("parallaxReady", function() {
                        b.manualRevUpdate()
                    })
                })
            },
            manualRevUpdate: function() {
                var b = this;
                b.destroyAnimations(), b.setAttributes(), b.getAnimations(), b.setAnimations(), d() && (x.updateSkrollr(), a(".rev_slider").revredraw())
            },
            prepare: function(b) {
                var c = this,
                    d = "ol-para-bg-";
                c.$elem.removeClassPrefix(d), c.$elem.UniqueClass = d + makeid(), this.$elem.addClass(this.$elem.UniqueClass);
                var e = c.$elem.data("img-src");
                return e ? (c.$imageLayer = a("<div></div>").addClass("parallax-bg-elem"), c.$imageLayer.css("background-image", "url(" + e + ")"), c.$elem.append(c.$imageLayer), void c.getImageSize(e, function(a) {
                    c.$imageLayer.height = c.elemWidth / (a.width / a.height), c.$imageLayer.height = Math.max(1.5 * c.elemHeight, c.$imageLayer.height), c.$imageLayer.css({
                        height: c.$imageLayer.height,
                        top: -(c.$imageLayer.height - c.elemHeight) / 2
                    }), c.$layer = c.$imageLayer, b()
                })) : (c.$layer = c.$elem, b(), !1)
            },
            getAnimations: function() {
                var a = this;
                a.attsObj = a.settings()[a.parallaxMode], a.attsObj = a.assignVariables(a.attsObj), a.attsObj = a.assignRange(a.attsObj)
            },
            setAnimations: function() {
                var a = this;
                a.$layer.attr(a.attsObj)
            },
            destroyAnimations: function() {
                var a = this;
                a.removeDataAttributes(a.$layer)
            },
            getImageSize: function(a, b) {
                var c = new Image;
                c.src = a, c.onload = function() {
                    var a = {
                        width: c.width,
                        height: c.height
                    };
                    b(a)
                }
            },
            assignRange: function(a) {
                var b, c, d = this,
                    e = a;
                return d.elementOffsetTop > d.windowHeight / 2 ? (b = "data-bottom-top", c = "data-top-bottom") : (b = "data-top-top", c = "data-top-bottom"), a.start && (e[b] = a.start, delete e.start), a.end && (e[c] = a.end, delete e.end), e
            },
            calcDistance: function() {
                var a, b = this;
                a = b.elementOffsetTop > b.windowHeight ? b.windowHeight + b.elemHeight : b.elemHeight + b.elementOffsetTop;
                var c = (b.$layer.height - b.elemHeight) / (2 * a);
                b.elemBgRatio = b.$elem.data("bg-parallax-factor") ? b.$elem.data("bg-parallax-factor") : Math.min(c, .6);
                var d = Math.max(Math.min(Math.abs(b.elemBgRatio), c), .05);
                return a * d * Math.sign(b.elemBgRatio)
            },
            assignVariables: function(b) {
                var c = this;
                return "height" == b.type ? b.end = b.end.replace(/%\w+%/g, parseInt(a(".page-head").height() / 2)) : "distance" == b.type && (b.end = b.end.replace(/%\w+%/g, parseInt(c.calcDistance()))), b
            },
            removeDataAttributes: function(b) {
                var c, d = [],
                    e = b.get(0).attributes,
                    f = e.length;
                for (c = 0; f > c; c++) "data-" === e[c].name.substring(0, 5) && d.push(e[c].name);
                a.each(d, function(a, c) {
                    b.removeAttr(c), b.removeData(c.substr(5))
                })
            }
        },
        x = {
            init: function() {
                return this.skrollrFlg = !1, olIsTouchDevice() ? !1 : (this.makeDecision(), void this.bindUIActions())
            },
            bindUIActions: function() {
                var b = this;
                a(window).on("debouncedresize", function() {
                    b.makeDecision()
                })
            },
            makeDecision: function() {
                var b = this;
                a(window).width() > 767 ? b.skrollrFlg || (b.initSkrollr(), b.skrollrFlg = !0) : b.destroy()
            },
            initSkrollr: function() {
                skrollr.init({
                    forceHeight: !1
                })
            },
            destroy: function() {
                skrollr.get() && skrollr.get().destroy(), self.skrollrFlg = !1
            },
            updateSkrollr: function() {
                var a = this;
                a.skrollrFlg && (a.destroy(), a.initSkrollr())
            }
        },
        y = {
            init: function() {
                this.$revSliders = a(".rev_slider_wrapper"), this.sliderNum = this.$revSliders.length, !this.sliderNum > 0 || this.checkSliders()
            },
            checkSliders: function() {
                var b = this,
                    c = 0;
                b.$revSliders.each(function() {
                    var d = a(this);
                    d.bind("revolution.slide.onloaded", function() {
                        c++, c == b.sliderNum && b.slidersDone()
                    })
                })
            },
            slidersDone: function() {
                a.og.$window.trigger("olRevsReady")
            }
        },
        z = {
            init: function() {
                return a.og.isTouchDevice ? (this.$wrapper = a("#wrapper"), this.selector = ".ol-hover", void this.bindUIActions()) : !1
            },
            bindUIActions: function() {
                var b = this;
                b.$wrapper.on("click", b.selector, function() {
                    var b = a(this);
                    b[0].tagName.toLowerCase();
                    "a" != this.elemTag && (b.addClass("touch-hover"), a.og.$body.one("click", function() {
                        b.removeClass("touch-hover")
                    }))
                })
            }
        },
        A = {
            init: function() {
                a.og = {
                    $body: a("body"),
                    $header: a("#header"),
                    $window: a(window),
                    isTouchDevice: olIsTouchDevice()
                }, this.runMethods(), this.runInlines()
            },
            runMethods: function() {
                createObjInstance("#primary-menu", f), u.init(a(".ol-search-trigger")), c(), g.init(), q(), o.init(), z.init(), a.og.$body.hasClass("sticky-header") && e.init(), createObjInstance("img.ol-retina", t), createObjInstance(".extend-bg-wrapper", s), createObjInstance(".sync-cols-height", r), createObjInstance(".set-bg", h), createObjInstance(".ol-particles", i), createObjInstance(".ol-timeline-tab", m), createObjInstance(".ol-timeline.scrollable-timeline", l), createObjInstance(".parallax-layer", w), createObjInstance(".ol-agenda", n), createObjInstance(".ol-accordion", j), createObjInstance(".ol-side-navigation", j, {
                    itemSelector: "li",
                    headSelector: "a",
                    bodySelector: ".sub-menu",
                    activeClass: "active",
                    initActiveClass: "current-menu-parent",
                    toggleElemClass: ".menu-item-has-children",
                    toggleEl: '<span class="ol-toggle">'
                }), createObjInstance(".ol-animate", v), createObjInstance(".ol-tab", k), createObjInstance(".ol-grid", p), b(), y.init()
            },
            runInlines: function() {
                a("#header #nav a").attr("title", ""), a('[data-toggle="tooltip"]').tooltip();
                var b = a("#gmap , .gmap");
                b.length > 0 && b.each(function() {
                    var b = a(this),
                        c = b.attr("data-address") || "Footscray VIC 3011 Australia";
                    b.gmap3({
                        map: {
                            options: {
                                maxZoom: 15,
                                disableDefaultUI: !0
                            }
                        },
                        styledmaptype: {
                            id: "mystyle",
                            options: {
                                name: "Style 1"
                            },
                            styles: [{
                                featureType: "all",
                                stylers: [{
                                    saturation: -100
                                }, {
                                    gamma: .9
                                }]
                            }]
                        },
                        overlay: {
                            address: c,
                            options: {
                                content: '<div id="map-marker"></div>',
                                offset: {
                                    y: -100,
                                    x: -25
                                }
                            }
                        },
                        autofit: {
                            maxZoom: 15
                        }
                    }, "autofit"), b.gmap3("get").setMapTypeId("mystyle")
                }), a(".search-box").each(function() {
                    var b = a(this),
                        c = b.children(".filters"),
                        d = b.find(".toggle-filter").first();
                    d.on("click", function(a) {
                        a.preventDefault(), b.toggleClass("fill-it"), c.slideToggle()
                    })
                }), a(".ol-text-rotate").each(function() {
                    var b = a(this),
                        c = b.data("words") || {},
                        d = a.map(c, function(a, b) {
                            return [a]
                        });
                    a(this).typed({
                        strings: d,
                        typeSpeed: 100,
                        backDelay: 1e3,
                        loop: !0
                    })
                });
                var c = a(".selectize").selectize(),
                    d = a(".pickdate").pickadate();
                a(".clear-selectize").on("click", function(b) {
                    b.preventDefault(), d.each(function(b) {
                        a(this).pickadate("picker").clear()
                    }), c.each(function(a) {
                        c[a].selectize.clear()
                    }), a(".filters").find(":input").val("")
                }), a(".owl-carousel.items").each(function() {
                    var b = a(this),
                        c = b.data("cols-xxs") || 1,
                        d = b.data("cols-xs") || 1,
                        e = b.data("cols-sm") || 2,
                        f = b.data("cols-md") || 3,
                        g = b.data("cols") || 4,
                        g = b.data("cols-lg") || g;
                    b.data("cols-all") && (g = f = e = d = c = b.data("cols-all")),
                        b.owlCarousel({
                            items: g,
                            responsive: {
                                0: {
                                    items: c
                                },
                                480: {
                                    items: d
                                },
                                768: {
                                    items: e
                                },
                                992: {
                                    items: f
                                },
                                1200: {
                                    items: g
                                }
                            },
                            autoplay: !0,
                            dots: b.data("dots") || !1,
                            nav: b.data("nav") || !1,
                            mouseDrag: !0,
                            stopOnHover: !0,
                            slideSpeed: b.data("slidespeed") || 2e3,
                            paginationSpeed: b.data("paginationspeed") || 2e3,
                            rewindSpeed: b.data("rewindspeed") || 1100,
                            margin: b.data("margin") || 0,
                            callbacks: !0,
                            autoplayHoverPause: !0,
                            autoplayTimeout: b.data("autoplaytime") || 3e3,
                            loop: b.data("loop") || !0
                        })
                }), a(".ol-countdown").each(function() {
                    var b = a(this),
                        c = b.data("countdown");
                    b.countdown(c, function(b) {
                        a(this).html(b.strftime("<div>%w<span>weeks</span></div><div>%d<span>days</span></div><div>%H<span>hours</span></div><div>%M<span>minuets</span></div><div>%S<span>seconds</span></div>"))
                    })
                })
            }
        };
    a(document).ready(function() {
        A.init()
    }), a(window).on("load", function() {
        x.init()
    })
}(jQuery), "function" != typeof Object.create && (Object.create = function(a) {
        function b() {}
        return b.prototype = a, new b
    }),
    function(a, b, c, d) {
        var e = a("#contact-form");
        e.submit(function(b) {
            b.preventDefault(), e.find(".ajax-results").remove();
            var c = {
                    name: a('input[name="name"]').val(),
                    email: a('input[name="email"]').val(),
                    subject: a('input[name="subject"]').val(),
                    message: a('textarea[name="message"]').val()
                },
                d = e.attr("action");
            a.ajax({
                type: "POST",
                url: d,
                data: c,
                dataType: "json",
                encode: !0
            }).done(function(a) {
                if (a.success) e.find('input[type="text"],input[type="email"], textarea').val(""), e.prepend('<div class="alert alert-success alert-thin with-big-icons"><i class="oli oli-ok"></i>' + a.message + "</div>");
                else {
                    var b = '<div class="ajax-results alert alert-danger alert-thin with-big-icons"><i class="oli oli-cancel"></i>';
                    a.errors.name && (b = b + a.errors.name + "</br>"), a.errors.email && (b = b + a.errors.email + "</br>"), a.errors.subject && (b = b + a.errors.subject + "</br>"), a.errors.message && (b = b + a.errors.message + "</br>"), b += "</div>", e.prepend(b)
                }
            }).fail(function(a) {
                console.log(a), e.prepend('<div class="alert alert-danger alert-thin with-big-icons"><i class="oli oli-cancel"></i>There was an error! Could not send email.</div>')
            })
        })
    }(jQuery, window, document), jQuery.fn.removeClassPrefix = function(a) {
        return this.each(function(b, c) {
            var d = c.className.split(" ").filter(function(b) {
                return 0 !== b.lastIndexOf(a, 0)
            });
            c.className = $.trim(d.join(" "))
        }), this
    };