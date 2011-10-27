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
},{
	nombre : 'Amir',
	apellido: 'Salgado',
	email   : 'amirsalgado@gmail.com'
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
	var panOr = new Ext.Panel({
		title : 'Oriente',
		html  : 'Panel',
		region: 'east',
		margins: '5 5 5 5',
		//autoLoad : 'shit.php',
		width : 150
	});
	
	new Ext.Viewport({
		layout : 'border',
		items : [{
			title : 'Definido por new',
			header : false,
			region: 'center',
			margins: '5 0 5 0',
			layout : 'column',
			items : [{
				columnWidth : .5,
				style : {
					margin : '10px'
				},
				xtype : 'panel',
				title : 'Registrados(XTemplate)',
				autoScroll : true,
				autoHeight: true,
				data  : dataForm,
				tpl   : new Ext.XTemplate('<tpl for="."><div class="search-item">',
				            '<h3>{[this.setUpper(values.nombre)]} {[this.setUpper(values.apellido)]}</h3>',
				            '{email}',
				        '</div></tpl>',{
							setUpper : function(nombs){
								return Ext.util.Format.uppercase(nombs);
							}
						}
				)/*,
				height: 114*/
			},{
				columnWidth : .5,
				xtype : 'grid',
				style : {
					margin : '10px'
				},
				title : 'Registrados',
				tbar  : [{
					text : 'Nuevo'
				}],
				store : new Ext.data.JsonStore({
					fields : [{name : 'nombre'},{name : 'apellido'},{name : 'email'}],
					data   : dataForm,
					autoLoad: true
				}),
				viewConfig:{
					forceFit:true
				},
				autoHeight: true, //Crecimiento automático del grid
				columns: [{
					header : 'Nombre',
					dataIndex : 'nombre'
				},{
					header : 'Apellido',
					dataIndex : 'apellido'
				},{
					header : 'email',
					dataIndex : 'email'
				}]
			}]
		},{
			title : 'Norte',
			border: false,
			region: 'north',
			collapseMode: 'mini',
			tbar : [{
				text : 'Archivo',
				menu : [{
					text : 'Abrir'
				},{
					text : 'Guardar'
				},{
					text : 'Salir'
				}]
			},'-',{
				text : 'Opciones',
				listeners : {
					render : function(btn){
						Ext.util.Observable.capture(btn, function(evnt){console.log(evnt)});
					}
				}
			},'-',{
				text : 'Datos del Server',
				handler : function(){
					panOr.load({
						url     : 'shit.php',
					    params  : {op: 2}, // or a URL encoded string
					    callback: function(par,par1,par2){
							console.log(arguments);
							var obj = Ext.decode(par2.responseText);
							var tpl = new Ext.XTemplate('<tpl for="."><div class="search-item">',
							            '<h3>{[this.setUpper(values.nombre)]} {[this.setUpper(values.apellido)]}</h3>',
							            '{email}',
							        '</div></tpl>',{
										setUpper : function(nombs){
											return Ext.util.Format.uppercase(nombs);
										}
									}
							);
							tpl.overwrite(panOr.body, obj);
						}
					});
				}
			}],
			header : false
		},{
			xtype : 'panel',
			title : 'Sur',
			html  : 'Panel',
			region: 'south'
		},{
			xtype : 'panel',
			title : 'Men&uacute;',
			region: 'west',
			margins: '5 5 5 5',
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
				listeners : {
					render : function(panel){
						panel.header.on('mouseover',function(){
							(panel.collapsed) ? panel.expand(true) : panel.collapse(true);
						});
					}
				},
				tools : [{
					id : 'search',
					handler : function(event, toolEl, panel){
						console.log(panel);
					},
					on : {
						mouseover : function(btn,evnt){
							console.log(btn);
						}
					}
				}]
			},{
				title : 'Par&aacute;metros',
				html : 'men2',
				listeners : {
					render : function(panel){
						panel.header.on('mouseover',function(){
							(panel.collapsed) ? panel.expand(true) : panel.collapse(true);
						});
					}
				}
			},{
				title : 'Configuraci&oacute;n',
				html : 'men3',
				listeners : {
					render : function(panel){
						panel.header.on('mouseover',function(){
							(panel.collapsed) ? panel.expand(true) : panel.collapse(true);
						});
					}
				}
			}]
		},panOr] 
	});
});