import type { Metadata } from "next";
import Link from "next/link";
import { boardOfDirectors, teamMembers } from "@/data/team";
import { PageHeader } from "@/components/shared/PageBits";

export const metadata: Metadata = { title: "Behind Woodenclouds" };

export default function TeamPage() {
  return (
    <>
      <PageHeader subtitle="Our Team" title="Team Woodenclouds" />
      <section className="wc-section pt-0">
        <div className="wc-container">
          <div className="mb-12 text-center">
            <Link href="/career" className="wc-btn wc-btn-dark">
              Join Our Team
            </Link>
          </div>

          <h3 className="mb-8 text-2xl font-light">Board of Directors</h3>
          <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {boardOfDirectors.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="mb-4 aspect-square w-full rounded-xl object-cover"
                />
                <h5 className="text-lg font-light">{member.name}</h5>
              </div>
            ))}
          </div>

          <h3 className="mb-8 text-2xl font-light">Our Team</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="mb-4 aspect-square w-full rounded-xl object-cover"
                />
                <h6 className="font-light">{member.name}</h6>
                {member.role && <p className="mt-1 text-sm text-muted">{member.role}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
