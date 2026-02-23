Ext.define("TDK.Cmainpage", {
  extend: "Ext.app.ViewController",
  alias: "controller.Cmainpage",
  init: function (view) {
    this.control({});
    this.tdk_aes = "app-tdk-2024";
    this.task_area();
    this.renderpage();
  },
  task_area: function () {
    try {
    } catch (err) {
      COMP.TipToast.msgbox("Error", err.message, { cls: "danger", delay: 2000 });
    }
  },
  renderpage: function () { 
   
  },
  
  onGridDblClick: function(grid, record, item, index, e, eOpts) {
    try {
      var form = Ext.create("Ext.window.Window", {
        title: "Edit Gaji",
        width: 700,
        height: 500,
        modal: true,
      });
      
      form.show();
    } catch (ex) {
      console.error(ex)
    }
  },

  onSinkronisasi: function(btn) {
    try {
      var form = Ext.create("TDK.input.formed", 
      // {
      //   listeners: {
      //     close: function() {
      //       // Refresh grid setelah form ditutup
      //       var grid = this.lookupReference('Gaji');
      //       if (grid && grid.getStore()) {
      //         grid.getStore().load();
      //       }
      //     },
      //     scope: this
      //   }
      // }
      );
      form.show();
    } catch (ex) {
      console.error(ex);
      COMP.TipToast.msgbox("Error", ex.message, { cls: "danger", delay: 2000 });
    }
  }
});
