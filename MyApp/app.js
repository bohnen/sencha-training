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

Ext.application({
    name: 'Sencha',

    launch: function() {
        Ext.create('Ext.data.TreeStore',{
            storeId: 'TreeStore',
            fields:[
                'title','link','author','contentSnippet','content',
                {name: 'leaf', defaultValue: true}
            ],

            root:{
                leaf: false
            },

            proxy: {
                type: 'jsonp',
                url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
                reader:{
                    type: 'json',
                    rootProperty: 'responseData.feed.entries'
                }
            }
        });

        Ext.create("Ext.tab.Panel", {
            fullscreen: true,
            tabBarPosition: 'bottom',

            items:[
                {
                    title: 'Home',
                    iconCls: 'home',
                    cls: 'home',
                    html: [
                        '<img width="65%" src="http://staging.sencha.com/img/sencha.png" />',
                        '<h1>Welcome to Sencha Touch</h1>',
                        "<p>We're creating the Getting Started app, which demonstrates how ",
                        "to use tabs, lists, and forms to create a simple app.</p>",
                        '<h2>Sencha Touch</h2>'
                    ].join("")
                },
                {
                    xtype: 'nestedlist',
                    title: 'Blog',
                    iconCls: 'star',
                    displayField: 'title',

                    store: 'TreeStore',

                    detailCard: {
                        xtype: 'panel',
                        scrollable: true,
                        styleHtmlContent: true
                    },

                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
                            this.getDetailCard().setHtml(post.get('content'));
                        }
                    }
                },
                {
                    title: 'Contact',
                    iconCls: 'user',
                    xtype: 'formpanel',
                    url: 'contact.php',
                    layout: 'vbox',
                    items:[
                        {
                            xtype: 'fieldset',
                            title: 'Contact us',
                            instructions: '(email address is optional)',
                            height: 285,
                            items:[

                                {
                                    xtype: 'textfield',
                                    label: 'Name'
                                },
                                {
                                    xtype: 'emailfield',
                                    label: 'Email'
                                },
                                {
                                    xtype: 'textareafield',
                                    label: 'Message'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            text: 'Send',
                            ui: 'Confirm',
                            handler: function(){
                                this.up('formpanel').submit();
                            }
                        }
                    ]

                }
            ]
        });
    }
});
