/*global $, window*/
/*jslint maxerr: 10, es6, node, single, for, multivar, bitwise, white, this, devel, browser*/

//var itemByPage = 10;
var sender = [];
var map;
var markers = [];
var markers_checked = [];
//$.getScript("jquery.mixitup.min.js");
//$.getScript("jPages.min.js");
//	<script src="../js/jquery.mixitup.min.js"></script>
//	<script src="../js/jPages.min.js"></script>

function removeClass(obj) {
    'use strict';

    if ($(obj).hasClass('responsive')) {
        $(obj).removeClass('responsive');
    }
}

/*function setProfile() {
    'use strict';
////    var f = e.target.className;
////    e.preventDefault();
    $.ajax({
        type: "GET",
        url: "/profile",
        cache: false,
        success: function (data, status, xhr) {
        },
        error: function(xhr, status, error) {
        }
    });//.always(function(dj, textStatus, je) {
//        renderForm(f, dj, textStatus, je);
//    });
}
*/
function setUserSession(b, username) {
    'use strict';

//    alert(b);
//    alert(username);
    if (b) {
        $("#sign-btn i:first")
            .removeClass("fa-sign-in-alt")
            .addClass("fa-user-circle");
        $(".profile")
            .attr("title", username);
        $("#sign-btn a")
            .removeAttr("data-toggle");
        $("#sign-btn ul")
            .removeAttr("style");
        $('#login').modal('hide');
    } else {
        $("#sign-btn i:first")
            .addClass("fa-sign-in-alt")
            .removeClass("fa-user-circle");
        $(".profile")
            .attr("title", "Login")
            .attr("data-toggle", "modal");
        $("#sign-btn ul")
            .css("visibility", "hidden");
    }
}

function getTimelineItem(timeline, position) {
    'use strict';

    var isLastInverted = $('#timeline ul > li:not(.clearfix):last').hasClass('timeline-inverted'),
        d = new Date(timeline.created_at),
        timeline_date = d.getDate() + "." + d.getMonth() + "." + d.getFullYear(),
        positionClass = isLastInverted ? "" : "timeline-inverted",
        item = 
        $("<li>").attr("id", timeline.id)
//        $("<li>").attr("id", timeline._id)
//            .addClass(typeof position === "undefined" ? positionClass : position).append(
            .addClass(position === undefined ? positionClass : position).append(
            $("<div>").addClass("timeline-badge primary").append(
                $('<a>').append(
                    $('<i>')
                        .addClass("far fa-circle fa-lg circle-r invert")
                        .attr("data-toggle", "tooltip")
                        .attr("data-placement", isLastInverted ? "right" : "left")
                        .attr("title", timeline_date)
                        .css("cursor", "pointer")
                )
            )
        ).append(
            $("<div>")
                .addClass("timeline-panel").append(
                    $("<div>")
                        .addClass("timeline-heading").append(
                            $("<img>")
                                .addClass("img-fluid")
                                .attr("src", timeline.imgurl)
                                .attr("alt", "")
                        )
                ).append(
                    $("<div>")
                        .addClass("timeline-body").append(
                            $("<p>").text(timeline.body)
                        )
                    
                ).append(
                    $("<div>")
                        .addClass("timeline-footer").append(
                            $("<a>").append(
                                $("<i>")
                                    .addClass("far fa-thumbs-up fa-lg")
//                <a><i class="tl-comments far fa-comment fa-lg">&nbsp;&nbsp;</i></a>
                                    .attr("aria-hidden", "true")
                                    .html("&nbsp;&nbsp;")
                            )
                        ).append(
                            $("<a>").append(
                                $("<i>")
                                    .addClass("tl-edit far fa-edit fa-lg")
                                    .attr("aria-hidden", "true")
                                    .html("&nbsp;&nbsp;")
                            ).click(function (e) {
                                    var liid = $(e.target).parents('li').attr('id');
                                    $("#blog").data("btn", "edit");
                                    $("#blog").data("timeline", liid);
                                    $("#blog input[type=text]").val($('#' + liid + ' .timeline-footer .float-right').text());
                                    $("#blog textarea").val($('#' + liid + ' .timeline-body p').text());
                                    $('#blog .img-wrapper').css('background-image', 'url(' + $('#' + liid + ' .timeline-heading img').attr('src') + ')');
                                    $("#blog").modal("toggle");
                            })
                        ).append(
                            $("<a>")
                                .addClass("float-right")
                                .text(timeline.title)
                        )
                )
        );

    return item;
}

