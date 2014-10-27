/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// Ext.Loaderに名前空間のルートディレクトリを指定する。
Ext.Loader.setPath({
    'Ext' : '../touch/src',
    'FindACab' : 'app',
    'Utils' : 'utils'
});

Ext.application({
    // name フィールドはSenchaアプリケーションのネームスペースを指定する
    name: 'FindACab',

    // Ext.Loaderに必要なクラスを教える
    requires: [
        'Ext.MessageBox',
        'Utils.Commons'
    ],

    models: [
        'Cab'
    ],

    views: [
        'Main'
    ],

    stores: [
        'Cabs'
    ],

    controllers: [
        'CabController'
    ],

    // ブックマークアイコンの指定
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },
    // iosが勝手にアイコンに光沢付けるのを禁止
    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    // 全ての依存モジュールの読み込み後に呼ばれる。
    launch: function() {
        // Destroy the #appLoadingIndicator element
        // ロード時の... イメージはindex.html にインラインで記載されたcss animationで行われている。
        // このElementを削除する
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('FindACab.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
