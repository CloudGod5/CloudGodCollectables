"use client";

import { DataTable } from "@/components/admin/DataTable";
import React, { useEffect, useState } from "react";
import { columns } from "./CollectionColumns";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Collections = () => {
  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState([]);

  const getCollections = async () => {
    try {
      const res = await fetch("/api/collections", {
        method: "GET",
      });
      const data = await res.json();
      setCollections(data);
      setLoading(false);
    } catch (err) {
      console.log("[Collections_GetCollections]", err);
    }
  };

  useEffect(() => {
    getCollections();
  }, []);

  return (
    <div className='px-10 py-5'>
      <div className='flex items-center justify-between'>
        <p className='text-heading2-bold'>Collections</p>
        <Button asChild>
          <Link href='/admin/collections/create'>
            <Plus className='h-4 w-4 mr-2' />
            Create Collection
          </Link>
        </Button>
      </div>
      <Separator className='my-4 bg-grey-1' />
      <DataTable columns={columns} data={collections} searchKey='title' />
    </div>
  );
};

export default Collections;