function addTimeline(timeline) {
    'use strict';

    $('#timeline ul').find(' > li:last-child').before(getTimelineItem(timeline));
}

function isLoggedIn() {
    'use strict';

    setUserSession(false);
    $.ajax({
        type: "GET",
        url: "/isloggedin",
        dataType: "json",
        cache: false,
        success: function (data, status, xhr) {
            var obj = JSON.parse(xhr.responseText),
                tls = obj.data.timeline, i;
            if (obj.status === 'OK' && obj.data.sessionId) {
                setUserSession(true, obj.data.username);
                for (i = 0; i < tls.length; i +=1) {
                    addTimeline(tls[i]);
                }
                $('[data-toggle="tooltip"]').tooltip();
            } else {
                setUserSession(false);
            }
            console.log('data: ' + data + ', status:' + status);
        },
        error: function(/*xhr, status, error*/) {
            setUserSession(false);
        }
    });
}

function renderForm(f, dj, textStatus/*, je*/) {
    'use strict';
    
    if (f === 'register-form' || f === 'login-form') {
        var frm_status = $('.' + f + ' .login-status');
        if (textStatus === 'success') {
            if (dj.status === 'ERROR') {
                frm_status.html(dj.message);
            } else {
                frm_status.empty();
                location.replace('./profile.html');
                setUserSession(true, dj.data.user.username);
            }
        } else if (textStatus === 'error') {
            frm_status.html('Error accessing the server.');
        } else if (dj.statusText === 'error') {
            switch (dj.status) {
                case 0 :
                    frm_status.html('Not connect. Verify Network.');
                    break;
                case 404 :
                    frm_status.html('Requested page not found. [404]');
                    break;
                case 500 :
                    frm_status.html('Internal Server Error [500].');
                    break;
            }
        }
    }
}

function logout(e) {
    'use strict';
//    var f = e.target.className;

    e.preventDefault();
    $.ajax({
        type: "GET",
        url: "/logout",
        cache: false,
        success: function (/*data, status, xhr*/) {
            if ($(location).attr('href').split('/').pop() === 'profile.html') {
                location.replace('./index.html');
            }
        }/*,
        error: function(xhr, status, error) {
        }*/
    });
}

function login(e) {
    'use strict';

    var f = e.target.className,
        obj = {
            username: $("." + f + " input[name=username]").val(),
            password: $("." + f + " input[name=password]").val()
        };
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "/login",
        dataType: "json",
        data: JSON.parse(JSON.stringify(obj))/*,
        success: function (data, status, xhr) {
        },
        error: function(xhr, status, error) {
        }*/
    }).always(function(dj, textStatus, je) {
        renderForm(f, dj, textStatus, je);
    });
}

function register(e) {
    'use strict';

    var f = e.target.className,
        obj = {
            username: $("." + f + " input[name=username]").val(),
            email: $("." + f + " input[name=email]").val(),
            password: $("." + f + " input[name=password]").val(),
            repassword: $("." + f + " input[name=repassword]").val()
        };
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "/register",
        dataType: "json",
        data: JSON.parse(JSON.stringify(obj))/*,
        success: function (data, status, xhr) {
        },
        error: function(xhr, status, error) {
        }*/
    }).always(function(dj, textStatus, je) {
        renderForm(f, dj, textStatus, je);
    });
}

