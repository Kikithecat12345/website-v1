import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
return `
ABOUT ME: 
----------------
${config.name}
Email: <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
Github Repo: ${config.repo}
----------------
Socials:
Github: <u><a href="${config.social.github}" target="_blank">Kikithecat12345</a></u>
Discord: ${config.social.discord}
I don't do other social media. 
----------------
Friends:
<u><a href="https://ihateithere.xyz" target="_blank">${config.friends.goldie}</a></u>
<u><a href="https://kara790.com" target="_blank">${config.friends.kevin}</a></u>
----------------
Donate me money:
Paypal: ${config.donate_urls.paypal}
Ko-fi: ${config.donate_urls.kofi}
----------------
                                                                                                                                                                                                                                                                                      
                                                            .....                                                                                     
                                                         .;lddddol;.                                                                                  
                                                        .cxdlllllodo:.                                                                                
                                                        ;ddccoddolclooc'.....                                                                         
                                                       .odlcodddddolclddolodolc:;,'..                                                                 
                                                       .ddclddddddddolldxdoodxkkkkxdolc;'..                                                           
                                                       .dd:cdddddddddx00kxdoodxkkkkkkkkkxdoc:'..                                                      
                                                       .odcldddddddddkNWKkxkxooxkkkkkkkkkkkkxxxoc:;;;;;;,,,,,,''''''',,,,,,;;,,..                     
                                                       .loloddddxxxxxk0XX0kkkxdoxkkkkkkkkkkkkkkkkkkkkkkkkkxxxxxxxxxxxxxxxxxoc,..                      
                                                       .:lodxxxkkkkkkkxkkkkkkkxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxdl:'.                          
                                                       .;oxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxdl;.                              
                                                        ;dkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxdool,.                                
                                                       .:xkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxddddoooooc'                                  
                                                       .okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxdddddxxxxd:.                                   
                                                       ,dkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxkkkkkkd;.                                    
                                                      .:xkkkkkkkkkkkkkkkkkxxdooooooodxxkkkkkkkkkkkkkkkkkkkkkkkx:.                                     
                                                      'oxkkkkkkkkkkkkkkkkxdooooooooooodxkkkkkkkkkkxdddddxkkkkkko,                                     
                                                      'oxkkkkkkkkkkkkkkkxc;:ll::clddxxxkkkkkkkkkkkxooooddddddxkkd;                                    
                                                      .;xkkkkkkkkkkkkkkkx:. ,:.  .,c;,cdkkkkkkkkkkxxxdoooddxxxkkko.                                   
                                                       ,oxkkkkkkkkkkkkkkkxc;'.   .'.  .:xkkkkkkkkkxo;...';cdkkkkkd'                                   
                                                     .:lldxkkkkkkkkkkkkkkkxxdc;'.....  ;dkkkkkkkkdl,.  ..,lxkkkkkd'                                   
                                                   .:oddoloxkkkkkkkkkkkkkkkkkkxxdddxo:;cdkkkkkkkkdooollodxkkkkkkko.                                   
                                                 'codxddddlloxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkd:.                                   
                                              .,ldddddxxxxdolloodxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkx:.                                    
                                            ':odxxdddxddddddddollllldxxxkkkkOOOOOOOOkkkkkxkkkkkkkkkkxkkkkkkkkkd;.                                     
                                        .,ldxxxxddxddddddddddddxdooooooookKNNWWWWWWWNX0Okxdxdoc::ldxdxkO0KXNXx,                                       
                                      .,o0NWNXKOkxxddddxddxxddddddddxxddodO0KNWMMMMMMMWNKOo;..    'lkKXWMMWXo.                                        
                                   .cx00OxkOKXNNNXK0OkxxxdddddddddddddxxdddddxkKWMMMMMMMMWk,.    .,xNMMWNXOd,                                         
                                .:xKWMMMNKOkxxkO0KXNNNXK0OkxxxdddddddxxxxddxddddxKWMMMMMMMWXKkoldOXWWW0xdddd:.                                        
                             'cxKWMMMMMMMMWNK0kxxxxkO0KXNNNNXK0OkkxxdxxxdddddxddookKNWMMMMMMMMMMMWXOxdloddddo,                                        
                         .,lkXWMMMMMMMMMMMMMMMWNXK0OOkxxkO0KXXNNNXXKK00Okkkxxxxddddddxk0KKKK0Okddolclodddxxxkd,                                       
                     .'cx0NWMMMMMMMMMMMMMMMMMMMMMMMWWNXK0OOkkkkOOO00KXXXXXXXXXKK000OOkxxdooollloodkOOO00KKXNNN0:                                      
                 .,cx0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNNXXK0OkkkkkkkkO00KKXXNNNNWWWNNNNNNNNNNNNNXNNNXXKK00x:.                                    
         ..',:oxOKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNNXXK00OOkkkxxkkkOO00KKKKKK0OOOkkkkkkkxxxxkO0K0d,.                                 
...',:loxOKNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWNNXKK00OOkkkxxxxxxxxxxxxxkOO0KKXNWMMMWNkc'.                              
0KXXNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWNNNXXXXXXKKKKXXNNWWWMMMMMMMMMMMWXkl'.                           
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNOd:'.                       
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXOdc'.                   
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKkoc,..             
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNK0koc;'.       
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0kxoc;,.
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNN
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
`;
};

export default sumfetch;
