import { render, screen } from "@testing-library/react";
import Navebar from "../Navbar";
import { BrowserRouter } from "react-router-dom";

describe("Navbar", () => {
    test('Navbar is being rendered correctly', () => {
        const container = document.createElement("div");
        render(
            <BrowserRouter basename="/">
                <Navebar />
            </BrowserRouter>,
            container
        );
        const navElement = screen.getByRole("navigation");
        expect(navElement).toBeInTheDocument();
    })
});
