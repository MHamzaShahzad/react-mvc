import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Listing from "./Listing";

const items = [
  {
    id: 1,
    name: "Item 1",
    stateProvince: "State 1",
    country: "Country A",
    webPages: ["page1.com", "page2.com"],
    domains: ["domain1.com", "domain2.com"],
    alphaTwoCode: "AE",
  },
  {
    id: 2,
    name: "Item 2",
    country: "Country B",
    stateProvince: "State 2",
    webPages: ["page1.com", "page2.com"],
    domains: ["domain1.com", "domain2.com"],
    alphaTwoCode: "AE",
  },
];

describe("Listing Component", () => {
  it("should render correctly with items", () => {
    render(
      <Router>
        <Listing
          items={items}
          searchQuery=""
          sortBy=""
          sortOrder="asc"
          filters={{}}
        />
      </Router>
    );

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("should filter items based on search query", () => {
    render(
      <Router>
        <Listing
          items={items}
          searchQuery="1"
          sortBy=""
          sortOrder="asc"
          filters={{}}
        />
      </Router>
    );

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.queryByText("Item 2")).toBeNull();
  });
  it("should render items sorted by name in ascending order", () => {
    render(
      <Router>
        <Listing
          items={items}
          searchQuery=""
          sortBy="name"
          sortOrder="asc"
          filters={{}}
        />
      </Router>
    );

    const itemsByName = items.map((item) => item.name);
    const renderedItems = screen
      .getAllByText(/Item \d/)
      .map((item) => item.textContent);
    expect(renderedItems).toEqual(itemsByName);
  });

  it("should render items sorted by name in descending order", () => {
    render(
      <Router>
        <Listing
          items={items}
          searchQuery=""
          sortBy="name"
          sortOrder="desc"
          filters={{}}
        />
      </Router>
    );

    const itemsByNameDesc = items.map((item) => item.name).reverse();
    const renderedItems = screen
      .getAllByText(/Item \d/)
      .map((item) => item.textContent);
    expect(renderedItems).toEqual(itemsByNameDesc);
  });

  it("should filter items by country", () => {
    render(
      <Router>
        <Listing
          items={items}
          searchQuery=""
          sortBy=""
          sortOrder="asc"
          filters={{ country: "Country A" }}
        />
      </Router>
    );

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.queryByText("Item 2")).toBeNull();
  });
});
