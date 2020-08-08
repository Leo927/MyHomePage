<?php
$target_dir = "avator/";
$target_file = $target_dir . basename($_FILES["avator"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["avator"]["tmp_name"]);
  if($check !== false) {
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }
}

// Check if file already exists
if (file_exists($target_file)) {
  echo "Sorry, file already exists.";
  $uploadOk = 0;
}

// Check file size
if ($_FILES["avator"]["size"] > 500000) {
  echo "Sorry, your file is too large.";
  $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
  echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["avator"]["tmp_name"], $target_file)) {
    echo "The file ". basename( $_FILES["avator"]["name"]). " has been uploaded.";
  } else {
    echo "Sorry, there was an error uploading your file.";
  }
}

?>
 <!DOCTYPE html>
 <html>
 <head>
 	<title>Display User Information</title>
 </head>
 <body>
 	<h1>Display User Information</h1>
 	<main>
 		<div>Email: <?=$_POST['userEmail']?></div>
 		<div>username: <?=$_POST['userName']?></div>
 		<div><img src="<?=$target_file?>" alt = "avator of user"></div>
 	</main>
 </body>
 </html>