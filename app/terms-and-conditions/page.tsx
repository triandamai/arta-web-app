import React from "react";
import { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms and Conditions - Arta",
  description: "Terms and Conditions and Privacy Policy for Arta app.",
};

export default function Page() {
  return <TermsContent />;
}
