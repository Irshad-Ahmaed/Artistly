"use client";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CATEGORIES } from "@/lib/constants";
import { MultiSelectDropdown } from "@/components/forms/MultiSelectDropdown";
import { toast } from "sonner";
import { useState } from "react";
import { FileUpload } from "@/components/forms/FileUpload";
import { Loader2Icon } from "lucide-react";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().min(1, "Select at least one category").required(),
  languages: yup.array().min(1, "Select at least one language").required(),
  fee: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
  image: yup.mixed<File>().nullable().default(null)
});

import { InferType } from "yup"
type FormValues = InferType<typeof schema>


const OnboardPage = () => {
  const [loading, setLoading] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      category: [],
      languages: [],
      fee: "",
      location: "",
      image: null,
    },
  });

  const onSubmit = (data: FormValues) => {
    setLoading(true);
    try {
      setTimeout(()=> {
        console.log("Form Data", data);
        toast("Your form is submitted!");
        setLoading(false);
        reset();
      }, 500);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Artist Onboarding</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 shadow-md p-2 border rounded-md"
      >
        <div>
          <Input placeholder="Name" {...register("name" as const)} />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Input placeholder="Bio" {...register("bio" as const)} />
          {errors.bio && (
            <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>
          )}
        </div>

        <div>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <>
                <MultiSelectDropdown
                  label="Select Category"
                  options={CATEGORIES}
                  value={field.value}
                  onChange={field.onChange}
                />
                {errors.category && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.category.message}
                  </p>
                )}
              </>
            )}
          />
        </div>

        <div>
          <Controller
            name="languages"
            control={control}
            render={({ field }) => (
              <>
                <MultiSelectDropdown
                  label="Languages Spoken"
                  options={["English", "Hindi", "Tamil", "Punjabi"]}
                  value={field.value}
                  onChange={field.onChange}
                />
                {errors.languages && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.languages.message}
                  </p>
                )}
              </>
            )}
          />
        </div>

        <div>
          <select
            {...register("fee" as const)}
            className="w-full border p-2 rounded-md"
          >
            <option value="">Select Fee Range</option>
            <option value="5000-10000">₹5,000 - ₹10,000</option>
            <option value="10000-25000">₹10,000 - ₹25,000</option>
            <option value="25000+">₹25,000+</option>
          </select>
          {errors.fee && (
            <p className="text-red-500 text-sm mt-1">{errors.fee.message}</p>
          )}
        </div>

        <div>
          <Input placeholder="Location" {...register("location" as const)} />
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">
              {errors.location.message}
            </p>
          )}
        </div>

        <div>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <FileUpload onChange={field.onChange} value={field.value} />
            )}
          />
        </div>

        <Button className="w-full" type="submit">
          {loading ? (
            <span className="flex gap-2 items-center">
              <Loader2Icon className="size-4 animate-spin" /> submitting
            </span>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </div>
  );
};

export default OnboardPage;
