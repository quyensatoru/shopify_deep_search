import React, { useState } from "react";
import { Card, TextField, ResourceList, Spinner, Text } from "@shopify/polaris";
import axios from "axios";

interface Product {
  id: string;
  title: string;
  url?: string;
}

const SearchProductBlock = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (value: string) => {
    setQuery(value);
    setLoading(true);
    try {
      const res = await axios.get(`/api/search-products?q=${value}`);
      setResults(res.data.products || []);
    } catch (e) {
      setResults([]);
    }
    setLoading(false);
  };

  return (
    <Card>
      <TextField
        label="Search"
        value={query}
        onChange={handleSearch}
        autoComplete="off"
      />
      {loading ? (
        <Spinner />
      ) : (
        <ResourceList
          resourceName={{ singular: 'product', plural: 'products' }}
          items={results}
          renderItem={(item) => {
            const { id, title, url } = item;
            const itemProps = url
              ? { id, accessibilityLabel: `View details for ${title}`, name: title, url }
              : { id, accessibilityLabel: `View details for ${title}`, name: title, onClick: () => {} };
            return (
              <ResourceList.Item {...itemProps}>
                <Text variant="bodyMd" fontWeight="bold" as="h3">
                  {title}
                </Text>
              </ResourceList.Item>
            );
          }}
        />
      )}
    </Card>
  );
};

export default SearchProductBlock; 