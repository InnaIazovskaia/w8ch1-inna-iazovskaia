import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should display 4 anchors", () => {
      render(<Navigation />);

      const anchorHome = screen.getByRole("link", { name: /home/i });
      const anchorCSR = screen.getByRole("link", { name: /Pokemons CSR/i });
      const anchorSSR = screen.getByRole("link", { name: /Pokemons SSG/i });
      const anchorISR = screen.getByRole("link", { name: /Pokemons ISR/i });

      expect(anchorHome).toBeInTheDocument();
      expect(anchorCSR).toBeInTheDocument();
      expect(anchorSSR).toBeInTheDocument();
      expect(anchorISR).toBeInTheDocument();
    });
  });
});
