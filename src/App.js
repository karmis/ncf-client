define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'mustache',
    'doT',
], function ($, _, Backbone, Marionette, Mustache, doT) {

    /**
     * http://habrahabr.ru/post/118666/
     */
    'use strict';
    
    /**
     * Приложение создается из объекта окна.
     * Это позволяет разрулить "взаимную" зависимость.
     * (Для нормальной работы App требуется Events, а Events требуется App)
     * Так же позволяет общаться с приложением из консоли 
     */
    window.App = new Backbone.Marionette.Application();

    // у-doT
    window.doT = doT;

    // $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //     debugger;
    //   e.target // activated tab
    //   e.relatedTarget // previous tab
    // })

    // $('form').on('submit', function(){self.submit()});
    return App;
});