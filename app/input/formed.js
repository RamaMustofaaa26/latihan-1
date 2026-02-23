Ext.define("TDK.input.formed", {
    extend: "Ext.window.Window",
    alias: "widget.formed",

    recordEditing: null,

    gridStore: null,

    width: 1000,
    height: 700,
    modal: true,
    title: "Input Gaji Karyawan",
    closable: true,
    maximizable: true,
    layout: 'fit',
        items: [
        {
          xtype: 'form',
          bodyPadding: 10,
        //   autoScroll: true,
          items: [
            {
              xtype: 'container',
              layout: 'hbox',
              defaults: {
                margin: '0 5 10 0'
              },
              items: [
                // Dokumen PO - Kiri
                {
                  xtype: 'fieldset',
                  title: 'Data Karyawan',
                  defaults: {
                    labelAlign: 'left',
                  },
                  items: [
                        {
                          xtype: 'textfield',
                          fieldLabel: 'NIK',
                          name: 'nik',
                          labelWidth: 50,
                          width: 300,
                          margin: '0 5 5 0'
                        },
                        {
                          xtype: 'textfield',
                          fieldLabel: 'NAMA',
                          name: 'nama',
                          labelWidth: 50,
                          width: 300,
                          margin: '0 5 5 0'
                        }, {
                            xtype: 'textfield',
                            fieldLabel: 'Gaji Pokok',
                            name: 'gaji_pokok',
                            labelWidth: 100,
                            width: 300,
                            margin: '0 5 5 0'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Golongan',
                            name: 'golongan',
                            displayField: "DEFNAME",
                            valueField: "DEFCODE",
                            store: {
                                    fields: ["DEFCODE", "DEFNAME"],
                                    data: [
                                      { DEFCODE: "A", DEFNAME: "GOL A" },
                                      { DEFCODE: "B", DEFNAME: "GOL B" },
                                      { DEFCODE: "C", DEFNAME: "GOL C" }
                                    ]
                                  },
                            width: 200,
                            margin: '0 5 5 0',
                            labelWidth: 80
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Jabatan',
                            name: 'jabatan',
                            displayField: "DEFNAME",
                            valueField: "DEFCODE",
                            store: {
                                    fields: ["DEFCODE", "DEFNAME"],
                                    data: [
                                      { DEFCODE: "O", DEFNAME: "OPERATOR" },
                                      { DEFCODE: "S", DEFNAME: "STAFF" },
                                      { DEFCODE: "M", DEFNAME: "MANAGER" },
                                      { DEFCODE: "F", DEFNAME: "FINANCE" },
                                      { DEFCODE: "HR", DEFNAME: "HUMAN RESOURCE" }
                                    ]
                                  },
                            width: 200,
                            margin: '0 5 5 0',
                            labelWidth: 80
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'STATUS',
                            name: 'status',
                            displayField: "DEFNAME",
                            valueField: "DEFCODE",
                            store: {
                                    fields: ["DEFCODE", "DEFNAME"],
                                    data: [
                                      { DEFCODE: "TTP", DEFNAME: "TETAP" },
                                      { DEFCODE: "KT", DEFNAME: "KONTRAK 1 T" },
                                      { DEFCODE: "KB", DEFNAME: "KONTRAK 6 B" },
                                    ]
                                  },
                            width: 200,
                            margin: '0 5 5 0',
                            labelWidth: 80
                        },
                        {
                            xtype: 'textareafield',
                            fieldLabel: 'Remark',
                            name: 'remark',
                            width: 300,
                            labelWidth: 50
                        }
                        // {
                        //   xtype: 'textfield',
                        //   name: 'supname',
                        //   hideLabel: true,
                        //   width: 250,
                        //   margin: '0 5 5 0'
                        // },
                        // {
                        //   xtype: 'button',
                        //   icon: vconfig.getstyle + "icon/search.ico",
                        //   width: 25
                        // }
                      ]
                    }],
                }]
            }],
        dockedItems: [
        {
          xtype: 'toolbar',
          dock: 'top',
          items: [
            {
              text: 'Save',
              icon: vconfig.getstyle + 'icon/save.ico',
              handler: 'onSave',
              itemId: 'btnSave'
            },
            '-',
            {
              text: 'Posting',
              icon: vconfig.getstyle + 'icon/lock.png',
              handler: 'onPosting',
              itemId: 'btnPosting'
            },
            '-',
            {
              text: 'Cancel',
              icon: vconfig.getstyle + 'icon/delete.png',
              handler: function(btn) {
                btn.up('window').close();
              }
            },
            '->',
            {
              text: 'View Pdf',
              icon: vconfig.getstyle + 'icon/pdf.png'
            }
          ]
        }
      ],
});