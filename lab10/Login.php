<?php
$validate = true;
$reg_Email = "/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/";
$reg_Pswd = "/^(\S*)?\d+(\S*)?$/";

$email = "";
$error = "";


if (isset($_POST["submitted"]) && $_POST["submitted"])
{
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);
    
    $db = new mysqli("localhost", "li725", "110120", "li725");
    if ($db->connect_error)
    {
        die ("Connection failed: " . $db->connect_error);
    }

    //add code here to select * from table User where email = '$email' AND password = '$password'
    // start with $q = 
    $q = "select * FROM User WHERE email = '$email' AND password = '$password' ";
   
    $r = $db->query($q);


    if($r->num_rows <=0)
    {
        $validate = false;

        $error="email and password didn't match";
    }
    else
    {
        $row = $r->fetch_assoc();
        $emailMatch = preg_match($reg_Email, $email);
        if($email == null || $email == "" || $emailMatch == false)
        {
            $validate = false;
            $error = "incorrect email format";
        }
        
        $pswdLen = strlen($password);
        $passwordMatch = preg_match($reg_Pswd, $password);
        if($password == null || $password == "" || $pswdLen < 8 || $passwordMatch == false)
        {
            $validate = false;
            $error = "incorrect password format";
        }
    }
    
    if($validate == true)
    {

        session_start();
        $_SESSION["email"] = $row["email"];
        header("Location: index.php");
        $db->close();
        exit();
    }
    else 
    {
        $error = "The email/password combination was incorrect. Login failed.";
        $db->close();
    }
}

?>


<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <script type="text/javascript" src="<?=ROOT_URI ?>/js/formFunctions.js"></script>
    <script type="text/javascript" src="Login.js"></script>
    <?php  require ROOT_PATH."/php/dependencies.php";?>
    <link rel="stylesheet" type="text/css" href="<?=ROOT_URI ?>/css/style.css"/>
</head>
<body>

    <h3>Login</h3>

    <form id="formLogin" action="Login.php" method="post">
        <input type="hidden" name="submitted" value="1"/>
        <table>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Email</td>
                <td>Password</td>
            </tr>
            <tr>
                <td id="emailMsg"></td>
                <td id="pswdMsg"></td>
            </tr>
            <tr>
                <td><input type="email" id="email" name="email" value=""/></td>
                <td><input type="password" id="password" name="password"/></td>
                <td><input type="submit" value="Login"/></td>
            </tr>
            <tr>
                <td><span id="email_msg" class="text-danger hidden" >Incorrect Email Format</span></td>
                <td><span id="password_msg" class="text-danger hidden" >Incorrect Password Format</span></td>
                <td></td>
            </tr>
            <tr>
                <td>No account? <a href="Signup.php">Sign up</a></td>
            </tr>
            <tr>
                <?=$error?>
            </tr>
        </table>
    </form>

</body>
</html>
