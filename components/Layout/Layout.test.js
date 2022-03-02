import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it's rendered with heading 'Home page'", () => {
    test("Then it should display heading 'Home page'", () => {
      render(
        <Layout>
          <h1>Home page</h1>
        </Layout>
      );

      const heading = screen.getByRole("heading", {
        name: /home page/i,
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
