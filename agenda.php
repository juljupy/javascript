<?php
/**
 * Created by IntelliJ IDEA.
 * User: julioalbertodehoyosmartinez
 * Date: 27/10/11
 * Time: 11:01
 * To change this template use File | Settings | File Templates.
 */


$conex = mysql_connect('localhost:8888','root','sistemas'); //Conexión al server
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
