const usernameReg=/^([A-Z])|([a-z])/;

export function validUsername(username:string):boolean{
    return usernameReg.test(username);
}
export function validatePassword(password:string):boolean{
    return password.length>=4;
}
