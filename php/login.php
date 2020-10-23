<?php
header('content-type:text/html;charset=utf-8;');

$responseData = array("code" =>1, "message" => "");
$uname = $_POST['username'];//获取前端传递的用户名
$upass = $_POST['password'];//获取前端传递的密码

	/*
		简单的数据验证
    */
	// if(!$uname){
	// 	$responseData["code"] = 1;
    //     $responseData["message"] = "用户名不能为空";
        
	// 	echo json_encode($responseData);
	// 	exit;
	// }
	// if(!$upass){
	// 	$responseData["code"] = 2;
	// 	$responseData["message"] = "密码不能为空";
	// 	echo json_encode($responseData);
	// 	exit;
	// }


$conn = mysqli_connect('localhost','root','root','xiaomi');
// // if(!$conn){
// //     $responseData['code'] = 4;
// //     $responseData["message"] = "服务器忙";
// //     //将数据按统一数据返回格式返回
// //     echo json_encode($responseData);
// //     exit;
// // }

$sql = "SELECT * FROM user WHERE username='$uname' AND password='$upass'";
$res = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($res);
// print_r($row) ;
if(!$row){
    $responseData["code"] = 0;
    $responseData["message"] = "用户名或密码错误";

}else{
    $responseData["code"] = 1;
    $responseData["message"] = "登录成功";
  

}
echo json_encode($responseData);
?>

