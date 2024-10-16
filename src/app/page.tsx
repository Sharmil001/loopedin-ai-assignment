"use client";
import { trpc } from "@/lib/client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { UserForm } from "@/components/forms/UserForm";

export default function Home() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isReset, setIsReset] = useState(false);

  // Mutation for adding a user
  const addUser = trpc.user.addUser.useMutation({
    onSuccess: () => {
      setSuccessMessage("User added successfully!");
      setErrorMessage(null);
      setTimeout(() => setSuccessMessage(null), 3000);
      triggerReset();
    },
    onError: (error) => {
      setErrorMessage(`Failed to add user: ${error.message}`);
      setSuccessMessage(null);
      setTimeout(() => setErrorMessage(null), 5000);
    },
  });

  const triggerReset = () => {
    setIsReset(true);
  };

  const handleSubmit = (user: any): void => {
    if (user) {
      addUser.mutate(user);
    }
  };

  return (
    <>
      <nav className="p-2 px-6 text-white bg-blue-950 text-xl font-bold">
        <span className="container">Add User</span>
      </nav>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)]">
        <Card className="min-w-[26rem] p-6">
          {successMessage && (
            <div className="text-green-600 mb-2 font-semibold">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="text-red-600 mb-2 font-semibold">
              {errorMessage}
            </div>
          )}
          <UserForm onSubmit={handleSubmit} isReset={isReset} />
        </Card>
      </div>
    </>
  );
}
