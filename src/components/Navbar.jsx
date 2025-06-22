import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';

const Navbar = () => {
  const { store } = useGlobalReducer();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 1) {
      const lowerCaseValue = value.toLowerCase();
      let results = [];

      store.people.forEach(person => {
        if (person.properties.name.toLowerCase().includes(lowerCaseValue)) {
          results.push({
            name: person.properties.name,
            uid: person.uid,
            type: 'characters' 
          });
        }
      });

      store.planets.forEach(planet => {
        if (planet.properties.name.toLowerCase().includes(lowerCaseValue)) {
          results.push({
            name: planet.properties.name,
            uid: planet.uid,
            type: 'planets' 
          });
        }
      });

      store.vehicles.forEach(vehicle => {
        if (vehicle.properties.name.toLowerCase().includes(lowerCaseValue)) {
          results.push({
            name: vehicle.properties.name,
            uid: vehicle.uid,
            type: 'vehicles' 
          });
        }
      });

      setSearchResults(results.slice(0, 10)); 
    } else {
      setSearchResults([]);
    }
  };

  const handleSelectSuggestion = (item) => {
    setSearchTerm('');
    setSearchResults([]);
    navigate(`/${item.type}/${item.uid}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-warning" to="/">
          Star Wars Blog
        </Link>

        <div className="d-flex align-items-center"> 
          <div className="position-relative me-3"> 
            <input
              className="form-control bg-secondary text-light border-warning"
              type="search"
              placeholder="Search by name..."
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{ width: '250px' }}
            />
            {searchResults.length > 0 && searchTerm.length > 1 && (
              <ul
                className="dropdown-menu show position-absolute top-100 start-0 w-100 bg-dark border border-warning"
                style={{ zIndex: 1050 }}
              >
                {searchResults.map((item) => (
                  <li key={`${item.type}-${item.uid}`}>
                    <button
                      className="dropdown-item text-light"
                      onClick={() => handleSelectSuggestion(item)}
                    >
                      {item.name} ({item.type.slice(0, -1)})
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link to="/favorites" className="btn btn-warning text-dark">
            Favorites ({store.favorites.length})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;