function timeline(e) {
    'use strict';

    var f = e.target, val = $('#blog form').data('actionid'),
        tlsId = $(e.target.parentElement).data("timeline"),
        form_data;
    e.preventDefault();
    if ($(e.target.parentElement).data('btn') === "edit") {
        if (val === "1") {
            $.ajax({
                type: 'DELETE',
                url: '/tmldelete/' + tlsId,
                cache: false,
                contentType: false,
                processData: false,
                success: function (data, status, xhr) {
                    var obj = JSON.parse(xhr.responseText);
                    if (obj.status === 'OK') {
                        $('#' + tlsId).remove();
                        $(f.parentElement).modal("toggle");
                    }
                    console.log('data: ' + data + ', status:' + status);
                }/*,
                error: function(xhr, status, error) {
                }*/
            });
        } else {
            form_data = new FormData(f);
            if (!sender.length) {
                form_data.set('pic', undefined);
            }
            $.ajax({
                type: "PUT",
                url: "/tmledit/" + tlsId,
                contentType: false,
                processData: false,
                data: form_data,
                success: function (data, status, xhr) {
                    var obj = JSON.parse(xhr.responseText);
                    if (obj.status === 'OK') {
                        $('#' + tlsId).replaceWith(getTimelineItem(obj.data, $('#' + tlsId)[0].className));
                        $(f.parentElement).modal("toggle");
                    } else {
                        $('.' + f.className + ' .login-status').html(obj.message);
                    }
                    console.log('data: ' + data + ', status:' + status);
                }/*,
                error: function(xhr, status, error) {
                }*/
            });
        }
    } else {
        form_data = new FormData(f);
        form_data.set('pic', sender[0]);
        $.ajax({
            type: "POST",
            url: "/timeline",
            contentType: false,
            processData: false,
            data: form_data,
            success: function (data, status, xhr) {
                var obj = JSON.parse(xhr.responseText);
                if (obj.status === 'OK') {
                    addTimeline(obj.data);
                    $('[data-toggle="tooltip"]').tooltip();
                    $(f.parentElement).modal("toggle");
                } else {
                    $('.' + f.className + ' .login-status').html(obj.message);
                }
                console.log('data: ' + data + ', status:' + status);
            }/*,
            error: function(xhr, status, error) {
            }*/
        });
    }
}

function setImageFile(imagefile) {
    'use strict';

    sender = [];
    if (imagefile) {
        var file = imagefile, reader = new FileReader();
        reader.onloadend = function () {
            $('.img-wrapper').css('background-image', 'url(' + reader.result + ')');
        };
        reader.readAsDataURL(file);
        sender.push(imagefile);
    } else {
        $('.img-wrapper').css('background-image', '');
    }
}

function dragdropImage() {
    'use strict';

    var obj = $(".img-wrapper");
    obj.on('dragenter', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(e.target).css('border', '2px solid #0B85A1');
//        $(this).css('border', '2px solid #0B85A1');
    });
    obj.on('dragover', function (e) {
        e.stopPropagation();
        e.preventDefault();
    });
    obj.on('drop', function (e) {
        $(e.target).css('border', '2px dotted #0B85A1');
//        $(this).css('border', '2px dotted #0B85A1');
        e.preventDefault();
        setImageFile(e.originalEvent.dataTransfer.files[0]);
    });
    $(document).on('dragenter', function (e) {
        e.stopPropagation();
        e.preventDefault();
    });
    $(document).on('dragover', function (e) {
        e.stopPropagation();
        e.preventDefault();
        obj.css('border', '2px dotted #0B85A1');
    });
    $(document).on('drop', function (e) {
        e.stopPropagation();
        e.preventDefault();
    });
}

