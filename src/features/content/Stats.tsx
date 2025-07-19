"use client";

import { Collapsible, Flex, Text } from "@/components";
import { DataTable } from "@/components/ui/DataTable";
import { useGetAnalytics } from "@/hooks/useGetAnalytics";
import { ClickDataColumns, ViewDataColumns } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { Loader2Icon } from "lucide-react";
import { useMemo } from "react";

export const viewsColumns: ColumnDef<ViewDataColumns>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "count",
    header: "Count",
  },
];

export const clicksColumns: ColumnDef<ClickDataColumns>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "uniqueCount",
    header: "Unique",
  },
  {
    accessorKey: "totalCount",
    header: "Total",
  },
];

const Stats = () => {
  const { analyticsSummary, loading } = useGetAnalytics();
  const viewData: ViewDataColumns[] = useMemo(
    () => [
      {
        name: "Total Site Views",
        count: loading ? "..." : analyticsSummary.totalViews,
      },
      {
        name: "Unique Site Views",
        count: loading ? "..." : analyticsSummary.uniqueViews,
      },
    ],
    [analyticsSummary, loading]
  );

  const clickData: ClickDataColumns[] = useMemo(() => {
    return Object.keys(analyticsSummary?.itemClicksSummary || {}).map(
      (item) => ({
        name: item,
        ...analyticsSummary.itemClicksSummary[item],
        ...(loading && { uniqueCount: "...", totalCount: "..." }),
      })
    );
  }, [analyticsSummary, loading]);

  return (
    <Flex direction="col" className="w-full flex-1">
      <Collapsible
        defaultExpanded
        className="w-full my-2"
        headerContent={
          <Flex items="center" className="p-4 flex-1">
            <Text size="h3" className="font-bold">
              Views
            </Text>
          </Flex>
        }
        hiddenContent={
          <Flex
            direction="col"
            justify="center"
            items="center"
            className="w-full"
          >
            {loading ? (
              <Loader2Icon className="animate-spin mb-4" />
            ) : (
              <DataTable columns={viewsColumns} data={viewData} />
            )}
          </Flex>
        }
      />
      <Collapsible
        defaultExpanded
        className="w-full my-2"
        headerContent={
          <Flex items="center" className="p-4 flex-1">
            <Text size="h3" className="font-bold">
              Clicks
            </Text>
          </Flex>
        }
        hiddenContent={
          <Flex
            direction="col"
            justify="center"
            items="center"
            className="w-full"
          >
            {loading ? (
              <Loader2Icon className="animate-spin mb-4" />
            ) : (
              <DataTable columns={clicksColumns} data={clickData} />
            )}
          </Flex>
        }
      />
    </Flex>
  );
};

export default Stats;
