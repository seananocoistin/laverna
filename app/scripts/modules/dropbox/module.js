/* global define */
define([
    'underscore',
    'backbone.radio',
    'marionette',
    'modules',
    'modules/dropbox/classes/sync'
], function(_, Radio, Marionette, Modules, Sync) {
    'use strict';

    var Dropbox = Modules.module('Dropbox', {});

    /**
     * Initializers & finalizers of the module
     */
    Dropbox.on('start', function() {
        console.info('Dropbox started');
        new Sync();
    });

    Dropbox.on('stop', function() {
    });

    // Add a global module initializer
    Radio.request('init', 'add', 'module', function() {
        Dropbox.start();
    });

    return Dropbox;
});
