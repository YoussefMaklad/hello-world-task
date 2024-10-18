import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App.jsx";
import fetchMock from "jest-fetch-mock";

beforeEach(() => {
  fetchMock.resetMocks();
});

test("renders button with correct text", () => {
  render(<App />);
  const buttonElement = screen.getByText(/Click To View Hello Message!/i);
  expect(buttonElement).toBeInTheDocument();
});

test("modal opens when first button is clicked", async () => {
  render(<App />);
  const buttonElement = screen.getAllByText(/Click To View Hello Message!/i)[0];
  fireEvent.click(buttonElement);

  // Wait for the modal to open
  const dialogElement = await screen.findByRole("dialog");
  expect(dialogElement).toBeInTheDocument();
});

test("fetches and displays message when modal opens", async () => {
  fetchMock.mockResponseOnce(JSON.stringify({ message: "Hello World" })); // Mock the response

  render(<App />);

  const buttonElement = screen.getByText(/Click To View Hello Message!/i);
  fireEvent.click(buttonElement); // Simulate clicking the button

  // Assert that the modal is open
  const dialogElement = await screen.findByRole("dialog");
  expect(dialogElement).toBeInTheDocument(); // Check if the modal is visible

  // Wait for the message to be displayed
  const messageElement = await waitFor(
    () => screen.getByText(/Hello World/i) // Match with the expected text
  );
  expect(messageElement).toBeInTheDocument();
});
