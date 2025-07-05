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
    const handleStartInterview = () => {
    const user = auth.currentUser;
    if (!user || !user.emailVerified) {
      router.push("/login");
    } else {
      setShowKeyPrompt(true);
      setSecretKey("");
    }
  };

  const handleKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(secretKey);
    if (secretKey === process.env.NEXT_PUBLIC_SECRET_KEY) {
      setShowKeyPrompt(false);
      router.push(`/interview/${job.id}`);
    } else {
      toast.error("Invalid secret key.");
    }
  };

  return (
    <div>
      sample job details page
    </div>
  )
}

export default JobDetails
