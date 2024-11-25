import React, { useState, ChangeEvent } from 'react';
import { useHistory } from '@docusaurus/router';

interface Doc {
  title: string;
  path: string;
}

interface SearchBarProps {
  docs: Doc[];
}

const SearchBar: React.FC<SearchBarProps> = ({ docs }) => {
  const [query, setQuery] = useState<string>('');
  const [filteredDocs, setFilteredDocs] = useState<Doc[]>([]);
  const history = useHistory();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const results = docs.filter((doc) =>
      doc.title.toLowerCase().includes(value)
    );
    setFilteredDocs(results);
  };

  const handleDocClick = (path: string) => {
    history.push(path);
    setQuery(''); // Clear the search bar
    setFilteredDocs([]); // Close dropdown
  };

  return (
    <div style={{ position: 'relative', maxWidth: '300px' }}>
      <input
        type="text"
        placeholder="Search documentation..."
        value={query}
        onChange={handleSearch}
        style={{
          padding: '8px',
          width: '100%',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      {query && filteredDocs.length > 0 && (
        <ul
          style={{
            listStyle: 'none',
            padding: '10px',
            margin: '0',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: 'white',
            position: 'absolute',
            top: '40px',
            width: '100%',
            zIndex: 1000,
          }}
        >
          {filteredDocs.map((doc) => (
            <li
              key={doc.path}
              onClick={() => handleDocClick(doc.path)}
              style={{
                padding: '10px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee',
              }}
            >
              {doc.title}
            </li>
          ))}
        </ul>
      )}
      {query && filteredDocs.length === 0 && (
        <div
          style={{
            position: 'absolute',
            top: '40px',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: 'white',
            width: '100%',
            zIndex: 1000,
          }}
        >
          No results found.
        </div>
      )}
    </div>
  );
};

export default SearchBar;
