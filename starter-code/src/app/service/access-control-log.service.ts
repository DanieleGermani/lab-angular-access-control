import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
  logMessages: Array<Object> = [{
       person: String  ,
       message: String,
       createdAt: new Date()
     } ]

  constructor() { }



  addAccessItem(person:String, message:String) {
     this.logMessages.push({
       person,
       message,
       createdAt: new Date()
     });
   }
   getAccessLog(){
     return this.logMessages;
   }


}