function loadGallery() {
    'use strict';
    
    var items = [
        ["london", "../img/gallery/ln1.jpg", "London", "London", "London"],
        ["london", "../img/gallery/ln2.jpg", "London", "London", "London"],
        ["london", "../img/gallery/ln3.jpg", "London", "London", "London"],
        ["london", "../img/gallery/ln4.jpg", "London", "London", "London"],
        ["new", "../img/gallery/ns1.jpg", "New", "New", "New"],
        ["new", "../img/gallery/ns2.jpg", "New", "New", "New"],
        ["new", "../img/gallery/ns3.jpg", "New", "New", "New"],
        ["new", "../img/gallery/ns4.jpg", "New", "New", "New"],
        ["new", "../img/gallery/ns5.jpg", "New", "New", "New"],
        ["new", "../img/gallery/ns6.jpg", "New", "New", "New"],
        ["new", "../img/gallery/ns7.jpg", "New", "New", "New"],
        ["new", "../img/gallery/ns8.jpg", "New", "New", "New"],
        ["new", "../img/gallery/ns9.jpg", "New", "New", "New"],
        ["new", "../img/gallery/ns10.jpg", "New", "New", "New"],
        ["ny", "../img/gallery/ny1.jpg", "New York", "New York", "New York"],
        ["ny", "../img/gallery/ny2.jpg", "New York", "New York", "New York"],
        ["ny", "../img/gallery/ny3.jpg", "New York", "New York", "New York"],
        ["ny", "../img/gallery/ny4.jpg", "New York", "New York", "New York"],
        ["ny", "../img/gallery/ny5.jpg", "New York", "New York", "New York"],
        ["ny", "../img/gallery/ny6.jpg", "New York", "New York", "New York"],
        ["ny", "../img/gallery/ny7.jpg", "New York", "New York", "New York"],
        ["popular", "../img/gallery/p1.jpg", "Popular", "Popular", "Popular"],
        ["popular", "../img/gallery/p2.jpg", "Popular", "Popular", "Popular"],
        ["popular", "../img/gallery/p3.jpg", "Popular", "Popular", "Popular"],
        ["popular", "../img/gallery/p4.jpg", "Popular", "Popular", "Popular"],
        ["popular", "../img/gallery/p5.jpg", "Popular", "Popular", "Popular"],
        ["popular", "../img/gallery/p6.jpg", "Popular", "Popular", "Popular"],
        ["popular", "../img/gallery/p7.jpg", "Popular", "Popular", "Popular"],
        ["popular", "../img/gallery/p8.jpg", "Popular", "Popular", "Popular"],
        ["vinece", "../img/gallery/v1.jpg", "Vinece", "Vinece", "Vinece"],
        ["vinece", "../img/gallery/v2.jpg", "Vinece", "Vinece", "Vinece"],
        ["vinece", "../img/gallery/v3.jpg", "Vinece", "Vinece", "Vinece"],
        ["vinece", "../img/gallery/v4.jpg", "Vinece", "Vinece", "Vinece"],
        ["vinece", "../img/gallery/v5.jpg", "Vinece", "Vinece", "Vinece"],
        ["vinece", "../img/gallery/v6.jpg", "Vinece", "Vinece", "Vinece"]], list, j,
        /*maxPageCount = 10, totalPageCount,
        li, btn,*/
        div, ahref, figure, img, figcaption, label, title, category, bg, overlay, ohref, oimg, odiv, otitle;

    list = document.getElementById('gallerylist');
    if (list) {
        for (j = 0; j < items.length; j += 1) {
            div = document.createElement('div');
            div.setAttribute('class', 'gallery ' + items[j][0]);
            div.setAttribute('data-cat', items[j][0]);
            div.setAttribute('data-value', items[j][2]);
//        $('<div/>', {
//            class: 'gallery ' + items[j][0],
//            'data-cat': items[j][0],
//            'data-value': items[j][2]
//        });
            ahref = document.createElement('a');
            ahref.setAttribute('href', '#image' + j);
            div.appendChild(ahref);
        
            figure = document.createElement('figure');
            figure.setAttribute('class', "gallery-wrapper");
            ahref.appendChild(figure);
        
            img = document.createElement('div');
            img.setAttribute('class', 'img');
            img.setAttribute('style', "background-image: url(" + items[j][1] + ")");
            figure.appendChild(img);

            figcaption = document.createElement('figcaption');
            figcaption.setAttribute('class', 'label');
            figure.appendChild(figcaption);

            label = document.createElement('div');
            label.setAttribute('class', 'label-text');
            figcaption.appendChild(label);
        
            title = document.createElement('span');
            title.setAttribute('class', 'text-title');
            title.innerHTML = items[j][2];
            label.appendChild(title);
            category = document.createElement('span');
            category.setAttribute('class', 'text-category');
            category.innerHTML = items[j][3];
            label.appendChild(category);
            bg = document.createElement('div');
            bg.setAttribute('class', 'label-bg');
            figcaption.appendChild(bg);

            overlay = document.createElement('div');
            overlay.setAttribute('class', 'lb-overlay');
            overlay.setAttribute('id', 'image' + j);
            div.appendChild(overlay);
        
            ohref = document.createElement('a');
            ohref.setAttribute('href', '#' + list.id);
            ohref.innerHTML = "<i class=\"fas fa-times fa-lg\"></i>";
            overlay.appendChild(ohref);
        
            oimg = document.createElement('img');
            oimg.setAttribute('src', items[j][1]);
            oimg.setAttribute('alt', "");
            overlay.appendChild(oimg);

            odiv = document.createElement('div');
            overlay.appendChild(odiv);
            otitle = document.createElement('h3');
            otitle.innerHTML = items[j][2];
            odiv.appendChild(otitle);
            otitle = document.createElement('p');
            otitle.innerHTML = items[j][4];
            odiv.appendChild(otitle);
        
            list.appendChild(div);
        }
        var pagination = $('.holder');
        function setPagination() {
            pagination.jPages({
                containerID: 'gallerylist',
                perPage: 7,
    //                   startPage: 1,
    //                   startRange: 1,
    //                   midRange: 3,
    //                   endRange: 1,
    //                   first : true,
    //                   last : true,
    //                   previous : "span.arrowPrev",
    //                   next : "span.arrowNext"
                previous : false,
                next : false
            });
        }
        function destroyPagination() {
            pagination.jPages('destroy');
        }
        setPagination();
        $('#gallerylist').mixItUp({
            selectors: {
                target: '.gallery',
                filter: '.filter',
                sort: '.sort'
            },
            load: {
                filter: '.new',
                sort: 'default:asc'
            },
            callbacks: {
                /*onMixLoad: function(state, futureState) {
                },*/
                onMixStart: function(/*state, futureState*/) {
                    destroyPagination();
                },
                onMixEnd: function(/*state, futureState*/) {
                    setPagination();
                }
            }
        });
    }
}

