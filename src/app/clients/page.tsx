import type { Metadata } from "next";
import { clients } from "@/data/clients";
import { PageHeader, EnquireCta } from "@/components/shared/PageBits";

export const metadata: Metadata = { title: "Clients" };

export default function ClientsPage() {
  return (
    <>
      <PageHeader title="Our Clients" />
      <section className="clients section-padding">
        <div className="container">
          <div className="row">
            {clients.map((client) => (
              <div className="col-md-3 col-6" key={client.name}>
                <div className="item mb-30 text-center" style={{ padding: 20, background: "#fff", borderRadius: 10 }}>
                  <img src={client.logo} alt={client.name} style={{ maxHeight: 60, objectFit: "contain" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EnquireCta buttonLabel="Get In Touch" />
    </>
  );
}
