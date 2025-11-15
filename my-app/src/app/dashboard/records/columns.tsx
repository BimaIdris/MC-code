"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export type RecordColumn = {
  id: number;
  name: string;
  gender: "male" | "female";
  dob: string;
  phone: string;
  email: string;
  firsconsultdate: string;
  leadsurgeon: string;
  prodecure: string;
  sugerydate: string;
  assistingNurse: string;
  duration: string;
  anasthesiaType: string;
  preopdiagnosis: "yes" | "no";
  postopdiagnosis: "yes" | "no";
  totalcost: number;
  deposit: number;
  balance: number;
  paidinfull: "yes" | "no";
  followupdate: string;
  beforeafterphotos: "yes" | "no";
};
export const columns: ColumnDef<RecordColumn>[] = [
  {
    accessorKey: "name",
    header: "Full Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "prodecure",
    header: "Prodecure",
  },

  {
    accessorKey: "sugerydate",
    header: "Surgery Date",
  },
  {
    accessorKey: "paidinfull",
    header: "Paid in Full",
    cell: ({ row }) => (
      <span>{row.original.paidinfull === "yes" ? "✅" : "❌"}</span>
    ),
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(String(payment.id))}
            >
              Edit Record
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Record Detail</DropdownMenuItem>
            <DropdownMenuItem>Delete Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
