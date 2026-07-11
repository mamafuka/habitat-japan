"use client";

import { useState, type FormEvent } from "react";
import {
  contactContent,
  monthlyBudgetOptions,
  moveTimelineOptions,
  preferredAreaOptions,
  relocationPurposeOptions,
  visaStatusOptions,
} from "@/components/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import {
  FieldError,
  FieldLabel,
  FormSection,
  inputClass,
  RadioGroup,
  TagSelect,
} from "@/components/ui/FormField";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  nationality: string;
  currentCountry: string;
  moveTimeline: string;
  purpose: string;
  visaStatus: string;
  preferredAreas: string[];
  preferredAreaOther: string;
  monthlyBudget: string;
  additionalNotes: string;
  privacyConsent: boolean;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  nationality: "",
  currentCountry: "",
  moveTimeline: "",
  purpose: "",
  visaStatus: "",
  preferredAreas: [],
  preferredAreaOther: "",
  monthlyBudget: "",
  additionalNotes: "",
  privacyConsent: false,
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.firstName.trim()) errors.firstName = "Required.";
  if (!data.lastName.trim()) errors.lastName = "Required.";
  if (!data.email.trim()) {
    errors.email = "Required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email.";
  }
  if (!data.nationality.trim()) errors.nationality = "Required.";
  if (!data.currentCountry.trim()) errors.currentCountry = "Required.";
  if (!data.moveTimeline) errors.moveTimeline = "Required.";
  if (!data.purpose) errors.purpose = "Required.";
  if (!data.visaStatus) errors.visaStatus = "Required.";
  if (data.preferredAreas.length === 0) {
    errors.preferredAreas = "Select at least one area.";
  }
  if (
    data.preferredAreas.includes("Other") &&
    !data.preferredAreaOther.trim()
  ) {
    errors.preferredAreaOther = "Required.";
  }
  if (!data.monthlyBudget) errors.monthlyBudget = "Required.";
  if (!data.privacyConsent) errors.privacyConsent = "Required.";

  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = <K extends keyof FormData>(
    key: K,
    value: FormData[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <Section
      id="contact"
      background="charcoal"
      className="!py-[clamp(5rem,12vw,10rem)]"
    >
      <div className="mx-auto max-w-2xl">
        <Reveal>
          {submitted ? (
            <p className="text-base leading-[1.8] text-ivory/70" role="status">
              {contactContent.successMessage}
            </p>
          ) : (
            <form
              className="space-y-12"
              onSubmit={handleSubmit}
              noValidate
            >
              <FormSection number="01" title="About You">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      required
                      className={inputClass}
                      value={form.firstName}
                      onChange={(e) => updateField("firstName", e.target.value)}
                      aria-invalid={!!errors.firstName}
                      aria-describedby={
                        errors.firstName ? "firstName-error" : undefined
                      }
                    />
                    <FieldError id="firstName-error" message={errors.firstName} />
                  </div>
                  <div>
                    <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      required
                      className={inputClass}
                      value={form.lastName}
                      onChange={(e) => updateField("lastName", e.target.value)}
                      aria-invalid={!!errors.lastName}
                      aria-describedby={
                        errors.lastName ? "lastName-error" : undefined
                      }
                    />
                    <FieldError id="lastName-error" message={errors.lastName} />
                  </div>
                </div>

                <div>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={inputClass}
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  <FieldError id="email-error" message={errors.email} />
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <FieldLabel htmlFor="nationality">Nationality</FieldLabel>
                    <input
                      id="nationality"
                      name="nationality"
                      type="text"
                      required
                      className={inputClass}
                      value={form.nationality}
                      onChange={(e) =>
                        updateField("nationality", e.target.value)
                      }
                      aria-invalid={!!errors.nationality}
                      aria-describedby={
                        errors.nationality ? "nationality-error" : undefined
                      }
                    />
                    <FieldError
                      id="nationality-error"
                      message={errors.nationality}
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="currentCountry">
                      Current Country
                    </FieldLabel>
                    <input
                      id="currentCountry"
                      name="currentCountry"
                      type="text"
                      autoComplete="country-name"
                      required
                      className={inputClass}
                      value={form.currentCountry}
                      onChange={(e) =>
                        updateField("currentCountry", e.target.value)
                      }
                      aria-invalid={!!errors.currentCountry}
                      aria-describedby={
                        errors.currentCountry ? "currentCountry-error" : undefined
                      }
                    />
                    <FieldError
                      id="currentCountry-error"
                      message={errors.currentCountry}
                    />
                  </div>
                </div>
              </FormSection>

              <FormSection number="02" title="Your Move">
                <div>
                  <FieldLabel>When are you planning to move?</FieldLabel>
                  <RadioGroup
                    name="moveTimeline"
                    options={moveTimelineOptions}
                    value={form.moveTimeline}
                    onChange={(value) => updateField("moveTimeline", value)}
                    ariaLabel="Move timeline"
                  />
                  <FieldError
                    id="moveTimeline-error"
                    message={errors.moveTimeline}
                  />
                </div>

                <div>
                  <FieldLabel>Purpose</FieldLabel>
                  <RadioGroup
                    name="purpose"
                    options={relocationPurposeOptions}
                    value={form.purpose}
                    onChange={(value) => updateField("purpose", value)}
                    ariaLabel="Relocation purpose"
                  />
                  <FieldError id="purpose-error" message={errors.purpose} />
                </div>
              </FormSection>

              <FormSection number="03" title="Visa">
                <div>
                  <FieldLabel>Current Visa Status</FieldLabel>
                  <RadioGroup
                    name="visaStatus"
                    options={visaStatusOptions}
                    value={form.visaStatus}
                    onChange={(value) => updateField("visaStatus", value)}
                    ariaLabel="Current visa status"
                  />
                  <FieldError id="visaStatus-error" message={errors.visaStatus} />
                </div>
              </FormSection>

              <FormSection number="04" title="Your Home">
                <div>
                  <FieldLabel>Preferred Area</FieldLabel>
                  <TagSelect
                    options={[...preferredAreaOptions, "Other"]}
                    selected={form.preferredAreas}
                    onChange={(value) => {
                      updateField("preferredAreas", value);
                      if (!value.includes("Other")) {
                        updateField("preferredAreaOther", "");
                      }
                    }}
                    ariaLabel="Preferred area"
                  />
                  <FieldError
                    id="preferredAreas-error"
                    message={errors.preferredAreas}
                  />
                  {form.preferredAreas.includes("Other") && (
                    <div className="mt-8">
                      <FieldLabel htmlFor="preferredAreaOther">
                        Preferred Area (Other)
                      </FieldLabel>
                      <input
                        id="preferredAreaOther"
                        name="preferredAreaOther"
                        type="text"
                        placeholder="Please specify your preferred area in Tokyo."
                        className={inputClass}
                        value={form.preferredAreaOther}
                        onChange={(e) =>
                          updateField("preferredAreaOther", e.target.value)
                        }
                        aria-invalid={!!errors.preferredAreaOther}
                        aria-describedby={
                          errors.preferredAreaOther
                            ? "preferredAreaOther-error"
                            : undefined
                        }
                      />
                      <FieldError
                        id="preferredAreaOther-error"
                        message={errors.preferredAreaOther}
                      />
                    </div>
                  )}
                </div>

                <div>
                  <FieldLabel>Monthly Budget</FieldLabel>
                  <RadioGroup
                    name="monthlyBudget"
                    options={monthlyBudgetOptions}
                    value={form.monthlyBudget}
                    onChange={(value) => updateField("monthlyBudget", value)}
                    ariaLabel="Monthly budget"
                  />
                  <FieldError
                    id="monthlyBudget-error"
                    message={errors.monthlyBudget}
                  />
                </div>
              </FormSection>

              <FormSection number="05" title="Anything else?">
                <div>
                  <FieldLabel htmlFor="additionalNotes" optional>
                    Additional notes
                  </FieldLabel>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    rows={5}
                    placeholder="Tell us anything that would help us prepare for your relocation."
                    className={cn(inputClass, "resize-none")}
                    value={form.additionalNotes}
                    onChange={(e) =>
                      updateField("additionalNotes", e.target.value)
                    }
                  />
                </div>
              </FormSection>

              <div>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="privacyConsent"
                    checked={form.privacyConsent}
                    onChange={(e) =>
                      updateField("privacyConsent", e.target.checked)
                    }
                    className="mt-0.5 h-3.5 w-3.5 rounded-none border-ivory/25 bg-transparent text-gold focus:ring-0 focus:ring-offset-0"
                    aria-invalid={!!errors.privacyConsent}
                    aria-describedby={
                      errors.privacyConsent ? "privacyConsent-error" : undefined
                    }
                  />
                  <span className="text-xs leading-[1.7] text-ivory/40">
                    I understand my information will be used to prepare my
                    consultation request.{" "}
                    <a
                      href="/privacy"
                      className="text-ivory/60 underline decoration-ivory/20 underline-offset-2"
                    >
                      Privacy
                    </a>
                  </span>
                </label>
                <FieldError
                  id="privacyConsent-error"
                  message={errors.privacyConsent}
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  size="large"
                  variant="secondary"
                  className="border-ivory/25 text-ivory hover:border-ivory/50 hover:bg-transparent"
                >
                  {contactContent.submitLabel}
                </Button>
              </div>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-16 border-t border-ivory/8 pt-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
              {contactContent.contactMethods.map((method) => (
                <div key={method.label} className="text-xs">
                  <span className="tracking-[0.15em] text-ivory/40 uppercase">
                    {method.label}
                  </span>
                  <span className="mt-1 block text-ivory/25">
                    {method.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
