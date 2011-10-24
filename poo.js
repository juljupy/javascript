Ext.QuickTips.init();
var dataForm = [{
	nombre  : 'Julio',
	apellido: 'de Hoyos',
	email   : 'juljupy@gmail.com'
},{
	nombre  : 'Elkin',
	apellido: 'Barreto',
	email   : 'elkin.barreto@gmail.com'
},{
	nombre  : 'Victor',
	apellido: 'Garcia',
	email   : 'victorgarcia@gmail.com'
}];
Ext.onReady(function(){
	/*var win = new Ext.Window({
		title : 'Ventana 1',
		layout: 'anchor',
		height: 500,
		width : 600,
		closeAction: 'hide',
		items : [{
			xtype : 'panel',
			title : 'Definido por new',
			html  : 'Panel 1',
			anchor: '50% 50%'
		},{
			xtype : 'panel',
			title : 'Segundo Panel definido por xtype',
			html  : 'Panel 2',
			anchor: '100% 50%'
		}],
		modal : true,
		border: false,
		buttons : [{
			text : 'Cerrar'
		}]
	});
	
	var pan = new Ext.Panel({
		title : 'Mi primer panel',
		layout: 'border',
		defaults: {
			split : true,
			xtype : 'panel'
		},
		tbar  : [{
			text : 'Archivo',
			menu : [{
				text   : 'Abrir',
				handler: function(){
					win.show();
				}
			},{
				text : 'Guardar'
			}]
		},'-',{
				text : 'Eliminar'
			},'-',{
				text : 'Modificar'
			},'->','Fecha: octubre 21 de 2011','-',{
				text : 'Salir'
		}],
		width : 800,
		height: 500,
		items : [{
			title : 'Definido por new',
			region: 'center',
			layout : 'column',
			items : [{
				columnWidth : .3,
				defaults : {
					xtype : 'panel'
				},
				items : [{
					title : 'Una col 1 item 1',
					html : 'col'
				},{
					title : 'Otra Col 1 item 2',
					html : 'col'
				}]
			},{
				columnWidth : .5,
				defaults : {
					xtype : 'panel'
				},
				items : [{
					title : 'Una col 2 item 1',
					html : 'col'
				},{
					title : 'Otra Col 2 item 2',
					html : 'col'
				}]
			},	{
					columnWidth : .2,
					defaults : {
						xtype : 'panel'
					},
					items : [{
						title : 'Una col 3 item 1',
						html : 'col'
					},{
						title : 'Otra Col 3 item 2',
						html : 'col'
					}]
				}]
		},{
			title : 'Norte',
			html  : 'Panel',
			region: 'north',
			collapsible: true,
			collapseMode: 'mini'
		},{
			xtype : 'panel',
			title : 'Sur',
			html  : 'Panel',
			region: 'south'
		},{
			xtype : 'panel',
			title : 'Men&uacute;',
			region: 'west',
			margins: '0 0 0 5',
			width  : 200,
			defaults: {
				xtype : 'panel',
				border : false
			},
			layout : 'accordion',
			layoutConfig:{
				animate : true
			},
			items : [{
				title : 'Principal',
				html  : 'men1',
				tools : [{
					id : 'search',
					handler : function(){
						console.log('fuck u!!!!');
					}
				}]
			},{
				title : 'Par&aacute;metros',
				html : 'men2'
			},{
				title : 'Configuraci&oacute;n',
				html : 'men3'
			}]
		},{
			xtype : 'panel',
			title : 'Oriente',
			html  : 'Panel',
			region: 'east',
			margins: '0 5 0 0'
		}],
		renderTo: 'mydiv',
		buttons : [{
			text : 'ok',
			tooltip: 'Okey dokey!!'
		},{
			text : 'Cancelar'
		}]
	});*/
	new Ext.Viewport({
		layout : 'border',
		items : [{
			title : 'Definido por new',
			region: 'center',
			layout : 'column',
			items : [{
				columnWidth : .3,
				defaults : {
					xtype : 'panel'
				},
				items : [{
					title : 'Una col 1 item 1',
					html : 'col'
				},{
					title : 'Otra Col 1 item 2',
					html : 'col'
				}]
			},{
				columnWidth : .5,
				defaults : {
					xtype : 'panel'
				},
				items : [{
					title : 'Una col 2 item 1',
					html : 'col'
				},{
					title : 'Otra Col 2 item 2',
					html : 'col'
				}]
			},	{
					columnWidth : .2,
					defaults : {
						xtype : 'panel'
					},
					items : [{
						title : 'Una col 3 item 1',
						html : 'col'
					},{
						title : 'Otra Col 3 item 2',
						html : 'col'
					}]
				}]
		},{
			title : 'Norte',
			html  : 'Panel',
			region: 'north',
			collapsible: true,
			collapseMode: 'mini'
		},{
			xtype : 'panel',
			title : 'Sur',
			html  : 'Panel',
			region: 'south'
		},{
			xtype : 'panel',
			title : 'Men&uacute;',
			region: 'west',
			margins: '0 0 0 5',
			width  : 200,
			defaults: {
				xtype : 'panel',
				border : false
			},
			layout : 'accordion',
			layoutConfig:{
				animate : true
			},
			items : [{
				title : 'Principal',
				html  : 'men1',
				tools : [{
					id : 'search',
					handler : function(){
						console.log('fuck u!!!!');
					}
				}]
			},{
				title : 'Par&aacute;metros',
				html : 'men2'
			},{
				title : 'Configuraci&oacute;n',
				html : 'men3'
			}]
		},{
			xtype : 'panel',
			title : 'Oriente',
			html  : 'Panel',
			region: 'east',
			margins: '0 5 0 0'
		}] 
	});
});