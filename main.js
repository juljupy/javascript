Ext.QuickTips.init();

Ext.onReady(function(){

	var panOr = new Ext.Panel({
		title : 'Oriente',
		html  : 'Panel',
		region: 'east',
		margins: '5 5 5 5',
		width : 150
	});

    //grid del panel registrados
    var gridRegs = new Ext.grid.GridPanel({
        style : {
            margin : '10px'
        },
        title : 'Registrados',
        tbar  : [{
            text : 'Nuevo'
        },'-',{
            text : 'Modificar'
        },'-',{
            text : 'Eliminar'
        }],
        store : new Ext.data.JsonStore({
            url    : 'agenda.php',
            fields : [{name : 'nombre'},{name : 'apellido'},{name : 'direccion'},{name : 'telefono'},{name : 'id'}],
            root   : 'datos',
            totalProperty : 'total',   //usado para el total de registros para uso del paginado
            baseParams: {op: 'listar'},
            autoLoad: true
        }),
        viewConfig:{
            forceFit:true
        },
        height: 400,
        autoScroll : true,
        //autoHeight: true, //Crecimiento automático del grid
        columns: [{
            header : 'Nombre',
            dataIndex : 'nombre'
        },{
            header : 'Apellido',
            dataIndex : 'apellido'
        },{
            header : 'Dirección',
            dataIndex:'direccion'
        },{
            header  : 'Teléfono',
            dataIndex:'telefono'
        }]
    });

	new Ext.Viewport({
		layout : 'border',
		items : [{
			title : 'Agenda',
			region: 'center',
			margins: '5 0 5 0',
			items : [gridRegs]
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
				text : 'Opciones'
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
                layout: 'form',
				tools : [{
					id : 'search',
					handler : function(event, toolEl, panel){
						console.log(panel);
					}
				}]
			},{
				title : 'Par&aacute;metros',
				html : 'men2'
			},{
				title : 'Configuraci&oacute;n',
				html : 'men3'
			}]
		},panOr] 
	});
});