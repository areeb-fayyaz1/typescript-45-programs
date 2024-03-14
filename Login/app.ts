// Question # 30: Hello Admin

let username: string[] = ["admin", "eric", "user", "max", "lisa"]

username.forEach(username =>
{
    if (username === "admin"){
    console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
        
    }
})