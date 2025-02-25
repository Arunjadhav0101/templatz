"use client";

import formFields from "@/lib/letter/formFields";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FieldValues, useForm } from "react-hook-form";
import { generateLetter } from "@/lib/client/generateLetter";
import { useState, useTransition } from "react";

function LetterForm() {
  const { register, handleSubmit } = useForm<FieldValues>();
  const [error, setError] = useState("");
  const [isSubmitting, startLoading] = useTransition();
  const onSubmit = async (data: FieldValues) => {
    startLoading(async () => {
      try {
        const result = await generateLetter(data);
        console.log(result);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          console.log(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[400px] md:max-w-[650px] mx-auto py-8 p-4"
    >
      <div className="grid gap-8">
        {formFields.map((value: any) => (
          <Card key={value.title}>
            <CardHeader>
              <CardTitle className="text-2xl">{value.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {value.fields.map((field: any) => {
                return (
                  <div key={field.name}>
                    <label htmlFor={field.name}> {field.label}:</label>
                    <Input
                      {...register(field.name)}
                      className="mt-1"
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      id={field.name}
                      defaultValue={""}
                      required={field.isRequired}
                    />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        ))}
        {error && <p>{error}</p>}
        <Button
          className="mx-auto w-[200px] p-5"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Generating..." : "Generate"}
        </Button>
      </div>
    </form>
  );
}

export default LetterForm;
