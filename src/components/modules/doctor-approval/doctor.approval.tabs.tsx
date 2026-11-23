"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Suspense } from "react";
import DoctorApprovalTable from "./doctor.approval.table";
import DoctorApprovalTableLoading from "./doctor.approval.table.loading";

const DoctorApprovalTabs = () => {
  return (
    <div>
      <Tabs defaultValue="all">
        <TabsList variant="line">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>
        <TabsContent value="pending">
          {/* <DoctorApprovalTable /> */}
        </TabsContent>
        <TabsContent value="approved">
          {/* <DoctorApprovalTable /> */}
        </TabsContent>
        <TabsContent value="rejected">
          {/* <DoctorApprovalTable /> */}
        </TabsContent>
        <TabsContent value="all">
          <Suspense fallback={<DoctorApprovalTableLoading />}>
            <DoctorApprovalTable />
          </Suspense>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DoctorApprovalTabs;
