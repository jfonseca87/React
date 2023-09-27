import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components";

describe("test on <AddCategory />", () => {

    const value = "Saitama";

    test("should change the textbox value",  () => {
        render(<AddCategory setCategory={() => {}} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: {value: value} })

        expect(input.value).toBe(value);
    })

    test("should trigger submit action if textbox has value",  () => {
        const setCategory = jest.fn();

        render(<AddCategory setCategory={setCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, { target: { value: value }});
        fireEvent.submit(form);

        expect(input.value).toBe("");
        expect(setCategory).toHaveBeenCalledTimes(1);
        expect(setCategory).toHaveBeenCalledWith(value);
    })

    test("should not trigger submit action when textbox has not value",  () => {
        const setCategory = jest.fn();

        render(<AddCategory setCategory={setCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, { target: { value: "a" }});
        fireEvent.submit(form);

        expect(setCategory).not.toHaveBeenCalled();
    })
});