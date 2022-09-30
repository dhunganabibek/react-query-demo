import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function ReactQuery() {
  const { data, isLoading, error } = useQuery("todo-data", () => {});
  return (
    <div>
      <h1>using React Query</h1>
    </div>
  );
}
