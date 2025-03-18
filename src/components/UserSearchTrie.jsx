class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
      this.users = [];
    }
  }
  
  class UserSearchTrie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(user) {
      let node = this.root;
      for (const char of user.name.toLowerCase()) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
        node.users.push(user); 
      }
      node.isEndOfWord = true;
    }
  
    search(prefix) {
      let node = this.root;
      for (const char of prefix.toLowerCase()) {
        if (!node.children[char]) return [];
        node = node.children[char];
      }
      return node.users;
    }
  }
  
  export default UserSearchTrie;
  