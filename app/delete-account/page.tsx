import React from "react";
import { Metadata } from "next";
import DeleteAccountContent from "./DeleteAccountContent";

export const metadata: Metadata = {
  title: "Delete Account - Arta",
  description: "Instructions on how to delete your Arta account.",
};

export default function Page() {
  return <DeleteAccountContent />;
}
