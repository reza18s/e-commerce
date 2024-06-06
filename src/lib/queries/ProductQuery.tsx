import { useQuery } from "@tanstack/react-query";
import { getProductAPI } from "../query";

export function GetProducts() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductAPI,
  });

  return { isLoading, error, data };
}
