import React from "react";
import { Metadata } from "next";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy - Arta",
  description: "Privacy Policy for Arta application.",
};

export default function Page() {
  return <PrivacyPolicyContent />;
}
