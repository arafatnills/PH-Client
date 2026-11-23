import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function DoctorApprovalTableLoading() {
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
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <Skeleton className="h-5 w-32.5" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-45" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-25" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-27.5" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-31.25" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-18.75" />
              </TableCell>
              <TableCell className="text-right">
                <Skeleton className="ml-auto h-8 w-8 rounded-md" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
