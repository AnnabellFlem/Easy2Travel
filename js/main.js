/*global $, window*/
/*jslint maxerr: 10, es6, node, single, for, multivar, bitwise, white, this, devel, browser*/
'use strict';
//const util = require('util');
// import * as util from 'util';
//var itemByPage = 10;
var sender = [];

let map;
let markers = [];
let markers_checked = [];
let directionsDisplay;
let isLoggedIn = false;

function removeClass(obj) {
    if ($(obj).hasClass('responsive')) {
        $(obj).removeClass('responsive');
    }
}

function isExist(element) {
    return typeof element !== 'undefined' && element !== null;
}

function loadScripts(next) {
    // $.cachedScript('../bootstrap/js/bootstrap.bundle.min.js', () => {
    //     $.getScript('../js/tether.min.js', () => {
    //         next();
    //     });
    // });
    /*
        <script src="../js/jquery.mixitup.min.js"></script>
        <script src="../js/jPages.min.js"></script>
    */
    $.getScript('../bootstrap/js/popper.min.js', () => {
        $.getScript('../bootstrap/js/bootstrap.min.js', () => {
            $('[data-toggle="tooltip"]').tooltip();
            $.getScript('../js/tether.min.js', () => {
                next();
            });
        });
    });
}

function getUrlParameter(param) {
    let sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        parameterName;

    for (let i = 0; i < sURLVariables.length; i++) {
        parameterName = sURLVariables[i].split('=');
        if (parameterName[0] === param) {
            return parameterName[1] === undefined ? true : parameterName[1];
        }
    }
}

