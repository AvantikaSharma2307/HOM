import React, { useEffect, useState, useCallback } from 'react';
import { Search } from 'lucide-react';

export function UserSearch() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
          const data = await response.json();
          setUsers(data);
          setSearchResults(data); 
          setLoading(false);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };
  
      fetchUsers();
    }, []);

    const handleSearch = useCallback((event) => {
        const query = event.target.value.toLowerCase();
        setQuery(query);
    
        
        const results = users.filter((user) =>
          user.name.toLowerCase().includes(query)
        );
    
        setSearchResults(results);
      }, [users]);
  

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Users</h2>
        
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search users..."
            value={query}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

    
        {loading ? (
          <div className="text-center">Loading users...</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {(searchResults.length > 0 ? searchResults : users).map((user) => (
              <div
                key={user.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
                <p className="text-gray-600 mb-1">{user.email}</p>
                <p className="text-gray-600 mb-2">{user.phone}</p>
                <p className="text-sm text-gray-500">
                  Company: {user.company.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}