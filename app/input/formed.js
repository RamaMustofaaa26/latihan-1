Ext.define("TDK.input.formed", {
    extend: "Ext.window.Window",
    alias: "widget.formed",
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
                  title: 'Dokumen PO',
                  defaults: {
                    labelAlign: 'left',
                  },
                  items: [
                    {
                      xtype: 'container',
                      layout: 'hbox',
                      items: [
                        {
                          xtype: 'textfield',
                          fieldLabel: 'Supplier',
                          labelWidth: 70,
                          width: 150,
                          margin: '0 5 5 0'
                        },
                        {
                          xtype: 'textfield',
                          name: 'supplier_name',
                          hideLabel: true,
                          width: 250,
                          margin: '0 5 5 0'
                        },
                        {
                          xtype: 'button',
                          icon: vconfig.getstyle + "icon/search.ico",
                          width: 25
                        }
                      ]
                    }],
                }]
            }]
        }]
});