/*function setProfile() {
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
function setUserSession(username) {
    isLoggedIn = isExist(username);
    if (isLoggedIn) {
        $('#sign-btn i:first')
            .removeClass('fa-sign-in-alt')
            .addClass('fa-user-circle');
        $('.profile')
            .attr('title', username);
        $('#sign-btn a')
            .removeAttr('data-toggle');
        $('#sign-btn > ul')
            .removeAttr('style');
        // $('#login').modal('hide');
    } else {
        $('#sign-btn i:first')
            .addClass('fa-sign-in-alt')
            .removeClass('fa-user-circle');
        $('.profile')
            .attr('title', 'Login')
            .attr('data-toggle", "modal');
        $('#sign-btn > ul')
            .css('visibility', 'hidden');
    }
    if (isProfilePage()) {
        $("#sign-btn > ul > li:first").hide();
    }
}

function getTimelineItem(timeline, position, index) {
    let isLastInverted = $('#timeline ul > li:not(.clearfix):last').hasClass('timeline-inverted');
    let d = new Date(timeline.created_at);
    let timeline_date = ('0' + d.getDate()).slice(-2) + '.' +
        ('0' + (d.getMonth() + 1)).slice(-2) + '.' +
        d.getFullYear();
    let positionClass = isLastInverted ? "" : "timeline-inverted";
    let places = "";
    let subPlace = (item, index) =>
        `<div id=${timeline.id}${index} class="list-group list-group-flush">
            <div class="list-group-item">
                <div class="media">
                    <div class="media-body m-2">
                        <h4 class="media-heading">${item.title}</h4>
                        <p>${item.description}</p>
                    </div>
                    <div class="w-50">
                        <img class="media-object w-75 float-right" src="${item.imgurl}" alt="Image1">
                    </div>
                </div>
            </div>
        </div>`;
    timeline.body.map((item, index) => places += subPlace(item, index));
    let item =
        $(`<li id="${timeline.id}" class="${position === undefined || position === null ? positionClass : position}">
        <div class="timeline-badge primary">
            <a>
                <i class="far fa-circle fa-lg" data-toggle="tooltip" data-placement="${isLastInverted ? "right" : "left"}" title="${timeline_date}"></i>
            </a>
        </div>
        <div class="timeline-panel">
            <div class="list-group list-group-flush">
                <a href="#" class="list-group-item">
                    <div id="google${index}" class="container-fluid" style="height:180px;"></div>
                </a>
            </div>
            ${places}
            <div class="timeline-footer">
                <a>
                    <i class="tl-likes far fa-thumbs-up fa-lg">${timeline.likes > 0 ? timeline.likes : ''}&nbsp;&nbsp;</i>
                </a>
                <a>
                    <i class="tl-comments far fa-comment fa-lg">&nbsp;&nbsp;</i>
                </a>
                <a>
                    <i class="tl-edit far fa-edit fa-lg"></i>
                </a>
                <a class="float-right">${timeline.title} trip</a>
                </div>
        </div>
    </li>`);
    //<input type="text" class="float-right">

    // $("<li>").attr("id", timeline.id)
    //     .addClass(position === undefined ? positionClass : position).append(
    //     $("<div>").addClass("timeline-badge primary").append(
    //         $('<a>').append(
    //             $('<i>')
    //                 .addClass("far fa-circle fa-lg circle-r invert")
    //                 .attr("data-toggle", "tooltip")
    //                 .attr("data-placement", isLastInverted ? "right" : "left")
    //                 .attr("title", timeline_date)
    //                 .css("cursor", "pointer")
    //         )
    //     )
    // ).append(
    //     $("<div>")
    //         .addClass("timeline-panel").append(
    //             $("<div>")
    //                 .addClass("timeline-heading").append(
    //                     $("<img>")
    //                         .addClass("img-fluid")
    //                         .attr("src", timeline.imgurl)
    //                         .attr("alt", "")
    //                 )
    //         ).append(
    //             $("<div>")
    //                 .addClass("timeline-body").append(
    //                     $("<p>").text(timeline.body)
    //                 )

    //         ).append(
    //             $("<div>")
    //                 .addClass("timeline-footer").append(
    //                     $("<a>").append(
    //                         $("<i>")
    //                             .addClass("far fa-thumbs-up fa-lg")
    //                             .attr("aria-hidden", "true")
    //                             .html("&nbsp;&nbsp;")
    //                     )
    //                 ).append(
    //                     $("<a>").append(
    //                         $("<i>")
    //                             .addClass("tl-edit far fa-edit fa-lg")
    //                             .attr("aria-hidden", "true")
    //                             .html("&nbsp;&nbsp;")
    //                     ).click(function (e) {
    //                             var liid = $(e.target).parents('li').attr('id');
    //                             $("#blog").data("btn", "edit");
    //                             $("#blog").data("timeline", liid);
    //                             $("#blog input[type=text]").val($('#' + liid + ' .timeline-footer .float-right').text());
    //                             $("#blog textarea").val($('#' + liid + ' .timeline-body p').text());
    //                             $('#blog .img-wrapper').css('background-image', 'url(' + $('#' + liid + ' .timeline-heading img').attr('src') + ')');
    //                             $("#blog").modal("toggle");
    //                     })
    //                 ).append(
    //                     $("<a>")
    //                         .addClass("float-right")
    //                         .text(timeline.title)
    //                 )
    //         )
    // );

    return item;
}

function addTimeline(timeline, index) {
    let ls = "";
    $('#timeline ul').find(' > li:first-child').after(getTimelineItem(timeline, null, index)); //newest to oldest?
    timeline.locations.map(item => {
        ls += `m = new google.maps.Marker({
                position: new google.maps.LatLng(${item[0]}, ${item[1]}),
                map: map
            });
            ways.push(m);
            drawRoute(ways, map);`;
    });
    $('#timeline ul').append(
        $(`
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCu_KJCzaktE0qS1ASbb5xXTdhovCl_NVI&callback=init" async defer></script>
        <script>
        function init() {
            let ways = [];
            let m;
            let map = new google.maps.Map(document.getElementById('google${index}'), {
                zoom: 12
            });
            setCenter("${timeline.title}", map);
            ${ls}
        }
    </script>`));
    $('.timeline-footer a:nth-child(1) i').on('click', e => {
        e.preventDefault();
        $.ajax({
            type: 'PUT',
            url: `/tmledit/${timeline.id}/likes`,
            contentType: false,
            processData: false,
            cache: false,
            success: (data, status, xhr) => {
                // console.log(JSON.stringify(data));
                if (data.status === 'OK') {
                    $(e.target).text(data.data.likes);
                }
            }
        });
    });
    $('.timeline-footer a:nth-child(3) i').on('click', e => {
        let liid = $(e.target).parents('li').attr('id');

        $('.btn-group .dropdown-menu').empty();
        for (let i = 0; i < $(`#${liid} .media-heading`).length; i++) {
            let subplace = `${liid}${i}`;
            $('.btn-group .dropdown-menu').append(`<a class="dropdown-item" href="#" data-subplace="${subplace}">${$(`#${subplace} .media-heading`).text()}</a>`);
            $('.btn-group .dropdown-item').on('click', e => {
                let subplace = $(e.target).attr('data-subplace');
                $('#blog .modal-body .media-heading').text($(`#${subplace} .media-heading`).text());
                $('#blog .modal-body textarea').text($(`#${subplace} p`).text());
                $('#blog .img-wrapper').css('background-image', `url(${$(`#${subplace} .media-object`).attr('src')})`);
            });
        }
        $('#blog .modal-header .modal-title').text(`Edit ${timeline.title} trip`);
        $('#blog').modal('toggle');
    });
}

function checkAuthorization() { ////remove to tours only for profile
    $.ajax({
        type: 'GET',
        url: '/isloggedin',
        dataType: 'json',
        cache: false,
        success: (data, status, xhr) => {
            let obj = JSON.parse(xhr.responseText);
            if (obj.status === 'OK' && obj.data.userid) {
                setUserSession(obj.data.username);
            } else {
                setUserSession();
            }
            // console.log('data: ' + data + ', status:' + status);
        },
        error: () => {
            setUserSession();
        }
    });
}

function renderForm(f, dj, textStatus) {
    if (f === 'register-form' || f === 'login-form') {
        let frm_status = $(`.${f} .login-status`);
        if (textStatus === 'success') {
            if (dj.status === 'ERROR') {
                frm_status.html(dj.message);
            } else {
                frm_status.empty();
                location.replace('./profile.html');
                // setUserSession(dj.data.user.username);
            }
        } else if (textStatus === 'error') {
            frm_status.html('Error accessing the server.');
        } else if (dj.statusText === 'error') {
            switch (dj.status) {
                case 0:
                    frm_status.html('Not connect. Verify Network.');
                    break;
                case 404:
                    frm_status.html('Requested page not found. [404]');
                    break;
                case 500:
                    frm_status.html('Internal Server Error [500].');
                    break;
            }
        }
    }
}

function logout(e) {
    e.preventDefault();
    $.ajax({
            type: 'GET',
            url: '/logout',
            cache: false,
            success: () => {
                if ($(location).attr('href').split('/').pop() === 'profile.html') {
                    location.replace('./index.html');
                }
            }
        })
        .always(setUserSession());
}

function login(e) {
    let f = e.target.className,
        obj = {
            username: $(`.${f} input[name=username]`).val(),
            password: $(`.${f} input[name=password]`).val()
        };
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: '/login',
        dataType: 'json',
        data: JSON.parse(JSON.stringify(obj))
    }).always((dj, textStatus, je) => {
        renderForm(f, dj, textStatus);
    });
}

function register(e) {
    let f = e.target.className,
        obj = {
            username: $(`.${f} input[name=username]`).val(),
            email: $(`.${f} input[name=email]`).val(),
            password: $(`.${f} input[name=password]`).val(),
            repassword: $(`.${f} input[name=repassword]`).val()
        };
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: '/register',
        dataType: 'json',
        data: JSON.parse(JSON.stringify(obj))
    }).always((dj, textStatus, je) => {
        renderForm(f, dj, textStatus);
    });
}

function getTimelines() {
    $.ajax({
        type: 'GET',
        url: '/tmlget',
        dataType: 'json',
        cache: false,
        success: (data, status, xhr) => {
            if (data.status === 'OK' && data.data.userid) {
                Object.values(data.data.timeline).map((t, index) => addTimeline(t, index));
                //$.getScript('../bootstrap/js/bootstrap.bundle.min.js', () => 
                // $('[data-toggle="tooltip"]').tooltip();
                // console.log(Object.values(data.data.timeline));
            } else {
                // setUserSession();
            }
            // console.log('data: ' + JSON.stringify(data) + ', status:' + status);
        },
        error: () => {
            // setUserSession();
        }
    });
}

function timeline(e) {
    var f = e.target,
        val = $('#blog form').data('actionid'),
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
                    // console.log('data: ' + data + ', status:' + status);
                }
                /*,
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
                    // console.log('data: ' + data + ', status:' + status);
                }
                /*,
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
                    // $('[data-toggle="tooltip"]').tooltip();
                    $(f.parentElement).modal("toggle");
                } else {
                    $('.' + f.className + ' .login-status').html(obj.message);
                }
                // console.log('data: ' + data + ', status:' + status);
            }
            /*,
                        error: function(xhr, status, error) {
                        }*/
        });
    }
}

