import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const prefixes = ["the", "my", "best", "just", "cool"];
  const adjectives = ["fast", "happy", "smart", "bold", "bright"];
  const names = ["dog", "design", "code", "shop", "vibe"];
  const extensions = [".com", ".net", ".io", ".us", ".org"];
  
  function generateDomainNames() {
    const allDomains = [];
  
    for (let prefixIndex = 0; prefixIndex < prefixes.length; prefixIndex++) {
      for (let adjectiveIndex = 0; adjectiveIndex < adjectives.length; adjectiveIndex++) {
        for (let nameIndex = 0; nameIndex < names.length; nameIndex++) {
          for (let extensionIndex = 0; extensionIndex < extensions.length; extensionIndex++) {
            const prefix = prefixes[prefixIndex];
            const adjective = adjectives[adjectiveIndex];
            const name = names[nameIndex];
            const extension = extensions[extensionIndex];
  
            const domain = prefix + adjective + name + extension;
  
            allDomains.push(domain);
          }
        }
      }
    }
    return allDomains;
  }
  
  const generatedDomains = generateDomainNames();
  console.log("Generated domain names:");
  console.log(generatedDomains);
};