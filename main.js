Ext.QuickTips.init();

Ext.onReady(function(){
	Ext.apply(Ext.QuickTips.getQuickTip(), {
        maxWidth: 200,
        minWidth: 100,
        showDelay: 50,      // Show 50ms after entering target
        trackMouse: true,
        anchor: 'right'
    });

    //Variable para identificar el parámetro de envío del formulario
    var opForm = '';

    var panOr = new Ext.Panel({
		title : 'Oriente',
		html  : 'Panel',
		region: 'east',
		margins: '5 5 5 5',
		width : 150
	});

    //Formulario para guardar y editar los datos del grid
    var formRegs = new Ext.form.FormPanel({
        title       : 'Creación y Edición de Registros',
        header       : false,
        waitMsgTarget: Ext.getBody(),
        url         : 'agenda.php',
        collapsible : true,
        //collapsed : true,
        bodyStyle   : 'padding:10px;',
        labelAlign  :'top',
        autoHeight  :true,
        items : [{
            layout   : 'column',
            border   : false,
            defaults : {
               border : false,
               layout     : 'form'
            },
            items  : [{
                columnWidth: .5,
                defaults   : {
                    anchor   : '95%',
                    msgTarget:'side'
                },
                items      : [{
                    xtype : 'hidden',
                    name  : 'id',
                    tabIndex : 1
                },{
                    xtype     : 'textfield',
                    fieldLabel: 'Nombre',
                    name      : 'nombre',
                    allowBlank:false,
                    tabIndex : 2
                },{
                    xtype     : 'textfield',
                    fieldLabel: 'Dirección',
                    name      : 'direccion',
                    tabIndex  : 4
                }]
            },{
                columnWidth: .5,
                defaults   : {
                    anchor : '95%',
                    msgTarget:'side'
                },
                items      : [{
                    xtype     : 'textfield',
                    fieldLabel:'Apellido',
                    name      : 'apellido',
                    allowBlank:false,
                    tabIndex  : 3
                },{
                    xtype     : 'numberfield',
                    fieldLabel:'Teléfono',
                    name      : 'telefono',
                    tabIndex  : 5
                }]
            }]
        }]
    });

    var winform = new Ext.Window({
        title      : '',
        width      : 400,
        autoHeight : true,
        modal      : true,
        layout     : 'fit',
        border     : false,
        closeAction: 'hide',
        closable   : false,
        items      : [formRegs],
        buttons : [{
            text    : 'Guardar',
            handler : function(){
                var formulario = formRegs.form;
                if(formulario.isValid()){ //validamos el formulario
                    formulario.submit({   //enviamos los datos al servidor
                       waitMsg : 'Guardando datos...',  //mensaje a mostrar en el proceso de guardado
                       params : {op:opForm},  //parámetro para envío de datos
                       success: function(form,action){    // Cuando se establece la conexión con efectividad con el servidor
                           var resp = Ext.decode(action.response.responseText);  //conversión de la respuesta a formato JSON
                           //limpieza del formulario
                           if(resp.success){
                               winform.hide();
                               formulario.reset();
                               //recarga de datos del grid
                               gridRegs.store.load();
                           }else{
                               Ext.MessageBox.alert('Error','Ocurrió un error en el server, por favor revise');
                           }
                       },
                       failure: function(form,action){ //Cuando hay fallas en la conexión con el servidor
                           Ext.MessageBox.alert('Error!!!',action.response.responseText);
                       }
                    });
                }
            }
        },{
            text  : 'Cancelar',
            handler : function(){
                winform.hide();
            }
        }]
    });

    //grid del panel registrados
    var gridRegs = new Ext.grid.GridPanel({
        title : 'Registrados',
        stripeRows: true,
        sm: new Ext.grid.RowSelectionModel({singleSelect:true}),
        style : {
            margin : '10px'
        },
        tbar  : [{
            text : 'Nuevo',
            handler : function(){
                winform.setTitle("Nueva Persona");
                winform.show(document);
                formRegs.form.reset();
                opForm = 'insertar';
            }
        },'-',{
            text : 'Modificar',
            handler : function(){
                var record = gridRegs.getSelectionModel().getSelected();  //captura de datos seleccionados
                opForm = 'modificar';
                if(record){
                    winform.setTitle("Modificando "+Ext.util.Format.uppercase(record.data.nombre+" "+record.data.apellido));
                    formRegs.form.loadRecord(record);
                    winform.show(document);
                }else{
                    Ext.MessageBox.alert('Error','No hay ningún registro seleccionado');
                } //verifica si está seleccionado un
            }
        },'-',{
            text   : 'Eliminar',
            handler: function(){
                var record = gridRegs.getSelectionModel().getSelected();  //captura de datos seleccionados
                if(record){
                   Ext.MessageBox.confirm("Eliminar","Desea realmente eliminar la persona "+Ext.util.Format.uppercase(record.data.nombre +" "+record.data.apellido),function(opBtn){
                       if(opBtn == "yes"){
                           Ext.getBody().mask("Eliminando datos...","x-mask-loading");
                           Ext.Ajax.request({
                               url    : 'agenda.php',
                               params : {op:'eliminar',id_el: record.data.id},
                               success: function(action){
                                   gridRegs.store.load();
                                   Ext.getBody().unmask();
                               },
                               failure: function(action){
                                   Ext.MessageBox.alert("Error!!","OJO algo pasó revise bien!!!");
                                   Ext.getBody().unmask();
                               }
                           });
                       }
                   });
                }else{
                    Ext.MessageBox.alert('Error','No hay ningún registro seleccionado');
                } //verifica si está seleccionado un

            }
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
        height: 300,
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
            dataIndex : 'direccion'
        },{
            header : 'Teléfono',
            dataIndex : 'telefono'
        }]
    });

	new Ext.Viewport({
		layout : 'border',
		items : [{
			title     : 'Agenda',
			region    : 'center',
			margins   : '5 0 5 0',
            autoScroll: true,
			items     : [gridRegs]
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