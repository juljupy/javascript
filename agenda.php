<?php
/**
 * Created by IntelliJ IDEA.
 * User: julioalbertodehoyosmartinez
 * Date: 27/10/11
 * Time: 11:01
 * To change this template use File | Settings | File Templates.
 */


$conex = mysql_connect(); //Conexión al server
mysql_select_db('agenda',$conex); //Conexión a la base de datos

switch($_POST['op']){
    case 'listar':
        listaPer($conex);
        break;
    case 'insertar':
        insertaPer();
        break;
    case 'modificar':
        modificaPer();
        break;
    case 'eliminar':
        eliminaPer();
        break;
}

/*
 * función para listar las personas en el grid
 * */
function listaPer($conex){
    header('Content-type: application/json');
    $arr = array();
    @mysql_query("SET NAMES 'utf8'");
    $sql = "SELECT * FROM personas";
    $query = mysql_query($sql,$conex);
    while($row = mysql_fetch_array($query)){
       $arr[] = $row;
    }
    echo "{success: true, datos : ".json_encode($arr)."}";
}

/*var json = {
    success : true,   //boleano
    datos : [{         //array de objetos
        nombre : 'Julio',
        apellidos : 'de Hoyos'
    }]
} */

/*
 * función para insertar personas a la bd
 * */
function insertaPer(){
    $fieldAr = array(); //array para guardar los nombres de los campos
    $valueAr = array(); //array para guardar los valores de los campos
    foreach ($_POST as $field => $value) {
        if($field != 'op')  //excepción del campo a no guardar
        {
            $fieldAr[] = $field;
            $valueAr[]= "\"".utf8_decode($value)."\"";
        }
    }
    $fields = implode(',',$fieldAr);
    $values = implode(',',$valueAr);
    $sql = "insert into personas ($fields) values ($values)";
    try{
        mysql_query($sql);
        echo "{success:true,'msg':\"Registro guardado con &eacute;xito.\"}";
    }catch(Exception $e){
        $errNo = $e->getMessage();
        if($errNo == 1062){
            echo "{success : false ,'msg':'Registro ya existente' }";
        }else{
            echo "{'success':false,'msg':\"'Contacte a su distribuidor - ".$errNo."'\"}";
        }
    }
    flush();
}

/*
 * función para modificar personas de la bd
 **/
function modificaPer(){

}

/*
 * función para eliminar personas de la bd
 * */
function eliminaPer(){

}

?>
