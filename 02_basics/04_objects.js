const instagramUser = new Object();

// console.log(instagramUser);

const User = {
    email: "johndoe843@gmail.com",
    UserfullName: {
        userName: {
            firstName: "John",
            lastName: "doe",
            userName: "johndoe843"
        }
    }
};


// console.log(User.UserfullName.userName.firstName);

// const CgiUser = {}

// CgiUser.name = "Suraj kanojiya"
// CgiUser.email = "Surajka989@yahoo.in"
// isLoggedIn = true
// CgiUser.id = "1234"

// console.log(CgiUser.id);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj3 = {5:"e", 6:"f"};

//  const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

const obj4 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);


const myarray = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    },
    {
        id: 4
    },
    
    {
        id: 5
    }
]

myarray[1].id
// console.log(User);

// console.log(Object.keys(User));
// console.log(Object.values(User));

 //console.log(User.hasOwnProperty('UserfullName'));
 
 const course = {
    courseName: 'js in hindi',
    courseInstructor: 'Suraj kanojiya',
    coursePrice: "free" }

    // course.courseImstructor 

    const {courseInstructor} = course 
    console.log(courseInstructor);
    
    // const navbar =({company}) => {}

    // navbar (company = "Cgi")

    // {                           // api in Object
    //     "name": "Suraj kanojiya",
    //     "email": "suraj@google.com",
    //     "price": "free"

    // }
    // [                           // api in Array
    //     {

    //     }
    //     {

    //     }
    // ]