import { useState, useEffect, useCallback } from "react";
import { apiClient } from "@/lib/api-client";
import { gooeyToast } from "@/components/ui/goey-toaster";
import { GetUsersParams, DashboardStatistic } from "@/lib/types";

export function useDashboard() {
  const [stats, setStats] = useState<DashboardStatistic>({
    income: { percentage: 0, isUp: false, value: 0 },
    balance: { percentage: 0, isUp: false, value: 0 },
    expense: { percentage: 0, isUp: false, value: 0 },
    totalUser: { percentage: 0, isUp: false, value: 0 },
    totalTransactionRecorded: { percentage: 0, isUp: false, value: 0 },
    totalPocketCreatedRecorded: { percentage: 0, isUp: false, value: 0 },
    totalActiveCategories: { percentage: 0, isUp: false, value: 0 },
    totalSplitBillCreated: { percentage: 0, isUp: false, value: 0 },
    latestUsers: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    try {
      const response = await apiClient.get<DashboardStatistic>(
        "/rest/admin/dashboard/getDashboardStatistic",
      );

      if (response.data) {
        const data = response.data;
        setStats(data);
      } else {
        gooeyToast.error(response.meta?.message || "Failed to fetch users");
      }
    } catch (err) {
      gooeyToast.error("An error occurred while fetching users");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return {
    stats,
    loading,
    fetchStats,
  };
}
