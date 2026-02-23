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
      var form = Ext.create("TDK.input.formed");
      form.down('form').loadRecord(record);  // Load data ke form
      form.show();
    } catch (ex) {
      console.error(ex)
    }
  },

onSave: function(btn) {
  var win   = btn.up('window');     // TDK.input.formed
  var form  = win.down('form');
  var store = win.gridStore;        // ⬅ STORE GRID

  // if (!store) {
  //   Ext.Msg.alert('Error', 'Store grid tidak ditemukan');
  //   return;
  // }

  if (form.isValid()) {
    var values = form.getValues();

    store.add(values);              // ⬅ MASUK KE GRID
    win.close();
  }

}
});
