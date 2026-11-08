"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useApplyAsDoctor } from "@/hooks";
import { DoctorProfilePayload } from "@/types";
import { getErrorMessage } from "@/utils/getErrorMessage";
import {
  ApplyAsDoctorFormValues,
  ApplyAsDoctorValidationZodSchema,
} from "@/validation";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  File,
  FileImage,
  FileSpreadsheet,
  FileText,
  Loader,
  UploadCloud,
  X,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

export function ApplyDoctorForm() {
  const { mutate: applyDoctor, isPending } = useApplyAsDoctor();
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    resolver: zodResolver(ApplyAsDoctorValidationZodSchema),
    mode: "onTouched",
  });

  const onSummit = (data: ApplyAsDoctorFormValues) => {
    const doctorData: DoctorProfilePayload = {
      user: {
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
      },
      doctor: {
        address: data.address.trim(),
        specialization: data.specialization.trim(),
        licenseNumber: data.licenseNumber.trim(),
        qualifications: data.qualifications.trim(),
        experienceYears: data.experienceYears,
        bio: data.bio.trim(),
        consultationFee: data.consultationFee,
        contactNumber: data.contactNumber.trim(),
      },
    };

    const file = data.resume;
    const additionalFiles = data.additionalFiles || [];

    const params = new URLSearchParams({ email: doctorData.user.email });

    applyDoctor(
      { data: doctorData, file, additionalFiles },
      {
        onSuccess: (data) => {
          toast.success("We have sent an OTP to your email.", {
            description: "Please verify your email to complete the application process.",
          });
          router.replace(`/apply/verify-email?${params.toString()}`);
        },
        onError: (err) => {
          toast.error("Doctor application failed", {
            description: getErrorMessage(err),
          });
        },
      },
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <Card className=" p-0">
        <CardContent className="p-0 grid lg:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit(onSummit)}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Apply as a Doctor</h1>
                <p className="text-balance text-muted-foreground">
                  Fill in your details and upload your documents
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="name">Full name</FieldLabel>
                  <Input
                    id="name"
                    placeholder="Dr. Sarah Jenkins"
                    className="h-11"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </Field>

                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="doctor@example.com"
                    className="h-11"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </Field>

                <Field>
                  <FieldLabel htmlFor="contactNumber">
                    Contact number
                  </FieldLabel>
                  <Input
                    id="contactNumber"
                    placeholder="+8801XXXXXXXXX"
                    className="h-11"
                    {...register("contactNumber")}
                  />
                  {errors.contactNumber && (
                    <p className="text-sm text-red-500">
                      {errors.contactNumber.message}
                    </p>
                  )}
                </Field>

                <Field>
                  <FieldLabel htmlFor="address">Address</FieldLabel>
                  <Input
                    id="address"
                    placeholder="Clinic / chamber address"
                    className="h-11"
                    {...register("address")}
                  />
                  {errors.address && (
                    <p className="text-sm text-red-500">
                      {errors.address.message}
                    </p>
                  )}
                </Field>

                <Field>
                  <FieldLabel htmlFor="specialization">
                    Specialization
                  </FieldLabel>
                  <Input
                    id="specialization"
                    placeholder="Cardiology"
                    className="h-11"
                    {...register("specialization")}
                  />
                  {errors.specialization && (
                    <p className="text-sm text-red-500">
                      {errors.specialization.message}
                    </p>
                  )}
                </Field>

                <Field>
                  <FieldLabel htmlFor="licenseNumber">
                    License number
                  </FieldLabel>
                  <Input
                    id="licenseNumber"
                    placeholder="MED-2026-98765"
                    className="h-11"
                    {...register("licenseNumber")}
                  />
                  {errors.licenseNumber && (
                    <p className="text-sm text-red-500">
                      {errors.licenseNumber.message}
                    </p>
                  )}
                </Field>

                <Field className="md:col-span-2">
                  <FieldLabel htmlFor="qualifications">
                    Qualifications
                  </FieldLabel>
                  <Input
                    id="qualifications"
                    placeholder="MD, FACC - Harvard Medical School"
                    className="h-11"
                    {...register("qualifications")}
                  />
                  {errors.qualifications && (
                    <p className="text-sm text-red-500">
                      {errors.qualifications.message}
                    </p>
                  )}
                </Field>

                <Field>
                  <FieldLabel htmlFor="experienceYears">
                    Years of experience
                  </FieldLabel>
                  <Input
                    id="experienceYears"
                    type="number"
                    min={0}
                    placeholder="12"
                    className="h-11"
                    {...register("experienceYears")}
                  />
                  {errors.experienceYears && (
                    <p className="text-sm text-red-500">
                      {errors.experienceYears.message}
                    </p>
                  )}
                </Field>

                <Field>
                  <FieldLabel htmlFor="consultationFee">
                    Consultation fee
                  </FieldLabel>
                  <Input
                    id="consultationFee"
                    type="number"
                    min={0}
                    placeholder="150"
                    className="h-11"
                    {...register("consultationFee")}
                  />
                  {errors.consultationFee && (
                    <p className="text-sm text-red-500">
                      {errors.consultationFee.message}
                    </p>
                  )}
                </Field>

                <Field className="md:col-span-2">
                  <FieldLabel htmlFor="bio">Bio</FieldLabel>
                  <Textarea
                    id="bio"
                    rows={4}
                    placeholder="Tell patients about your experience and expertise..."
                    className="resize-none"
                    {...register("bio")}
                  />
                  {errors.bio && (
                    <p className="text-sm text-red-500">{errors.bio.message}</p>
                  )}
                </Field>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 col-span-1 md:col-span-2">
                  <Field className="w-full">
                    <FieldLabel htmlFor="resume">Resume</FieldLabel>
                    <Controller
                      name="resume"
                      control={control}
                      render={({
                        field: {
                          value,
                          onChange,
                          ...ApplyAsDoctorValidationZodSchema
                        },
                      }) => {
                        // Get file name to display inside the custom button state
                        const fileName = value ? (value as File).name : null;

                        return (
                          <div className="flex flex-col gap-1.5">
                            {/* Label automatically transfers click behavior directly to the hidden input field */}
                            <label
                              htmlFor="resume"
                              className="w-full cursor-pointer"
                            >
                              <div className="flex h-11 items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                                <UploadCloud className="h-4 w-4 text-muted-foreground" />
                                <span className="truncate max-w-xs">
                                  {fileName ? (
                                    <>
                                      <FileSpreadsheet
                                        size={20}
                                        className="text-blue-400 mr-2 inline"
                                      />
                                      {fileName}
                                    </>
                                  ) : (
                                    "Choose Resume PDF"
                                  )}
                                </span>
                              </div>
                            </label>

                            {/* Hidden Input field integrated with hook-form */}
                            <input
                              id="resume"
                              type="file"
                              accept="application/pdf"
                              className="sr-only" // Completely hides the browser's ugly native layout
                              {...ApplyAsDoctorValidationZodSchema}
                              onChange={(e) => {
                                const files = e.target.files;
                                onChange(
                                  files && files.length > 0 ? files[0] : null,
                                );
                              }}
                            />
                          </div>
                        );
                      }}
                    />
                    {errors.resume && (
                      <p className="text-sm text-red-500">
                        {errors.resume.message}
                      </p>
                    )}
                    <FieldDescription>PDF only, max 5MB.</FieldDescription>
                  </Field>

                  <Field className="w-full flex flex-col gap-2">
                    <FieldLabel htmlFor="additionalFiles">
                      Additional documents
                    </FieldLabel>
                    <Controller
                      name="additionalFiles"
                      control={control}
                      render={({
                        field: {
                          value,
                          onChange,
                          ...ApplyAsDoctorValidationZodSchema
                        },
                      }) => {
                        // Safely check if value is an array of files
                        const filesArray = Array.isArray(value)
                          ? (value as File[])
                          : [];
                        const hasFiles = filesArray.length > 0;

                        // Function to handle single file removal by index position
                        const handleRemoveFile = (indexToRemove: number) => {
                          const updatedFiles = filesArray.filter(
                            (_, index) => index !== indexToRemove,
                          );
                          // If no files are left, set the form state to null, otherwise pass the updated array
                          onChange(
                            updatedFiles.length > 0 ? updatedFiles : null,
                          );
                        };

                        return (
                          <div className="flex flex-col gap-2">
                            {/* Custom Button Trigger */}
                            <label
                              htmlFor="additionalFiles"
                              className="w-full cursor-pointer"
                            >
                              <div className="flex h-11 items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                                <UploadCloud className="h-4 w-4 text-muted-foreground" />
                                <span>
                                  {hasFiles
                                    ? `${filesArray.length} file${filesArray.length > 1 ? "s" : ""} selected`
                                    : "Choose Documents"}
                                </span>
                              </div>
                            </label>

                            {/* Visually Hidden Native Input */}
                            <input
                              id="additionalFiles"
                              type="file"
                              multiple
                              accept=".pdf,.jpg,.jpeg,.png"
                              className="sr-only"
                              {...ApplyAsDoctorValidationZodSchema}
                              onChange={(e) => {
                                const files = e.target.files;
                                if (files && files.length > 0) {
                                  const newFiles = Array.from(files);

                                  // Filter out any existing files that match the name and size of newly selected files
                                  const filteredExistingFiles =
                                    filesArray.filter(
                                      (existingFile) =>
                                        !newFiles.some(
                                          (newFile) =>
                                            newFile.name ===
                                              existingFile.name &&
                                            newFile.size === existingFile.size,
                                        ),
                                    );

                                  const mergedFiles = [
                                    ...filteredExistingFiles,
                                    ...newFiles,
                                  ];

                                  if (mergedFiles.length > 5) {
                                    toast.warning(
                                      "You can only upload a maximum of 5 files.",
                                    );

                                    const allowedFiles = mergedFiles.slice(
                                      0,
                                      5,
                                    );
                                    onChange(allowedFiles);
                                  } else {
                                    onChange(mergedFiles);
                                  }
                                }
                                // Reset input target value so the same file can be uploaded again if deleted
                                e.target.value = "";
                              }}
                            />

                            {/* Dynamic File List Badges with left-side cross action buttons */}
                            {hasFiles && (
                              <div className="flex flex-wrap gap-1.5 pt-1">
                                {filesArray.map((file, index) => {
                                  const isImage =
                                    file.type.startsWith("image/");
                                  const isPdf = file.type === "application/pdf";
                                  const isSpreadsheet =
                                    file.type.includes("spreadsheet") ||
                                    file.type.includes("csv") ||
                                    file.type.includes("excel");

                                  return (
                                    <div
                                      key={`${file.name}-${index}`}
                                      className="flex w-full justify-between items-center gap-2 rounded-md bg-muted pl-1.5 pr-2.5 py-1 text-xs font-medium text-muted-foreground border truncate max-w-60"
                                    >
                                      <span className="truncate flex items-center gap-1">
                                        {isImage ? (
                                          <FileImage
                                            size={20}
                                            className="text-green-500"
                                          />
                                        ) : isPdf ? (
                                          <FileText
                                            size={20}
                                            className="text-red-500"
                                          />
                                        ) : isSpreadsheet ? (
                                          <FileSpreadsheet
                                            size={20}
                                            className="text-blue-500"
                                          />
                                        ) : (
                                          <File
                                            size={20}
                                            className="text-gray-400"
                                          />
                                        )}

                                        <span className="truncate">
                                          {file.name}
                                        </span>
                                      </span>

                                      <Button
                                        type="button"
                                        variant="destructive"
                                        onClick={() => handleRemoveFile(index)}
                                        className="flex h-4 w-4 items-center justify-center text-red-700"
                                      >
                                        <X className="h-3 w-3" />
                                      </Button>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      }}
                    />

                    {errors.additionalFiles && (
                      <p className="text-sm text-red-500">
                        {errors.additionalFiles.message as string}
                      </p>
                    )}
                    <FieldDescription>
                      Certificates, license copy, etc. Max 5 files, 5MB each.
                    </FieldDescription>
                  </Field>
                </div>
              </div>

              <Field>
                <Button type="submit" className="h-11">
                  {isPending ? <Loader /> : "Submit Application"}
                </Button>
              </Field>
            </FieldGroup>
          </form>

          <div className="relative hidden bg-muted lg:block">
            <Image
              src="/register.jpg"
              alt="Image"
              fill
              loading="eager"
              sizes="(min-width: 768px) 50vw, 0px"
              className="object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
