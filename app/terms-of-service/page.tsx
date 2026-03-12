import React from "react";
import { Metadata } from "next";
import TermsOfServiceContent from "./terms-of-service-content";

export const metadata: Metadata = {
  title: "Terms of Service - Arta",
  description: "Terms of Service for Arta application.",
};

export default function Page() {
  return <TermsOfServiceContent />;
}
