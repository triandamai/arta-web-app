"use client";

import { gooeyToast } from "@/components/ui/goey-toaster";
import { Button } from "@/components/ui/button";

export function ContentDashboard() {
  return (
    <Button
      onClick={() => {
        gooeyToast.error("sss");
      }}
    >
      Hehe
    </Button>
  );
}
