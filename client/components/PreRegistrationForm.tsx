import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { preRegistrationSchema, type PreRegistrationFormData } from "@shared/validation";
import Swal from "sweetalert2";
import { useState } from "react";

export function PreRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtherInput, setShowOtherInput] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<PreRegistrationFormData>({
    resolver: zodResolver(preRegistrationSchema),
  });

  const livingSituationValue = watch("livingSituation");

  const onSubmit = async (data: PreRegistrationFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        await Swal.fire({
          icon: "success",
          title: "Success!",
          text: result.message,
          confirmButtonColor: "#10b981",
        });
        reset();
        setShowOtherInput(false);
      } else {
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result.error || result.message,
          confirmButtonColor: "#ef4444",
        });
      }
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Failed to submit form. Please check your connection and try again.",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="fullName" className="block text-xs font-medium text-[#171A1F] mb-2 uppercase">
          Full Name *
        </label>
        <input
          id="fullName"
          type="text"
          {...register("fullName")}
          className="w-full px-3 py-4 border border-[#DEE1E6] text-sm text-[#565D6D] placeholder:text-[#565D6D] focus:outline-none focus:ring-2 focus:ring-[#0072D5]"
          placeholder="John Doe"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phoneNumber" className="block text-xs font-medium text-[#171A1F] mb-2 uppercase">
          Phone Number *
        </label>
        <input
          id="phoneNumber"
          type="tel"
          {...register("phoneNumber")}
          className="w-full px-3 py-4 border border-[#DEE1E6] text-sm text-[#565D6D] placeholder:text-[#565D6D] focus:outline-none focus:ring-2 focus:ring-[#0072D5]"
          placeholder="(123) 456-7890"
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="livingSituation" className="block text-xs font-medium text-[#171A1F] mb-2 uppercase">
          Living Situation *
        </label>
        <select
          id="livingSituation"
          {...register("livingSituation")}
          onChange={(e) => {
            const value = e.target.value;
            setShowOtherInput(value === "Other");
            if (value !== "Other") {
              setValue("livingSituation", value);
            } else {
              setValue("livingSituation", "");
            }
          }}
          className="w-full px-3 py-4 border border-[#DEE1E6] text-sm text-[#171A1F] bg-white focus:outline-none focus:ring-2 focus:ring-[#0072D5] appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjU0NjMgNS41MTYzMUMxMS44MDc5IDUuMjU0NjUgMTIuMjMyMSA1LjI1NDY1IDEyLjQ5MzcgNS41MTYzMUMxMi43NTU0IDUuNzc3OTYgMTIuNzU1NCA2LjIwMjA3IDEyLjQ5MzcgNi40NjM3M0w4LjQ3MzY5IDEwLjQ4MzdDOC4yMTIwNiAxMC43NDU0IDcuNzg3OTUgMTAuNzQ1NCA3LjUyNjMxIDEwLjQ4MzdMMy41MDYzIDYuNDYzNzNMMy40NjA1IDYuNDEyN0MzLjI0NTg2IDYuMTQ5NTMgMy4yNjEgNS43NjE2IDMuNTA2MyA1LjUxNjMxQzMuNzUxNTkgNS4yNzEwMSA0LjEzOTUzIDUuMjU1ODcgNC40MDI2OCA1LjQ3MDUxTDQuNDUzNzIgNS41MTYzMUw4IDkuMDYyNjFMMTEuNTQ2MyA1LjUxNjMxWiIgZmlsbD0iIzE3MUExRiIvPgo8L3N2Zz4K')] bg-[length:16px_16px] bg-[right_12px_center] bg-no-repeat pr-10"
        >
          <option value="">Select your living situation</option>
          <option value="Homeless">Homeless</option>
          <option value="Sheltered">Sheltered</option>
          <option value="Homed">Homed</option>
          <option value="Other">Other</option>
        </select>
        {errors.livingSituation && !showOtherInput && (
          <p className="text-red-500 text-sm mt-1">{errors.livingSituation.message}</p>
        )}
      </div>

      {showOtherInput && (
        <div>
          <label htmlFor="livingSituationOther" className="block text-xs font-medium text-[#171A1F] mb-2 uppercase">
            Please Specify *
          </label>
          <input
            id="livingSituationOther"
            type="text"
            {...register("livingSituation")}
            className="w-full px-3 py-4 border border-[#DEE1E6] text-sm text-[#565D6D] placeholder:text-[#565D6D] focus:outline-none focus:ring-2 focus:ring-[#0072D5]"
            placeholder="Please describe your living situation..."
          />
          {errors.livingSituation && (
            <p className="text-red-500 text-sm mt-1">{errors.livingSituation.message}</p>
          )}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 md:py-4 bg-[#0072D5] text-white text-lg md:text-xl font-medium hover:bg-[#005CAD] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Join the Queue"}
      </button>
    </form>
  );
}
