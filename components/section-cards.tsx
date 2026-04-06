"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendUpIcon, TrendDownIcon } from "@phosphor-icons/react";

import type { DashboardStatistic, DashboardStatItem } from "@/lib/types";
import { Currency } from "@/lib/currency";

export function SectionCards({ data }: { data: DashboardStatistic | null }) {
  const listCards = [
    {
      key: "income",
      symbol: "currency",
    },
    {
      key: "balance",
      symbol: "currency",
    },
    {
      key: "expenses",
      symbol: "currency",
    },
    {
      key: "totalUser",
      symbol: "counter",
    },
    {
      key: "totalTransactionRecorded",
      symbol: "counter",
    },
    {
      key: "totalPocketCreatedRecorded",
      symbol: "counter",
    },
    {
      key: "totalActiveCategories",
      symbol: "counter",
    },
    {
      key: "totalSplitBillCreated",
      symbol: "counter",
    },
  ];

  function extractValue(key: string): DashboardStatItem {
    const result = (data as any)[key] as DashboardStatItem | undefined | null;
    if (!result) {
      return {
        value: 0,
        percentage: 0,
        isUp: false,
      };
    }
    return result;
  }

  function showValue(value: number, symbol: string) {
    if (symbol === "currency") {
      return Currency.formatCurrencyByCode(value, "IDR", true, undefined, true);
    }
    return value;
  }

  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      {listCards.map((card) => (
        <Card key={card.key} className="@container/card">
          <CardHeader>
            <CardDescription>{card.key}</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {showValue(extractValue(card.key).value ?? 0, card.symbol)}
            </CardTitle>
            <CardAction>
              <Badge
                variant="outline"
                className={
                  extractValue(card.key).isUp
                    ? "bg-sky-50 text-green-700 dark:bg-green-950 dark:text-green-300"
                    : "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300"
                }
              >
                {extractValue(card.key).isUp ? (
                  <TrendUpIcon />
                ) : (
                  <TrendDownIcon />
                )}{" "}
                +{extractValue(card.key).percentage ?? 0}%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              {extractValue(card.key).isUp
                ? "Trending up this month"
                : "Trending down this month"}
              <TrendUpIcon className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
