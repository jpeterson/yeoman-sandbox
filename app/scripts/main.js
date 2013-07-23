/*global require*/

require.config({
    baseUrl: '.',
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                    'underscore',
                    'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        underscore: '../bower_components/underscore-amd/underscore',
        backbone: '../bower_components/backbone-amd/backbone',
        bootstrap: 'scripts/vendor/bootstrap',

        dojo: '//js.arcgis.com/3.6amd/js/dojo/dojo',
        dijit: '//js.arcgis.com/3.6amd/js/dojo/dijit',
        dojox: '//js.arcgis.com/3.6amd/js/dojo/dojox',
        esri: '//js.arcgis.com/3.6amd/js/esri'
    },
    packages: [
        { name: 'app', location: 'scripts' },
        { name: 'dojo', location: '//js.arcgis.com/3.6amd/js/dojo/dojo' },
        { name: 'dijit', location: '//js.arcgis.com/3.6amd/js/dojo/dijit' },
        { name: 'dojox', location: '//js.arcgis.com/3.6amd/js/dojo/dojox' },
        { name: 'esri', location: '//js.arcgis.com/3.6amd/js/esri' }
    ]
});

require(['app/Controller', 'backbone', 'bootstrap'], function(Controller, Backbone) {
    'use strict';
    // use app here
    console.log(Controller);
    console.log(Backbone);
});
