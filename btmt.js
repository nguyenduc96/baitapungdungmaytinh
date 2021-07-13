function tinhKQ(){
    let a = parseInt(document.getElementById('sothu1').value);
    let b = parseInt(document.getElementById('sothu2').value);
    let operator = document.getElementById('operator').value;
    let ketqua;
    switch (operator){
        case "-":
            ketqua="Thực hiện phép trừ kết quả = " + (a-b);
            break;
        case "+":
            ketqua="Thực hiện phép cộng kết quả = "+ (a+b);
            break;
        case "*":
            ketqua="Thực hiện phép nhân kết quả = " + (a*b);
            break;
        default:
            ketqua="Thực hiện phép chia kết quả = " + (a/b);
    }
    document.getElementById('output').innerHTML= ketqua;
}