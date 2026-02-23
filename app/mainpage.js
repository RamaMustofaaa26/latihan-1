Ext.define("TDK.mainpage", {
    extend: "Ext.panel.Panel",
    id: "mainpage",
    alias: "widget.mainpage",
    pid: "mainpage",
    requires: [
        "TDK.Cmainpage",
        "TDK.Gaji",
        "TDK.input.formed"
    ],
    controller: "Cmainpage",

    initComponent: function () {
        Ext.apply(this, {
            layout: 'fit',
            items: [
                {
                    xtype: "Gaji"
                }
            ],
            dockedItems: [
                {
                    xtype: "toolbar",
                    height: 30,
                    dock: "top",
                     items: [
                        "-",
                        { 
                        text: "Refresh Data", 
                        icon: vconfig.getstyle + "/icon/refresh.gif ",
                        handler: "onRefresh"
                        },
                        "-",
                        { 
                        text: "Sinkronisasi", 
                        handler: "onSinkronisasi",
                        icon: vconfig.getstyle + "/icon/certificate.ico"
                        },
                        "-",
                        { 
                        text: "Posting", 
                        handler: "onPosting",
                        icon: vconfig.getstyle + "/icon/lock.png"
                        }
                    ]
                }
            ],
        }); 
    this.callParent(arguments);
  }
});

