import { useQuery } from "@tanstack/react-query";
//import { useEffect, useState } from "react";
const useBooks = () => {
    const { data: books = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
          const res = await fetch('http://localhost:3000/books');
          return res.json();
        }
      });
      return [books, loading, refetch];
  }
  
export default useBooks;