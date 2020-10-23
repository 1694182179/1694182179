<?php
/* 
    如果要用register.php处理登陆
    传入用户名必须使用username这个键
    传入密码必须使用password这个键
*/
header('content-type:text/html;charset=utf-8;');
$uname = $_GET['user'];//获取前端传递的用户名
$upass = $_GET['password'];//获取前端传递的密码
$conn = mysqli_connect('localhost','root','root','xiaomi');
if(!$conn){
    $responseData['code'] = 4;
    $responseData["message"] = "服务器忙";
    //将数据按统一数据返回格式返回
    echo json_encode($responseData);
    exit;
}

$sql = "INSERT INTO `user` VALUES (null,'$uname','$upass')";
$res = mysqli_query($conn,$sql);
mysqli_close($conn);



if($res){
    header('location:../login.html');
}else{
    echo "服务器错误";
}

?>