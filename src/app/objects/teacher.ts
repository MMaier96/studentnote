/*	=========================================
 *	==	StudentNote WebEngeneering Project ==
 *	=========================================
 *
 *	Group:			Marcel Maier, Florian Keilhofer, Lukas Weber, Peter Fischer
 *	Developer:		Marcel Maier
 *	Mail:			mar.maier.16@lehre.mosbach.dhbw.de
 *	Created:		13th-July-2017
 *	Finished:		20th-July-2017
 *	Created for: 	DHBW - Project - 2nd Semester 
 *	
 *	Licenses:
 *		Fonts:    - Font Awesome 4.2.0 by @davegandy - http://fontawesome.io - @fontawesome
 *				  - Google Open Fonts (Lato, Roboto)
 *
 *		CSS:	  - StarRating: FreeToUseLicense (MIT) from cssscript.com
 * 							  
 */

import {Address} from "./address";

export class Teacher{
    forename: string;
    surname: string;
    password: string;
    mail: string;
    age: number;
    address: Address;
    editMode: boolean = false;
    picpath: string;


    constructor(forename, surname, password, mail, age, street, house, zip, city, picpath){
        this.forename = forename;
        this.surname = surname;
        this.password = password;
        this.mail = mail;
        this.age = age;
        this.picpath = picpath==""?"../../assets/images/preview.jpg":picpath;
        this.address = new Address(street, house, zip, city);
    }
}