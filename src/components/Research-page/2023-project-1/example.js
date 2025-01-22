import React, { useEffect, useState } from "react";
import NGLViewer from "./NGLViewer";

function Research() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedPDB, setSelectedPDB] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSuggestions = async (query) => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    try {
      // your GraphQL fetch code is fine
      const graphqlQuery = encodeURIComponent(`
        query GetStructure($id: String!) {
          entry(entry_id: $id) {
            rcsb_id
            struct {
              title
            }
          }
        }
      `);

      const variables = encodeURIComponent(
        JSON.stringify({ id: query })
      );

      const response = await fetch(
        `https://data.rcsb.org/graphql?query=${graphqlQuery}&variables=${variables}`
      );

      const data = await response.json();
      const result = data.data?.entry;

      if (result) {
        setSuggestions([
          {
            identifier: result.rcsb_id,
            title: result.struct?.title || "",
          },
        ]);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchSuggestions(searchTerm);
    }, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        3D Molecular Visualization
      </h2>

      {/* INPUT + SUGGESTIONS */}
      <div className="mb-6 relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a protein (e.g., 1crn)"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {suggestions.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {suggestions.map((sugg) => (
              <button
                key={sugg.identifier}
                onClick={() => {
                  setSelectedPDB(sugg.identifier);
                  setSearchTerm(sugg.identifier);
                  setSuggestions([]);
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
              >
                <div className="font-medium">{sugg.identifier}</div>
                <div className="text-sm text-gray-600 truncate">
                  {sugg.title}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* LOADING / ERRORS */}
      {!selectedPDB && !isLoading && (
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <p className="text-gray-600">
            Enter a PDB ID above to view the protein structure
          </p>
        </div>
      )}
      {isLoading && (
        <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg">
          <div className="animate-spin mr-2 h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"></div>
          <p className="text-blue-700">Loading molecular visualization...</p>
        </div>
      )}
      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-4">
          {error}
        </div>
      )}

      {/* YOUR NGL VIEWER */}
      {selectedPDB && (
        <div className="relative mt-4">
          <NGLViewer selectedPDB={selectedPDB} />
        </div>
      )}
    </div>
  );
}

export default Research;
