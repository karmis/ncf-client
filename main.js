/*jslint regexp: true, nomen: true, sloppy: true */
/*global requirejs, require */

(function () {

    'use strict';

    requirejs.config({
        waitSeconds: 35,
        // baseUrl: "src/",
        urlArgs: "bust=" +  (new Date()).getTime(),
        paths: {
            "jquery": "vendor/jquery/dist/jquery",
            "underscore": "vendor/underscore-amd/underscore",
            "backbone": "vendor/backbone-amd/backbone",
            "mustache": "vendor/mustache/mustache",
            "doT": "vendor/doT/doT",
            "backboneDeepModel": "vendor/backbone-deep-model/distribution/deep-model",
            "backbone-forms": "vendor/backbone-forms/distribution.amd/backbone-forms",
            "backboneFormsEditor": "vendor/backbone-forms/distribution.amd/editors/list",
            "backbone-formsTemplates": "vendor/backbone-forms/distribution.amd/templates/bootstrap3",
            "backboneFormsAdaptersModal": "vendor/backbone-forms/distribution/adapters/backbone.bootstrap-modal",
            "text": "vendor/requirejs-text/text",
            "marionette": "vendor/backbone.marionette/lib/backbone.marionette",
            "bootstrap": "vendor/bootstrap/dist/js/bootstrap.min",
            "overwrites_doT" : 'overwrites/overwrite.doT',
            "overwrites_lodash" : 'overwrites/overwrite.lodash',
            "overwrites_backbone" : 'overwrites/overwrite.backbone',
            "overwrites_marionette" : 'overwrites/overwrite.marionette',
            "overwrites_jquery" : 'overwrites/overwrite.jquery',
            "AppCommon" : 'common/common',
            "AppNamespaces" : 'configs/namespaces.conf',
            "AppRest" : 'configs/rest.conf',
            
            // евенты загружать раньше того, кто их использует
            "AppModuleEvents" : 'events/moduleEvents',
            "AppConfigs" : 'src/Configs',
            "AppRouter" : 'src/Router',
            "AppRegions" : 'src/Regions',
            "AppComponents" : "components/main",
            "bbGrid" : "libs/bbGrid/bbGrid",
            "App" : 'src/App',
        },
        shim: {
            underscore: {
                exports: '_'
            },
            doT: {
               exports: 'doT' 
            },
            bootstrap : ['jquery'],
            backbone: {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            overwrites_backbone: {
                deps: ['backbone'],
                exports: 'Backbone'
            },
            marionette: {
                deps: ['jquery', 'underscore', 'backbone'],
                exports: 'Marionette'
            },
            overwrites_marionette: {
                deps: ['marionette'],
                exports: 'Marionette'
            },
            bbGrid: {
                deps: ['marionette'],
                exports: 'bbGrid'
            },
            backboneDeepModel: {
                deps: ['backbone'],
                exports: 'backboneDeepModel'
            },
            backboneFormsAdaptersModal: {
                deps: ['backbone', 'backbone-forms'],
                exports: 'backboneFormsAdaptersModal'
            },
            backboneFormsEditor: {
                deps: ['backbone-forms', 'backboneFormsAdaptersModal'],
                exports: 'backboneFormsEditor'
            },
            // backbone-forms: {
            //     deps: ['backbone'],
            //     exports: 'backbone-forms'
            // },
            // backbone-formsEditor: {
            //     deps: ['backbone-forms'],
            //     exports: 'backbone-formsEditor'
            // },
            // backbone-formsTemplates: {
            //     deps: ['backbone-forms'],
            //     exports: 'backbone-formsTemplates'
            // },
            
            /* Deps for App */
            App: {
                exports: 'App',
                deps: [
                    'overwrites_marionette',
                    'bbGrid',
                    'doT',
                    'bootstrap',
                    'backbone-forms',
                    'backbone-formsTemplates',
                    'backboneFormsEditor',
                    'backboneDeepModel',
                    'backboneFormsAdaptersModal'
                ]
            },

            // AppCommon: {
            //     deps: ['App'],
            //     exports: 'AppCommon'
            // },
            // AppNamespaces: {
            //     deps: ['App'],
            //     exports: 'AppNamespaces'
            // },
            // AppRest: {
            //     deps: ['App'],
            //     exports: 'AppRest'
            // },
            // AppModuleEvents: {
            //     deps: ['App'],
            //     exports: 'AppModuleEvents'
            // },
            // // AppConfigs: {
            // //     deps: ['App'],
            // //     exports: 'AppConfigs'
            // // },
            // AppRouter: {
            //     deps: ['App'],
            //     exports: 'AppRouter'
            // },
            // AppRegions: {
            //     deps: ['App'],
            //     exports: 'AppRegions'
            // }



        }
    });

    requirejs([
            'App',
            'AppCommon',
            'AppNamespaces',
            'AppRest',
            'AppModuleEvents',
            'AppConfigs',
            'AppRouter',
            'AppRegions',
            'AppComponents',
            'doT'
        ], function(
            App,
            AppCommon,
            AppNamespaces,
            AppRest,
            AppModuleEvents,
            AppConfigs,
            AppRouter,
            AppRegions,
            AppComponents,
            doT
        ){
        Backbone.history.start();
        App.start(); 
    });

}());