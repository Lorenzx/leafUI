import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./input";

describe("Input component test", () => {
  test("should update input value on change", () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByTestId("input") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "New value" } });

    expect(input.value).toBe("New value");
  });
});
