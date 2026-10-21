import { notFound } from "next/navigation";
import PolicyDocument, { policyMetadata } from "@/components/PolicyDocument";
import { isLocale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) { return policyMetadata((await params).locale, "privacy"); }
export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <PolicyDocument locale={locale} kind="privacy" />;
}
