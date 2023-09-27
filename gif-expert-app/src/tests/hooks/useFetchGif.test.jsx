import { renderHook, waitFor, act } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { getGifsFromAPI } from "../../services/GifService";

jest.mock("../../services/GifService");

describe("test on useFetchGifs", () => {
  test("should return the init state", () => {
    getGifsFromAPI.mockResolvedValue([]);
    const { result } = renderHook(() => useFetchGifs("Goku"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("should return images from the API", async () => {
    getGifsFromAPI.mockReturnValue([
      {
        id: "123",
        title: "test",
        url: "url1",
      },
      {
        id: "456",
        title: "test two",
        url: "url2",
      },
    ]);
    const { result } = renderHook(() => useFetchGifs("Goku"));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;

    expect(images.length).toBe(2);
    expect(isLoading).toBeFalsy();
  });
});
