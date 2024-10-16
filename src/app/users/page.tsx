"use client";
import { trpc } from "@/lib/client";
import React, { useEffect, useState } from "react";
import DynamicTable from "@/components/tables/DynamicTable";

interface User {
  name: string | null;
  age: number | null;
  gender: string | null;
  id: number;
}

// UserGrid Columns
const columns = [
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
  { key: "gender", label: "Gender" },
];

const Page = () => {
  const [usersList, setUsersList] = useState<User[]>([]);
  const { data, error, isLoading } = trpc.user.getUsers.useQuery();

  useEffect(() => {
    if (data) {
      setUsersList(data);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-00">
        Error fetching data: {error.message}
      </div>
    );
  }

  return (
    <>
      <nav className="p-2 px-6 text-white bg-blue-950 text-xl font-bold">
        <span className="container">Users Details</span>
      </nav>
      <div className="flex flex-col items-center justify-center">
        <DynamicTable columns={columns} rowData={usersList || []} />
      </div>
    </>
  );
};

export default Page;
