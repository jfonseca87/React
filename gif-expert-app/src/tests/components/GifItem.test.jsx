import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe("test on <GifItem />", () => {
    const title = "Goku";
    const url = "https://algo/goku.jpg"

    test("should made match with the snapshot",  () => {
        const {container} = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    })

    test("should image has source and alt properties", () => {
        render(<GifItem title={title} url={url} />);

        const { src, alt } = screen.getByRole("img");
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    })

    test("should has title", () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});