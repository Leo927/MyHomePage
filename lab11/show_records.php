<?php

	$q = $_GET['q'];

	//CREATE A db CONNECTION USING mysqli OBJECT
	$db = new mysqli("localhost", "li725", "110120", "li725");
	
	if ($db -> connect_error) {
	   die ("Connection failed: " . $db -> connect_error);
	}

	// The Table in lab 10 is named user. An appropriate name would be Users. Users is taken by CS215 project. so I will use user

	$query = "SELECT * FROM User WHERE email like '$q%'";
	$result = $db->query($query);

	$json_output = array();

	while ($row =  $result->fetch_assoc()) {
		$json_output[]=$row;
	}

	echo json_encode($json_output);
	
	$db->close();

?>
