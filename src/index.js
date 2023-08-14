module.exports = function check(str, bracketsConfig) {

  let bracketsMap = new Map(bracketsConfig);
  const bracketStack = [];

  for (let i = 0; i < str.length; i++) {
   
    (str[i] === bracketsMap.get(bracketStack[bracketStack.length - 1])) ? bracketStack.pop() : bracketStack.push(str[i]);

  }
  return bracketStack.length === 0;
}
