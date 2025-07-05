"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { jobs } from "@/data/jobs";
import { redirect, useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { auth } from "@/firebase/client";
import { toast } from "sonner";

const JobDetails = () => {
  const params = useParams();
  const id = params?.id as string;

  const [showKeyPrompt, setShowKeyPrompt] = useState(false);
  const [secretKey, setSecretKey] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!id) {
      redirect("/jobs");
    }
  }, []);

  const jobId = Number(id);

  const job = jobs.find((job) => job.id === jobId);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <p className="mb-6">
            The job you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/jobs">
            <Button>Back to Jobs</Button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      sample job details page
    </div>
  )
}

export default JobDetails
