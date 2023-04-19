function check(){
    let i1 = 2;
    // let list = document.querySelectorAll('input[type=text]')
    // console.log(list[0].value)
    let user = document.getElementById('user').value
    console.log(user);
    let pass = document.getElementById('password').value
    console.log(pass)
    let date = document.getElementById('dateTime').value
    console.log(date)
    let regex = new RegExp("BN-[0-9]{5}","g");
    let regex1 = new RegExp("\\d{6,}","g");
    // console.log(user.matches(regex));
    if (!regex.test(user)){
        alert('Sai tai khoan');
        return;
    }
    if (!regex1.test(pass)){
        alert('Sai dinh dang mat khau')
        return;
    }
    if (!Date.parse(date) > new Date()){
        alert('Ngay dat phai sau ngay hom nay')
        return;
    }
    let list = document.getElementsByClassName('loaiDichVu');
    let num = 0;
    for (i = 0 ; i < list.length;i++){
        num+=list[i].checked
    }
    console.log(num*500000)
    let table = document.getElementsByClassName("table table-striped")
    let ChuyenKhoa =$('#ChuyenKhoa').find(":selected").text()
    table[0].innerHTML+=`<tr> <th scope="row">${i1}</th> 
                        <td>${user}</td>
                        <td>${pass}</td>
                        <td>${date}</td>
                        <td>${num*500000}</td>
                        <td>${ChuyenKhoa}</td>
                    </tr>`
    i1++;
}