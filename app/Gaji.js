Ext.define("TDK.Gaji", {
  extend: "Ext.grid.Panel",
  alias: "widget.Gaji",
  pid: "Gaji",
  reference: "Gaji", 

   initComponent: function () {
    var me = this;
    
    Ext.apply(me, {
      itemId: 'mainGaji',
      store: {
        fields: [
          'nik',
          'nama',
          'gaji_pokok', 
          'golongan', 
          'jabatan', 
          'status', 
          'remark'
        ],
        proxy: {
            type: 'localstorage',
            id: 'store-gaji'
        },
        autoLoad: true,
        autoSync: true,
      },
      plugins: ["filterfield"],
      viewConfig: {
        enableTextSelection: true,
        columnLines: true,
      },
      columns: { 
        defaults: {   
          filter: { xtype: "textfield" },
          sortable: true,
        },
        items: [  
          { xtype: "rownumberer", width: 50, filter: false },  
          {  
            xtype: "actioncolumn",
            width: 35,
            align: "center",
            menuDisabled: true,
            stopSelection: false,
            sortable: false,
            filter: false,
            items: [
              {
                icon: vconfig.getstyle + "/icon/grid.png", 
                handler: function (xgrid, rowIndex, colIndex, e, a, rec) {
                  try {
                    var Gaji= xgrid.up("Gaji");
                    Gaji.Gaji_itemclick(xgrid, rowIndex, colIndex, e, a, rec);
                  } catch (ex) {
                    COMP.TipToast.msgbox("Error", ex.message, { cls: "danger", delay: 2000 });
                  }
                },
              },
            ],
          },
          { header: 'NIK', dataIndex: 'nik', width: 120},
          { header: 'NAMA', dataIndex: 'nama', width: 100 },
          { header: 'GAJI POKOK', dataIndex: 'gaji_pokok', width: 80 },
          { header: 'GOLONGAN', dataIndex: 'golongan', width: 180 },
          { header: 'JABATAN', dataIndex: 'jabatan', width: 60 },
          { header: 'STATUS', dataIndex: 'status', width: 80 },
          { header: 'REMARK', dataIndex: 'remark', flex: 1}
        ]
      },
      listeners: {
        itemdblclick: 'onGridDblClick'
      }
    });
    
    me.callParent(arguments);
  },
  
  // TAMBAH: method handler untuk action column
  Gaji_itemclick: function(xgrid, rowIndex, colIndex, e, a, rec) {
    // Logic untuk handle click pada action column
    console.log('Action clicked for record:', rec.data);
  }
});