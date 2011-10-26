<?php

switch ($_POST['op']) {
	case 1:
		echo "Fuckin' Opci 1";
		break;
	case 2:
		bla();
		break;
}

function bla(){
	header("Content-type: application/json");
	$arr = array(
			array("nombre"=>"Amir","apellido"=>"Salgado","email"=>"amirsalgado@gmail.com"),
			array("nombre"=>"Elkin","apellido"=>"Barreto","email"=>"elkinbarreto@gmail.com"),
			array("nombre"=>"Victor","apellido"=>"García","email"=>"victorgarcia@gmail.com")
	);
	echo json_encode($arr);
}
?>