function enableEvent() {
    'use strict';
    
    $('top-menu').click(function() {
        var p = $(this);
        $('.navigation').css('top', p.position().top + p.outerHeight() + 'px');
        $('.navigation').css('left', p.position().left + 'px');
        $('.navigation').css('display', 'block');
    });
    
    $('#slider-list .img:gt(0)').hide();
    setInterval(function() {
        $("#slider-list .img:first-child").fadeOut(4000).next("#slider-list .img").fadeIn(4000).end().appendTo("#slider-list");
    }, 4000);

    $('#search').focusout(function () {
        removeClass('#search');
    });
    $('#menu').focusout(function () {
        removeClass('#menu');
    });
//    $('#login .message a').click(function () {
//        $('#login form').animate({
//            height: "toggle",
//            opacity: "toggle"
//        }, "slow");
//    });
    
    $('.like').click(function() {
        var obj = this.getElementsByTagName('span')[0], cnt = parseInt(obj.innerHTML, 10);
        if (Number.isNaN(cnt) || !isFinite(cnt)) {
            cnt = 0;
        }
        cnt += 1;
        obj.innerHTML = cnt;
    });
//    $("#login .login-form").on("submit", login);
//    $("#login .register-form").on("submit", register);
    $("#login .login-form input[name=password]").keypress(function(e) {
        var isTooltip = $('.tooltip').is(':visible'),
            s = String.fromCharCode(e.which);
        if (s.toUpperCase() === s && s.toLowerCase() !== s && !e.shiftKey) {
            if (!isTooltip) {
                $(e.target).tooltip('show');
//                $(this).tooltip('show');
            }
        } else if (isTooltip) {
//            $(this).tooltip('hide');
            $(e.target).tooltip('hide');
        }
//        $(this).blur(function(e) {
        $(e.target).blur(function(e) {
//            $(this).tooltip('hide');
            $(e.target).tooltip('hide');
        });
    });
    $("#logout").click(function(e) {
        setUserSession(false);
        logout(e);
    });
    $("#login").on("hide.bs.modal", function() {
        $('.register-form :input').val('');
        $('.login-form :input').val('');
        $('.login-status').empty();
    });

    $("#blog .blog-form").on("submit", timeline);
    $(".blog-form button[type=submit]").click(function(e) {
        $(e.target).parents('form').data('actionid', $(e.target).attr('value'));
    });
    $("#img-btn").change(function (e) {
        setImageFile(e.target.files[0]);
    });
    $("#img-clear").click(function () {
        setImageFile();
    });
    $("#blog").on("show.bs.modal", function(e) {
        if ($(e.target).data("btn") === "edit") {
            $('#btn-img-delete').show();
            $('#blog .modal-title').text('Edit or delete trip');
        } else {
            $('#btn-img-delete').hide();
            $('#blog .modal-title').text('Add new trip');
        }
    });
    $("#blog").on("hide.bs.modal", function() {
        $("#blog").data("btn", "");
        $('.blog-form :input').not(':button').val('');
        $(".img-wrapper").css("background-image", "");
        $('.login-status').empty();
//        $("#blog").data("value", 1);
    });

//    $("#language li a").click(function (e) {
////        alert(window.location.pathname);//document.URL);
////        alert($(location).attr('href'));
//        e.relatedTarget.prefentDefault();
//    });
    $('#language > li a').on('click', function(e) {
        var url = $(e.target).attr('href') + $('body').attr('data-page') + '.html';
        e.preventDefault();
        location.replace(url);
//        alert(url);//.split('/').pop() === 
    });    
//$(location).attr('href').split('/').pop() === 
//        $("#blog").modal("toggle");

    $("#sign-btn a").click(function() {
        $('#login').modal('toggle');
    });
    isLoggedIn();
    dragdropImage();
    if ($('body').attr('id') == 'tours') {
        var city = getUrlParameter('city');
        if (city) {
            $('.city-search-form input').val(city);
        }
        $('.city-search-form').submit();
    };
    loadGallery();//check because after dont work!!
    initMap();
}