function setImageFile(imagefile) {
    sender = [];
    if (imagefile) {
        let file = imagefile;
        let reader = new FileReader();

        reader.onloadend = () => $('.img-wrapper').css('background-image', 'url(' + reader.result + ')');
        reader.readAsDataURL(file);
        sender.push(imagefile);
    } else {
        $('.img-wrapper').css('background-image', '');
    }
}

function dragdropImage() {
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

function enableEvent() { //remove to tours only = check all
    // $('.top-menu').click(function () {
    //     var p = $(this);
    //     $('.navigation').css('top', p.position().top + p.outerHeight() + 'px');
    //     $('.navigation').css('left', p.position().left + 'px');
    //     $('.navigation').css('display', 'block');
    // });

    if (isMainPage()) {
        $('#slider-list .img:gt(0)').hide();
        setInterval(() =>
            $("#slider-list .img:first-child").fadeOut(4000).next("#slider-list .img").fadeIn(4000).end().appendTo("#slider-list"),
            4000);
    }
    $('#search').focusout(() => removeClass('#search'));
    $('#menu').focusout(() => removeClass('#menu'));
    $('.like').click(function () { //remove?
        var obj = this.getElementsByTagName('span')[0],
            cnt = parseInt(obj.innerHTML, 10);
        if (Number.isNaN(cnt) || !isFinite(cnt)) {
            cnt = 0;
        }
        cnt++;
        obj.innerHTML = cnt;
    });
    $('#login .login-form input[name=password]').keypress(e => {
        let isTooltip = $('.tooltip').is(':visible'),
            s = String.fromCharCode(e.which);
        if (s.toUpperCase() === s && s.toLowerCase() !== s && !e.shiftKey) {
            if (!isTooltip) {
                $(e.target).tooltip('show');
            }
        } else if (isTooltip) {
            $(e.target).tooltip('hide');
        }
        $(e.target).blur(e => $(e.target).tooltip('hide')); //check?
    });
    $('#login').on('shown.bs.modal', () => {
        $('#login form').each((i, e) => {
            if (e.clientHeight) {
                $(e).find('input').first().focus();
            }
        });
    });
    $('#login').on('hide.bs.modal', () => {
        $('.register-form :input').val('');
        $('.login-form :input').val('');
        $('.login-status').empty();
    });
    $("#blog .blog-form").on("submit", timeline);
    $(".blog-form button[type=submit]").click(e =>
        $(e.target).parents('form').data('actionid', $(e.target).attr('value'))
    );
    $('#img-btn').change(e => setImageFile(e.target.files[0]));
    $('#img-clear').click(() => setImageFile());
    $('#blog').on('show.bs.modal', () => $($('.btn-group .dropdown-item')[0]).click());
    $('#blog').on('hide.bs.modal', () => {
        $('#blog').data('btn', "");
        $('.blog-form :input').not(':button').val('');
        $('.img-wrapper').css('background-image', "");
        $('.login-status').empty();
    });

    //    $("#language li a").click(function (e) {
    ////        alert(window.location.pathname);//document.URL);
    ////        alert($(location).attr('href'));
    //        e.relatedTarget.prefentDefault();
    //    });
    $('#language > li a').on('click', e => {
        var url = $(e.target).attr('href') + $('body').attr('data-page') + '.html';
        e.preventDefault();
        location.replace(url);
        //        alert(url);//.split('/').pop() === 
    });
    //$(location).attr('href').split('/').pop() === 
    //        $("#blog").modal("toggle");

    // isLoggedIn();
    dragdropImage();

    if (isTourPage()) {
        $('#btn-map').on('click', () => {
            $('html, body').animate({
                scrollTop: $('#googleMap').offset().top
            }, 2000);
        });
    }

    if (isMainPage()) {
        $.getScript('../js/jquery.mixitup.min.js', () =>
            $.getScript('../js/jPages.min.js', () => loadGallery())
        );
    }
}

$(window).on('load', () => {
    if (isTourPage() || isMainPage()) {
        $('.overlay-regular').css('opacity', '0.3');
        $('.overlay-small').css('opacity', '1');
    }
});

$(document).ready(() => {
    $.when(loadScripts(checkAuthorization))
        .then(() => {
            $('#header-top').load('parts/header.html', () => {
                $("#sign-btn > a").click(() => {
                    if (isLoggedIn) {
                        location.replace('./profile.html');
                    } else {
                        $('#login').modal(); //'toggle');
                    }
                });
                $('#logout').click(e => logout(e));
            });
            if (isMainPage() || isTourPage()) {
                $('#city-search').load('parts/city_search.html', () => {
                    getCitiesList();
                    $('.city-search-form').submit(citySearch);
                    let city = getUrlParameter('city');
                    if (city) {
                        $('.city-search-form input').val(city);
                    }
                    if (isTourPage()) {
                        $('.city-search-form').submit();
                    }
                });
            }
            $('#footer').load('parts/footer.html', function () {
                $(this).addClass('footer d-flex flex-column theme small');
            });
            $('#search').load('parts/search_form.html', function () {
                $(this).addClass('modal fade');
            });
            $('#login').load('parts/login_form.html', function () {
                $(this).addClass('modal fade login-page');
                $('#login .message a').click(() => {
                    $('#login form').animate({
                        height: "toggle",
                        opacity: "toggle"
                    }, "slow");
                });
                $('#login .login-form').on("submit", login);
                $("#login .register-form").on("submit", register);
            });
            if (isTourPage()) {
                $('#route').load('parts/route_form.html', function () {
                    $(this).addClass('modal fade login-page');
                    // $('#login .login-form').on("submit", login);
                    // $("#login .register-form").on("submit", register);
                });
            }
            if (isProfilePage()) {
                getTimelines();
            }


            // $('.dropdown-item').on('click', () => { 
            //     alert(3);
            // });

            // $.getScript('../bootstrap/js/popper.min.js', function() {
            //     $.getScript('../bootstrap/js/bootstrap.min.js');
            // }),//.done(() => {alert(1)}),
            // // $.getScript('../bootstrap/js/bootstrap.min.js'),
            // $.getScript('../js/tether.min.js')
            enableEvent();
        });
    // $(window).resize();
});

$(window).scroll(() => {
    if (isTourPage()) {
        let fp = $('.float-panel');
        let pos = fp.offset().top + fp.height();
        fp.css('visibility', pos > $('#googleMap').offset().top ? 'hidden' : 'visible');
    }
});

function isTourPage() {
    return $('body').attr('id') === 'tours';
}

function isMainPage() {
    return $('body').attr('id') === 'e2t';
}

function isProfilePage() {
    return $('body').attr('id') === 'profile';
}

function getCurrentLanguage(value = 'en') {
    let lng = $('#language');

    return lng ? lng.prev().find('sup').text().toLowerCase() : value;
}

function getCitiesList() {
    $.ajax({
        type: 'GET',
        url: `/tours/${getCurrentLanguage()}`,
        dataType: 'json',
        cache: false,
        success: (data, status, xhr) => {
            let obj = JSON.parse(xhr.responseText);
            if (obj.status === 'OK' && obj.data) {
                Object.values(obj.data).map(item => $('#cities').append(`<option value="${item.city}">`));
            }
            // console.log('data: ' + data + ', status:' + status);
        },
        error: () => {}
    });
}

function citySearch(e) {
    let obj = {
        city: $('.city-search-form input').val(),
        lng: getCurrentLanguage()
    };

    e.preventDefault();
    if (!isTourPage()) {
        location.replace(`./tours.html?city=${obj.city}`);
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
                    $('#city-place').load('parts/city_place.html', () => {
                        $('#city-place h2').text(`Plan your rest in ${city.name} for 2 simple steps`);
                    });
                    $('#city-sights').load('parts/city_sights.html', () => {
                        $('#city-sights h3').text(`We recommend to visit in ${city.name}`);
                        markers = [];
                        markers_checked = [];
                        setCenter(city.name);
                        city.places.map(place => $('.list-group').append(getCityPlace(place)));
                    });
                    $('#city-route').load('parts/city_route.html', () => {
                        $('#route').on('show.bs.modal', function (e) {
                            if (isLoggedIn) {
                                $('.routeguest').hide();
                                $('.routeuser').show();
                            } else {
                                $('.routeguest').show();
                                $('.routeuser').hide();
                            }
                        });
                        $('.routeguest a').on('click', () => saveRoute(getCheckMarkers(), city.name, true));
                        $('.routeuser a').on('click', () => saveRoute(getCheckMarkers(), city.name, false));
                        $('.btn-route').on('click', () => {
                            if (getCheckMarkers().length > 1) {
                                $('#route').modal("toggle");
                            } else {
                                $('#alert-box').load('parts/alert.html');
                            }
                        });
                        $('#btn-clear').on('click', () => {
                            $('.list-group').children().map(index => {
                                let item = $($('.list-group').children()[index]).find('input');
                                item.prop('checked', false);
                                checkMarker(item);
                            });
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

function saveRoute(routes, cityname, status) {
    let obj = {
        title: cityname,
        locations: routes.map(item => item.position),
        lng: getCurrentLanguage()
    };

    console.log(JSON.stringify(obj.locations));
    routes.map(item => console.log('=> ' + item.position));

    // $.ajax({
    //     type: 'GET',
    //     url: '/routes',
    //     cache: false,
    //     dataType: 'json',
    //     data: JSON.parse(JSON.stringify(obj)),
    //     success: function (data, status, xhr) {
    //         let obj = JSON.parse(xhr.responseText);
    //         if (obj.status === 'OK') {
    //             if (status) {
    //                 $('#login').modal('toggle');
    //             } else {
    //                 location.replace('./profile.html');
    //             }
    //         }
    //     }
    // });
}

function drawRoute(markerWay, initmap = map) {
    let waypts = [];
    for (let i = 1; i < markerWay.length - 1; i++) {
        waypts.push({
            location: markerWay[i].position,
            stopover: true
        });
    }
    let directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer({
        suppressMarkers: true
    });
    directionsService.route({
        origin: markerWay[0].position,
        destination: markerWay[markerWay.length - 1].position,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
    }, (response, status) => {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
            directionsDisplay.setMap(initmap);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

function clearCityPlace() {
    $('#city-place').empty();
    $('#city-sights').empty();
    $('#google').hide();
    $('body[id=tours] footer').css('position', 'fixed');
    $('#city-route').empty();
}

function getCheckMarkers() {
    return markers_checked.filter(item => isExist(item.map));
}

function checkMarker(target) {
    let lid = $(target).attr('data-locationid');

    markers_checked[lid].setMap($(target).is(':checked') ? map : null);
    let markerWay = getCheckMarkers();
    clearDirections();
    if (markerWay.length > 1) {
        drawRoute(markerWay);
    }
    $('#markers-count').text(`${markerWay.length} places marked`);
}

function clearDirections() {
    if (isExist(directionsDisplay)) {
        directionsDisplay.setDirections({
            routes: []
        });
        directionsDisplay.setMap(null);
        directionsDisplay = null;
    }
}

function getCityPlace(place) {
    let item =
        $('<div>').addClass('list-group-item')
        .append($('<div>').addClass('media')
            .append($('<div>').addClass('checkbox pull-left')
                .append($('<label>').css('font-size', '2.5em')
                    .append($('<input>').attr('type', 'checkbox')
                        .attr('data-locationid', markers.length).addClass('checkmarker')
                        .click(e => checkMarker(e.target))
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
                    .css('background', `url(${place.imgurl})`).css('background-size', 'cover')
                    .attr('alt', 'Image').attr('src', '/img/cities/e2t_gradient.png')
                )
            )
        );
    markers.push(addMarker(place, false));
    markers_checked.push(addMarker(place, true));

    return item;
}

function initMap() {
    map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 14,
        scrollwheel: true,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        draggableCursor: 'default'
    });
    if (isTourPage()) {
        map.addListener('mouseout', closeMarkers);
    } else {
        new google.maps.Marker({
            position: setCenter(),
            map: map
        });
    }
}

function closeMarkers() {
    markers.map(item => {
        if (item.infowindow)
            item.infowindow.close();
    });
}

function setCenter(address, initmap = map) {
    let location = {
        lat: 50.4645706,
        lng: 30.5190734
    };

    if (address) {
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            address: address
        }, (results, status) => {
            initmap.setCenter(status === google.maps.GeocoderStatus.OK ?
                results[0].geometry.location : location);
        });
    } else {
        map.setCenter(location);
    }
    // map.setZoom(15);

    return location;
}

function addMarker(place, checked) {
    let marker = new google.maps.Marker;
    let latlng = new google.maps.LatLng(place.location[0], place.location[1]);
    marker.setPosition(latlng);
    marker.setTitle(place.label);
    if (!checked) {
        marker.setIcon({
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: '#4285f4',
            fillOpacity: 0.4,
            scale: 10,
            strokeWeight: 3,
            strokeColor: '#4285f4'
        });
        let infowindow = new google.maps.InfoWindow({
            content: `<div class="text-center container">
                <h5 class="ml-3">${place.label}</h5><br/>
                <div class="custom-control custom-checkbox ml-3">
                <input type="checkbox" class="custom-control-input infomarker" data-locationid="${markers.length}" id="im${markers.length}">
                <label class="custom-control-label mt-1" for="im${markers.length}">Add/Remove</label>
                </div></div>`
        });
        marker.infowindow = infowindow;
        marker.addListener('click', () => {
            closeMarkers();
            infowindow.open(map, marker);
        });
        google.maps.event.addListener(infowindow, 'domready', () => {
            let m = markers_checked[$('.infomarker').attr('data-locationid')];
            $('.infomarker').prop('checked', isExist(m.map));
            $('.infomarker').click(function () {
                let lid = $(this).attr('data-locationid');
                checkMarker(this);
                $($('.checkmarker')[lid]).prop('checked', $(this).is(':checked'));
            });
        });
        marker.setMap(map);

    }

    return marker;
}

function loadGallery() {
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
            ["vinece", "../img/gallery/v6.jpg", "Vinece", "Vinece", "Vinece"]
        ],
        list, j,
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
                previous: false,
                next: false
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
                onMixStart: function ( /*state, futureState*/ ) {
                    destroyPagination();
                },
                onMixEnd: function ( /*state, futureState*/ ) {
                    setPagination();
                }
            }
        });
    }
}

/*function toggleClick(obj) {
    $(obj).toggleClass('responsive');
    $(obj + " form input:visible:first").focus();
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function clickPage(obj) {
    var btns = document.querySelectorAll('.btn-group-item .btn');
    btns.forEach(function (btn) {
        btn.setAttribute('class', 'btn');
    });
    obj.setAttribute('class', 'btn active');
}
*/
//$(window).resize(function () {
////    removeClass('#menu');
////    removeClass('#search');
//    removeClass('#login');
//});
//Verify Form
/*function isValidValue(obj) {
    return obj.value !== null && obj.value !== "";
}
function validateText(obj) {
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
    var pattern = /\d/;
    
//    return obj.value === null || obj.value === "" || obj.value.length > 20 || pattern.test(obj.value) ? false : true;
    return obj.value === null || obj.value === "" || obj.value.length > 20 || !pattern.test(obj.value);
}
function validateTel(obj) {
    var pattern = /[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}/;

//    return obj.value === null || obj.value === "" || !pattern.test(obj.value) ? false : true;
    return obj.value === null || obj.value === "" || pattern.test(obj.value);
}
function validateEmail(obj) {
    var pattern = /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/;

//    return obj.value === null || obj.value === "" || !pattern.test(obj.value) ? false : true;
    return obj.value === null || obj.value === "" || pattern.test(obj.value);
}
function validateUrl(obj) {
    var pattern = /^https?:\/\/[\w\W]+/i;

//    return obj.value === null || obj.value === "" || !pattern.test(obj.value) ? false : true;
    return obj.value === null || obj.value === "" || pattern.test(obj.value);
}

function validateRadio(obj) {
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
    var type = "";
    
    if (obj.tagName === "INPUT") { return obj.type; }
    if (obj.tagName === "SELECT") { return obj.tagName; }
    if (obj[0].tagName === "INPUT") { return obj[0].type; }
    if (obj[0].tagName === "SELECT") { return obj[0].tagName; }
    return type;
}
function validateField(form, field) {
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
    return form.querySelectorAll(
        "input:not(:disabled):not([readonly]):not([type=hidden]):not([type=submit])," +
        "select:not(:disabled):not([readonly])," +
        "textarea:not(:disabled):not([readonly])");
}
function getFormFields(form) {
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