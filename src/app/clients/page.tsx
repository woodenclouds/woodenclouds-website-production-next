import type { Metadata } from "next";
import { clients } from "@/data/clients";
import { PageHeader, EnquireCta } from "@/components/shared/PageBits";

export const metadata: Metadata = { title: "Clients" };

export default function ClientsPage() {
  return (
    <>
      <PageHeader title="Our Clients" />
      <section className="wc-section pt-0">
        <div className="wc-container grid grid-cols-2 gap-4 md:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex aspect-[5/3] items-center justify-center rounded-xl bg-white p-6"
            >
              <img src={client.logo} alt={client.name} className="max-h-12 object-contain" />
            </div>
          ))}
        </div>
      </section>
      <EnquireCta buttonLabel="Get In Touch" />
    </>
  );
}
