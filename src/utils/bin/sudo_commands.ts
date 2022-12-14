// List of commands that require special attention for fake sudo mode

import * as bin from './index';
import config from '../../../config.json';

// setup sudo flags 
let currentlySudo = false;
let sudoAttempts = 0; // sudo attempts counter, 3 = sudo mode

// sudo 
export const sudo = async (args: string[]): Promise<string> => {
    switch (sudoAttempts) {
        case 0:
            sudoAttempts++;
            return `Permission denied: 'guest' is not in the sudoers file. This incident will be reported.
  
...
you know, I never checked who it reports to. I'm not sure if I want to know.
Well, with little power comes ...no responsibility? No, that can't be right, I'm sure I'm responsible for something.`;
        case 1:
            sudoAttempts++;
            return `I told you, no sudo for you. You're not even a real user. you're a guest.
            
...
also I checked the source code, and it reports to your mom, and she's not happy. maybe you should have a talk with her.`;
        case 2:
            sudoAttempts++;
            return `I'm not sure if you're trying to be funny, but I'm not laughing. It's honestly funnier that Github Copilot wrote 90% of these responses.`;
        case 3:
            sudoAttempts++;
            currentlySudo = true;
            return `Fine. Here. take sudo. I don't care anymore. I spent 30 seconds writing this code. I'm not even sure if it works.
It's a fucking website anyway. You can press alt+f12 and do whatever you want to it. I don't care.`;
        default:
            // add code for each fucking command here
    }
};
// su 
export const su = async (args: string[]): Promise<string> => {
    switch (sudoAttempts) {
        case 0:
            sudoAttempts++;
            return `Permission denied: 'guest' is not in the sudoers file. This incident will be reported.
  
...
you know, I never checked who it reports to. I'm not sure if I want to know.
Well, with little power comes ...no responsibility? No, that can't be right, I'm sure I'm responsible for something.`;
        case 1:
            sudoAttempts++;
            return `I told you, no sudo for you. You're not even a real user. you're a guest.
            
...
also I checked the source code, and it reports to your mom, and she's not happy. maybe you should have a talk with her.`;
        case 2:
            sudoAttempts++;
            return `I'm not sure if you're trying to be funny, but I'm not laughing. It's honestly funnier that Github Copilot wrote 90% of these responses.`;
        case 3:
            sudoAttempts++;
            currentlySudo = true;
            // change the username to root  

            return `Fine. Here. take sudo. I don't care anymore. I spent 30 seconds writing this code. I'm not even sure if it works.
It's a fucking website anyway. You can press alt+f12 and do whatever you want to it. I don't care.`;
        default:
    }
};


