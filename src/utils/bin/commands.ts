// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  /* const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`; */
return `That's cheating. You know, back in my day, we had to compile our own kernels just so we knew the commands.
you lucky kids don't know the struggle.

(try some linux commands, you might have fun. alternatively, look at the source code.)`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
If you want, run sumfetch for more info. 
Or try a bunch of commands.
Or go read the man page for something. 
Or go elsewhere. I'm not your dad.
`;
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `You want to give me money? that's a first.
here are the ways you can support me monetarially:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.kofi}" target="_blank">ko-fi</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Google? Guess everyone uses it.
  Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Do you really care that much about privacy?
  Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Hello, redditor. Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `unlike kevin, I actually have directories. Here you go:
  TODO: LATER`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `TODO: PROGRAM`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `vi? Too old. Try vim.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `vim is wayyy to complicated. Try nano.`;
};

export const nano = async (args: string[]): Promise<string> => {
  return `getting better, but nano is so basic. Try emacs?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `who the hell uses emacs? Maybe try nvim?`;
};

export const nvim = async (args?: string[]): Promise<string> => {
  return `you know what? nvim sucks. Just use vscode.`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  █████   ████  ███  █████       ███                      █████    ████   ████████   ████████   ██                                   
  ░░███   ███░  ░░░  ░░███       ░░░                      ░░███    ░░███  ███░░░░███ ███░░░░███ ███                                   
   ░███  ███    ████  ░███ █████ ████   ██████   ██████   ███████   ░███ ░░░    ░███░░░    ░███░░░   █████                            
   ░███████    ░░███  ░███░░███ ░░███  ███░░███ ░░░░░███ ░░░███░    ░███    ███████    ██████░      ███░░                             
   ░███░░███    ░███  ░██████░   ░███ ░███ ░░░   ███████   ░███     ░███   ███░░░░    ░░░░░░███    ░░█████                            
   ░███ ░░███   ░███  ░███░░███  ░███ ░███  ███ ███░░███   ░███ ███ ░███  ███      █ ███   ░███     ░░░░███                           
   █████ ░░████ █████ ████ █████ █████░░██████ ░░████████  ░░█████  █████░██████████░░████████      ██████                            
  ░░░░░   ░░░░ ░░░░░ ░░░░ ░░░░░ ░░░░░  ░░░░░░   ░░░░░░░░    ░░░░░  ░░░░░ ░░░░░░░░░░  ░░░░░░░░      ░░░░░░                             
                                                                                                                                      
                                                                                                                                      
                                                                                                                                      
   █████        ███                                       █████   █████           ███      █████   ███  █████                    ███  
  ░░███        ░░░                                       ░░███   ░░███           ░░░      ░░███   ███  ░░███                    ░░███ 
   ░███        ████  ████████   █████ ████ █████ █████    ░███    ░███   ██████  ████   ███████  ███   ███████   █████████████   ░░███
   ░███       ░░███ ░░███░░███ ░░███ ░███ ░░███ ░░███     ░███    ░███  ███░░███░░███  ███░░███ ░███  ░░░███░   ░░███░░███░░███   ░███
   ░███        ░███  ░███ ░███  ░███ ░███  ░░░█████░      ░░███   ███  ░███ ░███ ░███ ░███ ░███ ░███    ░███     ░███ ░███ ░███   ░███
   ░███      █ ░███  ░███ ░███  ░███ ░███   ███░░░███      ░░░█████░   ░███ ░███ ░███ ░███ ░███ ░░███   ░███ ███ ░███ ░███ ░███   ███ 
   ███████████ █████ ████ █████ ░░████████ █████ █████       ░░███     ░░██████  █████░░████████ ░░███  ░░█████  █████░███ █████ ██░  
  ░░░░░░░░░░░ ░░░░░ ░░░░ ░░░░░   ░░░░░░░░ ░░░░░ ░░░░░         ░░░       ░░░░░░  ░░░░░  ░░░░░░░░   ░░░    ░░░░░  ░░░░░ ░░░ ░░░░░ ░░░   
                                                                                                                                      
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
