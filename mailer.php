<?php
if($_POST['name']){

$to = "anusha.b@noveloffice.in";
$subject = "Novel Office US Website\n".date("d-m-Y");
$message1 = '<table>';
$message1 .= '<tr><td colspan="2"><strong> Dear, Novel Office</strong></td></tr>';
$message1 .= '<tr><td></td></tr>';
$message1 .= '<tr><td><strong>Name</strong></td><td>: '.$_POST['name'].'</td></tr>';
$message1 .= '<tr><td><strong>Number </strong></td><td>: '.$_POST['phone'].'</td></tr>';
$message1 .= '<tr><td><strong>Subject </strong></td><td>: '.$_POST['subject'].'</td></tr>';
$message1 .= '<tr><td><strong>Email </strong></td><td>: '.$_POST['email'].'</td></tr>';
$message1 .= '<tr><td><strong>Message </strong></td><td>: '.$_POST['message'].'</td></tr>';
$message1 .= '<tr><td><strong>Source </strong></td><td>: '.$_SERVER['HTTP_REFERER'].'</td></tr>';
$message1 .= '</table>';
$message1 .='<br><br><h4><strong>Thanks and Regards </strong></h4>';
            
         $headers = "From: webdev@noveloffice.com \r\n";
         $headers .= "MIME-Version: 1.0\r\n";
         $headers .= "Content-type: text/html\r\n";
         $headers .= "CC:  \r\n";         
if(mail($to,$subject,$message1,$headers)){
echo "<script>window.location.href='../thanks/thank-you.html'</script>";
}else{
    echo "<script>window.location.href='index.html'</script>";
}

}else{
    echo "<script>window.location.href='index.html'</script>";
}

?>



