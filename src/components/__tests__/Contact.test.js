import Contact from "../Contact"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";

test("Should load Contact page", () => {
    render(<Contact/>);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    
})

test("Should have Submit Button", () => {
    render(<Contact/>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    
})