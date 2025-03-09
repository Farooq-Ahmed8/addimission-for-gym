//Conditional Statement

var userName =prompt('Enter Your Name')
var age = +prompt('Enter Your Age')
document.write('<h1>' + 'Name: ' + userName + '</h1>' +'</br>')

if (age >= 18){
    document.write('<h1>' + 'In ' + age + ' Years you can Join the gum ' + '</h1>')
}else if(age <= 18){
    document.write('<h1>' + 'Your are not ready for gym ' + '</h1>')
}else{
    document.write('<h1>' + 'Not Allowed ' + '</h1>')
}