$(window).on('load', function() {
    'use strict';

    $('.overlay-regular').css('opacity','0.3');
    $('.overlay-small').css('opacity','1');
});

$(document).ready(function() {
    'use strict';
    
    $.when(
//        $('#header-top').load('parts/header.html'),
//$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'your stylesheet url') );
        $('.city-search-form').on("submit", citySearch),
        $('#city-search').load('parts/city_search.html', function() {
            $('#city-search .city-search-form').on("submit", citySearch);
            // $(this).css('margin-top', '110px');
            // $(this).addClass('footer d-flex flex-column theme small');
        }),
        $('#footer').load('parts/footer.html', function() {
            $(this).addClass('footer d-flex flex-column theme small');
        }),
        $('#search').load('parts/search_form.html', function() {
            $(this).addClass('modal fade');
        }),
        $('#login').load('parts/login_form.html', function() {
            $(this).addClass('modal fade login-page');
            $('#login .message a').click(function () {
                $('#login form').animate({
                    height: "toggle",
                    opacity: "toggle"
                }, "slow");
            });
            $('#login .login-form').on("submit", login);
            $("#login .register-form").on("submit", register);
        }),
        $.getScript('../bootstrap/js/popper.min.js'),
        $.getScript('../bootstrap/js/bootstrap.min.js'),
        $.getScript('../js/tether.min.js')
    )
    .then(
        enableEvent()
    );
    
    $(window).resize();
});

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

function citySearch(e) {
    'use strict';
    var obj = {
        city: $(".city-search-form input").val()
    };
    e.preventDefault();
    if ($('body').attr('id') !== 'tours') {
        location.replace('./tours.html?city=' + obj.city);
    } else if (obj.city) {
            $.ajax({
            type: "GET",
            url: "/city",
            cache: false,
            dataType: "json",
            data: JSON.parse(JSON.stringify(obj)),
            success: function (data, status, xhr) {
                var obj = JSON.parse(xhr.responseText),
                    city = obj.data;
                if (obj.status === 'OK') {
                    $('#city-place').load('parts/city_place.html', function() {
                        $('#city-place h2').text(`Plan your rest in ${city.name} for 2 simple steps`); //Rus??
                    });
                    $('#city-sights').load('parts/city_sights.html', function() {
                        $('#city-sights h3').text(`We recommend to visit in ${city.name}`);
                        markers = [];
                        markers_checked = [];
                        city.places.map(function(place) {
                            $('.list-group').append(getCityPlace(place));
                        });
                    });
                    $('#google').show();
                    $('body[id=tours] footer').css('position', 'absolute');
                } else {
                    clearCityPlace();
                }
            }
        });
    } else {
        clearCityPlace();
    }
}

function clearCityPlace() {
    'use strict';

    $('#city-place').empty();
    $('#city-sights').empty();
//    $('#google').hide();
    $('body[id=tours] footer').css('position', 'fixed');
}

function checkMarker(target)
{
    'use strict';
//    var isInfo = $(target).hasClass('infomarker');
    markers_checked[$(target).attr('data-locationid')].setMap($(target).is(':checked') ? map : null);
}

function getCityPlace(place) {
    'use strict';
    var item = 
       $('<div>').addClass('list-group-item')
            .append($('<div>').addClass('media')
                .append($('<div>').addClass('checkbox pull-left')
                    .append($('<label>').css('font-size', '2.5em')
                        .append($('<input>').attr('type', 'checkbox')
                            .attr('data-locationid', markers.length).addClass('checkmarker')
                            .click(function() {
                                checkMarker(this);
//                                var infowindow = new google.maps.InfoWindow();
//                                infowindow.close();
//                                markers_checked[$(this).attr('data-locationid')].setMap($(this).is(':checked') ? map : null);
                            })
                        )
                        .append($('<span>').addClass('cr')
                            .append($('<i>').addClass('cr-icon fas fa-check'))
                        )
                    )
                )
                .append($('<div>').addClass('media-body m-2')
                    .append($('<h4>').addClass('media-heading').text(place.label))
                    .append($('<p>').text(place.description))
                )
                .append($('<div>').addClass('float-left')
                    .append($('<img>').addClass('media-object fixed-size')
                        .css('background', `url(${place.img})`).css('background-size', 'cover')
                        .attr('alt', 'Image').attr('src', '/img/cities/e2t_gradient.png')
                    )
                )
            );
    markers.push(addMarker(place, false));
    markers_checked.push(addMarker(place, true));

    return item;

// <div class="list-group-item">
//         <div class="media">
//             <div class="checkbox pull-left">
//                 <label style="font-size: 2.5em">
//                     <input type="checkbox" value="" checked>
//                     <span class="cr">
//                         <i class="cr-icon fas fa-check"></i>
//                     </span>
//                 </label>
//             </div>
//             <div class="media-body m-2">
//                 <h4 class="media-heading">St.Sofia Cathedral</h4>
//                 <p>Description</p>
//             </div>
//             <div class="float-left">
//                 <img class="media-object fixed-size" style="background: url(/img/gallery/ln1.jpg); background-size: cover" src="/img/cities/e2t_gradient.png" alt="Image">
//             </div>
//         </div>
//     </div>
}

