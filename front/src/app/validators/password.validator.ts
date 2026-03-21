import { AbstractControl, ValidationErrors } from "@angular/forms";


export const ERROR_MSG_PASSWRD_TOO_SHORT: string = "tooShort";
export const ERROR_MSG_PASSWRD_MISSING_UPPER: string = "missingUpper";
export const ERROR_MSG_PASSWRD_MISSING_LOWER: string = "missingLower";
export const ERROR_MSG_PASSWRD_MISSING_NUMBER: string = "missingNumber";
export const ERROR_MSG_PASSWRD_MISSING_SPECIAL: string = "missingSpecial";

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password: string = control.value;
    let errors: ValidationErrors = {}
    if (password == ''){
        return null;
    }
    if (password.length < 8){
        errors[ERROR_MSG_PASSWRD_TOO_SHORT]=true;
    }
    if (password.toUpperCase() == password){
        errors[ERROR_MSG_PASSWRD_MISSING_LOWER]=true;
    }
    if (password.toLowerCase() == password){
        errors[ERROR_MSG_PASSWRD_MISSING_UPPER]=true;
    }
    if (! /\d/.test(password)){
        errors[ERROR_MSG_PASSWRD_MISSING_NUMBER]=true;
    }
    if (! /[!@#$%^&*(),.?":{}|<>]/.test(password)){
        errors[ERROR_MSG_PASSWRD_MISSING_SPECIAL]=true;
    }
    if(Object.keys(errors).length == 0){
        return null;
    }else{
        return errors;
    }
}