import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("test on <GifGrid />", () => {
    const category = "Goku";

    test("should show loading on component",  () => {
        useFetchGifs.mockReturnValue({
            isLoading: true,
            images: []
        })

        render(<GifGrid category={category} />);

        expect(screen.getByText("Cargando..."));
        expect(screen.getByText(category));
    })

    test("should return some images",  () => {
        useFetchGifs.mockReturnValue({
            isLoading: false,
            images: [
                {
                    id: "123",
                    title: "test",
                    url: "url1"
                },
                {
                    id: "456",
                    title: "test two",
                    url: "url2"
                }
            ]
        })

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole("img").length).toBe(2);
    })
});