function initMap() {
    'use strict';
//    $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCu_KJCzaktE0qS1ASbb5xXTdhovCl_NVI',
//        function() {
            function initialize() {
                'use strict';
                var center = {lat: 50.4645706, lng: 30.5190734};
                map = new google.maps.Map(document.getElementById('googleMap'), {
                    zoom: 15,
                    center: center,
                    scrollwheel: true,
                    draggable: true,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    draggableCursor: 'default'
                });
                map.addListener('mouseout', function() {
                    markers.map(item => {
                        if (item.infowindow)
                            item.infowindow.close();
                    });
                });
            }
            google.maps.event.addDomListener(window, 'load', initialize);
//        });
}

function addMarker(place, checked) {
    'use strict';
    var marker = new google.maps.Marker;
    marker.setPosition(place.location);
    if (!checked) {
        marker.setIcon({
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: '#4285f4',
            fillOpacity: 0.4,
            scale: 10,
            strokeWeight: 3,
            strokeColor: '#4285f4'
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<div class="text-center container">' +
                `<h5 class="ml-3">${place.label}</h5><br/>` + 
//                `<input type="checkbox" class="btn btn-primary btn-sm ml-4 infomarker" data-locationid="${markers.length}">Add/Remove</inpututton>` +
                '<div class="custom-control custom-checkbox ml-3">' +
                `<input type="checkbox" class="custom-control-input infomarker" data-locationid="${markers.length}" id="im${markers.length}">` +
                `<label class="custom-control-label mt-1" for="im${markers.length}">Add/Remove</label>` +
                '</div></div>'
        });
        marker.infowindow = infowindow;
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
        google.maps.event.addListener(infowindow, 'domready', function() {
            var m = markers_checked[$('.infomarker').attr('data-locationid')];
            $('.infomarker').prop('checked', typeof m.map !== 'undefined' && m.map !== null);
            $('.infomarker').click(function() {
                var lid = $(this).attr('data-locationid');
                checkMarker(this);
                $($('.checkmarker')[lid]).prop('checked', $(this).is(':checked'));
            });
        });
        marker.setMap(map);
    }

    return marker;
}

