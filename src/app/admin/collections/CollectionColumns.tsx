"use client";

import Delete from "@/components/admin/collections/Delete";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<CollectionType>[] = [
  {
    accessorKey: "title",
    header: "Collections",
    cell: ({ row }) => (
      <Link
        href={`/admin/collections/${row.original._id}`}
        className='hover:text-blue-500'
      >
        {row.original.title}
      </Link>
    ),
  },
  {
    accessorKey: "products",
    header: "Products",
    cell: ({ row }) => <p>{row.original.products.length}</p>,
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => <Delete id={row.original._id} />,
  },
];
