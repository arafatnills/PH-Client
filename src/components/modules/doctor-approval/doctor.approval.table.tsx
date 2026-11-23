import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSuspenseGetAllDoctors } from "@/hooks";

import DoctorApprovalSheet from "./doctor.approval.sheet";

const DoctorApprovalTable = () => {
  const { data } = useSuspenseGetAllDoctors();
  const doctors = data?.data || [];

  return (
    <div className="w-full">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-40">Name</TableHead>
            <TableHead className="w-55">Email</TableHead>
            <TableHead className="w-35">License No.</TableHead>
            <TableHead className="w-37.5">Contact No.</TableHead>
            <TableHead className="w-40">Specialization</TableHead>
            <TableHead className="w-27.5">Experience</TableHead>
            <TableHead className="w-20 text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {doctors.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={7}
                className="h-32 text-center text-muted-foreground"
              >
                No doctors found for approval.
              </TableCell>
            </TableRow>
          ) : (
            doctors.map((doctor) => (
              <TableRow key={doctor.id}>
                <TableCell className="font-medium truncate max-w-40">
                  {doctor.name}
                </TableCell>
                <TableCell className="truncate max-w-55">
                  {doctor.email}
                </TableCell>
                <TableCell>{doctor.licenseNumber}</TableCell>
                <TableCell>
                  {doctor.contactNumber ? doctor.contactNumber : "-"}
                </TableCell>
                <TableCell className="truncate max-w-40">
                  {doctor.specialization}
                </TableCell>
                <TableCell>{doctor.experienceYears} years</TableCell>
                <TableCell className="text-right">
                  <DoctorApprovalSheet />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DoctorApprovalTable;
