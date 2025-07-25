// Q : 1
//  You are creating a website for your college. Create a class 
// User with 2 properties, name &
//  email. It also has a method called viewData( ) that allows user to view website data.


class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("website data");
    }
}

let stu1 =new User("Shoaib", 'shoaib@gmail.com');
console.log(stu1)
stu1.viewData();
  
// Q : 2
// editData to Admin that allows it to edit website data.

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }

    editData(){
        console.log("website data edited");
    }

}


// Object 
 let admin = new Admin('Admin' , 'admin@gmail.com');
 console.log(admin);
 admin.viewData();
 admin.editData()