/*function toggleClick(obj) {
    'use strict';
    $(obj).toggleClass('responsive');
    $(obj + " form input:visible:first").focus();
}

function insertAfter(newNode, referenceNode) {
    'use strict';
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function clickPage(obj) {
    'use strict';
    var btns = document.querySelectorAll('.btn-group-item .btn');
    btns.forEach(function (btn) {
        btn.setAttribute('class', 'btn');
    });
    obj.setAttribute('class', 'btn active');
}
*/
//$(window).resize(function () {
//    'use strict';
////    removeClass('#menu');
////    removeClass('#search');
//    removeClass('#login');
//});
//Verify Form
/*function isValidValue(obj) {
    'use strict';
    return obj.value !== null && obj.value !== "";
}
function validateText(obj) {
    'use strict';
    var i;
    
    for (i = 0; i < obj.length; i += 1) {
        if (isValidValue(obj[i].value)) {
            return true;
        }
    }
//    obj.focus();
    return false;
}
function validateReason(obj) {
    'use strict';
    var pattern = /\d/;
    
//    return obj.value === null || obj.value === "" || obj.value.length > 20 || pattern.test(obj.value) ? false : true;
    return obj.value === null || obj.value === "" || obj.value.length > 20 || !pattern.test(obj.value);
}
function validateTel(obj) {
    'use strict';
    var pattern = /[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}/;

//    return obj.value === null || obj.value === "" || !pattern.test(obj.value) ? false : true;
    return obj.value === null || obj.value === "" || pattern.test(obj.value);
}
function validateEmail(obj) {
    'use strict';
    var pattern = /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/;

//    return obj.value === null || obj.value === "" || !pattern.test(obj.value) ? false : true;
    return obj.value === null || obj.value === "" || pattern.test(obj.value);
}
function validateUrl(obj) {
    'use strict';
    var pattern = /^https?:\/\/[\w\W]+/i;

//    return obj.value === null || obj.value === "" || !pattern.test(obj.value) ? false : true;
    return obj.value === null || obj.value === "" || pattern.test(obj.value);
}

function validateRadio(obj) {
    'use strict';
    var i;
    
    for (i = 0; i < obj.length; i += 1) {
        if (obj[i].checked) {
            return true;
        }
    }
//    obj.focus();
    return false;
}
function validateCheck(obj) {
    'use strict';
    var i;
  
    for (i = 0; i < obj.length; i += 1) {
        if (obj[i].checked) {
            return true;
        }
    }
//    obj.focus();
    return false;
}
function getElementType(obj) {
    'use strict';
    var type = "";
    
    if (obj.tagName === "INPUT") { return obj.type; }
    if (obj.tagName === "SELECT") { return obj.tagName; }
    if (obj[0].tagName === "INPUT") { return obj[0].type; }
    if (obj[0].tagName === "SELECT") { return obj[0].tagName; }
    return type;
}
function validateField(form, field) {
    'use strict';
    var res = true;
    if (field.length > 0) {
        switch (getElementType(field)) {
            case 'radio':
                if (!validateRadio(field)) {
                    res = false;
                }
                break;
            case 'checkbox':
                if (!validateCheck(field)) {
                    res = false;
                }
                break;
            case 'text':
                if (!validateText(field)) {
                    res = false;
                }
                break;
            case 'SELECT':
                if (!isValidValue(field)) {
                    res = false;
                }
                break;
            default :
                if (!validateText(field)) {
                    res = false;
                }
        }
    }
    else {
        switch (getElementType(field)) {
            case 'radio' :
                if (!field.checked) {
                    res = false;
                }
                break;
            case 'checkbox' :
                if (!field.checked) {
                    res = false;
                }
                break;
            case 'text' :
                if (!isValidValue(field)) {
                    res = false;
                }
                break;
            default :
                if (!isValidValue(field)) {
                    res = false;
                }
//                break;
        }
    }
    return res;
}
function validateRequiredFields(form) {
    'use strict';
    var i, requiredFields, isValid = true;
    
    requiredFields = form.querySelectorAll(
        "input[required]:not(:disabled):not([readonly]):not([type=hidden]):not([type=submit])," +  
        "select[required]:not(:disabled):not([readonly])," +
        "textarea[required]:not(:disabled):not([readonly])");
    for (i = 0; i < requiredFields.length; i += 1) {
        isValid = validateField(form, requiredFields[i]);
        if (!isValid) {
            return false;
        }
    }
//    obj.focus();
    return isValid;
}

function getFormElements(form) {
    'use strict';
    return form.querySelectorAll(
        "input:not(:disabled):not([readonly]):not([type=hidden]):not([type=submit])," +
        "select:not(:disabled):not([readonly])," +
        "textarea:not(:disabled):not([readonly])");
}
function getFormFields(form) {
    'use strict';
    var i, formFields, fields = [];
    
    formFields = getFormElements(form);
    for (i = 0; i < formFields.length; i += 1) {
		if (fields.indexOf(formFields[i].name) === -1) {
            fields.push(formFields[i].name);
        }
	}
    return fields;
}
function getFormValidFieldsCount(form) {
    'use strict';
    var i, j = 0, fields;
    
    fields = getFormFields(form);
    for (i = 0; i < fields.length; i += 1) {
        if (validateField(form, form.elements[fields[i]])) {
            j += 1;
        }
    }
    return j;
}

function verify(form) {
    'use strict';
//    alert("1: text = " + validateReason(form.t3));
//    alert("2: radio = " + validateRadio(form.f1));
//    alert("3: tel = " + validateTel(form.tel));
//    alert("4: email = " + validateEmail(form.email));
//    alert("5: url = " + validateUrl(form.url));
//    alert("6: check = " + validateCheck(form.a2));
//    alert("7: required = " + validateRequiredFields(form));
//    alert(getFormFields(form));
    return false;    
}
*/