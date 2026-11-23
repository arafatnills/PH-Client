import DoctorApprovalTabs from "@/components/modules/doctor-approval/doctor.approval.tabs";

const ApproveDoctorPage = () => {
  return (
    <div className="container mx-auto mb-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p>Place review and make sure the given data is real.</p>
      </div>
      <DoctorApprovalTabs />
    </div>
  );
};

export default ApproveDoctorPage;
