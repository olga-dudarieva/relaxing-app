import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TopMenu from "./TopMenu";
import {BrowserRouter} from "react-router-dom";

test('active className is working', async () => {
    render(<TopMenu />, {wrapper: BrowserRouter});
    const user = userEvent.setup()

    expect(screen.getByTestId('movieLink').classList.contains('active')).toBe(false)
    expect(screen.getByTestId('musicLink').classList.contains('active')).toBe(false)

    await user.click(screen.getByTestId('movieLink'))
    expect(screen.getByTestId('movieLink').classList.contains('active')).toBe(true)
    expect(screen.getByTestId('musicLink').classList.contains('active')).toBe(false)

    await user.click(screen.getByTestId('musicLink'))
    expect(screen.getByTestId('movieLink').classList.contains('active')).toBe(false)
    expect(screen.getByTestId('musicLink').classList.contains('active')).toBe(true)
})